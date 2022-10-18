import type { NextPage } from "next";
import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  children: ReactNode;
}

const Transition: NextPage<Props> = ({ children }) => {
  return <div>Docs</div>;
};

const EffectOne: NextPage<Props> = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.div>{children}</motion.div>
    </AnimatePresence>
  );
};

export default Transition;
