# Box

A layout primitive for flexible UI construction.

```jsx
import { Box } from "@/components/ui/box"
import { Text } from "@/components/ui/text"

function Example() {
  return (
    <Box className="bg-primary-500 p-5">
      <Text className="text-typography-0">This is the Box</Text>
    </Box>
  )
}
```

## Props
Renders as <div> on web and <View> on native.
Accepts standard layout props and className for styling.