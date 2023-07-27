import React from "react";
import "./styles.css";
import { motion } from "framer-motion";

const MyComponent = () => {
  return (
    <motion.img
      className="box"
      src="images/Logo.png"
      alt="Rotating Image"
      animate={{
        rotate: [0, 0, 360, 360, 0],
      }}
      transition={{
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 1,
      }}
    />
  );
};

export default MyComponent;
