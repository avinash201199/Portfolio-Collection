import ProfilePic from "../Assets/anurag.jpeg";
import classes from "./Profile.module.css";

import { SocialIcon } from "react-social-icons";

const Profile = () => {
  return (
    <div className={classes.profile}>
      <div className={classes.content}>
        <h1 className={classes["profile-h1"]}> I Am </h1>
        <h2 className={classes["profile-h2"]}> Anurag Verma </h2>
        <h4 className={classes["profile-h4"]}>
          I'm presently using React Js to create projects and focus on honing my
          React development abilities. I'm an enthusiastic competitive coder
          with a strong background in DSA and C++. I've taken part in several
          hackathons.
        </h4>
        <div className={classes.contact}>Contact me</div>
        <div className={classes["contact-icons"]}>
          <SocialIcon url="https://www.instagram.com/jaketrent" />
          <SocialIcon
            className={classes.linkdin}
            url="https://www.linkedin.com/in/anurag-verma-471450224/jaketrent"
          />
          <SocialIcon url="https://mail.google.com/mail/u/0/#inbox/jaketrent" />
        </div>
      </div>
      <div className={classes["profile-pic"]}>
        <img src={ProfilePic} alt="Profile pic" />
      </div>
    </div>
  );
};

export default Profile;
