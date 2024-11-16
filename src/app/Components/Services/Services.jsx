import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";
import * as React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import serviceImg from "@/Assets/bangla.jpg";
import { motion } from "motion/react";

const Services = () => {
  const serviceName = [
    {
      name: "Bangla Version",
      image: serviceImg
    },
    {
      name: "English Version",
      image: serviceImg
    },
    {
      name: "Arabic Meium",
      image: serviceImg
    },
    {
      name: "Religious Studies",
      image: serviceImg
    },
    {
      name: "British Version",
      image: serviceImg
    },
    {
      name: "Admission Test ",
      image: serviceImg
    },
    {
      name: "Arts",
      image: serviceImg
    },
    {
      name: "Science",
      image: serviceImg
    },
    {
      name: "Business Studies",
      image: serviceImg
    }
  ];

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
    <div className="customWidth overflow-hidden py-20 my-20 overflow-hidden px-8 customServicBG">
      <Carousel
        className="px-4"
        plugins={[
          Autoplay({
            delay: 2000,
            stopOnInteraction: false,
            stopOnMouseEnter: true
          })
        ]}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          custom="right"
          viewport={{ once: false }}
          variants={variants}
        >
          <h1 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl font-semibold lg:my-6 my-4 text-center">
            বিভাগ পরিবেশন
          </h1>
        </motion.div>
        <CarouselContent className="-ml-4">
          {serviceName.map((item, key) => (
            <CarouselItem
              key={key}
              className=" sm:basis-1/2 pl-4 md:basis-1/3 lg:basis-1/5"
            >
              <Card className="p-2">
                <Image
                  src={serviceImg}
                  width={1020}
                  height={340}
                  alt="serviceImg"
                />
                <h1 className="text-center font-semibold text-xl my-2">
                  {item.name}
                </h1>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
export default Services;
