import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectsCard = (props) => {
  const { name, desc, image, skills, github, status, width, height, ml } =
    props;
  return (
    <div className="project-card mb-7 text-stark w-fit flex  items-center ">
      <div className="project-description  rounded-2xl py-2 ">
        <h3 className="text-center  text-4xl">{name}</h3>
        <div className="flex w-fit mx-auto">
          <h3 className="text-center  text-sm">{status}</h3>
          {status === "completed" && (
            <span>
              <Image src="/images/checked.png" width={16} height={16} />
            </span>
          )}
          {status === "ongoing" && (
            <span>
              <Image src="/images/cycle.png" width={16} height={16} />
            </span>
          )}
        </div>
        <p className="max-w-sm  mt-5">{desc}</p>

        <div className="skills-used flex justify-evenly max-w-sm mt-5 ">
          {skills.map((skill) => {
            return (
              <span
                key={skill}
                className="text-center  bg-zinc-700 rounded-xl w-24"
              >
                {skill}
              </span>
            );
          })}

          <div className="relative h-8 w-8">
            <Link href={github}>
              <button>
                <Image src="/github.png" layout="fill" />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className= {`project-image relative  -ml-${ml}`}>
        <Image src={image} width={width} height={height} />
      </div>
    </div>
  );
};

export default ProjectsCard;
