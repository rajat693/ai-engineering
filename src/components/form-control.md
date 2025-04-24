---
title: FormControl
description: A component to build accessible form fields with labels, helper text, and error handling.
---

# FormControl

A component to build accessible form fields with labels, helper text, and error handling.

```jsx
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlHelper,
  FormControlHelperText,
  FormControlError,
  FormControlErrorText,
  FormControlErrorIcon,
} from "@/components/ui/form-control";
import { Input, InputField } from "@/components/ui/input";
import { AlertCircleIcon } from "@/components/ui/icon";

function Example() {
  return (
    <FormControl isInvalid={false}>
      <FormControlLabel>
        <FormControlLabelText>Email</FormControlLabelText>
      </FormControlLabel>
      <Input>
        <InputField placeholder="Enter your email" />
      </Input>
      <FormControlHelper>
        <FormControlHelperText>
          Enter a valid email address
        </FormControlHelperText>
      </FormControlHelper>
      <FormControlError>
        <FormControlErrorIcon as={AlertCircleIcon} />
        <FormControlErrorText>Email is required</FormControlErrorText>
      </FormControlError>
    </FormControl>
  );
}
```

## Props

### FormControl

isInvalid: boolean (default: false) - shows error state
isRequired: boolean (default: false) - adds required indicator
isDisabled: boolean (default: false) - disables the form field
isReadOnly: boolean (default: false) - makes the form field read-only
size: sm | md | lg (default: md)

### Child Components

#### FormControlLabel - Container for the label

#### FormControlLabelText - Text content of the label

#### FormControlHelper - Container for helper text

#### FormControlHelperText - Text content for helper message

#### FormControlError - Container for error message (shown when isInvalid is true)

#### FormControlErrorText - Text content for error message

#### FormControlErrorIcon - Icon for error message

## Example

```jsx
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlHelper,
  FormControlHelperText,
  FormControlError,
  FormControlErrorText,
  FormControlErrorIcon,
} from "@/components/ui/form-control";
import { Input, InputField } from "@/components/ui/input";
import { AlertCircleIcon } from "@/components/ui/icon";

function Example() {
  return (
    <FormControl className="max-w-md mx-auto my-4 p-4 bg-gray-50 rounded-lg shadow-sm">
      <FormControlLabel className="mb-1">
        <FormControlLabelText className="font-medium text-gray-700">
          Email
        </FormControlLabelText>
      </FormControlLabel>
      <Input className="border-gray-300 transition-colors duration-200">
        <InputField
          placeholder="Enter your email"
          className="text-gray-800 placeholder:text-gray-400"
        />
      </Input>
      <FormControlHelper className="mt-1">
        <FormControlHelperText className="text-gray-500 text-xs">
          Enter a valid email address
        </FormControlHelperText>
      </FormControlHelper>
      <FormControlError className="mt-2 flex items-center">
        <FormControlErrorIcon
          as={AlertCircleIcon}
          className="stroke-red-500 w-4 h-4 mr-1"
        />
        <FormControlErrorText className="text-red-500 text-sm">
          Email is required
        </FormControlErrorText>
      </FormControlError>
    </FormControl>
  );
}
```
