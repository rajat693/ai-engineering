---
title: Badge
description: A status indicator component for React & React Native that highlights information or status.
---

# Badge

A status indicator component for React & React Native that highlights information or status.

```jsx
import { Badge, BadgeIcon, BadgeText } from "@/components/ui/badge";
import { GlobeIcon } from "@/components/ui/icon";

function Example() {
  return (
    <Badge size="md" variant="solid" action="muted">
      <BadgeText>Verified</BadgeText>
      <BadgeIcon as={GlobeIcon} className="ml-2" />
    </Badge>
  );
}
```

## Props

### Badge

action: error | warning | success | info | muted (default: muted)

default classNames attached for different action

error: bg-background-error border-error-300
warning: bg-background-warning border-warning-300
success: bg-background-success border-success-300
info: bg-background-info border-info-300
muted: bg-background-muted border-background-300

variant: solid | outline (default: solid)

solid: no border
outline: adds border

size: sm | md | lg (default: md)

sm: smaller text size
md: medium text size
lg: larger text size

Inherits all the properties of React Native's View component

### BadgeText

isTruncated: boolean (default: false) - When true, text will be truncated if it exceeds its container
bold: boolean (default: false) - When true, text will be bold
underline: boolean (default: false) - When true, text will be underlined
strikeThrough: boolean (default: false) - When true, text will have a line through it
italic: boolean (default: false) - When true, text will be italicized
highlight: boolean (default: false) - When true, text will have a yellow background highlight
sub: boolean (default: false) - Sets text size to xs
Inherits all the properties of React Native's Text component

### BadgeIcon

Contains all Icon related layout style props and actions

## Examples

```jsx
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
} from "@/components/ui/avatar";
import { Badge, BadgeIcon, BadgeText } from "@/components/ui/badge";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { BadgeCheckIcon } from "lucide-react-native";

function Example() {
  return (
    <VStack space="2xl">
      <HStack space="md">
        <Avatar>
          <AvatarFallbackText>SS</AvatarFallbackText>
          <AvatarImage
            source={{
              uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
            }}
          />
        </Avatar>
        <VStack>
          <HStack>
            <Heading size="sm">Ronald Richards</Heading>
            <Badge size="sm" variant="solid" action="success" className="ml-1">
              <BadgeText>Verified</BadgeText>
              <BadgeIcon as={BadgeCheckIcon} className="ml-1" />
            </Badge>
          </HStack>
          <Text size="sm">Nursing Assistant</Text>
        </VStack>
      </HStack>
    </VStack>
  );
}
```
