---
title: Link
description: A navigation component for React & React Native that directs users to different pages or external resources.
---

# Link

A navigation component for React & React Native that directs users to different pages or external resources.

```jsx
import { Link, LinkText } from "@/components/ui/link";

function Example() {
  return (
    <Link href="https://gluestack.io/">
      <LinkText>gluestack</LinkText>
    </Link>
  );
}
```

## Props

### Link

- **href**: string - URL that should be opened on Link press
- **onPress**: (event?: GestureResponderEvent) => any - Callback that will be invoked on Link press
- **isExternal**: boolean (default: false) - If true, link will be opened in new tab on web using the \_target property
- **isHovered**: boolean (default: false) - When true, the link displays a hover state
- **isFocusVisible**: boolean (default: false) - To manually set focus visible state to the link
- Inherits all the properties of React Native's Pressable component

### LinkText

- **size**: 2xs | xs | sm | md | lg | xl | 2xl | 3xl | 4xl | 5xl | 6xl (default: md)
- **isTruncated**: boolean (default: false) - When true, text will be truncated if it exceeds its container
- **bold**: boolean (default: false) - When true, text will appear bold
- **underline**: boolean (default: false) - When true, text will be underlined
- **strikeThrough**: boolean (default: false) - When true, text will have a line through it
- **italic**: boolean (default: false) - When true, text will be italicized
- **highlight**: boolean (default: false) - When true, text will have a yellow background highlight
- Inherits all the properties of React Native's Text component

## Accessibility

- Keyboard navigation support with Tab and Enter keys
- Screen reader compatibility with appropriate descriptive link names
- Support for focus management and various states

## Examples

```jsx
import { Link, LinkText } from "@/components/ui/link";
import { HStack } from "@/components/ui/hstack";
import { Icon } from "@/components/ui/icon";
import { ExternalLinkIcon } from "@/components/ui/icon";

function Example() {
  return (
    <Link href="https://github.com" isExternal className="flex items-center">
      <HStack space="xs" className="items-center">
        <LinkText className="text-primary-600 font-medium">
          Visit GitHub
        </LinkText>
        <Icon as={ExternalLinkIcon} size="xs" className="text-primary-600" />
      </HStack>
    </Link>
  );
}
```