---
title: Image
description: A versatile image component for React & React Native with customizable properties.
---

# Image

A versatile image component for React & React Native with customizable properties.

```jsx
import { Image } from "@/components/ui/image";

function Example() {
  return (
    <Image
      size="md"
      source={{
        uri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      }}
      alt="image"
    />
  );
}
```

## Props

### Image

size: 2xs | xs | sm | md | lg | xl | 2xl | full | none (default: md)

2xs: h-6 w-6
xs: h-10 w-10
sm: h-16 w-16
md: h-20 w-20
lg: h-24 w-24
xl: h-32 w-32
2xl: h-64 w-64
full: h-full w-full
none: custom sizing via className

Inherits all the properties of React Native's Image component.

## Examples

```jsx
import { Image } from "@/components/ui/image";

function Example() {
  return (
    <Image
      source={{
        uri: "https://gluestack.github.io/public-blog-video-assets/mountains.png",
      }}
      alt="Logo"
      size="none"
      className="aspect-[320/208] w-full max-w-[320px] rounded-lg"
    />
  );
}
```
