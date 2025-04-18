#!/usr/bin/env node
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
const { ChatOpenAI } = require("@langchain/openai");
const { DynamicTool } = require("@langchain/core/tools");
const { initializeAgentExecutorWithOptions } = require("langchain/agents");

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

  // Create a tool to get a specific component's documentation
  const getComponentDocsTool = new DynamicTool({
    name: "get_component_docs",
    description:
      "Gets documentation for a specific component. Input should be the component name without .md extension.",
    func: async (input) => getComponentDocs(input.trim()),
  });

  // Create a tool to get all component documentation
  const getAllComponentDocsTool = new DynamicTool({
    name: "get_all_component_docs",
    description:
      "Gets documentation for all available components in the design system.",
    func: async () => getAllComponentDocs(),
  });

  // Create a tool to list available components
  const listComponentsTool = new DynamicTool({
    name: "list_components",
    description: "Lists all available components in the design system.",
    func: async () => availableComponents.join(", "),
  });

  // Initialize the language model
  const model = new ChatOpenAI({
    temperature: 0.2,
    modelName: "gpt-4", // Using GPT-4 for better code generation
  });

  // Create the agent executor
  const executor = await initializeAgentExecutorWithOptions(
    [getComponentDocsTool, getAllComponentDocsTool, listComponentsTool],
    model,
    {
      agentType: "zero-shot-react-description",
      verbose: false,
    }
  );

  // Execute the query
  try {
    console.log(`Processing request: "${query}"`);
    console.log("Generating code based on your design system...");

    const result = await executor.call({
      input: `You are a React & React Native expert specializing in the provided design system.
      For the request: "${query}"
      GUIDELINES:
      - Use ONLY components from the documented design system and use className to style the component as shown in the docs
      - No HTML tags, CSS classes, or external component libraries
      - Maintain proper component hierarchy and props as defined in the documentation
      - always give the complete code to the user with the import statements and etc.`,
    });

    // Print only the output code
    console.log(result.output);
  } catch (error) {
    console.error("Error generating UI from design system:", error);
  }
}

// Run the main function
main();

//node design-system-generator.js "create a login screen give me the codebase and strictly use only the design system components no html tags should be used"
