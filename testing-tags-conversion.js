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
  
    // Updated regex to handle self-closing and standard tags
    const tagRegex = /<(\w+)([^>]*?)(\s*\/?>)(?:([^<]*)<\/\1>)?/g;
  
    // Step 2: Replace matched tags with corresponding Gluestack tags
    const convertedCode = htmlCode.replace(
      tagRegex,
      (match, tagName, attributes, closureType, content) => {
        // Look up the tag in our mapping
        const gluestackTag = tagMap[tagName] || tagName;
  
        // Trim attributes and content
        attributes = (attributes || "").trim();
        content = (content || "").trim();
  
        // Console logs for debugging
        console.log("match", match);
        console.log("tagName", tagName);
        console.log("attributes", attributes);
        console.log("closureType", closureType);
        console.log("content", content);
  
        // Special handling for input to wrap with Input
        if (tagName === "input") {
          return `<Input><InputField${
            attributes ? ` ${attributes}` : ""
          } /></Input>`;
        }
  
        // Special handling for button to wrap content with ButtonText
        if (tagName === "button" && content) {
          return `<${gluestackTag}${
            attributes ? ` ${attributes}` : ""
          }><ButtonText>${content}</ButtonText></${gluestackTag}>`;
        }
  
        // Handle tags with content
        if (content) {
          return `<${gluestackTag}${
            attributes ? ` ${attributes}` : ""
          }>${content}</${gluestackTag}>`;
        }
  
        // Fallback
        return `<${gluestackTag}${attributes ? ` ${attributes}` : ""} />`;
      }
    );
  
    // Step 3: Return the updated code
    return convertedCode;
  }
  
  console.log(convertTagsToGluestackTags("<h1 />"), "\n");
  console.log(convertTagsToGluestackTags("<input />"), "\n");
  console.log(
    convertTagsToGluestackTags('<input type="text" placeholder="Enter name" />'),
    "\n"
  );
  console.log(
    convertTagsToGluestackTags('<button type="submit">Login</button>'),
    "\n"
  );