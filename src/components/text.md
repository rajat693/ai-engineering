---
title: Text
description: Adaptable text component with multiple styling options.
---

# Text

Adaptable text component with multiple styling options.

```jsx
import { Text } from "@/components/ui/text";

function Example() {
  return <Text>Hello World!</Text>;
}
```

## Props

size: 2xs | xs | sm | md | lg | xl | 2xl | 3xl | 4xl | 5xl | 6xl (default: md)
bold: boolean (default: false)
italic: boolean (default: false)
underline: boolean (default: false)
strikeThrough: boolean (default: false)
highlight: boolean (default: false)
isTruncated: boolean (default: false)

## Example

```jsx
import { Text } from "@/components/ui/text";

function Example() {
  return (
    <Text className="text-gray-800 text-base font-normal">Hello World!</Text>
  );
}
```
