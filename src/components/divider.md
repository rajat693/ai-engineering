---
title: Divider
description: A separator component for React & React Native that visually separates content in a layout.
---

# Divider

A separator component for React & React Native that visually separates content in a layout.

```jsx
import { Center } from "@/components/ui/center";
import { Divider } from "@/components/ui/divider";
import { Text } from "@/components/ui/text";

function Example() {
  return (
    <Center>
      <Text className="font-semibold">Easy</Text>
      <Divider className="my-0.5" />
      <Text className="font-semibold">Difficult</Text>
    </Center>
  );
}
```

## Props

### Divider

orientation: horizontal | vertical (default: horizontal)

default classNames attached for different orientation

horizontal: h-px w-full
vertical: w-px h-full

Inherits all the properties of React Native's View component

## Examples

```jsx
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";

function Example() {
  return (
    <VStack>
      <Heading>gluestack-ui</Heading>
      <Text>Universal component library</Text>
      <Divider className="my-2  bg-indigo-500" />
      <HStack className="">
        <Text>Installation</Text>
        <Divider
          orientation="vertical"
          className="mx-2 h-[20px]  bg-emerald-500"
        />
        <Text>API Reference</Text>
        <Divider
          orientation="vertical"
          className="mx-2 h-[20px]  bg-emerald-500"
        />
        <Text>Examples</Text>
      </HStack>
    </VStack>
  );
}
```
