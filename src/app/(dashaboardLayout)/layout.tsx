"use client";
import { SideBar } from "../Components/SideBar/AppSidebar";
import { GoSidebarExpand } from "react-icons/go";
import { useState } from "react";
import Link from "next/link";
import logo from "@/Assets/logo.png";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { FaBriefcase } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
import { FaRegCircleUser } from "react-icons/fa6";

import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import ToolTip from "@/lib/Tooltip";

export default function DashBoardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const [openSideBar, setOpenSideBar] = useState(true);

  return (
    <div className="flex w-full  h-screen z-99  bg-slate-100 overflow-hidden mx-auto">
      {/* Sidebar */}
      <div className="">
        <SideBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
      </div>

      {/* Main Content */}
      <div className=" flex-1  overflow-auto bg-bla ">
        <div className="sticky px-6  top-0 z-[989]  bg-white  flex justify-between p-2 items-center">
          <div className="flex justify-between w-64">
            <Link href="/admin">
              <Image
                src={logo}
                className="lg:w-44 w-24 sm:w-32 lg:h-16 h-10"
                alt="Logo"
              />
            </Link>
            <ToolTip
              toolTipName="Sidebar"
              toolTipTrigger={
                <GoSidebarExpand
                  onClick={() => setOpenSideBar(!openSideBar)}
                  className={`w-7 h-7 primaryText cursor-pointer transform transition-transform duration-300 ${
                    openSideBar ? "rotate-0" : "-rotate-180 "
                  }`}
                />
              }
            />
          </div>
          <div className="flex flex-row items-center gap-4">
            <ToolTip
              toolTipName="User Request"
              toolTipTrigger={<FaUserPlus className="h-6 w-6 primaryText" />}
            />
            <ToolTip
              toolTipName="Job Request"
              toolTipTrigger={<FaBriefcase className="h-6 w-6 primaryText" />}
            />
            <ToolTip
              toolTipName="User Profile"
              toolTipTrigger={
                <Popover>
                  <PopoverTrigger asChild>
                    <FaRegCircleUser className="w-6 h-6 primaryText cursor-pointer" />
                  </PopoverTrigger>
                  <PopoverContent className="w-72">
                    <div className="">
                      <div className="flex flex-row gap-2 items-center border-b-1 pb-2 p-2">
                        <FaRegCircleUser className="w-7 h-7 primaryText" />
                        <div className="">
                          <h1>{"Amimul Ihsan Saidy"}</h1>
                          <h1>
                            {" "}
                            <span> User Id</span> : 23414
                          </h1>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 p-2 border-t-2">
                        <h1>Profile</h1>
                        <h1>Settings</h1>
                        <h1>Update Profile</h1>
                      </div>
                      <div className="flex justify-between p-2 border-t-2 cursor-pointer">
                        <h1>Signout</h1>
                        <LiaSignOutAltSolid className="w-6 h-6" />
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              }
            />
          </div>
        </div>
        <div className={`z-[999] p-4 ${openSideBar ? "ml-72" : "m-0 "}`}>
          {children}
        </div>
      </div>
    </div>
  );
}
