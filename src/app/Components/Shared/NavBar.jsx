/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import logo from "@/Assets/logo.png";
import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
export default function NavBar() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const handleSheetOpen = () => {
    setIsSheetOpen(false);
  };
  return (
    <header className="flex sticky top-0 left-0 customWidth justify-between h-20 w-full shrink-0 items-center px-8 md:px-6   bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 shadow-md">
      <Sheet
        className="flex justify-between"
        open={isSheetOpen}
        onOpenChange={setIsSheetOpen}
      >
        <Link href="/" className="mr-6 " prefetch={false}>
          {/* Show MountainIcon from md screens and up */}
          <MountainIcon className="h-6 w-6" />
        </Link>
        <SheetContent side="left" className="h-svh overflow-y-scroll">
          <DialogTitle className="sr-only">Navigation Menu</DialogTitle>
          <Link href="/" className=" h-[100px] " prefetch={false}>
            {/* Show MountainIcon from md screens and up */}
            <MountainIcon />
          </Link>
          <div className="grid gap-2 py-3 mt-2">
            <Link
              href="/"
              className="group w-full primaryText shadow bg-white inline-flex h-9  items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-[#f3922349] focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
              prefetch={false}
              onClick={handleSheetOpen}
            >
              HOME
            </Link>
            <Link
              href="/allJob"
              className="group primaryText shadow bg-white inline-flex h-9  items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-[#f3922349] focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
              prefetch={false}
              onClick={handleSheetOpen}
            >
              JOB POST
            </Link>
            <Link
              href="/login"
              className="group primaryText shadow bg-white inline-flex h-9  items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-[#f3922349] focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
              prefetch={false}
              onClick={handleSheetOpen}
            >
              LOGIN
            </Link>
            <Link
              href="/login"
              className="group primaryText shadow bg-white inline-flex h-9  items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-[#f3922349] focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
              prefetch={false}
              onClick={handleSheetOpen}
            >
              BECOME TUTOR
            </Link>
          </div>
        </SheetContent>
        <nav className="ml-auto hidden md:flex gap-6">
          <Link
            href="/"
            className="group primaryText inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-[#f3922349] focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            prefetch={false}
          >
            HOME
          </Link>
          <Link
            href="/allJob"
            className="group primaryText inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-[#f3922349] focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            prefetch={false}
          >
            JOB POST
          </Link>
          <Link
            href="/login"
            className="group primaryText primaryBorder inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-[#f3922349] focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            prefetch={false}
          >
            LOGIN
          </Link>
          <Link
            href="/login"
            className="group text-white secondaryBg inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-[#f3922349] focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            prefetch={false}
          >
            BECOME TUTOR
          </Link>
        </nav>
        <SheetTrigger asChild className="">
          <Button
            variant="outline"
            size="icon"
            className="md:hidden text-center secondaryBg text-white text-2xl"
          >
            <MenuIcon className="h-6 w-6 text-white" />
          </Button>
        </SheetTrigger>
      </Sheet>
    </header>
  );
}

function MenuIcon() {
  return <IoMenu className="h-8 w-8" />;
}

function MountainIcon() {
  //   return
  return (
    <Image
      src={logo}
      height="lg:h-[100px] h-[50px]"
      width={200}
      alt="home-tutor"
    />
  );
}
