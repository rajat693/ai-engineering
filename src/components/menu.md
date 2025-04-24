---
title: Menu
description: A user-friendly interface component designed for easy navigation and accessibility.
---

# Menu

Menu is a user-friendly interface component designed for easy navigation and accessibility with className styling support.

```jsx
import { Button, ButtonText } from "@/components/ui/button";
import { Menu, MenuItem, MenuItemLabel } from "@/components/ui/menu";
import {
  Icon,
  AddIcon,
  GlobeIcon,
  PlayIcon,
  SettingsIcon,
} from "@/components/ui/icon";

function Example() {
  return (
    <Menu
      placement="top"
      offset={5}
      disabledKeys={["Settings"]}
      trigger={({ ...triggerProps }) => {
        return (
          <Button {...triggerProps}>
            <ButtonText>Menu</ButtonText>
          </Button>
        );
      }}
    >
      <MenuItem key="Add account" textValue="Add account">
        <Icon as={AddIcon} size="sm" className="mr-2" />
        <MenuItemLabel size="sm">Add account</MenuItemLabel>
      </MenuItem>
      <MenuItem key="Community" textValue="Community">
        <Icon as={GlobeIcon} size="sm" className="mr-2" />
        <MenuItemLabel size="sm">Community</MenuItemLabel>
      </MenuItem>
      <MenuItem key="Plugins" textValue="Plugins">
        <Icon as={PlayIcon} size="sm" className="mr-2" />
        <MenuItemLabel size="sm">Plugins</MenuItemLabel>
      </MenuItem>
      <MenuItem key="Settings" textValue="Settings">
        <Icon as={SettingsIcon} size="sm" className="mr-2" />
        <MenuItemLabel size="sm">Settings</MenuItemLabel>
      </MenuItem>
    </Menu>
  );
}
```

## Props

### Menu

- **placement**: `bottom` | `top` | `right` | `left` | `top left` | `top right` | `bottom left` | `bottom right` | `right top` | `right bottom` | `left top` | `left bottom` (default: `bottom left`) - Menu placement
- **trigger**: (\_props: any, state: { open: boolean; }) => Element - Function that returns a React Element used as a trigger for the Menu
- **defaultIsOpen**: boolean (default: `false`) - If true, the menu will be opened by default
- **onOpen**: () => void - Function invoked when the menu is opened
- **onClose**: () => void - Function invoked when menu is closed
- **isOpen**: boolean (default: `false`) - Whether the menu is opened (controlled state)
- **offset**: number - Additional offset applied along the main axis
- **crossOffset**: number - Additional offset applied along the cross axis
- **disabledKeys**: string[] - Item keys in this collection will be disabled
- **closeOnSelect**: boolean (default: `true`) - Whether menu closes after an option is selected
- **selectedKeys**: 'all' | Iterable<Key> - The currently selected keys (controlled)
- **selectionMode**: 'none' | 'single' | 'multiple' (default: `none`) - Type of selection allowed
- **onSelectionChange**: (keys: 'all' | Iterable<Key>) => void - Handler called when selection changes

Inherits all the properties of React Native's View component.

### MenuItem

- **closeOnSelect**: boolean (default: `true`) - Whether menu closes after this option is selected

Inherits all the properties of React Native's Pressable component.

### MenuItemLabel

- **size**: `2xs` | `xs` | `sm` | `md` | `lg` | `xl` | `2xl` | `3xl` | `4xl` | `5xl` | `6xl` (default: `md`)
- **isTruncated**: boolean - When true, text will be truncated
- **bold**: boolean - When true, text will be bold
- **underline**: boolean - When true, text will be underlined
- **strikeThrough**: boolean - When true, text will have a line through it
- **italic**: boolean - When true, text will be italicized
- **highlight**: boolean - When true, text will have a yellow background highlight
- **sub**: boolean - Sets text size to xs

Inherits all the properties of React Native's Text component.

### MenuSeparator

Inherits all the properties of React Native's View component.

## Accessibility

- Adheres to the MENU WAI-ARIA design pattern
- Keyboard support:
  - **Space/Enter**: Opens/closes the menu
  - **Arrow Down**: Moves focus to the next focusable element
  - **Arrow Up**: Moves focus to the previous focusable element
  - **Esc**: Closes the menu and moves focus to menuTrigger
- Screen Reader support with appropriate ARIA labels

## Examples

```jsx
import { Badge, BadgeText } from "@/components/ui/badge";
import { Button, ButtonIcon } from "@/components/ui/button";
import {
  Menu,
  MenuItem,
  MenuItemLabel,
  MenuSeparator,
} from "@/components/ui/menu";
import { MenuIcon } from "@/components/ui/icon";

function Example() {
  return (
    <Menu
      offset={5}
      trigger={({ ...triggerProps }) => {
        return (
          <Button {...triggerProps} size="sm">
            <ButtonIcon as={MenuIcon} />
          </Button>
        );
      }}
    >
      <MenuItem
        key="Membership"
        textValue="Membership"
        className="p-2 justify-between"
      >
        <MenuItemLabel size="sm">Membership</MenuItemLabel>
        <Badge action="success" className="rounded-full">
          <BadgeText className="text-2xs capitalize">Pro</BadgeText>
        </Badge>
      </MenuItem>
      <MenuItem key="Orders" textValue="Orders" className="p-2">
        <MenuItemLabel size="sm">Orders</MenuItemLabel>
      </MenuItem>
      <MenuItem key="Address Book" textValue="Address Book" className="p-2">
        <MenuItemLabel size="sm">Address Book</MenuItemLabel>
      </MenuItem>
      <MenuSeparator />
      <MenuItem key="Earn & Redeem" textValue="Earn & Redeem" className="p-2">
        <MenuItemLabel size="sm">Earn & Redeem</MenuItemLabel>
      </MenuItem>
      <MenuItem key="Coupons" textValue="Coupons" className="p-2">
        <MenuItemLabel size="sm">Coupons</MenuItemLabel>
      </MenuItem>
      <MenuItem key="Help Center" textValue="Help Center" className="p-2">
        <MenuItemLabel size="sm">Help Center</MenuItemLabel>
      </MenuItem>
      <MenuSeparator />
      <MenuItem key="Logout" textValue="Logout" className="p-2">
        <MenuItemLabel size="sm">Logout</MenuItemLabel>
      </MenuItem>
    </Menu>
  );
}
```
