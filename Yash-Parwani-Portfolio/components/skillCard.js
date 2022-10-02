import React from "react";
import Image from "next/image";

const SkillCard = (props) => {
  const { src, text,height,width } = props;
  return (
    <div className="relative m-10">
      <div className="absolute  inset-0 bg-gradient-to-r from-fuchsia-600 to-jewel w-48 h-60 rounded-xl blur"></div>
      <div className="relative bg-void skill-card  w-48 rounded-xl h-60 py-7">
        <div className={`project-image flex justify-center `}>
          <Image src={`${src}`} width={`${width}`} height={`${height}`} />
        </div>
        <h3 className="text-2xl mt-7 text-center">{text}</h3>
      </div>
    </div>
  );
};

export default SkillCard;
