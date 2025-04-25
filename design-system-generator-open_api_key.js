#!/usr/bin/env node
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
const { ChatOpenAI } = require("@langchain/openai");
const { tool } = require("@langchain/core/tools");
const { ChatPromptTemplate } = require("@langchain/core/prompts");
const { createToolCallingAgent, AgentExecutor } = require("langchain/agents");
const { z } = require("zod");

// Import LangSmith client and tracing utilities
const { Client } = require("langsmith");
const { LangChainTracer } = require("langchain/callbacks");

// Load environment variables
dotenv.config();

// LangSmith configuration
const LANGSMITH_TRACING_V2 = process.env.LANGSMITH_TRACING_V2 === "true";
const LANGSMITH_ENDPOINT =
  process.env.LANGSMITH_ENDPOINT || "https://api.smith.langchain.com";
const LANGSMITH_API_KEY = process.env.LANGSMITH_API_KEY;
const LANGSMITH_PROJECT =
  process.env.LANGSMITH_PROJECT || "design-system-generator";

// Initialize LangSmith client
const langSmithClient = new Client({
  apiUrl: LANGSMITH_ENDPOINT,
  apiKey: LANGSMITH_API_KEY,
});

// Add LangSmith status check
async function checkLangSmithStatus() {
  if (LANGSMITH_TRACING_V2 && LANGSMITH_API_KEY) {
    try {
      await langSmithClient.readProject({ projectName: LANGSMITH_PROJECT });
      console.log(
        `✅ LangSmith connected successfully to project: ${LANGSMITH_PROJECT}`
      );
      console.log(
        `🔗 View your logs at: ${LANGSMITH_ENDPOINT}/projects/${LANGSMITH_PROJECT}`
      );
      return true;
    } catch (error) {
      console.error("❌ Error connecting to LangSmith:", error.message);
      return false;
    }
  }
  return false;
}

// Define the components directory
const COMPONENTS_DIR = "./src/components";

/**
 * Extracts metadata from component documentation
 * @param {string} componentName - Name of the component
 * @returns {object} Metadata object
 */
function extractComponentMetadata(componentName) {
  try {
    const docPath = path.join(
      COMPONENTS_DIR,
      `${componentName.toLowerCase()}.md`
    );

    if (!fs.existsSync(docPath)) {
      return { title: componentName, description: "Component not found" };
    }

    const docsContent = fs.readFileSync(docPath, "utf-8");
    const lines = docsContent.split("\n");

    // Check if file starts with frontmatter
    if (lines[0].trim() !== "---") {
      return { title: componentName, description: "No description available" };
    }

    // Extract only title and description
    const metadata = {
      title: componentName,
      description: "No description available",
    };

    // Read until the closing frontmatter delimiter
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();

      if (line === "---") break;

      if (line.startsWith("title:")) {
        metadata.title = line.split(":")[1].trim();
      } else if (line.startsWith("description:")) {
        metadata.description = line.split(":")[1].trim();
      }
    }

    return metadata;
  } catch (error) {
    console.error(
      `Error reading metadata for ${componentName}: ${error.message}`
    );
    return { title: componentName, description: "Error reading metadata" };
  }
}

/**
 * Gets a list of all available component docs from the components directory
 * @returns {Array} List of available component names
 */
function getAvailableComponents() {
  try {
    // Get all markdown files in the components directory
    const componentFiles = fs
      .readdirSync(COMPONENTS_DIR)
      .filter((file) => file.endsWith(".md"))
      .map((file) => file.replace(".md", ""));

    return componentFiles;
  } catch (error) {
    console.error(`Error reading components directory: ${error.message}`);
    return [];
  }
}

/**
 * Gets metadata for all components
 * @returns {string} JSON string of component metadata
 */
function getAllComponentMetadata() {
  const components = getAvailableComponents();
  const metadata = {};

  components.forEach((component) => {
    const meta = extractComponentMetadata(component);
    if (meta) {
      metadata[component] = meta;
    }
  });

  return JSON.stringify(metadata, null, 2);
}

/**
 * Gets documentation for a specific component
 * @param {string} componentName - Name of the component without .md extension
 * @returns {string} Documentation content
 */
function getComponentDocs(componentName) {
  try {
    // Build the path to the component's markdown file
    const docPath = path.join(
      COMPONENTS_DIR,
      `${componentName.toLowerCase()}.md`
    );

    // Check if the file exists
    if (!fs.existsSync(docPath)) {
      return `Documentation not found for component: ${componentName}`;
    }

    // Read the markdown file
    const docsContent = fs.readFileSync(docPath, "utf-8");
    return (
      docsContent || `Empty documentation file for component: ${componentName}`
    );
  } catch (error) {
    return `Error retrieving documentation for ${componentName}: ${error.message}`;
  }
}

/**
 * Main function to run the design system generator
 */
async function main() {
  // Check if API key is set
  if (!process.env.OPENAI_API_KEY) {
    console.error("Error: OPENAI_API_KEY environment variable is not set.");
    process.exit(1);
  }

  // Check if LangSmith is properly configured
  if (LANGSMITH_TRACING_V2 && !LANGSMITH_API_KEY) {
    console.warn(
      "Warning: LangSmith tracing is enabled but API key is not set. Tracing will be disabled."
    );
  }

  // Get the query from command line arguments
  const query = process.argv.slice(2).join(" ");

  if (!query) {
    console.error("Error: No query provided.");
    console.error(
      'Example: node design-system-generator.js "create a very basic login screen using my design system only"'
    );
    process.exit(1);
  }

  // Get the list of available components
  const availableComponents = getAvailableComponents();

  if (availableComponents.length === 0) {
    console.error(
      `Error: No markdown documentation files found in ${COMPONENTS_DIR}`
    );
    process.exit(1);
  }

  console.log(
    `Found ${availableComponents.length} component documentation files in your design system`
  );
  console.log("Components:", availableComponents.join(", "));

  // Create tools using the newer tool helper function
  const getComponentDocsTool = tool(
    async ({ componentName }) => {
      console.log(`📖 Reading full documentation for: ${componentName}`);
      return getComponentDocs(componentName.trim());
    },
    {
      name: "get_component_docs",
      description:
        "Gets full documentation for a specific component. Use this ONLY after selecting components based on metadata.",
      schema: z.object({
        componentName: z
          .string()
          .describe("The name of the component without .md extension"),
      }),
    }
  );

  const getComponentMetadataTool = tool(
    async () => {
      console.log("🔍 Reading component metadata...");
      return getAllComponentMetadata();
    },
    {
      name: "get_component_metadata",
      description:
        "Gets metadata (title and description) for all components. Use this FIRST to decide which components are relevant.",
      schema: z.object({}),
    }
  );

  const selectComponentsTool = tool(
    async ({ selectedComponents }) => {
      console.log(`✅ Selected components: ${selectedComponents.join(", ")}`);
      return `You have selected: ${selectedComponents.join(
        ", "
      )}. Now proceed to get full documentation for these components only.`;
    },
    {
      name: "select_components",
      description:
        "After reading component metadata, use this to select which components you need for the task. This helps track which components to read fully.",
      schema: z.object({
        selectedComponents: z
          .array(z.string())
          .describe("Array of component names that are relevant for the task"),
      }),
    }
  );

  const tools = [
    getComponentMetadataTool,
    selectComponentsTool,
    getComponentDocsTool,
  ];

  // Check LangSmith connection before proceeding
  const langSmithEnabled = await checkLangSmithStatus();

  // Set up LangSmith tracing if enabled
  const callbacks = [];
  if (langSmithEnabled) {
    const tracer = new LangChainTracer({
      projectName: LANGSMITH_PROJECT,
      client: langSmithClient,
      metadata: {
        environment: process.env.NODE_ENV || "development",
        model: "gpt-4o-mini",
        timestamp: new Date().toISOString(),
        version: "1.0.0",
      },
    });
    callbacks.push(tracer);
  }

  // Initialize the language model with LangSmith callbacks
  const llm = new ChatOpenAI({
    temperature: 0.2,
    model: "gpt-4o-mini",
    callbacks: callbacks,
  });

  // Enhanced prompt template with explicit component selection step
  const prompt = ChatPromptTemplate.fromMessages([
    [
      "system",
      `You are a React expert specializing in the provided design system.
      
      STRICT WORKFLOW (follow in order):
      1. Use the get_component_metadata tool to see titles and descriptions
      2. Use the select_components tool to explicitly select which components you need
      3. Use get_component_docs tool ONLY for the components you selected
      4. Generate the React component code
      
      REQUIREMENTS:
      - Use ONLY components from the documented design system
      - NO HTML tags like <div>, <button>, <input>, etc.
      - NO external component libraries
      - NO StyleSheet or styles objects - use ONLY Tailwind CSS classes
      - All components accept Tailwind CSS classes via the className prop
      - Components should be imported individually from their respective files, not grouped together in a single import statement. 
      - Output ONLY the complete React component code, no explanations
      
      OPTIMIZATION:
      - Select the minimum number of components needed
      - Base selection on metadata relevance to the task
      - Only read full documentation for selected components`,
    ],
    ["human", "{input}"],
    ["placeholder", "{agent_scratchpad}"],
  ]);

  /** Without the {agent_scratchpad}, the agent wouldn't be able to:

    - Remember which tools it has already called
    - See the results of those tool calls
    - Make decisions based on previous steps
  */

  // Create the agent
  const agent = await createToolCallingAgent({
    llm,
    tools,
    prompt,
  });

  // Create the agent executor with LangSmith tracing
  const agentExecutor = new AgentExecutor({
    agent,
    tools,
    verbose: false,
    callbacks: callbacks,
    tags: [
      "design-system-generator-open",
      "gpt-4o-mini",
      `query-${Date.now()}`,
    ],
    metadata: {
      environment: process.env.NODE_ENV || "development",
      model: "gpt-4o-mini",
      version: "1.0.0",
    },
  });

  // Execute the query
  try {
    console.log(`\n🚀 Processing request: "${query}"`);
    console.log("Analyzing component metadata and generating code...\n");

    const startTime = Date.now();
    const result = await agentExecutor.invoke({
      input: query,
      metadata: {
        queryType: "design-system",
        timestamp: new Date().toISOString(),
        availableComponents: availableComponents.length,
        componentsList: availableComponents.join(", "),
        userId: process.env.USER || "anonymous",
      },
    });

    // Log successful execution to LangSmith
    if (langSmithEnabled) {
      await langSmithClient.createExample({
        inputs: {
          query: query,
          timestamp: new Date().toISOString(),
          components: availableComponents,
        },
        outputs: {
          generated_code: result.output,
          execution_time: Date.now() - startTime,
          status: "success",
        },
        datasetName: `${LANGSMITH_PROJECT}-results`,
      });

      // Log usage metrics
      await langSmithClient.createExample({
        inputs: { type: "usage_metrics" },
        outputs: {
          query_count: 1,
          model: "gpt-4o-mini",
          timestamp: new Date().toISOString(),
          components_used: availableComponents.length,
        },
        datasetName: `${LANGSMITH_PROJECT}-metrics`,
      });
    }

    // Print the output code
    console.log("\n=== Generated Component Code ===\n");
    console.log(result.output);
    console.log("\n================================\n");
  } catch (error) {
    console.error("Error generating UI from design system:", error);

    // Log errors to LangSmith
    if (langSmithEnabled) {
      await langSmithClient.createExample({
        inputs: {
          query: query,
          timestamp: new Date().toISOString(),
          components: availableComponents,
        },
        outputs: {
          error: error.message,
          stack: error.stack,
          status: "error",
        },
        datasetName: `${LANGSMITH_PROJECT}-errors`,
      });
    }
  }
}

// Run the main function
main();

//node design-system-generator.js "create a login screen give me the codebase and strictly use only the design system components no html tags should be used"
