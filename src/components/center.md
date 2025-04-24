---
title: Center
description: A layout component for React & React Native that centers its children horizontally and vertically.
---

# Center

A layout component for React & React Native that centers its children horizontally and vertically.

```jsx
import { Center } from "@/components/ui/center";
import { Text } from "@/components/ui/text";

function Example() {
  return (
    <Center className="bg-primary-500 h-[200px] w-[300px]">
      <Text className="text-typography-0 font-bold">This is the center.</Text>
    </Center>
  );
}
```

## Props

### Center

Renders a <div> on web and a <View> on native
Inherits all the properties of React Native's View component
