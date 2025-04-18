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
