import Wavesurfer, { WaveSurferOptions } from "wavesurfer.js";
import { ForwardIcon, PauseIcon, PlayIcon, Rewind } from "./IconExporter";
import { useEffect, useMemo, useRef, useState } from "react";
import RegionsPlugin from "wavesurfer.js/dist/plugins/regions"
import { createRoot } from "react-dom/client";

interface WaveformProps {
  audioUrl: string;
  options: WaveSurferOptions;
  ProgressRenderer?: React.FC<{ waveform: React.MutableRefObject<Wavesurfer | null> }>;
  progressRendererClassName?: string;
  playUsingRange?: { start: number, end: number };
}

interface WaveformWrapperProps {
  children: React.ReactNode;
}

function WaveformWrapper({ children }: WaveformWrapperProps) {
  return (
    <div className=" min-w-[400px]  justify-between border-[#EBEBEB] border  bg-white rounded-lg min-h-[71px] flex items-center flex-col">
      {children}
    </div>
  )
}

const IconWrapper = ({ children }: WaveformWrapperProps) => {
  return (
    <div className="flex items-center cursor-pointer  p-[2px]  min-w-5 min-h-5 hover:bg-gray-200 rounded-full">
      {children}
    </div>
  )
}

let rangeInterval: NodeJS.Timeout;

function ReactWaveform({
  audioUrl = "https://s3.ap-southeast-1.amazonaws.com/recordings.kookoo.in/ozonetel_TFN/DIA8e99baf1255bc2c996b0505c7dc51979.mp3",
  options,
  ProgressRenderer,
  progressRendererClassName = "",
  playUsingRange
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

      // waveform.current.on("region-created", (e) => {
      //   if (e) {
      //     e.color = "#ff0000";
      //   }
      // });
      waveform.current.on("decode", function (progress) {
        console.log("decode", progress);
        const popUpDiv1 = document.createElement('div');
        createRoot(popUpDiv1).render(<div style={{
          background: '#D6EEF180',
          maxWidth: '100px',
          height: "8px",
          // padding: "2px 12px 2px 12px",
          width: "40px",
          borderRadius: "2px",
          fontSize: "4px",
          // textAlign: "center",
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
          // padding: "2px 12px 2px 12px",
          width: "30px",
          borderRadius: "2px",
          fontSize: "4px",
          // textAlign: "center",
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
    <WaveformWrapper>
      <div className="flex w-full items-center">
        <div className="flex flex-col items-center p-2 self-start ">
          <div className="flex items-center">
            <div onClick={() => rewindBySeconds(10)}>
              <IconWrapper>
                <Rewind />
              </IconWrapper>
            </div>
            <div onClick={playPause}>
              <IconWrapper>
                {isPlaying ? <PauseIcon /> : <PlayIcon />}
              </IconWrapper>
            </div>
            <div onClick={() => forWardBySeconds(10)}>
              <IconWrapper>
                <ForwardIcon />
              </IconWrapper>
            </div>
          </div>
        </div>
        <div id="waveform" className="w-full mr-3 h-6 self-center"></div>
      </div>
      <div className={progressRendererClassName}>
        {(displayProgress) && ProgressRenderer ? <ProgressRenderer waveform={waveform} /> : null}
      </div>
    </WaveformWrapper >
  )
}

export default ReactWaveform;

