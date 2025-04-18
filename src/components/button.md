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
