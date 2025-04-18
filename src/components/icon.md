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
Navigation: ArrowUpIcon, ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon, ChevronUpIcon, etc.
Actions: AddIcon, RemoveIcon, CheckIcon, CloseIcon, SearchIcon, etc.
UI elements: MenuIcon, EyeIcon, EyeOffIcon, BellIcon, etc.
Status: AlertCircleIcon, CheckCircleIcon, InfoIcon, etc.

## Usage with Lucide Icons

```jsx
import { Icon } from "@/components/ui/icon";
import { Camera, Instagram } from "lucide-react-native";

function Example() {
  return (
    <>
      <Icon className="text-typography-500" as={Camera} />
      <Icon className="text-typography-500" as={Instagram} />
    </>
  );
}
```

## Custom Icons

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

  return <Icon as={CustomIcon} size="md" />;
}
```
