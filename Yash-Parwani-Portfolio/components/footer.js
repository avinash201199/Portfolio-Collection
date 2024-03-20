import Image from "next/image";
import Link from "next/link";
export default function Footer(props) {
  const {linkedIn,github} = props;

  return (
    <footer className="flex flex-col items-center justify-evenly mt-24">
      <div className="logo-image  ">
        <Image src="/apple-touch-icon.png" width={115} height={100} />
      </div>
      <h1 className="text-5xl text-stark">Yash Kishore Parwani</h1>
      <p className="container text-xl text-stark text-center mt-10">
        Feel free to connect
      </p>
      <div className="socials w-96 flex justify-evenly mt-3">
        <Link href={linkedIn} target="_blank">
          <button>
            <Image src="/linkedin.png" width={64} height={64} />
          </button>
        </Link>
        <Link href={github} target="_blank">
          <button>
            <Image src="/github.png" width={64} height={64} />
          </button>
        </Link>
        <Link href="/contactme" target="_blank">
          <button>
            <Image src="/gmail.png" width={64} height={64} />
          </button>
        </Link>
      </div>
      <div className="flex justify-between text-stark text-base w-full">
        <p>Yash Parwani-India</p>
        <p>yashparwani.com</p>
      </div>
    </footer>
  );
}
