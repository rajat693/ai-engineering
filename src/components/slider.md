---
title: Slider
description: A customizable slider component for React & React Native that allows users to select a value from a range.
---

# Slider

A customizable slider component for React & React Native that allows users to select a value from a range.

```jsx
import { Center } from "@/components/ui/center";
import {
  Slider,
  SliderThumb,
  SliderTrack,
  SliderFilledTrack,
} from "@/components/ui/slider";

function Example() {
  return (
    <Center className="w-[300px] h-[150px]">
      <Slider
        defaultValue={30}
        size="md"
        orientation="horizontal"
        isDisabled={false}
        isReversed={false}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Center>
  );
}
```

## Props

### Slider

size: sm | md | lg (default: md)
orientation: horizontal | vertical (default: horizontal)
isDisabled: boolean (default: false) - When true, this will disable the Slider
isReversed: boolean (default: false) - When true, the slider is reversed
isReadOnly: boolean (default: false) - To manually set read-only to the slider
onChange: (value: number) => void - Function called when the state of the Slider changes
defaultValue: number - To set the slider's initial value
value: number - The slider's current value
minValue: number - The slider's minimum value
maxValue: number - The slider's maximum value
step: number - The slider's step value
sliderTrackHeight: number - To change the slider track height
Inherits all the properties of React Native's View component

### SliderTrack

Contains the slider track
Inherits all the properties of React Native's Pressable component

### SliderFilledTrack

Represents the filled portion of the track
Inherits all the properties of React Native's View component

### SliderThumb

The draggable thumb element
Inherits all the properties of React Native's View component

## Accessibility

Keyboard navigation support with Tab, Arrow keys
Screen reader compatibility with appropriate ARIA attributes
Support for disabled and read-only states
