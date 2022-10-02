import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Header(props) {
  const router = useRouter();

  return (
    <div className="bg-void grid pt-4 pr-4 grid-cols-12 ">
      <div className="logo-image fixed ">
        <Link href="/">
          <button>
            <Image src="/apple-touch-icon.png" width={115} height={100} />
          </button>
        </Link>
      </div>
      <div className="col-span-6 ">
        <Link href="/">
          <button className="flex flex-col justify-center items-center w-full h-max">
            <h1 className="text-fuchsia-800  text-5xl">Yash Kishore Parwani</h1>
            <h3 className="text-fuchsia-700  text-xl">
              Programmer/Developer
            </h3>
          </button>
        </Link>
      </div>
      <div className="col-span-2 flex justify-center items-center">
        {router.pathname === "/aboutme" && (
          <AnchorLink href="#skill-section ">
            <button className="text-stark text-center py-5 text-2xl w-full ">
              {" "}
              My Skills
            </button>
          </AnchorLink>
        )}
        {router.pathname === "/" && (
          <AnchorLink href="#projects">
            <button className="text-stark text-center py-5 text-2xl px-auto col-span-2">
              Projects
            </button>
          </AnchorLink>
        )}
        {router.pathname === "/contactme" && (
          <Link href="/">
            <button className="text-stark text-center py-5 text-2xl px-auto col-span-2">
              Home
            </button>
          </Link>
        )}
      </div>
      <div className="col-span-2 flex justify-center items-center">
        <Link href="/aboutme">
          <button className="text-stark text-center py-5 text-2xl px-auto col-span-2">
            {" "}
            About Me
          </button>
        </Link>
      </div>
      <div className="col-span-2 flex justify-center items-center">
        <Link href="/contactme">
          <button className="text-stark text-center rounded-md mr-2 bg-jewel w-full py-5 text-2xl px-auto col-span-2">
            Hire Me{" "}
          </button>
        </Link>
      </div>
    </div>
  );
}
