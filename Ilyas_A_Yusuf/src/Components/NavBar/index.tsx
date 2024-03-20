import React from "react";

interface IProps {}

interface INavBarItem {
  name: string;
  path: string;
  active: string;
  onChangeActive: (active: string) => void;
}

const NavBarItem = ({ name, active, onChangeActive }: INavBarItem) => {
  const color = name === active ? "text-cyan-300" : "text-white";
  return (
    <a
      className={`${color} text-base
      cursor-pointer
       hover:text-cyan-300 hover:text-xl `}
      onClick={() => onChangeActive(name)}
    >
      {name}
    </a>
  );
};

export default function index() {
  const [active, setActive] = React.useState("About me");

  const onchangeActive = (name: string) => setActive(name);

  return (
    <div className="flex flex-row bottom-5 gap-4 ">
      <NavBarItem
        name="About me"
        path=""
        active={active}
        onChangeActive={onchangeActive}
      />
      <NavBarItem
        name="Portofolio"
        path="portofolio"
        active={active}
        onChangeActive={onchangeActive}
      />
      <NavBarItem
        name="Contact"
        path="contact"
        active={active}
        onChangeActive={onchangeActive}
      />
    </div>
  );
}
