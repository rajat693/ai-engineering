#!/usr/bin/env node
const dotenv = require("dotenv");
const { OpenAI } = require("@langchain/openai");
const { DynamicTool } = require("@langchain/core/tools");
const { initializeAgentExecutorWithOptions } = require("langchain/agents");

// Load environment variables
dotenv.config();

function convertTagsToGluestackTags(htmlCode) {
  // Mapping of HTML tags to Gluestack components
  const tagMap = {
    div: "Box",
    h1: 'Heading size="3xl"',
    h2: 'Heading size="2xl"',
    h3: 'Heading size="xl"',
    h4: 'Heading size="lg"',
    h5: 'Heading size="md"',
    h6: 'Heading size="sm"',
    input: "InputField",
    button: "Button",
    "button-text": "ButtonText",
    form: "Box",
    label: "Text",
    p: "Text",
  };

  // Step 1: Regex to match tags inside angular braces
  const tagRegex = /(<\/?)(\w+)([^>]*>)/g;

  // Step 2: Replace matched tags with corresponding Gluestack tags
  const convertedCode = htmlCode.replace(
    tagRegex, // First argument: what to find
    (match, openingTag, tagName, rest) => {
      // Second argument: what to do with each find
      console.log("match", match);
      console.log("openingTag", openingTag);
      console.log("tagName", tagName);
      console.log("rest", rest);

      // Look up the tag in our mapping
      const gluestackTag = tagMap[tagName] || tagName;

      // Special handling for input to wrap with Input
      if (tagName === "input") {
        return `<Input>${opening || "<"}${gluestackTag}${rest}</Input>`;
      }

      // Reconstruct the tag with potential closing slash and rest of the attributes
      return `${opening || "<"}${gluestackTag}${rest}`;
    }
  );

  // Step 3: Return the updated code
  return convertedCode;
}

// Main function to run the conversion
async function main() {
  // Check if API key is set
  if (!process.env.OPENAI_API_KEY) {
    console.error("Error: OPENAI_API_KEY environment variable is not set.");
    process.exit(1);
  }

  // Get the HTML code from command line arguments
  const htmlCode = process.argv.slice(2).join(" ");

  if (!htmlCode) {
    console.error("Error: No HTML code provided.");
    process.exit(1);
  }

  // Create a conversion tool
  const conversionTool = new DynamicTool({
    name: "html_to_gluestack_converter",
    description: "Converts HTML tags to Gluestack UI components",
    func: async (input) => convertTagsToGluestackTags(input),
  });

  // Initialize the language model
  const model = new OpenAI({
    temperature: 0.7,
    modelName: "gpt-3.5-turbo",
  });

  // Create the agent executor
  const executor = await initializeAgentExecutorWithOptions(
    [conversionTool],
    model,
    {
      agentType: "zero-shot-react-description",
      verbose: false,
    }
  );

  // Execute the conversion
  try {
    const result = await executor.call({ input: htmlCode });
    console.log("Converted Gluestack Code:");
    console.log(result.output);
  } catch (error) {
    console.error("Error executing conversion:", error);
  }
}

// Run the main function
main();
