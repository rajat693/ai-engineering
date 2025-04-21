---
title: Input
description: A flexible input component with validation and styling options.
---

# Input

A flexible input component with validation and styling options.

```jsx
import { Input, InputField } from "@/components/ui/input";

function Example() {
  return (
    <Input variant="outline" size="md">
      <InputField placeholder="Enter text here..." />
    </Input>
  );
}
```

## Props

### Input

variant: underlined | outline | rounded (default: outline)
size: sm | md | lg | xl (default: md)
isInvalid: boolean (default: false)
isDisabled: boolean (default: false)
isReadOnly: boolean (default: false)

### InputField

Main text entry component with type prop (text | password).

### InputIcon

For adding icons inside inputs.

### InputSlot

Container for buttons or icons within inputs.

## Example

```jsx
import React from "react";
import { Button, ButtonText } from "@/components/ui/button";
import { FormControl } from "@/components/ui/form-control";
import { Heading } from "@/components/ui/heading";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { EyeIcon, EyeOffIcon } from "@/components/ui/icon";

function App() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleState = () => {
    setShowPassword((showState) => {
      return !showState;
    });
  };

  return (
    <FormControl className="p-6 border rounded-lg border-outline-300 shadow-md bg-white max-w-md mx-auto">
      <VStack space="xl" className="w-full">
        <Heading className="text-2xl font-bold text-typography-900 mb-2">
          Login
        </Heading>

        <VStack space="xs" className="w-full">
          <Text className="text-sm font-medium text-typography-500">Email</Text>
          <Input className="min-w-[250px] data-[focus=true]:border-primary-500 transition-colors duration-200">
            <InputField
              type="text"
              className="placeholder:text-typography-400"
              placeholder="Enter your email"
            />
          </Input>
        </VStack>

        <VStack space="xs" className="w-full">
          <Text className="text-sm font-medium text-typography-500">
            Password
          </Text>
          <Input className="border-outline-300 data-[focus=true]:border-primary-500 transition-colors duration-200">
            <InputField
              type={showPassword ? "text" : "password"}
              className="placeholder:text-typography-400"
              placeholder="Enter your password"
            />
            <InputSlot className="pr-3" onPress={handleState}>
              <InputIcon
                as={showPassword ? EyeIcon : EyeOffIcon}
                className="text-typography-500 w-5 h-5"
              />
            </InputSlot>
          </Input>
        </VStack>

        <Button
          className="ml-auto bg-primary-600 data-[hover=true]:bg-primary-700 transition-colors duration-200 mt-4 px-6 py-2 rounded-md"
          onPress={() => {
            setShowModal(false);
          }}
        >
          <ButtonText className="text-typography-0 font-medium">
            Save
          </ButtonText>
        </Button>
      </VStack>
    </FormControl>
  );
}
```
