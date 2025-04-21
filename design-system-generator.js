#!/usr/bin/env node
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
const { ChatOpenAI } = require("@langchain/openai");
const { tool } = require("@langchain/core/tools");
const { ChatPromptTemplate } = require("@langchain/core/prompts");
const { createToolCallingAgent, AgentExecutor } = require("langchain/agents");
const { z } = require("zod");

// Load environment variables
dotenv.config();

// Define the components directory
const COMPONENTS_DIR = "./src/components";

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
 * Gets documentation for all components
 * @returns {string} All component documentation
 */
function getAllComponentDocs() {
  const components = getAvailableComponents();
  let allDocs = `Available components: ${components.join(", ")}\n\n`;

  components.forEach((component) => {
    allDocs += `\n==== ${component.toUpperCase()} COMPONENT ====\n`;
    allDocs += getComponentDocs(component);
    allDocs += "\n\n";
  });

  return allDocs;
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
      return getComponentDocs(componentName.trim());
    },
    {
      name: "get_component_docs",
      description:
        "Gets documentation for a specific component. Input should be the component name without .md extension.",
      schema: z.object({
        componentName: z
          .string()
          .describe("The name of the component without .md extension"),
      }),
    }
  );

  const getAllComponentDocsTool = tool(
    async () => {
      return getAllComponentDocs();
    },
    {
      name: "get_all_component_docs",
      description:
        "Gets documentation for all available components in the design system.",
      schema: z.object({}),
    }
  );

  const listComponentsTool = tool(
    async () => {
      return availableComponents.join(", ");
    },
    {
      name: "list_components",
      description: "Lists all available components in the design system.",
      schema: z.object({}),
    }
  );

  const tools = [
    getComponentDocsTool,
    getAllComponentDocsTool,
    listComponentsTool,
  ];

  // Initialize the language model
  const llm = new ChatOpenAI({
    temperature: 0.2,
    model: "gpt-4", // Using GPT-4 for better code generation
  });

  // Enhanced prompt template with more specific instructions
  const prompt = ChatPromptTemplate.fromMessages([
    [
      "system",
      `You are a React expert specializing in the provided design system.
      
      CRITICAL INSTRUCTIONS:
      1. First, use the get_all_component_docs tool to see all available components in the design system
      2. Then generate a COMPLETE React component file that includes:
         - All necessary imports from the design system
         - The full component implementation
         - Proper TypeScript/JavaScript syntax
      3. Use ONLY components from the documented design system
      4. DO NOT use ANY HTML tags like <div>, <button>, <input>, etc.
      5. DO NOT use external component libraries
      6. Maintain proper component hierarchy and props as defined in the documentation
      
      YOUR RESPONSE SHOULD BE A COMPLETE REACT COMPONENT FILE, NOT JUST AN EXPLANATION.`,
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

  // Create the agent executor
  const agentExecutor = new AgentExecutor({
    agent,
    tools,
  });

  // Execute the query with enhanced instructions
  try {
    console.log(`Processing request: "${query}"`);
    console.log("Generating code based on your design system...");

    // First, get all component docs to ensure the AI knows what's available
    const allDocs = getAllComponentDocs();

    // Enhanced query with specific instructions
    const enhancedQuery = `${query}
    IMPORTANT: I need you to generate a complete React component file for this request, using ONLY the components from the design system. Here are all the available components:
    ${allDocs}
    Now, generate the complete React component code based on my request. The output should be a ready-to-use React component file with all necessary imports and implementation.`;

    const result = await agentExecutor.invoke({
      input: enhancedQuery,
    });

    // Print only the output code
    console.log("\n=== Generated Component Code ===\n");
    console.log(result.output);
    console.log("\n================================\n");
  } catch (error) {
    console.error("Error generating UI from design system:", error);
  }
}

// Run the main function
main();

//node design-system-generator.js "create a very basic login screen using my design system only provide me the codebase"
