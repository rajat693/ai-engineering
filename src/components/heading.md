# Heading

A customizable heading component with various size options that renders semantically correct headings.

```jsx
import { Heading } from "@/components/ui/heading";

function Example() {
  return <Heading>I am a Heading</Heading>;
}
```

## Props

size: xs | sm | md | lg | xl | 2xl | 3xl | 4xl | 5xl (default: md)
isTruncated: boolean (default: false)
bold: boolean (default: false)
underline: boolean (default: false)
strikeThrough: boolean (default: false)
italic: boolean (default: false)
highlight: boolean (default: false)
as: React.ElementType (optional) - override the rendered element

### Semantic Mapping

Size Web Native 5xl, 4xl, 3xl<h1>H1 2xl<h2>H2 xl<h3>H3 lg<h4>H4 md<h5>H5 sm, xs<h6>H6
