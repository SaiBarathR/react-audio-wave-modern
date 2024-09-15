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
import ReactWaveform from 'react-audio-wave-modern';

const App = () => {
  const audioUrl = 'path/to/your/audio/file.mp3';
  const options = {
    "container": "#waveform",
    "height": 44,
    "waveColor": "#008DFF",
    "progressColor": "#32D583",
    "cursorWidth": 0,
    "barWidth": 3,
    "barGap": 2,
    "barRadius": 5,
    "barHeight": 1,
    "mediaControls": false,
    "dragToSeek": true      
  };

  return (
    <div className="audio-waveform">
      <ReactWaveform audioUrl={audioUrl} options={options} />
    </div>
  );
};

export default App;
```
```css
.audio-waveform {
  /* width: 100%; or specify a fixed width */
  width: 100%;
  min-height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #EBEBEB;
  border-radius: 8px;
  padding: 4px;
}
```
### Sample Screenshot
![Sample Screenshot2](https://github.com/user-attachments/assets/9ca4185b-a0f1-49fc-b87e-ef8b60d0638b)

![Sample Screenshot](https://github.com/user-attachments/assets/abc4633b-a606-4fe5-803e-31b86428c44c)

### Props

| Prop                      | Type                                                                    | Default | Description                                                                                         |
|---------------------------|----------------------------------------------------------------------|---------------------|-----------------------------------------------------------------------------------------------------------|
| `audioUrl`                | `string`                                                             | `""`    | URL of the audio file to be loaded.                                                               |
| `options`                 | `WaveSurferOptions`                                                  | `{}`    | Options for configuring WaveSurfer.js.                                                            |
| `ProgressRenderer`        | `React.FC<{waveform}` | `null`  | Custom Progress Component for displaying progress.                                                          |
| `ControlsRenderer`        | `React.FC<{ waveform, isPlaying }>` | `null`  | Custom Controls Component for displaying controls.                                                          |
| `progressRendererClassName` | `string`                                                           | `""`    | Class name for the progress renderer container.                                                   |
| `playUsingRange`          | `{ start: number, end: number }`                                     | `null`  | Range for playing a specific part of the audio.                                                   |
| `controls`                | `boolean`                                                            | `true`  | Whether to display the default controls.                                                          |
| `WaveformWrapperClass`    | `string`                                                             | `""`    | Class name for the waveform wrapper container.                                                    |
| `waveformClass`           | `string`                                                             | `""`    | Class name for the waveform container.                                                            |
| `progress`                | `boolean`                                                            | `false` | Whether to display the progress bar.                                                              |
| `controlsOptions`         | `object`                                                             | `{}`    | Options for configuring the controls.                                                             |
| `regionsList`             | `RegionParams[]`                                                     | `[]`    | List of regions to be added to the waveform.                                                      |
| `skeltonLoader`           | `boolean`                                                            | `true` | Whether to display a skeleton loader while loading the waveform.                                  |

### WaveSurfer Options

The `options` prop allows you to customize the waveform using the WaveSurfer.js options.

```tsx
WaveSurferOptions: {
    audioRate?: number;
    autoCenter?: boolean;
    autoScroll?: boolean;
    autoplay?: boolean;
    backend?: "WebAudio" | "MediaElement";
    barAlign?: "top" | "bottom";
    barGap?: number;
    barHeight?: number;
    barRadius?: number;
    barWidth?: number;
    container: HTMLElement | string;
    cursorColor?: string;
    cursorWidth?: number;
    dragToSeek?: boolean | {
        debounceTime: number;
    };
    duration?: number;
    fetchParams?: RequestInit;
    fillParent?: boolean;
    height?: number | "auto";
    hideScrollbar?: boolean;
    interact?: boolean;
    media?: HTMLMediaElement;
    mediaControls?: boolean;
    minPxPerSec?: number;
    normalize?: boolean;
    peaks?: (Float32Array | number[])[];
    plugins?: GenericPlugin[];
    progressColor?: string | string[] | CanvasGradient;
    renderFunction?: ((peaks, ctx) => void);
    sampleRate?: number;
    splitChannels?: (Partial<WaveSurferOptions> & {
        overlay?: boolean;
    })[];
    url?: string;
    waveColor?: string | string[] | CanvasGradient;
    width?: number | string;
}
```

### Controls Renderer

You can customize the controls using the `ControlsRenderer` prop. The component receives the waveform instance and the playing state as props.

```tsx
import ReactWaveform from 'react-audio-wave-modern';

const ControlsRenderer = ({ waveform, isPlaying }) => {
  
  if (!waveform) {
    return null;
  }

  const forWardBySeconds = (seconds 10) => {
    if (waveform.current) {
      waveform.current.setTime(waveform.current.getCurrentTime() + seconds);
    }
  }

  const rewindBySeconds = (seconds 10) => {
    if (waveform.current) {
      waveform.current.setTime(Math.max(0, waveform.current.getCurrentTime() - seconds));
    }
  }

  return (
    <div>
      <button onClick={() => rewindBySeconds(10)}>Rewind</button>
      <button onClick={() => waveform.current.playPause()}> {isPlaying ? 'Pause' : 'Play'} </button>
      <button onClick={() => forWardBySeconds(10)}>Forward</button>
    </div>
  );
};

const App = () => {
  const audioUrl = 'audioUrl';
  const options = {
      "container": "#waveform",
      "height": 44,
      "waveColor": "#008DFF",
      "progressColor": "#32D583",
      "cursorWidth": 0,
      "barWidth": 3,
      "barGap": 2,
      "barRadius": 5,
      "barHeight": 1,
      "mediaControls": false,
      "dragToSeek": true      
    };

  return (
    <div className="audio-waveform">
      <ReactWaveform 
        audioUrl={audioUrl} 
        options={options} 
        ControlsRenderer={ControlsRenderer} />
    </div>
  );
};


```

### Play Using Range

The `playUsingRange` prop allows you to play a specific part of the audio file. The prop should be an object with `start` and `end` properties.

```tsx
const playUsingRange = {
  start: 10,
  end: 20,
};
```

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
    playPause: "play-pause",
    forward: "forward",
    rewind: "rewind",
  },
};
```

### Regions

You can add regions to the waveform using the `regionsList` prop. Each region is defined by a `RegionParams` object.

```tsx
RegionParams: {
    channelIdx?: number;
    color?: string;
    content?: string | HTMLElement;
    contentEditable?: boolean;
    drag?: boolean;
    end?: number;
    id?: string;
    maxLength?: number;
    minLength?: number;
    resize?: boolean;
    start: number;
}
```

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

### Progress Renderer

You can customize the progress bar using the `ProgressRenderer` prop. The component receives the waveform instance as a prop.

```tsx
const ProgressRenderer = ({ waveform }) => {
  if (!waveform) {
    return null;
  }
  const progress = waveform.current.getCurrentTime() / waveform.current.getDuration();
  return (
    <div
      style={{
        width: `${progress * 100}%`,
        height: '4px',
        backgroundColor: '#ff5500',
      }}
    />
  );
};
```


### Example with Regions and Custom Controls

```tsx
import ReactWaveform from 'react-audio-wave-modern';

const App = () => {
  const audioUrl = 'audioUrl';
  const options = {
    "container": "#waveform",
    "height": 44,
    "waveColor": "#008DFF",
    "progressColor": "#32D583",
    "cursorWidth": 0,
    "barWidth": 3,
    "barGap": 2,
    "barRadius": 5,
    "barHeight": 1,
    "mediaControls": false,
    "dragToSeek": true      
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
      playPause: "play-pause",
      forward: "forward",
      rewind: "rewind",
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
    <div className="audio-waveform">
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
