import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Footer from "../components/footer";
import ProjectsCard from "../components/projectsCard";

export default function Home() {
  const [data, setData] = useState([]);
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    //getData fetches data about me
    async function getData() {
      try {
        // fetch returns a promise consisting of data in form of string so we need to convert it to JSON using .json()
        const response = await fetch("http://localhost:3000/api/aboutme");
        //.json() also returns a promise ,hence async await
        const datajson = await response.json();
        setData(datajson);
      } catch (error) {
        console.log("Error in fetching from hello api : ", error);
      }
    }
    //fetch projects
    async function getProjects() {
      try {
        const response = await fetch("http://localhost:3000/api/projects");
        const datajson = await response.json();
        setProjects(datajson);
      } catch (error) {
        console.log("Error in fetching from hello api : ", error);
      }
    }
    getData();
    getProjects();
  }, []);

  //this line of code is return to check if data is fetched or not. since when the page loads for the first time, it will give error saying the particular components do not exist since they have not been fetched yet.
  //hence we display them this

  if (data.length == 0) return <p>No profile data</p>;
  if (projects.length == 0) return <p>No projects data</p>;
  const { projectsArr } = projects.data;

  return (
    <div className="bg-void grid grid-cols-12 max-h-full h-full">
      <Head>
        <title>Yash-Parwani</title>
        <meta name="description" content="Yash Parwani Portfolio" />
        <link rel="icon" href="/android-chrome.png" />
      </Head>

      {/* hero section */}
      <aside className="col-span-1 "></aside>
      <section className="hero-section h-screen col-span-11 grid grid-cols-3 ">
        <article className="col-span-1 h-screen  text-stark">
          <div className="py-20">
            <h2 className="text-fuchsia-800  text-center text-6xl">
              A Developer
            </h2>
            <p className=" max-w-4xl max-w-4xl py-8 text-2xl ">
              <span> {data.data.heroQuote} </span>. {data.data.heroDesc}
            </p>
            <div className="main-ctas grid grid-cols-2 gap-2">
              <AnchorLink href="#projects"><button className="rounded-full text-center w-full text-3xl bg-jewel hover:bg-darkJewel text-stark py-2 h-16">Projects</button></AnchorLink>
              <Link href="/aboutme"><button className="rounded-full text-center text-3xl bg-fuchsia-800  text-stark py-2 h-16"> About Me</button></Link>
            </div>
          </div>
        </article>
        <aside className="col-span-2 flex justify-end h-fit">
          <div className="">
            <Image src="/images/yash.png" width={575} height={775}/>
          </div>
        </aside>
      </section>
      {/* projects section */}
      <aside className="col-span-1"></aside>
      <section
        id="projects"
        className="h-fit col-span-10 flex flex-col   "
      >
        <h1 className="text-stark  h-fit text-6xl px-20  mb-10">
          Projects
        </h1>
        <div className="flex px-20
         flex-wrap  items-center">
          {projectsArr.map((project) => {
            return (
              <ProjectsCard
                name={project.name}
                desc={project.desc}
                image={project.image}
                skills={project.skills}
                github={project.github}
                status={project.status}
                width={project.width}
                height={project.height}
                ml={project.ml}
                key={project.name}
              />
            );
          })}
          
        </div>
      </section>
      <aside className="col-span-1"></aside>
      <section className="text-stark text-center w-fit mt-10">
        <div>
          <h1 className="text-7xl w-128">Like What you see?</h1>
          <h3 className="text-4xl mt-5">Lets Work Together</h3>
          <Link href="/contactme">
            <button className="rounded-full text-center text-3xl mt-10 w-52 bg-jewel mx-auto text-stark py-2 h-16">
              Contact Me
            </button>
          </Link>
        </div>
      </section>
      {/* footer */}
      <div className="col-span-12 h-fit w">
        <Footer linkedIn={data.data.linkedIn} github={data.data.github} />
      </div>
    </div>
  );
}
