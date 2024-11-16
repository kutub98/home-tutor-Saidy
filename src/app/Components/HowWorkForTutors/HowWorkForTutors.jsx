import { motion } from "motion/react";

const HowWorkForTutors = () => {
  const variants = {
    hidden: (direction) => ({
      x: direction === "left" ? "-100%" : "100%",
      opacity: 0
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.9 }
    }
  };
  return (
    <div className="customWidth overflow-hidden mx-auto my-20 px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        custom="left"
        viewport={{ once: false }}
        variants={variants}
      >
        <h1 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl font-semibold lg:my-6 my-4 text-center">
          এটা কিভাবে টিউটর জন্য কাজ করে?
        </h1>
      </motion.div>
    </div>
  );
};
export default HowWorkForTutors;
