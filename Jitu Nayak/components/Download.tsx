import React from "react";
import { FiDownloadCloud } from "react-icons/fi";
export default function Download() {
  const downloadItems = [
    {
      name: "IBM Plexo (Font)",
      resource:
        "https://github.com/jitunayak/config/blob/main/fonts/IBMPlexMono-Regular.ttf",
      image: "",
    },
    {
      name: "Monolisa (Font)",
      resource: "https://github.com/jitunayak/config/tree/main/fonts",
      image: "",
    },
    {
      name: "Cascadia (Font)",
      resource: "https://github.com/jitunayak/config/tree/main/fonts",
      image: "",
    },
    {
      name: "VS Code setting",
      resource:
        "https://github.com/jitunayak/config/blob/main/vscode.settings.json",
      image: "",
    },
    {
      name: "MongoDb Cheatcode (PDF)",
      resource: "",
      image: "",
    },
    {
      name: "Warp (Fav Terminal)",
      resource: "https://www.warp.dev/",
      image: "",
    },
    {
      name: "iTerm 2 (config)",
      resource:
        "https://github.com/jitunayak/config/blob/main/com.googlecode.iterm2.plist",
      image: "",
    },
  ];
  const [currentSelection, setCurrentSelection] = React.useState(
    downloadItems[0].name
  );
  return (
    <div className="p-10">
      <div className="flex items-center text-2xl font-medium">
        Downloads
        <FiDownloadCloud className="ml-4 h-6 w-6" />
      </div>
      <div className="flex flex-wrap items-start pt-10">
        {downloadItems.map((item, index) => {
          return (
            <div className="group relative" key={index}>
              <div
                className="
                  absolute inset-0 from-yellow-500 to-blue-500 opacity-75 blur-lg
                       transition duration-1000 group-hover:bg-gradient-to-r
                "
              ></div>
              <a
                href={item.resource}
                target="_blank"
                rel="noreferrer"
                key={index}
                className="relative m-4 flex rounded  bg-zinc-800 p-4 font-semibold text-yellow-500 sm:p-6 lg:p-10"
              >
                {item.name}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
