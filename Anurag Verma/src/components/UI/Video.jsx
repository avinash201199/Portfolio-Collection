import video from "../Assets/video.mp4";
import "./Video.css";

const Video = (props) => {
  return (
    <video src={video} loop autoplay muted>
      {props.children}
    </video>
  );
};

export default Video;
