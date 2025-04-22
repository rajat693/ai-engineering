---
title: Progress
description: A visual indicator component for React & React Native that displays the progress of an operation.
---

# Progress

A visual indicator component for React & React Native that displays the progress of an operation.

```jsx
import { Center } from "@/components/ui/center";
import { Progress, ProgressFilledTrack } from "@/components/ui/progress";

function Example() {
  return (
    <Center className="w-[300px] h-[150px]">
      <Progress value={40} size="md" orientation="horizontal">
        <ProgressFilledTrack />
      </Progress>
    </Center>
  );
}
```

## Props

### Progress

size: xs | sm | md | lg | xl | 2xl (default: md)

Horizontal sizes (height):
default classNames attached for different size

xs: h-1
sm: h-2
md: h-3
lg: h-4
xl: h-5
2xl: h-6

Vertical sizes (width):
default classNames attached for different size

xs: w-1
sm: w-2
md: w-3
lg: w-4
xl: w-5
2xl: w-6

orientation: horizontal | vertical (default: horizontal)
value: number - It is used to set the progress of the progress bar
Inherits all the properties of React Native's View component

### ProgressFilledTrack

Represents the filled portion of the progress bar
Inherits all the properties of React Native's View component

## Accessibility

Keyboard navigation support with Tab key
Screen reader compatibility that announces progress indicators
ARIA attributes for better accessibility

## Examples

```jsx
import { Progress, ProgressFilledTrack } from "@/components/ui/progress";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
function Example() {
  return (
    <VStack space="lg" className="max-w-80 w-full">
      <Text size="lg">Downloading 55%</Text>
      <Progress value={55} className="w-full h-1">
        <ProgressFilledTrack className="h-1" />
      </Progress>
    </VStack>
  );
}
```
