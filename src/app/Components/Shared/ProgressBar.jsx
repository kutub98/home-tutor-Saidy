"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import React from "react";
const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <motion.div
      className=" w-full max-w-7xl mx-auto z-[999]  h-1 primaryBg"
      style={{ scaleX }}
    ></motion.div>
  );
};

export default ProgressBar;
