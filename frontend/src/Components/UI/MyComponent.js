import React from "react";
import "./styles.css";
import { motion } from "framer-motion";

const MyComponent = () => {
  return (
    <motion.img
      className="box"
      src="https://i0.wp.com/pearlyarts.com/wp-content/uploads/2022/03/Rainbow-and-clouds-clipart-with-outline-WM.png?resize=600%2C601&ssl=1"
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
