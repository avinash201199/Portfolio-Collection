import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Test from "./components/Test";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import twitterGIF from "../images/icons8-twitter.gif";

const App = () => {
	const [data, setData] = useState("");
	const [isOn, setIsOn] = useState(false);
	const toggleSwitch = (childdata) => {
		// console.log("🧭🧭🧭 data coming: ", childdata);
		setIsOn(childdata);
		// setData(childdata);
		console.log("data 😶‍🌫️😶‍🌫️😶‍🌫️: isOn parent component", isOn);
	};
	let mode = isOn ? "bg-lightgreen" : "bg-pgrey";
	let modeBody = isOn ? "bg-boldgreen" : "bg-pblack";
	let buttonMode = isOn ? "bg-skintone" : "bg-pgrey";
	let headerMode = isOn ? "text-nametone":"text-ptone";
	// console.log("👻👻❤️: ", isOn);
	// console.log("data coming from child 😁😁: ", data);
	return (
		<>
			<Navbar toggleSwitch={toggleSwitch} changeData={isOn} mode={mode} />
			<div
				className={`h-full flex flex-col items-center justify-center ${modeBody}`}
			>
				<Header name={headerMode}/>
				<Main
					css='hover:bg-instgramColor'
					socail='Instagram'
					avatar={<BsInstagram className='w-7 h-7 cursor-pointer' />}
					href='https://www.instagram.com/shubham.gupta.1903/'
					gif={twitterGIF}
					skin={buttonMode}
					mode={isOn}
				/>
				<Main
					css='hover:bg-blue-500'
					socail='Facebook'
					avatar={<BsFacebook className='w-7 h-7 cursor-pointer' />}
					href='https://www.facebook.com/profile.php?id=100008606535834'
					skin={buttonMode}
					mode={isOn}

				/>
				<Main
					css='hover:bg-twitterColor'
					socail='Twitter'
					avatar={<BsTwitter className='w-7 h-7 cursor-pointer' />}
					href='https://www.twitter.com'
					skin={buttonMode}
					mode={isOn}

				/>
				<Main
					css='hover:bg-linkedinColor'
					socail='LinkedIn'
					avatar={<BsLinkedin className='w-7 h-7 cursor-pointer' />}
					href='https://www.linkedin.com/in/shubham-kumar-13a9051a9/'
					skin={buttonMode}
					mode={isOn}

				/>
				<Main
					css='hover:bg-pblack'
					socail='Github'
					avatar={<BsGithub className='w-7 h-7 cursor-pointer' />}
					href='https://www.github.com/shubham-1903/'
					skin={buttonMode}
					mode={isOn}

				/>
				{/* <BsFacebook/> */}
				{/* <Test/> */}
			</div>
			<Footer mode={mode} />
		</>
	);
};

export default App;
