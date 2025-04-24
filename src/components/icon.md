---
title: Icon
description: A scalable icon component for React Native and web applications with built-in icons collection.
---

# Icon

A scalable icon component for React Native and web applications with built-in icons collection.

```jsx
import { Icon, EditIcon } from "@/components/ui/icon";

function Example() {
  return <Icon as={EditIcon} size="md" />;
}
```

# Props

size: 2xs | xs | sm | md | lg | xl (default: md)
as: Required prop to specify which icon to display
All SVG props are supported

## Built-in Icons

The library includes many common icons:
AddIcon, AlertCircleIcon, ArrowUpIcon, ArrowDownIcon, ArrowRightIcon, ArrowLeftIcon, AtSignIcon, BellIcon, CalendarDaysIcon, CheckIcon, CheckCircleIcon, ChevronUpIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, ChevronsLeftIcon, ChevronsRightIcon, ChevronsUpDownIcon, CircleIcon, ClockIcon, CloseIcon, CloseCircleIcon, CopyIcon, DownloadIcon, EditIcon, EyeIcon, EyeOffIcon, FavouriteIcon, GlobeIcon, GripVerticalIcon, HelpCircleIcon, InfoIcon, LinkIcon, ExternalLinkIcon, LoaderIcon, LockIcon, MailIcon, MenuIcon, MessageCircleIcon, MoonIcon, PaperclipIcon, PhoneIcon, PlayIcon, RemoveIcon, RepeatIcon, Repeat1Icon, SearchIcon, SettingsIcon, ShareIcon, SlashIcon, StarIcon, SunIcon, ThreeDotsIcon, TrashIcon, UnlockIcon

Note: For icons not available in the built-in collection, you can import them directly from 'lucide-react-native'.

## Example

### Usage with Lucide Icons

```jsx
import { Icon } from "@/components/ui/icon";
import { Box } from "@/components/ui/box";
import { Camera, Instagram } from "lucide-react-native";

function Example() {
  return (
    <Box className="flex space-x-4 items-center p-4 bg-gray-100 rounded-lg">
      <Icon as={Camera} size="xl" className="text-blue-500" />
      <Icon as={Instagram} className="w-8 h-8 fill-purple-600" />
    </Box>
  );
}
```

### Custom Icons

Create custom icons using the createIcon function:

```jsx
import { Icon, createIcon } from "@/components/ui/icon";
import { Path } from "react-native-svg";

function Example() {
  const CustomIcon = createIcon({
    viewBox: "0 0 24 24",
    path: (
      <Path
        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  });

  return <Icon as={CustomIcon} size="sm" />;
}
```
