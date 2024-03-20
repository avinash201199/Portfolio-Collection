import Image from "next/image";
import React from "react";
import netflix from "./../images/projects/netflix.jpg";
import photocomp from "./../images/projects/photocomp.jpg";
import placeholder from "./../images/projects/placeholder.png";
import gindelivery from "./../images/projects/delivery_app.jpg";

export default function Projects() {
  const projects = [
    {
      url: "https://netflix-jitunayak.vercel.app/login",
      title: " Netflix Clone",
      stack: ["React", "Cognito", "Stripe", "Tailwind"],
      image: netflix,
    },
    {
      url: "https://photocomp.vercel.app",
      title: " Photo Compressor",
      stack: ["React", "Web App", "Tailwind"],
      image: photocomp,
    },
    {
      url: "https://github.com/jitunayak/gin-ondemand-delivery-service",
      title: " Food Delivery Mobile App",
      stack: ["React Native", "Node js", "Mongo DB"],
      image: gindelivery,
    },
    {
      url: "https://moviestube.vercel.app/l",
      title: " IMDB Movie Search",
      stack: ["React", "REST-API", "Live Hosted"],
      image: placeholder,
    },
    {
      url: "https://github.com/jitunayak/udemy",
      title: " Udemy Clone",
      stack: ["React Native", "Amplify", "Dynamo DB"],
      image: placeholder,
    },

    {
      url: "https://github.com/jitunayak/WhatsappFreeDialer",
      title: " Whatsapp Dialer",
      stack: ["Expo", "React Native", "Mobile App"],
      image: placeholder,
    },
  ];

  function openUrlInNewTab(url: string) {
    window.open(url);
  }
  return (
    <div className="flex flex-col p-10">
      <div className="my-10 text-2xl font-semibold">Projects</div>
      <div className="grid grid-cols-1 items-baseline gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              onClick={() => project.url && openUrlInNewTab(project.url)}
              className="duration-800 flex cursor-pointer flex-col items-center justify-center rounded-sm bg-gray-800  p-2 "
            >
              <Image
                src={project?.image}
                alt="Project Snap"
                className="object-cover transition hover:scale-125"
                placeholder="blur"
                width={520}
                height={300}
              />

              <div className="text-md py-2 font-sans text-lg font-medium ">
                {project.title}
              </div>
              <div className="flex flex-wrap">
                {project?.stack?.map((tech, index) => {
                  return (
                    <div
                      key={index}
                      className="m-1 rounded-lg bg-zinc-700 p-2  font-sans  text-sm text-yellow-600 hover:bg-yellow-600 hover:text-white"
                    >
                      {tech}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
