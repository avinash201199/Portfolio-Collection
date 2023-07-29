import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";

const AnimatedComponent = () => {
	const [isAnimationPlaying, setIsAnimationPlaying] = useState(false);

	const divAnimationControls = useAnimation();

	const divAnimationVariants = {
		init: {
			y: 0,
		},
		anim: {
			y: -20,
			transition: {
				type: "tween",
				repeat: 1,
				repeatType: "reverse",
			},
		},
	};

	return (
		<motion.div
			animate={divAnimationControls}
			onHoverStart={() => {
				if (!isAnimationPlaying) {
					setIsAnimationPlaying(true);
					logoAnimationControls.start(divAnimationVariants.anim);
				}
			}}
			onAnimationComplete={() => {
				setIsAnimationPlaying(false);
			}}
		>
			I go up and down!
		</motion.div>
	);
};

export default AnimatedComponent;
