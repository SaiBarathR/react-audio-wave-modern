ReactWaveform is a React component that provides an interactive waveform visualization for audio files using the WaveSurfer.js library. This component supports custom controls, progress rendering, and regions for marking specific parts of the waveform.

## Installation

To install the package, use npm or yarn:

```bash
npm install react-audio-wave-modern
```

or

```bash
yarn add react-audio-wave-modern
```

## Usage

### Basic Usage

```tsx
import React from 'react';
import ReactWaveform from 'react-audio-wave-modern';
import 'react-audio-wave-modern/dist/styles.css';

const App = () => {
  const audioUrl = 'path/to/your/audio/file.mp3';
  const options = {
    waveColor: '#ddd',
    progressColor: '#ff5500',
    cursorColor: '#ff5500',
  };

  return (
    <div>
      <ReactWaveform audioUrl={audioUrl} options={options} />
    </div>
  );
};

export default App;
```

### Props

| Prop                      | Type                                                                 | Default | Description                                                                                       |
|---------------------------|----------------------------------------------------------------------|---------|---------------------------------------------------------------------------------------------------|
| `audioUrl`                | `string`                                                             | `""`    | URL of the audio file to be loaded.                                                               |
| `options`                 | `WaveSurferOptions`                                                  | `{}`    | Options for configuring WaveSurfer.js.                                                            |
| `ProgressRenderer`        | `React.FC<{waveform}` | `null`  | Custom renderer for displaying progress.                                                          |
| `ControlsRenderer`        | `React.FC<{ waveform, isPlaying }>` | `null`  | Custom renderer for displaying controls.                                                          |
| `progressRendererClassName` | `string`                                                           | `""`    | Class name for the progress renderer container.                                                   |
| `playUsingRange`          | `{ start: number, end: number }`                                     | `null`  | Range for playing a specific part of the audio.                                                   |
| `controls`                | `boolean`                                                            | `true`  | Whether to display the default controls.                                                          |
| `WaveformWrapperClass`    | `string`                                                             | `""`    | Class name for the waveform wrapper container.                                                    |
| `waveformClass`           | `string`                                                             | `""`    | Class name for the waveform container.                                                            |
| `progress`                | `boolean`                                                            | `false` | Whether to display the progress bar.                                                              |
| `controlsOptions`         | `object`                                                             | `{}`    | Options for configuring the controls.                                                             |
| `regionsList`             | `RegionParams[]`                                                     | `[]`    | List of regions to be added to the waveform.                                                      |

### Controls Options

The `controlsOptions` prop allows you to customize the controls displayed in the component.

```tsx
const controlsOptions = {
  buttons: {
    playPause: true,
    forward: true,
    rewind: true,
  },
  forwardBySeconds: 10,
  rewindBySeconds: 10,
  icons: {
    play: <PlayIcon />,
    pause: <PauseIcon />,
    forward: <ForwardIcon />,
    rewind: <Rewind />,
  },
  classNames: {
    playPause: "control-button play-pause",
    forward: "control-button forward",
    rewind: "control-button rewind",
  },
};
```

### Regions

You can add regions to the waveform using the `regionsList` prop. Each region is defined by a `RegionParams` object.

```tsx
const regionsList = [
  {
    start: 1,
    end: 3,
    color: 'rgba(0, 255, 0, 0.1)',
  },
  {
    start: 5,
    end: 7,
    color: 'rgba(255, 0, 0, 0.1)',
  },
];
```

### Example with Custom Controls and Regions

```tsx
import React from 'react';
import ReactWaveform from 'react-audio-wave-modern';
import 'react-audio-wave-modern/dist/styles.css';

const App = () => {
  const audioUrl = 'path/to/your/audio/file.mp3';
  const options = {
    waveColor: '#ddd',
    progressColor: '#ff5500',
    cursorColor: '#ff5500',
  };

  const controlsOptions = {
    buttons: {
      playPause: true,
      forward: true,
      rewind: true,
    },
    forwardBySeconds: 10,
    rewindBySeconds: 10,
    icons: {
      play: <PlayIcon />,
      pause: <PauseIcon />,
      forward: <ForwardIcon />,
      rewind: <Rewind />,
    },
    classNames: {
      playPause: "control-button play-pause",
      forward: "control-button forward",
      rewind: "control-button rewind",
    },
  };

  const regionsList = [
    {
      start: 1,
      end: 3,
      color: 'rgba(0, 255, 0, 0.1)',
    },
    {
      start: 5,
      end: 7,
      color: 'rgba(255, 0, 0, 0.1)',
    },
  ];

  return (
    <div>
      <ReactWaveform
        audioUrl={audioUrl}
        options={options}
        controlsOptions={controlsOptions}
        regionsList={regionsList}
      />
    </div>
  );
};

export default App;
```

## Version 0.3

### New Features

- **Regions Feature**: Added support for regions to mark specific parts of the waveform.
- **Custom Controls**: Added support for custom controls with customizable icons and class names.

## License

This project is licensed under the MIT License.