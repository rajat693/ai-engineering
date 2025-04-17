#!/usr/bin/env node
const dotenv = require("dotenv");
const { OpenAI } = require("@langchain/openai");
const { DynamicTool } = require("@langchain/core/tools");
const { initializeAgentExecutorWithOptions } = require("langchain/agents");

// Load environment variables
dotenv.config();

// Simulated weather function
function getWeather(location) {
  const weatherData = {
    bangalore: "cloudy with a temperature of 28 degrees Celsius",
    mumbai: "partly cloudy with a temperature of 30 degrees Celsius",
    delhi: "sunny with a temperature of 35 degrees Celsius",
    chennai: "rainy with a temperature of 26 degrees Celsius",
  };

  return (
    weatherData[location.toLowerCase()] ||
    `Unable to retrieve weather data for ${location}`
  );
}

// Main function to run the weather query
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
    process.exit(1);
  }

  // Create a weather tool
  const weatherTool = new DynamicTool({
    name: "get_weather",
    description:
      "Useful for getting the current weather for a specific location",
    func: async (input) => getWeather(input),
  });

  // Initialize the language model
  const model = new OpenAI({
    temperature: 0.7,
    modelName: "gpt-3.5-turbo",
  });

  // Create the agent executor
  const executor = await initializeAgentExecutorWithOptions(
    [weatherTool],
    model,
    {
      agentType: "zero-shot-react-description",  //allows the AI to use the tool without specific training
      verbose: false,
    }
  );

  // Execute the query
  try {
    const result = await executor.call({ input: query });
    console.log(result.output);
  } catch (error) {
    console.error("Error executing weather query:", error);
  }
}

// Run the main function
main();


//node weather-tool.js "What's the weather in Bangalore today?"