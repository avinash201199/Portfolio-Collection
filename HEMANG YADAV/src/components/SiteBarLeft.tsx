import React from "react";
import { Link } from "react-router-dom";
import { sideBarLeftSocials } from "../assets/lib/data";

interface SocialLink {
  link: string;
  icon: string | React.FC<{ className: string }>;
  iconcolor?: string;
  altimgname: any;
}

const SiteBarLeft: React.FC = () => {
  return (
    <div
      className="absolute flex items-center flex-col justify-center top-0 left-0 ml-8 max-lg:h-[10%] max-lg:ml-4"
      id="home"
    >
      <div className="flex items-center justify-center flex-col">
        <div className="w-[0.25rem] h-[40vh] bg-[--lightblue]"></div>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        {sideBarLeftSocials.map((social: SocialLink, index: number) => (
          <Link
            to={social.link}
            className="block mb-2 hover:scale-110"
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            aria-current={
              social.altimgname === "true"
                ? social.altimgname
                : social.altimgname + " button"
            }
          >
            {typeof social.icon === "function" ? (
              <social.icon className={`stroke-orange`} />
            ) : (
              <img
                src={social.icon}
                alt={social.altimgname}
                style={{ stroke: social.iconcolor }}
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SiteBarLeft;
