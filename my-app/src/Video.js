import { forwardRef, useImperativeHandle, useRef } from "react";
import video2 from "./videos/video_2.mp4";

function Video(props, ref) {
  const videoRef = useRef();

  useImperativeHandle(ref, () => ({
    play() {
      videoRef.current.play();
    },
    pause() {
      videoRef.current.pause();
    },
  }));
  return <video ref={videoRef} src={video2} width={280} />;
}
export default forwardRef(Video);
