import Wavesurfer, { WaveSurferOptions } from "wavesurfer.js";
import { useEffect, useMemo, useRef, useState } from "react";
import RegionsPlugin from "wavesurfer.js/dist/plugins/regions"
import { createRoot } from "react-dom/client";
import './styles.css';

export function ForwardIcon() {
  return <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <path
        d="M10.3249 7.82403C10.5848 7.94892 10.75 8.2117 10.75 8.50001V15.5C10.75 15.9142 10.4142 16.25 10 16.25C9.58581 16.25 9.25003 15.9142 9.25003 15.5V10.0605L7.96855 11.0857C7.6451 11.3444 7.17313 11.292 6.91438 10.9685C6.65562 10.6451 6.70806 10.1731 7.03151 9.91436L9.53151 7.91436C9.75663 7.73425 10.0651 7.69914 10.3249 7.82403Z"
        fill="#1C274C"></path>
      <path fillRule="evenodd" clipRule="evenodd"
        d="M14.25 7.75001C12.8693 7.75001 11.75 8.8693 11.75 10.25V13.75C11.75 15.1307 12.8693 16.25 14.25 16.25C15.6307 16.25 16.75 15.1307 16.75 13.75V10.25C16.75 8.8693 15.6307 7.75001 14.25 7.75001ZM14.25 9.25001C13.6977 9.25001 13.25 9.69772 13.25 10.25V13.75C13.25 14.3023 13.6977 14.75 14.25 14.75C14.8023 14.75 15.25 14.3023 15.25 13.75V10.25C15.25 9.69772 14.8023 9.25001 14.25 9.25001Z"
        fill="#1C274C"></path>
      <path opacity="0.5" fillRule="evenodd" clipRule="evenodd"
        d="M12.676 1.67511C12.5511 1.41526 12.2883 1.25 12 1.25C11.2647 1.25 10.5459 1.32394 9.8508 1.46503C4.94367 2.46112 1.25 6.79837 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 7.59065 20.0954 3.80298 16.3003 2.14482C15.9207 1.97898 15.4786 2.15224 15.3127 2.53181C15.1469 2.91137 15.3202 3.35351 15.6997 3.51935C18.9682 4.94742 21.25 8.20808 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 7.84953 5.48421 4.33622 9.25 3.16544V4.5C9.25 4.81852 9.45118 5.10229 9.75175 5.20772C10.0523 5.31315 10.3867 5.21724 10.5857 4.96852L12.5857 2.46852C12.7658 2.24339 12.8009 1.93496 12.676 1.67511Z"
        fill="#1C274C"></path>
    </g>
  </svg>
}

export function PauseIcon() {
  return <svg viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect y="0.5" width="20" height="20" rx="10" fill="#008DFF" />
    <path
      d="M6.57143 14.1571V6.84286C6.57143 6.75193 6.60755 6.66472 6.67185 6.60042C6.73615 6.53612 6.82335 6.5 6.91428 6.5H8.51428C8.60521 6.5 8.69242 6.53612 8.75672 6.60042C8.82102 6.66472 8.85714 6.75193 8.85714 6.84286V14.1571C8.85714 14.2481 8.82102 14.3353 8.75672 14.3996C8.69242 14.4639 8.60521 14.5 8.51428 14.5H6.91428C6.82335 14.5 6.73615 14.4639 6.67185 14.3996C6.60755 14.3353 6.57143 14.2481 6.57143 14.1571ZM11.1429 14.1571V6.84286C11.1429 6.75193 11.179 6.66472 11.2433 6.60042C11.3076 6.53612 11.3948 6.5 11.4857 6.5H13.0857C13.1766 6.5 13.2639 6.53612 13.3281 6.60042C13.3924 6.66472 13.4286 6.75193 13.4286 6.84286V14.1571C13.4286 14.2481 13.3924 14.3353 13.3281 14.3996C13.2639 14.4639 13.1766 14.5 13.0857 14.5H11.4857C11.3948 14.5 11.3076 14.4639 11.2433 14.3996C11.179 14.3353 11.1429 14.2481 11.1429 14.1571Z"
      stroke="white" />
  </svg>
}

export function Rewind() {
  return <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <path
        d="M10.3249 7.82403C10.5848 7.94892 10.75 8.2117 10.75 8.50001V15.5C10.75 15.9142 10.4142 16.25 10 16.25C9.58581 16.25 9.25003 15.9142 9.25003 15.5V10.0605L7.96855 11.0857C7.6451 11.3444 7.17313 11.292 6.91438 10.9685C6.65562 10.6451 6.70806 10.1731 7.03151 9.91436L9.53151 7.91436C9.75663 7.73425 10.0651 7.69914 10.3249 7.82403Z"
        fill="#546881"></path>
      <path fillRule="evenodd" clipRule="evenodd"
        d="M14.25 7.75001C12.8693 7.75001 11.75 8.8693 11.75 10.25V13.75C11.75 15.1307 12.8693 16.25 14.25 16.25C15.6307 16.25 16.75 15.1307 16.75 13.75V10.25C16.75 8.8693 15.6307 7.75001 14.25 7.75001ZM14.25 9.25001C13.6977 9.25001 13.25 9.69772 13.25 10.25V13.75C13.25 14.3023 13.6977 14.75 14.25 14.75C14.8023 14.75 15.25 14.3023 15.25 13.75V10.25C15.25 9.69772 14.8023 9.25001 14.25 9.25001Z"
        fill="#546881"></path>
      <path opacity="0.5" fillRule="evenodd" clipRule="evenodd"
        d="M11.324 1.67511C11.4489 1.41526 11.7117 1.25 12 1.25C12.7353 1.25 13.4541 1.32394 14.1492 1.46503C19.0563 2.46112 22.75 6.79837 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 7.59065 3.90459 3.80298 7.69972 2.14482C8.07929 1.97898 8.52143 2.15224 8.68726 2.53181C8.8531 2.91137 8.67984 3.35351 8.30028 3.51935C5.03179 4.94742 2.75 8.20808 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 7.84953 18.5158 4.33622 14.75 3.16544V4.5C14.75 4.81852 14.5488 5.10229 14.2483 5.20772C13.9477 5.31315 13.6133 5.21724 13.4143 4.96852L11.4143 2.46852C11.2342 2.24339 11.1991 1.93496 11.324 1.67511Z"
        fill="#546881"></path>
    </g>
  </svg>
}

export function PlayIcon() {
  return <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="##008DFF"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.6935 15.8458L15.4137 13.059C16.1954 12.5974 16.1954 11.4026 15.4137 10.941L10.6935 8.15419C9.93371 7.70561 9 8.28947 9 9.21316V14.7868C9 15.7105 9.93371 16.2944 10.6935 15.8458Z" fill="#008DFF"></path> </g></svg>
}


interface WaveformProps {
  audioUrl: string;
  options: WaveSurferOptions;
  ProgressRenderer?: React.FC<{ waveform: React.MutableRefObject<Wavesurfer | null> }>;
  progressRendererClassName?: string;
  playUsingRange?: { start: number, end: number };
  controls?: boolean;
  WaveformWrapperClass?: string;
  waveformClass?: string;
}

let rangeInterval: NodeJS.Timeout;

function ReactWaveform({
  audioUrl = "",
  options,
  ProgressRenderer,
  progressRendererClassName = "",
  playUsingRange,
  controls = true,
  WaveformWrapperClass = "",
  waveformClass = "",
}: WaveformProps) {

  const waveform = useRef<Wavesurfer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [displayProgress, setDisplayProgress] = useState(false);
  const regions = useMemo(() => RegionsPlugin.create(), []);


  useEffect(() => {
    if (waveform.current) {
      waveform.current.load(audioUrl);
    } else {
      waveform.current = Wavesurfer.create({
        ...options,
        plugins: [regions],
      })
      waveform.current.load(audioUrl);

      waveform.current.on("ready", () => {
        console.log("ready");
        setDisplayProgress(true);
      });
      waveform.current.on("play", () => setIsPlaying(true));
      waveform.current.on("pause", () => setIsPlaying(false));
      waveform.current.on("finish", () => setIsPlaying(false));
      waveform.current.on("interaction", () =>
        clearInterval(rangeInterval)
      );

      waveform.current.on("decode", function (progress) {
        console.log("decode", progress);
        const popUpDiv1 = document.createElement('div');
        createRoot(popUpDiv1).render(<div style={{
          background: '#D6EEF180',
          maxWidth: '100px',
          height: "8px",
          width: "40px",
          borderRadius: "2px",
          fontSize: "4px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>Delay in Delivery</div>);

        regions.addRegion({
          start: 19,
          color: "rgba(10, 150, 0, 0.0)",
          content: popUpDiv1,
          resize: false,
          drag: false
        });

        const popUpDiv2 = document.createElement('div');
        createRoot(popUpDiv2).render(<div style={{
          background: '#D6EEF180',
          maxWidth: '100px',
          height: "8px",
          width: "30px",
          borderRadius: "2px",
          fontSize: "4px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>Missing Items</div>);

        regions.addRegion({
          start: 49,
          color: "rgba(10, 150, 0, 0.0)",
          content: popUpDiv2,
          resize: false,
          drag: false
        });
      });

      return () => {
        if (waveform.current) {
          waveform.current.destroy();
        }
      };
    }
  }, [audioUrl]);

  const playPause = () => {
    if (waveform.current) {
      waveform.current.playPause();
      setIsPlaying(!isPlaying);
    }
  }

  const forWardBySeconds = (seconds: number = 10) => {
    if (waveform.current) {
      waveform.current.setTime(waveform.current.getCurrentTime() + seconds);
    }
  }

  const rewindBySeconds = (seconds: number = 10) => {
    if (waveform.current) {
      waveform.current.setTime(Math.max(0, waveform.current.getCurrentTime() - seconds));
    }
  }

  useEffect(() => {
    const isPlayRangeValid = playUsingRange && playUsingRange.start && playUsingRange.end && playUsingRange.start < playUsingRange.end;
    if (!isPlayRangeValid && playUsingRange) {
      console.error("Invalid play range");
    }
    if (rangeInterval) {
      clearInterval(rangeInterval);
    }
    if (isPlayRangeValid && waveform.current) {
      let { start, end } = playUsingRange;
      start = Math.max(0, start);
      end = Math.min(end, waveform.current.getDuration());
      waveform.current.setTime(start);
      waveform.current.play();
      rangeInterval = setTimeout(() => {
        if (waveform.current) {
          waveform.current.pause();
        }
      }, (end - start) * 1000);
    }
    return () => {
      clearInterval(rangeInterval);
    }
  }, [playUsingRange]);

  return (
    <div className={WaveformWrapperClass || "waveform-wrapper"}>
      <div className="waveform-controls">
        {controls && <div className="controls-container">
          <div className="controls">
            <div className="control-button rewind" onClick={() => rewindBySeconds(10)}>
              <Rewind />
            </div>
            <div className="control-button play-pause" onClick={playPause}>
              {isPlaying ? <PauseIcon /> : <PlayIcon />}
            </div>
            <div className="control-button forward" onClick={() => forWardBySeconds(10)}>
              <ForwardIcon />
            </div>
          </div>
        </div>}
        <div id="waveform" className={waveformClass || "waveform"}></div>
      </div>
      <div className={progressRendererClassName}>
        {(displayProgress) && ProgressRenderer ? <ProgressRenderer waveform={waveform} /> : null}
      </div>
    </div >
  )
}

export default ReactWaveform;
