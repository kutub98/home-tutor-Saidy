"use client";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import logo from "@/Assets/logo.png";

export default function NavBar() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const isUserExist = false;
  const handleSheetOpen = () => {
    setIsSheetOpen(false);
  };

  const MenuItem = () => (
    <>
      <Link
        href="/"
        className="group primaryText inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-[#f3922349] focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
        prefetch={false}
        onClick={handleSheetOpen}
      >
        HOME
      </Link>
      <Link
        href="/allJob"
        className="group primaryText inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-[#f3922349] focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
        prefetch={false}
        onClick={handleSheetOpen}
      >
        JOB POST
      </Link>
      <Link
        href="/allTutor"
        className="group primaryText inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-[#f3922349] focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
        prefetch={false}
        onClick={handleSheetOpen}
      >
        All TUTORS
      </Link>
      <Link
        href="/login"
        className="group primaryText primaryBorder inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-[#f3922349] focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
        prefetch={false}
        onClick={handleSheetOpen}
      >
        LOGIN
      </Link>
      <Link
        href="/login"
        className="group text-white secondaryBg inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-[#f3922349] focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
        prefetch={false}
        onClick={handleSheetOpen}
      >
        BECOME TUTOR
      </Link>

      {isUserExist && (
        <Link
          href="/dashBoard"
          className="group primaryText inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-[#f3922349] focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          prefetch={false}
          onClick={handleSheetOpen}
        >
          DASHBOARD
        </Link>
      )}
    </>
  );

  return (
    <header className="sticky top-0 z-50 flex justify-between h-20 items-center px-8 bg-white bg-opacity-90 shadow-md">
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <Link href="/" className="mr-6">
          <MountainIcon />
        </Link>
        <SheetContent
          side="left"
          className="h-screen overflow-y-scroll z-[999] transition-transform duration-300 ease-in-out"
        >
          <DialogTitle className="sr-only">Navigation Menu</DialogTitle>
          <Link href="/" className="h-[100px]">
            <MountainIcon />
          </Link>
          <div className="grid gap-2 py-3 mt-2">
            <MenuItem />
          </div>
        </SheetContent>
        <nav className="ml-auto hidden md:flex gap-6">
          <MenuItem />
        </nav>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="md:hidden text-center secondaryBg text-white text-2xl"
          >
            <MenuIcon />
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
  return <Image src={logo} height={50} width={200} alt="home-tutor" />;
}
