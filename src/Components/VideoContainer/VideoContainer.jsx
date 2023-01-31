import React from "react";

const VideoContainer = ({ elem }) => {
  const videoRef = React.useRef();
  console.log(elem);
  return (
    <div>
      <video
        style={{ maxWidth: "100%", borderRadius: "5px" }}
        ref={videoRef}
        height="auto"
        onClick={() => {
          if (videoRef.current.paused) videoRef.current.play();
          else videoRef.current.pause();
        }}
      >
        <source src={elem.videos.tiny.url} />
      </video>
    </div>
  );
};

export default VideoContainer;
