---
title: Alert
description: A notification component for React & React Native that provides contextual feedback messages.
---

# Alert

A notification component for React & React Native that provides contextual feedback messages.

```jsx
import { Alert, AlertText, AlertIcon } from "@/components/ui/alert";
import { InfoIcon } from "@/components/ui/icon";

function Example() {
  return (
    <Alert action="muted" variant="solid">
      <AlertIcon as={InfoIcon} />
      <AlertText>Description of alert!</AlertText>
    </Alert>
  );
}
```

## Props

### Alert

action: error | warning | success | info | muted (default: muted)

error: bg-background-error
warning: bg-background-warning
success: bg-background-success
info: bg-background-info
muted: bg-background-muted

variant: solid | outline (default: solid)

solid: filled background
outline: border with transparent background

Inherits all the properties of React Native's View component

### AlertText

size: 2xs | xs | sm | md | lg | xl | 2xl | 3xl | 4xl | 5xl | 6xl (default: md)
isTruncated: boolean (default: false) - When true, text will be truncated if it exceeds its container
bold: boolean (default: false) - When true, text will be bold
underline: boolean (default: false) - When true, text will be underlined
strikeThrough: boolean (default: false) - When true, text will have a line through it
italic: boolean (default: false) - When true, text will be italicized
highlight: boolean (default: false) - When true, text will have a yellow background highlight
sub: boolean (default: false) - Sets text size to xs
Inherits all the properties of React Native's Text component

### AlertIcon

size: 2xs | xs | sm | md | lg | xl (default: md)

2xs: h-3 w-3
xs: h-3.5 w-3.5
sm: h-4 w-4
md: h-[18px] w-[18px]
lg: h-5 w-5
xl: h-6 w-6

Inherits all the properties of gluestack Style's AsForwarder component

## Examples

```jsx
import { Alert, AlertText, AlertIcon } from "@/components/ui/alert";
import { Button, ButtonText } from "@/components/ui/button";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { RepeatIcon } from "@/components/ui/icon";

function Example() {
  return (
    <Alert
      action="warning"
      className="gap-4 max-w-[516px] w-full flex-row flex py-4 items-start self-center"
    >
      <AlertIcon as={RepeatIcon} className="mt-1" />
      <HStack className="justify-between flex-1 items-center gap-1 sm:gap-8">
        <VStack className="flex-1">
          <Text className="font-semibold text-typography-900">
            Sync is disabled
          </Text>
          <AlertText className="text-typography-900" size="sm">
            Enable cloud sync to help safeguard your data
          </AlertText>
        </VStack>
        <Button size="xs">
          <ButtonText>Turn on</ButtonText>
        </Button>
      </HStack>
    </Alert>
  );
}
```
