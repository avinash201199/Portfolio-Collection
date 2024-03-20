import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState ,useRef} from "react";
import emailjs from "@emailjs/browser"

import Footer from "../components/footer";

export default function ContactMe() {
  const form = useRef();
  const [data ,setData] = useState([]);
  

  useEffect(() => {
  //getData fetches data about me
  async function getData(){
     try{
       // fetch returns a promise consisting of data in form of string so we need to convert it to JSON using .json()
        const response = await fetch("http://localhost:3000/api/aboutme");
        //.json() also returns a promise ,hence async await
        const datajson = await response.json();
        setData(datajson);
       
     }
     catch(error){
      console.log("Error in fetching from hello api : ",error);
     }
  } 
  getData();
  


  

  }, [])
  

  //this line of code is return to check if data is fetched or not. since when the page loads for the first time, it will give error saying the particular components do not exist since they have not been fetched yet.
  //hence we display them this

  if (data.length == 0) return <p>No profile data</p>

  const sendMail = (event)=>{
    event.preventDefault();
    emailjs.sendForm('contact_service','contact_form',form.current,`${process.env.NEXT_PUBLIC_EMAILJS_KEY}`)
    .then((result) => {
      console.log(result.text);
      event.target.reset();
  }, (error) => {
      console.log(error.text);
      
  });
  }

  return (
    <div className="bg-void grid grid-cols-12 max-h-full h-full">
      <Head>
        <title>Yash-Parwani/Contact-Me</title>
        <meta name="description" content="Contact Yash Kishore Parwani" />
        <link rel="icon" href="/android-chrome.png" />
      </Head>
      {/* TODO add lottie rocket animatiion after successfull submission */}
      {/* Contact me section */}
      <aside className="col-span-1"></aside>
      <section className="My skills text-stark h-fit col-span-10 flex flex-col items-center  ">
        <h1 className="  h-fit text-6xl text-center w-max ">Contact Me</h1>
        <h4 className="text-4xl">Get in Touch</h4>
        <div className="flex  justify-around mt-10 w-full">
          {/* left side */}
          <div className="contact-form ">
            <h3 className="text-3xl mb-5">Contact</h3>
            <form ref={form} onSubmit={sendMail}>
              <div className="flex flex-col mb-10">
                <label htmlFor="user_name" className="text-xl">
                  Name{" "}
                </label>

                <input
                  type="text"
                  id="name"
                  name="user_name"
                  className="border bg-void  rounded-md w-96 h-10 mt-4"
                  required
                />
              </div>
              <div className="flex flex-col  mb-10">
                <label htmlFor="user_email" className="text-xl">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  className="bg-void border rounded-md h-10  mt-4"
                  required
                />
              </div>
              <div className="flex flex-col mb-10">
                <label htmlFor="message" className="text-xl">
                  Message
                </label>
                <textarea
                  type="text"
                  id="message"
                  name="message"
                  className="bg-void border rounded-sm h-24 mt-4"
                  required
                />
              </div>
              <div className="flex flex-col mb-10">
               
              <button type="submit" className="rounded-full text-center w-full text-3xl bg-jewel hover:bg-darkJewel text-stark py-2 h-16">
              Submit <span><Image src="/images/send.png" width={24} height={24}/></span>
                </button>
              </div>
            </form>
          </div>
          {/* right side */}
          <div className="Details">
            <h3 className="text-3xl mb-7">Details</h3>
            <div className="mb-4">
              <h4 className="text-xl mb-3">Contact Information</h4>
              <p className="flex justify-center">
                <span className="mr-3">
                  <Image src="/gmail.png" width="32" height="32" />
                </span>{" "}
                parwaniyash5610@gmail.com
              </p>
            </div>
            <div>
              <h4 className="text-xl mb-3">Socials</h4>
              <Link href="https://www.linkedin.com/in/yash-parwani-5610/"><button className="flex mb-4"><Image src="/linkedin.png" width="32" height="32" /><p className="ml-2">Linked-In</p> </button></Link>
              <Link href="https://www.instagram.com/parwani583/"><a target="_blank"  rel="noopener noreferrer"><button className="flex mb-4"><Image src="/instagram.png" width="32" height="32" /><p className="ml-2">parwani583</p></button></a></Link>

              <Link href="https://github.com/Yash-Parwani"><button className="flex "><Image src="/github.png" width="32" height="32" /><p className="ml-2">Github</p></button></Link>
            </div>
          </div>
        </div>
      </section>
      <aside className="col-span-1"></aside>

      {/* footer */}
      <div className="col-span-12 h-fit ">
        <Footer linkedIn={data.data.linkedIn} github = {data.data.github}/>
      </div>
    </div>
  );
}
