import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";
import { motion } from "motion/react";
import Link from "next/link";
const HeroSection = () => {
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
    <>
      <div className="w-full mx-auto overflow-hidden customHeroBG customWidth h-auto px-8">
        <div className="lg:flex lg:justify-between items-center block justify-center px-4  py-10">
          {/* tuition */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            custom="left"
            viewport={{ once: false }}
            variants={variants}
            className="md:text-left text-center py-8"
          >
            <h1 className="primaryText font-bold lg:text-3xl my-2 md:text-2xl text-xl">
              আপনি কি শিক্ষক/শিক্ষিকা খুঁজছেন?
            </h1>
            <h1 className="primaryText font-normal my-1 lg:text-xl my-2 md:text-xl text-lg">
              যোগাযোগ করুন
            </h1>

            <div className="flex space-x-2 md:justify-start justify-center">
              <Link
                href="https://wa.me/+8801847398047"
                target="_blank"
                rel="noopener noreferrer"
                className="flex space-x-2 px-3 py-1 rounded items-center secondaryBg text-white hover:bg-[#106FB7]"
              >
                <FaWhatsapp className="mr-1" />
                ওয়াটসএপ
              </Link>
              <Link
                className="primaryBorder bg-white px-3 py-1 items-center flex rounded hover:text-gray-800 hover:bg-[#ffffff] text-gray-500 font-medium"
                href="tel:+8801847398047"
              >
                <LuPhone className="mr-1" />
                যোগাযোগ
              </Link>
            </div>
          </motion.div>
          {/* PARTITION  */}
          <div className="w-2 h-72 secondaryBg hidden lg:flex"></div>
          {/* teacher */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            custom="right"
            viewport={{ once: false }}
            variants={variants}
            className="md:text-end text-center py-8"
          >
            <h1 className="primaryText font-bold lg:text-3xl my-2 md:text-2xl text-xl">
              আপনি কি টিউশন খুঁজছেন?
            </h1>
            <h1 className="primaryText font-normal my-1 lg:text-xl my-2 md:text-xl text-lg">
              যোগাযোগ করুন
            </h1>

            <div className="flex space-x-2 md:justify-end justify-center">
              <Button className="flex space-x-2 hover:border-[#F39323] hover:bg-white hover:border-2 hover:text-[#F39323] secondaryBg text-white hover:secondaryBg ">
                BECOME TUTOR
              </Button>
              <Link href={"/allJob"}>
                <Button className="flex space-x-2 primaryBorder text-white hover:bg-[#106FB7] bg-white primaryText hover:secondaryBg hover:text-white">
                  AVAILABLE TUITION
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
