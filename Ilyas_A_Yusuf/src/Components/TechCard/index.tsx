import React, { ReactNode } from "react";

const TechCard = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div
      className="group flex flex-col bg-white shadow-md p-2 lg:p-4 md:p-4 flex-1 min-w-[30%]
        lg:min-w-[22%] items-center justify-center rounded-md max-w-[30%] lg:max-w-[25%]"
    >
      <div className="max-w-[80%] lg:max-w-[60%] md:max-w-[60%] group-hover:scale-125">
        {children}
      </div>
      <h3
        className="capitalize lg:mt-5 md:mt-5 hidden lg:block md:block
        font-bold font-mono text-[0.7rem] lg:text-lg md:text-lg text-center
        group-hover:block group-hover:mt-5
        "
      >
        {title}
      </h3>
    </div>
  );
};

export default TechCard;
