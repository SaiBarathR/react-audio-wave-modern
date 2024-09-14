## Overview

[`ReactWaveform`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FDev%2Freact-audio-wave-modern%2Fsrc%2FReactWaveform.tsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A36%2C%22character%22%3A9%7D%7D%5D%2C%22c2466482-a3f0-48b1-9626-3159c9fc9d05%22%5D "Go to definition") is a React component that integrates with the `wavesurfer.js` library to provide a customizable audio waveform visualization. It supports features like play/pause, forward/rewind, and region marking with custom content.

## Installation

To install the package, run the following command:

```sh
npm install react-audio-wave-modern
```

## Usage

### Importing the Component

First, import the [`ReactWaveform`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FDev%2Freact-audio-wave-modern%2Fsrc%2FReactWaveform.tsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A36%2C%22character%22%3A9%7D%7D%5D%2C%22c2466482-a3f0-48b1-9626-3159c9fc9d05%22%5D "Go to definition") component and any necessary dependencies:

```tsx
import React from 'react';
import ReactWaveform from 'react-audio-wave-modern';
import Wavesurfer, { WaveSurferOptions } from 'wavesurfer.js';
import { ForwardIcon, PauseIcon, PlayIcon, Rewind } from './IconExporter';
```

### Basic Example

Here is a basic example of how to use the [`ReactWaveform`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FDev%2Freact-audio-wave-modern%2Fsrc%2FReactWaveform.tsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A36%2C%22character%22%3A9%7D%7D%5D%2C%22c2466482-a3f0-48b1-9626-3159c9fc9d05%22%5D "Go to definition") component:

```tsx
import React from 'react';
import ReactWaveform from 'react-audio-wave-modern';

const App = () => {
  const options: WaveSurferOptions = {
    container: '#waveform',
    waveColor: '#A8DBA8',
    progressColor: '#3B8686',
    cursorColor: '#FF0000',
  };

  return (
    <div>
      <ReactWaveform
        audioUrl="https://example.com/audio.mp3"
        options={options}
      />
    </div>
  );
};

export default App;
```

### Props

The [`ReactWaveform`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FDev%2Freact-audio-wave-modern%2Fsrc%2FReactWaveform.tsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A36%2C%22character%22%3A9%7D%7D%5D%2C%22c2466482-a3f0-48b1-9626-3159c9fc9d05%22%5D "Go to definition") component accepts the following props:

- [`audioUrl`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FDev%2Freact-audio-wave-modern%2Fsrc%2FReactWaveform.tsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A7%2C%22character%22%3A2%7D%7D%5D%2C%22c2466482-a3f0-48b1-9626-3159c9fc9d05%22%5D "Go to definition") (string): The URL of the audio file to be loaded.
- [`options`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FDev%2Freact-audio-wave-modern%2Fsrc%2FReactWaveform.tsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A8%2C%22character%22%3A2%7D%7D%5D%2C%22c2466482-a3f0-48b1-9626-3159c9fc9d05%22%5D "Go to definition") (WaveSurferOptions): Configuration options for the `wavesurfer.js` instance.
- [`ProgressRenderer`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FDev%2Freact-audio-wave-modern%2Fsrc%2FReactWaveform.tsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A9%2C%22character%22%3A2%7D%7D%5D%2C%22c2466482-a3f0-48b1-9626-3159c9fc9d05%22%5D "Go to definition") (React.FC): Optional custom progress renderer component.
- [`progressRendererClassName`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FDev%2Freact-audio-wave-modern%2Fsrc%2FReactWaveform.tsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A10%2C%22character%22%3A2%7D%7D%5D%2C%22c2466482-a3f0-48b1-9626-3159c9fc9d05%22%5D "Go to definition") (string): Optional class name for the progress renderer container.
- [`playUsingRange`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FDev%2Freact-audio-wave-modern%2Fsrc%2FReactWaveform.tsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A11%2C%22character%22%3A2%7D%7D%5D%2C%22c2466482-a3f0-48b1-9626-3159c9fc9d05%22%5D "Go to definition") ({ start: number, end: number }): Optional range for playing a specific segment of the audio.

### Advanced Example

Here is an advanced example demonstrating the use of custom progress renderer and play range:

```tsx
import React, { useRef } from 'react';
import ReactWaveform from 'react-audio-wave-modern';
import Wavesurfer, { WaveSurferOptions } from 'wavesurfer.js';

const ProgressRenderer = ({ waveform }) => {
  const progress = waveform.current ? waveform.current.getCurrentTime() : 0;
  return <div>Progress: {progress.toFixed(2)}s</div>;
};

const App = () => {
  const options: WaveSurferOptions = {
    container: '#waveform',
    waveColor: '#A8DBA8',
    progressColor: '#3B8686',
    cursorColor: '#FF0000',
  };

  return (
    <div>
      <ReactWaveform
        audioUrl="https://example.com/audio.mp3"
        options={options}
        ProgressRenderer={ProgressRenderer}
        progressRendererClassName="progress-container"
        playUsingRange={{ start: 10, end: 20 }}
      />
    </div>
  );
};

export default App;
```

### Custom Icons

You can customize the play, pause, forward, and rewind icons by importing and using your own icon components:

```tsx
import { ForwardIcon, PauseIcon, PlayIcon, Rewind } from './IconExporter';

const App = () => {
  // ... other code

  return (
    <div>
      <ReactWaveform
        audioUrl="https://example.com/audio.mp3"
        options={options}
        ProgressRenderer={ProgressRenderer}
        progressRendererClassName="progress-container"
        playUsingRange={{ start: 10, end: 20 }}
        icons={{
          play: <PlayIcon />,
          pause: <PauseIcon />,
          forward: <ForwardIcon />,
          rewind: <Rewind />,
        }}
      />
    </div>
  );
};
```

## API

### Methods

- [`playPause()`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FDev%2Freact-audio-wave-modern%2Fsrc%2FReactWaveform.tsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A136%2C%22character%22%3A8%7D%7D%5D%2C%22c2466482-a3f0-48b1-9626-3159c9fc9d05%22%5D "Go to definition"): Toggles play/pause state.
- [`forWardBySeconds(seconds: number)`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FDev%2Freact-audio-wave-modern%2Fsrc%2FReactWaveform.tsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A143%2C%22character%22%3A8%7D%7D%5D%2C%22c2466482-a3f0-48b1-9626-3159c9fc9d05%22%5D "Go to definition"): Forwards the audio by the specified number of seconds.
- [`rewindBySeconds(seconds: number)`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FDev%2Freact-audio-wave-modern%2Fsrc%2FReactWaveform.tsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A149%2C%22character%22%3A8%7D%7D%5D%2C%22c2466482-a3f0-48b1-9626-3159c9fc9d05%22%5D "Go to definition"): Rewinds the audio by the specified number of seconds.

### Events

The [`ReactWaveform`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FDev%2Freact-audio-wave-modern%2Fsrc%2FReactWaveform.tsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A36%2C%22character%22%3A9%7D%7D%5D%2C%22c2466482-a3f0-48b1-9626-3159c9fc9d05%22%5D "Go to definition") component listens to several events from the `wavesurfer.js` instance:

- [`ready`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FDev%2Freact-audio-wave-modern%2Fsrc%2FReactWaveform.tsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A60%2C%22character%22%3A27%7D%7D%5D%2C%22c2466482-a3f0-48b1-9626-3159c9fc9d05%22%5D "Go to definition"): Triggered when the waveform is ready.
- [`play`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FDev%2Freact-audio-wave-modern%2Fsrc%2FReactWaveform.tsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A168%2C%22character%22%3A23%7D%7D%5D%2C%22c2466482-a3f0-48b1-9626-3159c9fc9d05%22%5D "Go to definition"): Triggered when playback starts.
- [`pause`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FDev%2Freact-audio-wave-modern%2Fsrc%2FReactWaveform.tsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A171%2C%22character%22%3A27%7D%7D%5D%2C%22c2466482-a3f0-48b1-9626-3159c9fc9d05%22%5D "Go to definition"): Triggered when playback is paused.
- [`finish`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FDev%2Freact-audio-wave-modern%2Fsrc%2FReactWaveform.tsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A66%2C%22character%22%3A27%7D%7D%5D%2C%22c2466482-a3f0-48b1-9626-3159c9fc9d05%22%5D "Go to definition"): Triggered when playback finishes.
- [`interaction`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FDev%2Freact-audio-wave-modern%2Fsrc%2FReactWaveform.tsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A67%2C%22character%22%3A27%7D%7D%5D%2C%22c2466482-a3f0-48b1-9626-3159c9fc9d05%22%5D "Go to definition"): Triggered on user interaction with the waveform.
- [`decode`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FDev%2Freact-audio-wave-modern%2Fsrc%2FReactWaveform.tsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A76%2C%22character%22%3A27%7D%7D%5D%2C%22c2466482-a3f0-48b1-9626-3159c9fc9d05%22%5D "Go to definition"): Triggered during audio decoding.

## Styling

You can customize the appearance of the waveform and its controls using CSS. The component uses Tailwind CSS classes by default, but you can override these styles as needed.

```css
/* Example CSS */
.progress-container {
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 5px;
}
```

## Conclusion

[`ReactWaveform`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FDev%2Freact-audio-wave-modern%2Fsrc%2FReactWaveform.tsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A36%2C%22character%22%3A9%7D%7D%5D%2C%22c2466482-a3f0-48b1-9626-3159c9fc9d05%22%5D "Go to definition") is a powerful and flexible component for integrating audio waveform visualizations into your React applications. With support for custom icons, progress rendering, and region marking, it provides a comprehensive solution for audio playback and visualization.

For more information, refer to the [wavesurfer.js documentation](https://wavesurfer-js.org/docs/).