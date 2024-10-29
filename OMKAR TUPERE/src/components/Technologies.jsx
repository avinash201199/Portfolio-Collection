import { BiLogoPostgresql } from "react-icons/bi";
import { DiJava, DiPython } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { RiReactjsLine } from "react-icons/ri";
import { SiKubernetes } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

function Technologies() {
  return (
    <div className="pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div>
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="p-4">
          <TbBrandNextjs className="text-7xl" />
        </div>
        <div className="p-4">
          <FaNodeJs className="text-7xl text-green-500" />
        </div>
        <div className="p-4">
          <BiLogoPostgresql className="text-7xl text-sky-600" />
        </div>
        <div className="p-4">
          <DiPython className="text-7xl text-sky-600" />
        </div>
        <div className="p-4">
          <DiJava className="text-7xl text-sky-600" />
        </div>
        <div className="p-4">
          <GrMysql className="text-7xl text-sky-600" />
        </div>
        <div className="p-4">
          <SiKubernetes className="text-7xl text-sky-600" />
        </div>
      </div>
    </div>
  );
}

export default Technologies;
