import React from "react";
import ProjectDetails from "./ProjectData";
import classes from "./projects.module.css";

const Projects = () => {
  return (
    <div className={classes.top}>
      <div
        className={classes.title}
        data-aos="fade-right"
        data-aos-duration="1000"
        fade-aos-delay="100"
      >
        <h1>My Work</h1>
      </div>
      <div className={classes.container}>
        <div
          className={classes.wrapper}
          data-aos="zoom-in"
          data-aos-duration="1000"
          fade-aos-delay="100"
        >
          {ProjectDetails.map((data) => {
            return (
              <div className={classes.flip_card}>
                <div className={classes.flip_card_inner}>
                  <div className={classes.flip_card_front}>
                    <div
                      data-aos="zoom-in"
                      data-aos-delay="100"
                      data-aos-duration="1000"
                    >
                      {" "}
                      <h1>{data.title}</h1>
                    </div>

                    <div className={classes.image}>
                      <img src={data.image} alt="Avatar" />
                    </div>
                  </div>

                  <div className={classes.flip_card_back}>
                  <div className={classes.content}>
                    <p>{data.content}</p>
                    </div>
                    <div>
                      <button>
                        <a href={data.liveWebsite} target="_blank">
                          Live Website
                        </a>
                      </button>
                      <button>
                        <a href={data.gitHub} target="_blank">
                          Source Code
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
