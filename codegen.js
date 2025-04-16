#!/usr/bin/env node
const axios = require("axios");
require("dotenv").config();

// Check if OpenAI API key is available
const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey) {
  console.error("Error: OPENAI_API_KEY environment variable is not set.");
  process.exit(1);
}

// Get user query from command line arguments
const args = process.argv.slice(2);
const query = args.join(" ");

if (!query) {
  console.error("Error: No query provided.");
  process.exit(1);
}

console.log("Generating code based on your request...");

async function generateCode(prompt) {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4", // You can change this to gpt-3.5-turbo if needed
        messages: [
          {
            role: "system",
            content:
              "You are a full-stack development expert skilled in both backend (Node.js) and frontend (web and native) development. You are knowledgeable about all major component libraries, programming fundamentals, and relevant languages. When asked to generate code, provide complete, functional code without explanations unless specifically requested. Focus on production-quality code that follows best practices. For UI components, prioritize simplicity and clean design over complexity.",
          },
          {
            role: "user",
            content: `Generate code for the following request: ${prompt}`,
          },
        ],
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data.choices[0].message.content;
  } catch (error) {
    if (error.response) {
      console.error("API Error:", error.response.data);
    } else {
      console.error("Error:", error.message);
    }
    process.exit(1);
  }
}

// Execute the API call and display the result using async/await
(async () => {
  try {
    const result = await generateCode(query);
    console.log("\n--- GENERATED CODE ---\n");
    console.log(result);
    console.log("\n--- END OF GENERATED CODE ---");
  } catch (err) {
    console.error("An unexpected error occurred:", err);
  }
})();
