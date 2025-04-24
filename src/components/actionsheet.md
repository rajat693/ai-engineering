---
title: Actionsheet
description: A bottom sheet component for Expo, React & React Native that displays a set of options.
---

# Actionsheet

Actionsheet is a bottom sheet component that slides up from the bottom of the screen to display a set of options with className styling support.

```jsx
import {
  Actionsheet,
  ActionsheetContent,
  ActionsheetItem,
  ActionsheetItemText,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetBackdrop,
} from "@/components/ui/actionsheet";
import { Button, ButtonText } from "@/components/ui/button";
import React from "react";

function Example() {
  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const handleClose = () => setShowActionsheet(false);

  return (
    <>
      <Button onPress={() => setShowActionsheet(true)}>
        <ButtonText>Open Actionsheet</ButtonText>
      </Button>
      <Actionsheet isOpen={showActionsheet} onClose={handleClose}>
        <ActionsheetBackdrop />
        <ActionsheetContent>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Edit Message</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Mark Unread</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Remind Me</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Add to Saved Items</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem isDisabled onPress={handleClose}>
            <ActionsheetItemText>Delete</ActionsheetItemText>
          </ActionsheetItem>
        </ActionsheetContent>
      </Actionsheet>
    </>
  );
}
```

> **Important**: If snapPoints are not provided to Actionsheet, then it's essential to set maxHeight to ActionsheetContent.

## Props

### Actionsheet

- **isOpen**: boolean - If true, the Actionsheet will open
- **onClose**: () => any - Callback invoked when the Actionsheet is closed
- **onOpen**: () => any - Callback invoked when the Actionsheet is opened
- **useRNModal**: boolean (default: `false`) - If true, renders react-native native modal
- **defaultIsOpen**: boolean - Specifies the default open state of the Actionsheet
- **initialFocusRef**: React.RefObject<any> - The ref of element to receive focus when the Actionsheet opens
- **finalFocusRef**: React.RefObject<any> - The ref of element to receive focus when the Actionsheet closes
- **closeOnOverlayClick**: boolean - If true, the Actionsheet will close when the overlay is clicked
- **isKeyboardDismissable**: boolean - If true, the keyboard can dismiss the Actionsheet
- **trapFocus**: boolean (default: `true`) - If true, creates a focus scope containing all elements within the Actionsheet content
- **snapPoints**: Array<number> (default: `[50]`) - The snap points for the Actionsheet as percentages (0-100) of the screen height
- **preventScroll**: boolean (default: `true`) - If true, scroll will be prevented when the Actionsheet is open

Inherits all the properties of React Native's View component.

### ActionsheetBackdrop

Inherits all the properties of React Native's Pressable component, created using @legendapp/motion's createMotionAnimatedComponent function to add animation.

### ActionsheetContent

Inherits all the properties of @legendapp/motion's Motion.View component.

### ActionsheetDragIndicatorWrapper

Inherits all the properties of React Native's View component.

### ActionsheetDragIndicator

Inherits all the properties of React Native's View component.

### ActionsheetItem

Inherits all the properties of React Native's Pressable component.

### ActionsheetItemText

Inherits all the properties of React Native's Text component.

### ActionsheetIcon

Inherits all the properties of React Native's View component.

### Additional Components

- **ActionsheetScrollView**: Inherits all the properties of React Native's ScrollView component
- **ActionsheetVirtualizedList**: Inherits all the properties of React Native's VirtualizedList component
- **ActionsheetFlatList**: Inherits all the properties of React Native's FlatList component
- **ActionsheetSectionList**: Inherits all the properties of React Native's SectionList component
- **ActionsheetSectionHeaderText**: Inherits all the properties of React Native's Text component

> **Note**: While our Actionsheet component supports both ActionsheetScrollView and ActionsheetVirtualizedList, we recommend using VirtualizedList for better performance on large lists of items.

## Accessibility

- Actionsheet has aria-modal set to true
- Actionsheet has role set to dialog
- Focus is trapped within the Actionsheet when it opens
- Keyboard support:
  - **Space**: Opens the actionsheet
  - **Enter**: Opens/closes the actionsheet
  - **Tab/Shift+Tab**: Moves focus between focusable elements
  - **Esc**: Closes the actionsheet
- Screen reader support announces button name and Actionsheet content

## Examples

```jsx
import {
  Actionsheet,
  ActionsheetContent,
  ActionsheetItem,
  ActionsheetItemText,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetBackdrop,
  ActionsheetIcon,
} from "@/components/ui/actionsheet";
import { Button, ButtonText } from "@/components/ui/button";
import {
  ClockIcon,
  DownloadIcon,
  EditIcon,
  EyeOffIcon,
  TrashIcon,
} from "@/components/ui/icon";
import React from "react";

function Example() {
  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const handleClose = () => setShowActionsheet(false);

  return (
    <>
      <Button onPress={() => setShowActionsheet(true)}>
        <ButtonText>Open</ButtonText>
      </Button>
      <Actionsheet isOpen={showActionsheet} onClose={handleClose}>
        <ActionsheetBackdrop />
        <ActionsheetContent>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetIcon className="stroke-background-700" as={EditIcon} />
            <ActionsheetItemText>Edit Message</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetIcon
              className="stroke-background-700"
              as={EyeOffIcon}
            />
            <ActionsheetItemText>Mark Unread</ActionsheetItemText>
          </ActionsheetItem>
          {/* Additional items */}
        </ActionsheetContent>
      </Actionsheet>
    </>
  );
}
```
