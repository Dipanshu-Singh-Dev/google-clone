import React from "react";

const VideoContainer = ({ elem, modalOpener }) => {
  return (
    <div>
      <video
        style={{
          maxWidth: "100%",
          height: "fit-content",
          border: "0",
          borderRadius: "15px",
        }}
        height="auto"
        onClick={() => {
          modalOpener(elem);
        }}
      >
        <source src={elem.videos.tiny.url} />
      </video>
    </div>
  );
};

export default VideoContainer;
