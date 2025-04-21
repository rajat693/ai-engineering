---
title: Button
description: A versatile button component for React & React Native with customizable properties.
---

# Button

A versatile button component for React & React Native with customizable properties.

```jsx
import { Button, ButtonText } from "@/components/ui/button";

function Example() {
  return (
    <Button size="md" variant="solid" action="primary">
      <ButtonText>Hello World!</ButtonText>
    </Button>
  );
}
```

## Props

### Button

action: primary | secondary | positive | negative | default (default: primary)
variant: link | outline | solid (default: solid)
size: xs | sm | md | lg | xl (default: md)
isDisabled: boolean (default: false)

### ButtonText

Inherits Text component properties.

### ButtonIcon

Component for adding icons to buttons.

### ButtonSpinner

Shows loading state in buttons.

### ButtonGroup

Container for multiple buttons with space and flexDirection props.
RetryClaude can make mistakes. Please double-check responses.

## Example

```jsx
import { Button, ButtonText, ButtonIcon } from "@/components/ui/button";
import { ArrowUpIcon } from "@/components/ui/icon";

function Example() {
  return (
    <Button className="bg-blue-300 data-[hover=true]:bg-blue-400 rounded-full shadow-md">
      <ButtonText className="font-medium text-sm text-typography-900">
        Back to top
      </ButtonText>
      <ButtonIcon
        as={ArrowUpIcon}
        className="h-3 w-3 text-background-900 ml-1"
      />
    </Button>
  );
}
```
