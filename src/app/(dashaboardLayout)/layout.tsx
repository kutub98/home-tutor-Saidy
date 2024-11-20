"use client";
import { SideBar } from "../Components/SideBar/AppSidebar";
import { IoIosArrowDropleft } from "react-icons/io";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/Assets/logo.png";

export default function DashBoardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const [openSideBar, setOpenSideBar] = useState(true);

  return (
    <div className="flex h-screen z-99 bg-slate-100 customWidth mx-auto">
      {/* Sidebar */}
      <div className="">
        <SideBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
      </div>

      {/* Main Content */}
      <div className=" flex-1  overflow-auto bg-bla ">
        <div
          onClick={() => setOpenSideBar(!openSideBar)}
          className="sticky  top-0 z-[989]  bg-white  flex justify-between p-2 items-center"
        >
          <Link href="/admin">
            <Image
              src={logo}
              className="lg:w-44 w-24 sm:w-32 lg:h-16 h-10"
              alt="Logo"
            />
          </Link>
          <div className="flex flex-row">
            <h1 className="mx-1 cursor-pointer">new user</h1>
            <h1 className="mx-1">Tuition Request</h1>
            <IoIosArrowDropleft
              className={`w-7 h-7 cursor-pointer rounded-full primaryBg text-white transform transition-transform duration-300 ${
                openSideBar ? "rotate-0" : "-rotate-180"
              }`}
            />
          </div>
        </div>
        <div className={`z-[999] ${openSideBar ? "ml-72" : "m0"}`}>
          {children}
        </div>
      </div>
    </div>
  );
}
