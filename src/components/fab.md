---
title: Fab
description: A floating action button component for React & React Native with customizable properties.
---

# Fab

A floating action button component for React & React Native with customizable properties.

```jsx
import { Box } from "@/components/ui/box";
import { Fab, FabLabel, FabIcon } from "@/components/ui/fab";
import { AddIcon } from "@/components/ui/icon";

function Example() {
  return (
    <Box className="h-[360px] w-80 bg-background-50 rounded-md">
      <Fab
        size="md"
        placement="bottom right"
        isHovered={false}
        isDisabled={false}
        isPressed={false}
      >
        <FabIcon as={AddIcon} />
        <FabLabel>Quick start</FabLabel>
      </Fab>
    </Box>
  );
}
```

## Props

### Fab

size: sm | md | lg (default: md)

default classNames attached for different size

sm: px-2.5 py-2.5
md: px-3 py-3
lg: px-4 py-4

placement: top right | top left | bottom right | bottom left | top center | bottom center (default: bottom right)
isHovered: boolean (default: false)
isPressed: boolean (default: false)
isFocused: boolean (default: false)
isDisabled: boolean (default: false)
Inherits all the properties of React Native's Pressable component.

### FabLabel

Contains all text related layout style props and actions.
Inherits all the properties of React Native's Text component.

### FabIcon

Contains all Icon related layout style props and actions.
Inherits all the properties of gluestack Style's AsForwarder component.

## Features

Keyboard support for actions
Support for hover, focus and active states
Option to add your styles or use the default styles

## Examples

```jsx
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Box } from "@/components/ui/box";
import { Fab, FabIcon } from "@/components/ui/fab";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { EditIcon } from "@/components/ui/icon";
function App() {
  const data = [
    {
      uri: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      name: "Kevin James",
      msg: "Hi Rachel, What's up",
    },
    {
      uri: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      name: "Jacob Jones",
      msg: "Good Morning!",
    },
    {
      uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      name: "Albert Flores",
      msg: "Coffee?",
    },
  ];
  return (
    <Box className="border rounded-lg border-outline-200 p-6 bg-background-100 min-w-[240px] sm:min-w-[360px] md:min-w-[476px]">
      <VStack space="md">
        {data.map((chatData, index) => {
          return (
            <HStack space="sm" className="items-center" key={index}>
              <Avatar size="sm">
                <AvatarImage
                  source={{
                    uri: chatData.uri,
                  }}
                  alt="image"
                />
              </Avatar>
              <VStack>
                <Heading size="xs">{chatData.name}</Heading>
                <Text size="xs">{chatData.msg}</Text>
              </VStack>
            </HStack>
          );
        })}
      </VStack>
      <Fab
        size="lg"
        className="bg-primary-600 hover:bg-primary-700 active:bg-primary-800"
      >
        <FabIcon as={EditIcon} />
      </Fab>
    </Box>
  );
}
```
