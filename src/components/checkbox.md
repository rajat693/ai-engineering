---
title: Checkbox
description: A form control component for React & React Native that allows users to select multiple options from a set.
---

# Checkbox

A form control component for React & React Native that allows users to select multiple options from a set.

```jsx
import {
  Checkbox,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxIcon,
} from "@/components/ui/checkbox";
import { CheckIcon } from "@/components/ui/icon";

function Example() {
  return (
    <Checkbox size="md" isInvalid={false} isDisabled={false}>
      <CheckboxIndicator>
        <CheckboxIcon as={CheckIcon} />
      </CheckboxIndicator>
      <CheckboxLabel>Label</CheckboxLabel>
    </Checkbox>
  );
}
```

## Props

### Checkbox

- **size**: sm | md | lg (default: md)
  default classNames attached for different size
  - sm: gap-1.5
  - md: gap-2
  - lg: gap-2
- **value**: string - The value to be used in the checkbox input
- **onChange**: (value: boolean) => void - Function called when the state of the checkbox changes
- **defaultIsChecked**: boolean (default: false) - If true, the checkbox will be initially checked
- **isChecked**: boolean (default: false) - When true, the checkbox will be checked (controlled)
- **isDisabled**: boolean (default: false) - To manually set disable to the checkbox
- **isInvalid**: boolean (default: false) - To manually set invalid to the checkbox
- **isReadOnly**: boolean (default: false) - To manually set read-only to the checkbox
- **isHovered**: boolean (default: false) - To manually set hover to the checkbox
- **isFocusVisible**: boolean (default: false) - To manually set focus visible state to the checkbox
- **isIndeterminate**: boolean (default: false) - To manually set indeterminate to the checkbox
- Inherits all the properties of React Native's View component

### CheckboxGroup

- **value**: string[] - The value of the checkbox group
- **onChange**: (values: Array<string>) => void - The callback fired when any children Checkbox is checked or unchecked
- **isDisabled**: boolean (default: false) - To manually set disable to the checkbox group
- **isInvalid**: boolean (default: false) - To manually set invalid to the checkbox group
- **isReadOnly**: boolean (default: false) - To manually set read-only to the checkbox group
- Inherits all the properties of React Native's View component

### CheckboxIndicator

- Contains all indicators related layout style props and actions
- Inherits all the properties of React Native's View component

### CheckboxIcon

- **forceMount**: boolean (default: false) - Forces mounting when more control is needed
- Contains all Icon related layout style props and actions
- Inherits all the properties of gluestack Style's AsForwarder component

### CheckboxLabel

- Contains all Label related layout style props and actions
- Inherits all the properties of React Native's Text component

## Accessibility

- Keyboard navigation support with Tab, Shift+Tab, and Space keys
- Screen reader compatibility with appropriate ARIA attributes
- Support for focus management and various states (error, disabled, required)

## Examples

```jsx
import React from "react";
import {
  Checkbox,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxIcon,
  CheckboxGroup,
} from "@/components/ui/checkbox";
import { VStack } from "@/components/ui/vstack";
import { CheckIcon } from "@/components/ui/icon";

function App() {
  const [values, setValues] = React.useState(["UX Research"]);

  return (
    <CheckboxGroup
      value={values}
      onChange={(keys) => {
        setValues(keys);
      }}
      className="p-4 bg-white rounded-lg shadow-sm border border-gray-200"
    >
      <VStack space="md" className="w-full">
        <Checkbox
          value="UX Research"
          className="flex items-center p-2 data-[hover=true]:bg-gray-50 rounded cursor-pointer"
        >
          <CheckboxIndicator className="mr-3 h-5 w-5 border border-gray-300 rounded bg-white text-blue-500 flex items-center justify-center">
            <CheckboxIcon as={CheckIcon} className="h-3 w-3" />
          </CheckboxIndicator>
          <CheckboxLabel className="text-gray-700 select-none font-medium">
            UX Research
          </CheckboxLabel>
        </Checkbox>

        <Checkbox
          value="Software"
          className="flex items-center p-2 data-[hover=true]:bg-gray-50 rounded cursor-pointer"
        >
          <CheckboxIndicator className="mr-3 h-5 w-5 border border-gray-300 rounded bg-white text-blue-500 flex items-center justify-center">
            <CheckboxIcon as={CheckIcon} className="h-3 w-3" />
          </CheckboxIndicator>
          <CheckboxLabel className="text-gray-700 select-none font-medium">
            Software Development
          </CheckboxLabel>
        </Checkbox>
      </VStack>
    </CheckboxGroup>
  );
}
```
