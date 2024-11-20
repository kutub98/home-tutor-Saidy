"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // Import usePathname hook
import { Home, Inbox, Search, Settings } from "lucide-react";

import { IoAddCircleOutline } from "react-icons/io5";
const items = [
  { title: "Home", url: "/admin", icon: Home },
  { title: "Inbox", url: "/admin/login", icon: Inbox },
  { title: "Tuition", url: "/admin/addTuition", icon: IoAddCircleOutline },
  { title: "Search", url: "/admin/search", icon: Search },
  { title: "Settings", url: "/admin/settings", icon: Settings },
  { title: "Settings", url: "/admin/settings", icon: Settings },
  { title: "Settings", url: "/admin/settings", icon: Settings },
  { title: "Settings", url: "/admin/settings", icon: Settings },
  { title: "Settings", url: "/admin/settings", icon: Settings },
  { title: "Settings", url: "/admin/settings", icon: Settings },
  { title: "Settings", url: "/admin/settings", icon: Settings },
  { title: "Search", url: "/admin/search", icon: Search },
  { title: "Settings", url: "/admin/settings", icon: Settings },
  { title: "Search", url: "/admin/search", icon: Search },
  { title: "Settings", url: "/admin/settings", icon: Settings },
  { title: "Search", url: "/admin/search", icon: Search },
  { title: "Settings", url: "/admin/settings", icon: Settings },
  { title: "Search", url: "/admin/search", icon: Search },
  { title: "Settings", url: "/admin/settings", icon: Settings },
  { title: "Settings", url: "/admin/settings", icon: Settings },
  { title: "Settings", url: "/admin/settings", icon: Settings },
  { title: "Settings", url: "/admin/settings", icon: Settings },
  { title: "Settings", url: "/admin/settings", icon: Settings },
  { title: "Settings", url: "/admin/settings", icon: Settings },
  { title: "Settings", url: "/admin/settings", icon: Settings },
  { title: "EVERYTHING OK", url: "/admin/settings", icon: Settings }
];

export function SideBar({
  openSideBar,
  setOpenSideBar
}: {
  openSideBar: boolean;
  setOpenSideBar: (value: boolean) => void;
}) {
  const pathname = usePathname();
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(
    typeof window !== "undefined" ? innerWidth < 900 : false
  );

  useEffect(() => {
    const handleSize = () => {
      setIsLargeScreen(window.innerWidth < 900);
    };

    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, []);
  const handleClick = () => {
    if (isLargeScreen) {
      setOpenSideBar(!openSideBar);
    }
  };

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
        {/* Navigation Items */}
        <nav className="flex-1 overflow-y-auto pt-16 pb-10">
          {items.map((item, key) => (
            <Link
              key={key}
              onClick={handleClick}
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
