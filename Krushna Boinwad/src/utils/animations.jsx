import { motion } from "framer-motion";

// Split text animation (letter by letter)
export const SplitText = ({ text, className }) => {
  return (
    <motion.span
      className={`inline-block ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.05 }}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.4 }}
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

// Blur text animation
export const BlurText = ({ text, className }) => (
  <motion.p
    className={className}
    initial={{ opacity: 0, filter: "blur(8px)" }}
    whileInView={{ opacity: 1, filter: "blur(0px)" }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    {text}
  </motion.p>
);

// Scroll reveal (fade & slide up)
export const Reveal = ({ children, className }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);
