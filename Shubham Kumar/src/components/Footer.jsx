import React from "react";
import { motion } from "framer-motion";
const Footer = ({ mode }) => {
	// fixed bottom-0 left-0 right-0
	return (
		<div
			className={` flex w-full justify-center font-semibold font-mono cursor-pointer p-3 text-base ${mode}`}
		>
			Made with
			<motion.span whileHover={{ scale: 1.2 }}>❤️</motion.span> 2022
		</div>
	);
};

export default Footer;
