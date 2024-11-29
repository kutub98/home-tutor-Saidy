"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // Import usePathname hook
import { Home } from "lucide-react";
import { FiUsers } from "react-icons/fi";
import { FcDepartment } from "react-icons/fc";
import { IoAddCircleOutline } from "react-icons/io5";
import { GiTeacher } from "react-icons/gi";
import { MdOutlineFamilyRestroom } from "react-icons/md";
const items = [
  { title: "Home", url: "/dashBoard", icon: Home },
  { title: "Tuition", url: "/dashBoard/addTuition", icon: IoAddCircleOutline },
  { title: "Users", url: "/dashBoard/user", icon: FiUsers },
  { title: "Department Service", url: "/dashBoard/service", icon: FcDepartment },
  { title: "Teacher Review", url: "/dashBoard/teacherReview", icon: GiTeacher },
  {
    title: "Guardian Review",
    url: "/dashBoard/guardianReview",
    icon: MdOutlineFamilyRestroom
  }
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
      className={`fixed  mx-auto h-full top-0 left-0 bg-white overflow-hidden shadow-lg transform transition-transform duration-300 ease-in-out ${
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
                pathname === item.url ? "primaryBg text-white" : ""
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
