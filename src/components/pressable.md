---
title: Pressable
description: A touchable component for React & React Native that responds to various interaction states.
---

# Pressable

A touchable component for React & React Native that responds to various interaction states.

```jsx
import { Pressable } from "@/components/ui/pressable";
import { Text } from "@/components/ui/text";

function Example() {
  return (
    <Pressable
      onPress={() => console.log("Hello")}
      className="p-5 bg-primary-500"
    >
      <Text className="text-typography-0">Press me</Text>
    </Pressable>
  );
}
```

## Props

### Pressable

Inherits all the properties of React Native's Pressable component.

Supports data attributes for state-based styling:

data-disabled: true | false
data-focus-visible: true | false

## Examples

```jsx
import { Pressable } from "@/components/ui/pressable";
import { Text } from "@/components/ui/text";

function Example() {
  return (
    <Pressable className="p-16 bg-primary-500">
      {({ pressed }) => (
        <Text className={pressed ? "text-pink-400" : "text-amber-400"}>
          PRESSABLE
        </Text>
      )}
    </Pressable>
  );
}
```
