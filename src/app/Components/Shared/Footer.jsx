import Image from "next/image";
import logo from "@/Assets/logo.png";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <div className="customWidth px-8 pb-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
        {/* logo */}
        <div>
          <Image
            src={logo}
            width={100}
            height={50}
            alt="home-tutor"
            className="my-6"
          />
          <h1>
            হোম টিউটর ২০২৪ সালে প্রতিষ্ঠিত হয়েছিল। এটি চট্টগ্রামে প্রথম,
            সবচেয়ে বিশ্বস্ত এবং নেতৃস্থানীয় অনলাইন প্ল্যাটফর্ম যা অভিভাবক,
            ছাত্র এবং টিউটরদের জন্য যাচাইকৃত টিউটর নিয়োগ করতে বা দেশের যেকোন
            জায়গা থেকে 13টি বিভিন্ন বিভাগে টিউশনের চাকরি খোঁজার জন্য।
          </h1>
        </div>
        {/*গুরুত্বপূর্ন লিংক  */}
        <div>
          <h1 className="my-6 font-semibold">গুরুত্বপূর্ন লিংক</h1>
          <div className="grid gap-2 py-3 mt-2">
            <Link href="/allJob" className="">
              Terms and Conditions
            </Link>
            <Link href="/allJob" className="">
              JOB POST
            </Link>
            <Link href="/">Hire Tutor</Link>
            <Link href="/">Become Tutor</Link>
          </div>
        </div>
        {/* socialMedia Link  */}
        <div className="">
          <h1 className="my-6 font-semibold">সোশ্যাল মিডিয়া</h1>
          <div className="grid grid-cols-3 gap-4 py-3 mt-2">
            <Link
              href="https://www.instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 flex justify-center rounded p-1"
            >
              <FaSquareInstagram className="text-2xl h-6 w-6 text-[#106fb7]" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 flex justify-center rounded p-1"
            >
              <FaLinkedin className="text-2xl h-6 w-6 text-[#106fb7]" />
            </Link>
            <Link
              href="https://www.facebook.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 flex justify-center rounded p-1"
            >
              <FaFacebookSquare className="text-2xl h-6 w-6 text-[#106fb7]" />
            </Link>
            <Link
              href="https://wa.me/+8801847398047"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 flex justify-center rounded p-1"
            >
              <IoLogoWhatsapp className="text-2xl h-6 w-6 text-[#106fb7]" />
            </Link>
            <Link
              href="https://www.youtube.com/channel/yourchannelid"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 flex justify-center rounded p-1"
            >
              <FaYoutube className="text-2xl h-6 w-6 text-[#106fb7]" />
            </Link>
            <Link
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 flex justify-center rounded p-1"
            >
              <FaSquareXTwitter className="text-2xl h-6 w-6 text-[#106fb7]" />
            </Link>
          </div>
        </div>
        {/* socialMedia Link  */}
        <div className="">
          <h1 className="my-6 font-semibold">আমাদের ঠিকানা</h1>
          <div className="grid  gap-1 py-3 ">
            <h1>Level: 2, Home Tutor, House: 14, </h1>
            <h1>Road: 14, Block: B</h1>
            <h1> Chattogram, Bangladesh</h1>
          </div>
        </div>
      </div>
      <div className="text-center border-t-2  mx-auto my-4">
        <h1 className="text-lg my-3">
          কপিরাইট © {currentYear} হোম টিউটর সর্বস্বত্ব ও সংরক্ষিত
        </h1>
      </div>
    </div>
  );
};

export default Footer;
