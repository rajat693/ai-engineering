---
title: Popover
description: A contextual overlay component for React & React Native that displays information, controls, or forms.
---

# Popover

Popover is a contextual overlay component for React & React Native that displays information, controls, or forms with className styling support.

```jsx
import { Button, ButtonText } from "@/components/ui/button";
import {
  Popover,
  PopoverBackdrop,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
} from "@/components/ui/popover";
import { Text } from "@/components/ui/text";
import React from "react";

function Example() {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <Popover
      isOpen={isOpen}
      onClose={handleClose}
      onOpen={handleOpen}
      placement="bottom"
      size="md"
      trigger={(triggerProps) => {
        return (
          <Button {...triggerProps}>
            <ButtonText>Open Popover</ButtonText>
          </Button>
        );
      }}
    >
      <PopoverBackdrop />
      <PopoverContent>
        <PopoverArrow />
        <PopoverBody>
          <Text className="text-typography-900">
            Alex, Annie and many others are already enjoying the Pro features,
            don't miss out on the fun!
          </Text>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
```

## Props

### Popover

- **size**: `xs` | `sm` | `md` | `lg` | `full` (default: `md`)
- **placement**: `top` | `top left` | `top right` | `bottom` | `bottom left` | `bottom right` | `right` | `right top` | `right bottom` | `left` | `left top` | `left bottom` (default: `bottom`)
- **defaultIsOpen**: boolean - Specifies the default open state of the popover
- **isOpen**: boolean - If true, the popover will open (controlled state)
- **trapFocus**: boolean (default: `true`) - Whether popover should trap focus
- **focusScope**: boolean (default: `true`) - Whether focus should be outside of popover or not
- **shouldFlip**: boolean (default: `true`) - Whether the element should flip its orientation when there is insufficient room
- **initialFocusRef**: React.RefObject<any> - The ref of element to receive focus when the popover opens
- **finalFocusRef**: React.RefObject<any> - The ref of element to receive focus when the popover closes
- **trigger**: () => any - Function that returns a React Element as the trigger
- **crossOffset**: number - The additional offset applied along the cross axis
- **offset**: number - The additional offset applied along the main axis
- **shouldOverlapWithTrigger**: boolean (default: `false`) - Determines whether popover content should overlap with the trigger
- **isKeyboardDismissable**: boolean - If true, the keyboard can dismiss the popover
- **useRNModal**: boolean (default: `false`) - If true, renders react-native native modal
- **avoidKeyboard**: boolean - If true, the popover will avoid the keyboard
- **onOpen**: () => any - Function invoked when popover is opened
- **onClose**: () => any - Function invoked when popover is closed

Inherits all the properties of React Native's View component.

### PopoverBackdrop

Inherits all the properties of React Native's Pressable component, created using @legendapp/motion's createMotionAnimatedComponent function to add animation.

### PopoverContent

Inherits all the properties of @legendapp/motion's Motion.View component.

### PopoverArrow

Inherits all the properties of @legendapp/motion's Motion.View component.

### PopoverHeader

Inherits all the properties of React Native's View component.

### PopoverBody

Inherits all the properties of React Native's View component.

### PopoverFooter

Inherits all the properties of React Native's View component.

### PopoverCloseButton

Inherits all the properties of React Native's Pressable component.

## Accessibility

- Adheres to the Dialog WAI-ARIA design pattern
- Keyboard support:
  - **Space/Enter**: Opens/closes the popover
  - **Tab**: Moves focus to the next focusable element
  - **Shift + Tab**: Moves focus to the previous focusable element
  - **Esc**: Closes the popover and moves focus to PopoverTrigger
- Screen Reader: Announces "Popover, menu expanded, button" when opened and "Popover, menu collapsed, button" when closed

## Examples

```jsx
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  AvatarGroup,
} from "@/components/ui/avatar";
import { Button, ButtonText } from "@/components/ui/button";
import {
  Popover,
  PopoverBackdrop,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
} from "@/components/ui/popover";
import { Text } from "@/components/ui/text";
import React from "react";

function Example() {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <Popover
      isOpen={isOpen}
      onClose={handleClose}
      onOpen={handleOpen}
      trigger={(triggerProps) => {
        return (
          <Button {...triggerProps} size="sm">
            <ButtonText>Open Popover</ButtonText>
          </Button>
        );
      }}
    >
      <PopoverBackdrop />
      <PopoverContent className="w-full max-w-[420px] p-4">
        <PopoverArrow />
        <PopoverBody contentContainerClassName="flex flex-row gap-4">
          <AvatarGroup className="flex-row items-center">
            <Avatar className="w-9 h-9 border-[1.5px] border-outline-0">
              <AvatarFallbackText>John Doe</AvatarFallbackText>
              <AvatarImage
                source={{
                  uri: "https://i.ibb.co/PF4vFQk/a130347c432c7b83615044cec215d824.jpg",
                }}
                alt="imageAltText"
              />
            </Avatar>
            {/* Additional avatars */}
          </AvatarGroup>
          <Text className="text-typography-900" size="sm">
            Alex, Annie and many others are already enjoying the Pro features,
            don't miss out on the fun!
          </Text>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
```