import React from "react";
import Image from "next/image";
import lambda from "./../images/lambda.png";
import reactjs from "./../images/reactjs.jpg";
import nodejs from "./../images/nodejs.png";
import aws from "./../images/aws.png";
import javascript from "./../images/javascript.png";
import react2 from "./../images/reactjs2.webp";
import ts from "./../images/ts.jpg";

export default function Experience() {
  const listOfTechnologies = [
    ts,
    lambda,
    nodejs,
    react2,
    javascript,
    reactjs,
    aws,
  ];
  return (
    <div className="mt-20  p-10">
      <div className=" text-2xl font-semibold">3+ years of Experience</div>
      <div className="text-xl">as a Software Developer</div>
      <div className="my-4 rounded-md bg-gray-800 p-6 text-base">
        I am currently working at Koch Industries as a Software engineer. I
        focus on both front-end and back-end. I also work on mobile side
        ocassionally.
      </div>
      <div className="mt-10 flex flex-wrap lg:w-1/3">
        {listOfTechnologies.map((item, index) => {
          return (
            <div className="m-2" key={index}>
              <Image
                className="rounded object-cover"
                src={item}
                key={index}
                alt="image"
                width={80}
                height={80}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
