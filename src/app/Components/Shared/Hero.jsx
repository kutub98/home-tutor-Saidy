"use client";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";

import Link from "next/link";
const HeroSection = () => {
  return (
    <>
      <div className="w-full customHeroBG customWidth h-auto px-8">
        <div className="lg:flex lg:justify-between items-center block justify-center px-4  py-10">
          {/* tuition */}
          <div className="md:text-left text-center py-8">
            <h1 className="primaryText font-bold lg:text-3xl my-2 md:text-2xl text-xl">
              আপনি কি শিক্ষক/শিক্ষিকা খুঁজছেন?
            </h1>
            <h1 className="primaryText font-normal my-1 lg:text-xl my-2 md:text-xl text-lg">
              যোগাযোগ করুন
            </h1>

            <div className="flex space-x-2 md:justify-start justify-center">
              <Button className="flex space-x-2 secondaryBg text-white hover:bg-[#106FB7]">
                <FaWhatsapp />
                ওয়াটসএপ
              </Button>
              <Button className="flex space-x-2 primaryBorder bg-white primaryText hover:bg-[#F39323] hover:text-white hover:border-none">
                <LuPhone />
                ফোন
              </Button>
            </div>
          </div>
          {/* PARTITION  */}
          <div className="w-2 h-72 secondaryBg hidden lg:flex"></div>
          {/* teacher */}
          <div className="md:text-end text-center py-8">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
