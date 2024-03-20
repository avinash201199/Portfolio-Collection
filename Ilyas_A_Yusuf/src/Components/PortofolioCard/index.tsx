import React from "react";

const PortofolioCard = ({
  image,
  title,
  about,
}: {
  image: string;
  title: string;
  about: string;
}) => {
  return (
    <div
      className="group flex flex-col bg-white shadow-md p-2 lg:p-4 md:p-4 flex-1 
      items-center justify-center rounded-md min-w-[60%] lg:min-w-[30%] md:min-w-[40%]"
    >
      <img
        src={image}
        className="min-w-0 cursor-pointer group-hover:scale-110"
        onClick={() => {
          window.open(image);
        }}
      />
      <h3
        className="capitalize mt:5
          font-bold  text-base lg:text-lg text-center group-hover:mt-8"
      >
        {title}
      </h3>
      <p className="text-center p-2 text-base hidden md:hidden lg:block">{about}</p>
    </div>
  );
};

export default PortofolioCard;
