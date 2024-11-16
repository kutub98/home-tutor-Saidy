// updated 2
import { useState, useEffect } from "react";
import Image from "next/image";
import createImg from "@/Assets/How/complete.png";

const HowWorkForTutors = () => {
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".workflow-step");
      let currentStep = 1;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= 100) {
          currentStep = index + 1; // Index is 0-based, so we add 1
        }
      });

      setActiveStep(currentStep);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const steps = [
    {
      side: "left",
      title: "একটি বিনামূল্যে অ্যাকাউন্ট তৈরি করুন",
      description:
        "কিছু প্রয়োজনীয় তথ্য দিয়ে মিনিটের মধ্যে আপনার অ্যাকাউন্ট তৈরি করুন।",
      imgSrc: createImg
    },
    {
      side: "left",
      title: "অন্য একটি নাম লিখুন",
      description: "নতুন একটি নাম দিয়ে কাজ শুরু করুন।",
      imgSrc: createImg
    },
    {
      side: "right",
      title: "একটি বিনামূল্যে অ্যাকাউন্ট তৈরি করুন",
      description:
        "কিছু প্রয়োজনীয় তথ্য দিয়ে মিনিটের মধ্যে আপনার অ্যাকাউন্ট তৈরি করুন।",
      imgSrc: createImg
    },
    {
      side: "right",
      title: "আপনার প্রোফাইল সম্পূর্ণ করুন",
      description: "আপনার প্রোফাইলের তথ্য আপডেট করুন।",
      imgSrc: createImg
    },
    {
      side: "right",
      title: "চাকরি খুঁজুন",
      description: "প্রয়োজনীয় চাকরির জন্য আবেদন করুন।",
      imgSrc: createImg
    }
  ];
  return (
    <div className="customWidth overflow-hidden mx-auto my-20 px-8">
      <h1 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl font-semibold lg:my-6 my-4 text-center">
        এটা কিভাবে টিউটর জন্য কাজ করে?
      </h1>
      {/* large device  */}
      <div className="hidden lg:flex w-full max-w-5xl items-start mx-auto justify-between">
        {/* Left Section */}
        <div className="hidden lg:flex flex-col gap-8 w-1/3">
          {steps
            .filter((step) => step.side === "left")
            .map((step, idx) => (
              <div
                key={idx}
                className={`workflow-step w-full flex flex-col gap-8 bg-white shadow-md p-4 rounded ${
                  activeStep === idx + 1 ? "border-2 border-blue-500" : ""
                }`}
              >
                <div className="flex gap-3 items-center">
                  <h1
                    className={`h-8 w-8 flex justify-center items-center text-white text-center rounded-full ${
                      activeStep === idx + 1 ? "bg-blue-500" : "bg-gray-300"
                    }`}
                  >
                    {idx + 1}
                  </h1>
                  <Image
                    src={createImg}
                    width={60}
                    height={60}
                    alt={step.title}
                  />
                  <div>
                    <h1>{step.title}</h1>
                    <p>{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Middle Vertical Steps */}
        <div className="flex flex-col gap-8 items-center mx-4">
          {[...Array(5)].map((_, idx) => (
            <h1
              key={idx}
              className={`h-10 w-10 flex justify-center items-center text-white text-center rounded-full ${
                activeStep === idx + 1 ? "bg-blue-500" : "bg-gray-400"
              } shadow-lg`}
            >
              {idx + 1}
            </h1>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-8 w-1/2">
          {steps
            .filter((step) => step.side === "right")
            .map((step, idx) => (
              <div
                key={idx + 3}
                className={`workflow-step w-full flex flex-col gap-8 bg-white shadow-md p-4 rounded ${
                  activeStep === idx + 3 ? "border-2 border-blue-500" : ""
                }`}
              >
                <div className="flex gap-3 items-center">
                  <h1
                    className={`h-8 w-8 flex justify-center items-center text-white text-center rounded-full ${
                      activeStep === idx + 3 ? "bg-blue-500" : "bg-gray-300"
                    }`}
                  >
                    {idx + 3}
                  </h1>
                  <Image
                    src={createImg}
                    width={60}
                    height={60}
                    alt={step.title}
                  />
                  <div>
                    <h1>{step.title}</h1>
                    <p>{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      {/* small device  */}
      <div className="flex lg:hidden w-full max-w-5xl items-center mx-auto">
        {/* Middle Vertical Steps */}
        <div className="hidden md:flex flex-col gap-20 items-center mx-4">
          {[...Array(5)].map((_, idx) => (
            <h1
              key={idx}
              className={`h-10 w-10 flex justify-center items-center text-white text-center rounded-full ${
                activeStep === idx + 5 ? "bg-blue-500" : "bg-gray-400"
              } shadow-lg`}
            >
              {idx + 1}
            </h1>
          ))}
        </div>

        {/* Workflow Content for Smaller Screens */}
        <div className="lg:hidden flex flex-col gap-8 w-full">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`workflow-step w-full flex flex-col gap-4 bg-white shadow-md p-4 rounded ${
                activeStep === idx + 5 ? "border-2 border-blue-500" : ""
              }`}
            >
              <div className="sm:flex block text-center sm:text-start justify-items-center gap-3 items-center">
                {/* Small Circle Indicator */}
                <h1
                  className={`h-8 w-8 flex justify-center items-center text-white text-center rounded-full ${
                    activeStep === idx + 5 ? "bg-blue-500" : "bg-gray-300"
                  }`}
                >
                  {idx + 1}
                </h1>
                {/* Content Image */}
                <Image
                  src={step.imgSrc}
                  width={60}
                  height={60}
                  alt={step.title}
                />
                {/* Text Content */}
                <div>
                  <h1 className="text-lg font-semibold">
                    {activeStep === idx + 5
                      ? "এটি একটি সক্রিয় ধাপ"
                      : step.title}
                  </h1>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowWorkForTutors;
