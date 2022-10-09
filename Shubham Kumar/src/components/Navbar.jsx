import React, { useState } from "react";
import { motion } from "framer-motion";
import "../App.css";
const Navbar = ({ toggleSwitch, changeData, mode }) => {
	const data = "passing data to parent component";
	const [isOn, setIsOn] = useState(false);
	const toggleSwitchButton = () => setIsOn(!isOn);
	// let isOn = false;
	// console.log("👻👻: ", isOn);
	return (
		<>
			{/* #dcdde1 navbar pensive*/}
			{/* #f5f6fa body lynx*/}
			<div className={`grid grid-cols-2 gap-4  p-3 ${mode} justify-evenly`}>
				<div className='  w-20'>
					<a
						href='https://www.instagram.com/shubham.gupta.1903/'
						target='_blank'
					>
						{isOn ? (
							<img
								className='h-10 w-10 rounded-3xl'
								// src='../../images/light_logo.svg'
								src='https://lh3.googleusercontent.com/pw/AL9nZEVuWiFY_sXNF42LlgodxNtdGxGkH-szETCh78Dcw6ozEdWTwbsXwQYkCPX7c1ugloqfg98YL7ovSrfNNaMC0W7edvw6ne-xxMg9KpJzN-jaS6JS_eR4B_Ff5svwG-FlABND9EQMb3Bk5nvd0D_SptVXkg=w905-h970-no?authuser=0'
								alt='logo'
							/>
							
						) : (
							<img
								className='h-10 w-10 rounded-3xl'
								// src='../../images/logo.svg'
								src='https://lh3.googleusercontent.com/pw/AL9nZEW94YlLuk4I20UvbYQURakABlgEsTsr0HJPt46sPJF-7iWKh0viRYHj07Kih9xVkTAntgrmrC1ZkqS3D7fp4FUQxsQ93x0yMsZO5uabLSq2YiRl5zRM7THDCi5A37SpQ3kMvOhNERfws0Jf1e2phknXRA=w905-h970-no?authuser=0'
								alt='dark-logo'
							/>
						)}
					</a>
					{/* <button
						className='bg-boldgreen p-2 my-2 rounded-xl'
						onClick={() => {
							toggleSwitch(data);
							console.log('toggle switch called');
						}}
					>
						click
					</button> */}
				</div>
				<div className='flex justify-end'>
					<div
						className='switch '
						data-ison={isOn}
						// onClick={toggleSwitch}
						onClick={() => {
							toggleSwitch(!isOn);
							toggleSwitchButton();
							console.log("clicked");
						}}
					>
						<motion.div className='handle' layout transition={spring} />
					</div>
				</div>
			</div>
		</>
	);
};
const spring = {
	type: "spring",
	stiffness: 700,
	damping: 30,
};
export default Navbar;
