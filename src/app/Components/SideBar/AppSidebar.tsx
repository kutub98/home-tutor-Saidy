"use client";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname hook
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import Image from "next/image";
import logo from "@/Assets/logo.png";

const items = [
  { title: "Home", url: "/admin", icon: Home },
  { title: "Inbox", url: "/admin/login", icon: Inbox },
  { title: "Calendar", url: "/admin/calendar", icon: Calendar },
  { title: "Search", url: "/admin/search", icon: Search },
  { title: "Settings", url: "/admin/settings", icon: Settings }
];

export function SideBar({
  openSideBar,
  setOpenSideBar
}: {
  openSideBar: boolean;
  setOpenSideBar: (value: boolean) => void;
}) {
  const pathname = usePathname(); // Get the current path

  return (
    <div
      className={`fixed h-full top-0 left-0 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
        openSideBar ? "translate-x-0" : "-translate-x-full"
      } z-40`}
    >
      {!openSideBar && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 z-30"
          onClick={() => setOpenSideBar(false)}
        ></div>
      )}

      <div className="w-72 p-4 h-full flex flex-col">
        {/* Logo */}
        <div className="mb-6">
          <Link href="/admin">
            <Image src={logo} width={200} height={50} alt="Logo" />
          </Link>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 overflow-y-auto">
          {items.map((item, key) => (
            <Link
              key={key}
              href={item.url}
              className={`flex items-center space-x-4 p-3 rounded-lg transition-colors hover:bg-gray-100 ${
                pathname === item.url ? "bg-primary text-white" : ""
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.title}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
