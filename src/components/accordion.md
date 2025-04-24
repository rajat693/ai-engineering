---
title: Accordion
description: A collapsible component for Expo, React & React Native that displays expandable and collapsible sections.
---

# Accordion

Accordion is a collapsible component that displays expandable and collapsible sections for organizing content with className styling support.

```jsx
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionTitleText,
  AccordionContentText,
  AccordionIcon,
  AccordionContent,
} from "@/components/ui/accordion";
import { Divider } from "@/components/ui/divider";
import { ChevronUpIcon, ChevronDownIcon } from "@/components/ui/icon";

function Example() {
  return (
    <Accordion
      size="md"
      variant="filled"
      type="single"
      isCollapsible={true}
      isDisabled={false}
      className="m-5 w-[90%] border border-outline-200"
    >
      <AccordionItem value="a">
        <AccordionHeader>
          <AccordionTrigger>
            {({ isExpanded }) => {
              return (
                <>
                  <AccordionTitleText>
                    How do I place an order?
                  </AccordionTitleText>
                  {isExpanded ? (
                    <AccordionIcon as={ChevronUpIcon} className="ml-3" />
                  ) : (
                    <AccordionIcon as={ChevronDownIcon} className="ml-3" />
                  )}
                </>
              );
            }}
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          <AccordionContentText>
            To place an order, simply select the products you want, proceed to
            checkout, provide shipping and payment information, and finalize
            your purchase.
          </AccordionContentText>
        </AccordionContent>
      </AccordionItem>
      <Divider />
      <AccordionItem value="b">
        <AccordionHeader>
          <AccordionTrigger>
            {({ isExpanded }) => {
              return (
                <>
                  <AccordionTitleText>
                    What payment methods do you accept?
                  </AccordionTitleText>
                  {isExpanded ? (
                    <AccordionIcon as={ChevronUpIcon} className="ml-3" />
                  ) : (
                    <AccordionIcon as={ChevronDownIcon} className="ml-3" />
                  )}
                </>
              );
            }}
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          <AccordionContentText>
            We accept all major credit cards, including Visa, Mastercard, and
            American Express. We also support payments through PayPal.
          </AccordionContentText>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
```

## Props

### Accordion

- **variant**: `filled` | `unfilled` (default: `filled`)
- **size**: `sm` | `md` | `lg` (default: `md`)
- **type**: `single` | `multiple` (default: `single`) - Determines whether one or multiple items can be opened at the same time
- **isCollapsible**: boolean (default: `true`) - When type is "single" or "multiple", allows closing content when clicking trigger for an open item
- **defaultValue**: string[] (default: `[]`) - The value of the item to expand when initially rendered when type is "single" or "multiple"
- **value**: string[] (default: `[]`) - The controlled value of the item to expand when type is "single" or "multiple"
- **onValueChange**: function - Event handler called when the expanded state of an item changes and type is "single" or "multiple"
- **isDisabled**: boolean (default: `false`) - When true, prevents the user from interacting with the accordion and all its items

Inherits all the properties of React Native's View component.

### AccordionItem

- **value**: string (required) - The controlled value of the item to expand when type is "single" or "multiple"
- **isDisabled**: boolean (default: `false`) - When true, prevents the user from interacting with the accordion item

Inherits all the properties of React Native's View component.

### AccordionHeader

Inherits all the properties of @expo/html-elements's H3 on web and React Native's View on native.

### AccordionTrigger

Inherits all the properties of React Native's Pressable component.

### AccordionTitleText

Inherits all the properties of React Native's Text component.

### AccordionIcon

Inherits all the properties of React Native's View component.

### AccordionContent

Inherits all the properties of React Native's View component.

### AccordionContentText

Inherits all the properties of React Native's Text component.

## Accessibility

- Adheres to the Accordion WAI-ARIA design pattern
- Header is h3 tag on web
- aria-expanded is "true" when the Accordion Content is visible, otherwise false
- role is set to "region" for the currently expanded accordion panel
- aria-controls points to the id of the Accordion Content
- aria-labelledby references the accordion header button that expands and collapses the region

### Keyboard Interactions

- **Space/Enter**: When focus is on an AccordionTrigger of a collapsed section, expands the section
- **Tab**: Moves focus to the next focusable element
- **Shift + Tab**: Moves focus to the previous focusable element

## Examples

```jsx
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionTitleText,
  AccordionContentText,
  AccordionIcon,
  AccordionContent,
} from "@/components/ui/accordion";
import { Divider } from "@/components/ui/divider";
import { MinusIcon, PlusIcon } from "lucide-react-native";

function App() {
  return (
    <Accordion
      variant="unfilled"
      type="single"
      defaultValue="item-3"
      className="w-[90%] m-5"
    >
      <AccordionItem value="item-1" className="rounded-lg">
        <AccordionHeader>
          <AccordionTrigger>
            {({ isExpanded }) => {
              return (
                <>
                  <AccordionTitleText>
                    What is the defaultValue prop of the Accordion component?
                  </AccordionTitleText>
                  {isExpanded ? (
                    <AccordionIcon as={MinusIcon} />
                  ) : (
                    <AccordionIcon as={PlusIcon} />
                  )}
                </>
              );
            }}
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          <AccordionContentText>
            The defaultValue prop of the Accordion component is used to define
            the open item by default. It is used when the Accordion component is
            uncontrolled.
          </AccordionContentText>
        </AccordionContent>
      </AccordionItem>
      <Divider />
      <AccordionItem value="item-2" className="rounded-lg">
        <AccordionHeader>
          <AccordionTrigger>
            {({ isExpanded }) => {
              return (
                <>
                  <AccordionTitleText>
                    How many size variants does the Accordion component have?
                  </AccordionTitleText>
                  {isExpanded ? (
                    <AccordionIcon as={MinusIcon} />
                  ) : (
                    <AccordionIcon as={PlusIcon} />
                  )}
                </>
              );
            }}
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          <AccordionContentText>
            The Accordion component has three size variants - sm, md and lg.
          </AccordionContentText>
        </AccordionContent>
      </AccordionItem>
      <Divider />
      <AccordionItem value="item-3" className="rounded-lg">
        <AccordionHeader>
          <AccordionTrigger>
            {({ isExpanded }) => {
              return (
                <>
                  <AccordionTitleText>
                    Can I nest my accordions?
                  </AccordionTitleText>
                  {isExpanded ? (
                    <AccordionIcon as={MinusIcon} />
                  ) : (
                    <AccordionIcon as={PlusIcon} />
                  )}
                </>
              );
            }}
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          <AccordionContentText>
            Yes, you can nest your accordions. Refer to the nested accordion
            example in the docs.
          </AccordionContentText>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
```
