import React from "react";
// import { IconName } from "react-icons/fc";
import { BsInstagram } from "react-icons/bs";
const ex = {
	e: "transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300",
};
const Main = ({ socail, avatar, href, css, skin, mode }) => {
	return (
		<div
			className={`flex justify-center items-center border-orange-800 w-72 h-20 rounded-3xl
    drop-shadow-xl  cursor-pointer
		transition ease-in-out delay-150 ${skin} hover:-translate-y-1 
		hover:scale-110 ${css} duration-300 my-2
    `}
		>
			<a href={href} className='flex flex-row' target='_blank'>
				<span className='pr-2  cursor-pointer '>
					{avatar}
					{/* <img src={gif}/> */}
					{/* <avatar className='w-10 h-10 cursor-pointer' /> */}
				</span>
				{mode ? (
					<div className='cursor-pointer '>{socail}</div>
				) : (
					<div className='cursor-pointer text-white'>{socail}</div>
				)}
			</a>
		</div>
	);
};

export default Main;

// transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 my-2
