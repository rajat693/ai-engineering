# VStack

A layout component that arranges children vertically with customizable spacing.

```jsx
import { Box } from "@/components/ui/box";
import { VStack } from "@/components/ui/vstack";

function Example() {
  return (
    <VStack space="md" reversed={false}>
      <Box className="h-20 w-20 bg-primary-300" />
      <Box className="h-20 w-20 bg-primary-400" />
      <Box className="h-20 w-20 bg-primary-500" />
    </VStack>
  );
}
```

## Props

space: xs | sm | md | lg | xl | 2xl | 3xl | 4xl - controls gap between children
reversed: boolean (default: false) - reverses the order of children

Renders as <div> on web and <View> on native.
