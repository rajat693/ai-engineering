---
title: Radio
description: A radio button component for React & React Native that allows users to select a single option from a set.
---

# Radio

A radio button component for React & React Native that allows users to select a single option from a set.

```jsx
import {
  Radio,
  RadioGroup,
  RadioIndicator,
  RadioLabel,
  RadioIcon,
} from "@/components/ui/radio";
import { CircleIcon } from "@/components/ui/icon";

function Example() {
  return (
    <RadioGroup>
      <Radio value="option1" size="md" isInvalid={false} isDisabled={false}>
        <RadioIndicator>
          <RadioIcon as={CircleIcon} />
        </RadioIndicator>
        <RadioLabel>Label</RadioLabel>
      </Radio>
    </RadioGroup>
  );
}
```

## Props

### Radio

size: sm | md | lg (default: md)

sm: gap-1.5
md: gap-2
lg: gap-2

value: string - The value to be used in the radio input
onChange: function - Function called when the state of the radio changes
isDisabled: boolean (default: false) - To manually set disable to the radio
isInvalid: boolean (default: false) - To manually set invalid to the radio
isHovered: boolean (default: false) - To manually set hover to the radio
isFocusVisible: boolean (default: false) - To manually set focus visible state to the radio
isIndeterminate: boolean (default: false) - To manually set indeterminate to the radio
Inherits all the properties of React Native's View component

### RadioGroup

value: string - The value of the radio group
onChange: function - The callback fired when any children Radio is checked or unchecked
isReadOnly: boolean (default: false) - To manually set read-only to the radio group
Inherits all the properties of React Native's View component

### RadioIndicator

Contains all Indicator related layout style props and actions
Inherits all the properties of React Native's View component

### RadioIcon

forceMount: boolean (default: false) - Forces mounting when more control is needed
Contains all Icon related layout style props and actions
Inherits all the properties of gluestack Style's AsForwarder component

### RadioLabel

Contains all Label related layout style props and actions
Inherits all the properties of React Native's Text component

## Accessibility

Keyboard navigation support with Tab, Shift+Tab, and Space keys
Screen reader compatibility with appropriate ARIA attributes
Support for focus management and various states (error, disabled, required)

## Examples

```jsx
import { HStack } from "@/components/ui/hstack";
import {
  Radio,
  RadioGroup,
  RadioIndicator,
  RadioLabel,
  RadioIcon,
} from "@/components/ui/radio";
import { CircleIcon } from "@/components/ui/icon";
import React from "react";

function App() {
  const [values, setValues] = React.useState("Cash On Delivery");

  return (
    <RadioGroup
      value={values}
      onChange={setValues}
      className="p-4 bg-gray-50 rounded-lg"
    >
      <HStack space="2xl" className="flex-wrap md:flex-nowrap">
        <Radio
          value="Credit Card"
          className="flex items-center p-3 rounded-md data-[hover=true]:bg-gray-100 transition-colors cursor-pointer"
        >
          <RadioIndicator className="mr-2 h-5 w-5 text-blue-500 border border-gray-300 rounded-full">
            <RadioIcon as={CircleIcon} className="h-3 w-3" />
          </RadioIndicator>
          <RadioLabel className="text-gray-700 font-medium select-none">
            Credit Card
          </RadioLabel>
        </Radio>

        <Radio
          value="Cash On Delivery"
          className="flex items-center p-3 rounded-md hover:bg-gray-100 transition-colors cursor-pointer"
        >
          <RadioIndicator className="mr-2 h-5 w-5 text-blue-500 border border-gray-300 rounded-full">
            <RadioIcon as={CircleIcon} className="h-3 w-3" />
          </RadioIndicator>
          <RadioLabel className="text-gray-700 font-medium select-none">
            Cash On Delivery
          </RadioLabel>
        </Radio>
      </HStack>
    </RadioGroup>
  );
}
```
