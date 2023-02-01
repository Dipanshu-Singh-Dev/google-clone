import React from "react";

const VideoContainer = ({ elem }) => {
  return (
    <div>
      <video
        style={{
          maxWidth: "100%",
          height: "fit-content",
          borderRadius: "15px",
          border: "0",
        }}
        height="auto"
        onClick={() => {}}
      >
        <source src={elem.videos.tiny.url} />
      </video>
    </div>
  );
};

export default VideoContainer;
