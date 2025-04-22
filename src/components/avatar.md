---
title: Avatar
description: A versatile avatar component for React & React Native with customizable properties.
---

# Avatar

A versatile avatar component for React & React Native with customizable properties.

```jsx
import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
} from "@/components/ui/avatar";

function Example() {
  return (
    <Avatar size="md">
      <AvatarFallbackText>Jane Doe</AvatarFallbackText>
      <AvatarImage
        source={{
          uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        }}
      />
      <AvatarBadge />
    </Avatar>
  );
}
```

## Props

### Avatar

size: xs | sm | md | lg | xl | 2xl (default: md)

default classNames attached for different size

xs: w-6 h-6
sm: w-8 h-8
md: w-12 h-12
lg: w-16 h-16
xl: w-24 h-24
2xl: w-32 h-32

Inherits all the properties of React Native's View component.

### AvatarGroup

Container for multiple avatars with flex row reverse layout.
Inherits all the properties of React Native's View component.

### AvatarImage

Used for displaying the avatar image.
Inherits all the properties of React Native's Image component.

### AvatarFallbackText

Displays text when the image is not available or fails to load.
Inherits all the properties of React Native's Text component.

### AvatarBadge

Used to show status indicators (online, offline, etc.).
Inherits all the properties of React Native's View component.

Important Note
IOS: It is highly recommended to use <AvatarFallbackText /> before <AvatarImage /> to avoid indexing issues in IOS.

## Examples

```jsx
import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
} from "@/components/ui/avatar";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";

function Example() {
  return (
    <HStack
      space="md"
      className="items-center w-full p-3 rounded-md transition-colors"
    >
      <Avatar className="bg-indigo-600 h-12 w-12 ring-2 ring-indigo-300 shadow-sm">
        <AvatarImage
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
        />
        <AvatarFallbackText className="text-white font-medium">
          Ronald Richards
        </AvatarFallbackText>
        <AvatarBadge className="bg-green-500 border-white" />
      </Avatar>
      <VStack className="flex-1">
        <Heading size="sm" className="text-gray-800 font-semibold">
          Ronald Richards
        </Heading>
        <Text size="sm" className="text-gray-500">
          Nursing Assistant
        </Text>
      </VStack>
    </HStack>
  );
}
```
