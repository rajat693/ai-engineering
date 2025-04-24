---
title: Textarea
description: A multi-line input component for React & React Native with customizable properties.
---

# Textarea

A multi-line input component for React & React Native with customizable properties.

```jsx
import { Textarea, TextareaInput } from "@/components/ui/textarea";

function Example() {
  return (
    <Textarea
      size="md"
      isReadOnly={false}
      isInvalid={false}
      isDisabled={false}
      className="w-64"
    >
      <TextareaInput placeholder="Your text goes here..." />
    </Textarea>
  );
}
```

## Props

### Textarea

size: sm | md | lg | xl (default: md)
isInvalid: boolean (default: false) - When true, the input displays an error state
isDisabled: boolean (default: false) - When true, the input is disabled and cannot be edited
isHovered: boolean (default: false) - When true, the input displays a hover state
isFocused: boolean (default: false) - When true, the input displays a focus state
isRequired: boolean (default: false) - If true, sets aria-required="true" on the input
isReadOnly: boolean (default: false) - If true, the input value cannot be edited
Inherits all the properties of React Native's View component

### TextareaInput

Contains all TextInput related layout style props and actions
Inherits all the properties of React Native's TextInput component

## Accessibility

Keyboard navigation support
Screen reader compatibility with appropriate ARIA attributes
Support for disabled and read-only states

## Examples

```jsx
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlHelper,
  FormControlHelperText,
} from "@/components/ui/form-control";
import { Textarea, TextareaInput } from "@/components/ui/textarea";

function Example() {
  return (
    <FormControl
      size="sm"
      className="max-w-[200px] w-full p-4 bg-white rounded-lg shadow-sm border border-gray-200"
    >
      <FormControlLabel className="mb-2">
        <FormControlLabelText className="font-medium text-gray-800">
          Write with me
        </FormControlLabelText>
      </FormControlLabel>

      <Textarea className="mb-1 focus-within:ring-2 focus-within:ring-blue-400 transition-all">
        <TextareaInput
          placeholder="Once upon a time..."
          className="resize-none min-h-24 text-gray-700 placeholder:text-gray-400"
        />
      </Textarea>

      <FormControlHelper className="mt-1">
        <FormControlHelperText className="text-gray-500 italic text-xs">
          Start your story
        </FormControlHelperText>
      </FormControlHelper>
    </FormControl>
  );
}
```
