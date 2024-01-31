import React, { useRef, useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";
import "./Intro.css";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const [showControls, setShowControls] = useState(true);

  const vidRef = useRef();
  
     

  const handleVideo = () => {
    setPlayVideo(!playVideo)

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  return (
    <div 
    className="app_video"
    onMouseEnter={() =>  setShowControls(true)}
    onMouseLeave={() => playVideo && setShowControls(false)}
    >
      <video
        src={meal}
        type="Video/mp4"
        loop
        ref={vidRef}
        controls={false}
        muted
      />
      {showControls && (
      <div className="app_video_overlay flex__center">
        <div className="app_video_overly_circle flex__center" onClick={handleVideo}>
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
      )}
    </div>
  );
};

export default Intro;
