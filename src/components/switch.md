---
title: Switch
description: A toggle component for React & React Native that allows users to turn options on or off.
---

# Switch

A toggle component for React & React Native that allows users to turn options on or off.

```jsx
import { Switch } from "@/components/ui/switch";
import colors from "tailwindcss/colors";

function Example() {
  return (
    <Switch
      size="md"
      isDisabled={false}
      trackColor={{ false: colors.neutral[300], true: colors.neutral[600] }}
      thumbColor={colors.neutral[50]}
      activeThumbColor={colors.neutral[50]}
      ios_backgroundColor={colors.neutral[300]}
    />
  );
}
```

## Props

### Switch

size: sm | md | lg (default: md)

default classNames attached for different size

sm: scale-75
md: scale-100
lg: scale-125

isDisabled: boolean (default: false) - When true, the switch is disabled and cannot be toggled
isInvalid: boolean (default: false) - When true, the switch displays an error state
isRequired: boolean (default: false) - When true, sets aria-required="true" on the switch
isHovered: boolean (default: false) - When true, the switch displays a hover state
value: boolean (default: false) - The value of the switch. If true the switch will be turned on
defaultValue: boolean (default: false) - The defaultValue of the switch. If true the switch will be turned on initially
onToggle: () => any - Callback to be invoked when switch value is changed
trackColor: { false: string, true: string } - Colors for the track depending on whether the switch is on or off
thumbColor: string - Color of the foreground switch grip
activeThumbColor: string - Color of the foreground switch grip when active
ios_backgroundColor: string - Background color when the switch is turned off (iOS only)
Inherits all the properties of React Native's Switch component

## Accessibility

Keyboard navigation support with Tab and Space keys
Screen reader compatibility with appropriate ARIA attributes
Support for disabled and invalid states

## Examples

```jsx
import { HStack } from "@/components/ui/hstack";
import { Switch } from "@/components/ui/switch";
import { Text } from "@/components/ui/text";
import colors from "tailwindcss/colors";

function Example() {
  return (
    <HStack
      space="md"
      className="items-center p-3 rounded-md bg-white shadow-sm"
    >
      <Switch
        trackColor={{ false: colors.gray[300], true: colors.gray[500] }}
        thumbColor={colors.gray[50]}
        activeThumbColor={colors.gray[50]}
        ios_backgroundColor={colors.gray[300]}
      />
      <Text size="sm" className="text-gray-700 cursor-pointer">
        Allow notifications
      </Text>
    </HStack>
  );
}
```
