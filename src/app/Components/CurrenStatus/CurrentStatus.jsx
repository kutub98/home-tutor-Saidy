"use client";
import { VscVmActive } from "react-icons/vsc";
import { AiOutlineLike } from "react-icons/ai";
import { TbLivePhoto } from "react-icons/tb";
import { IoHappyOutline } from "react-icons/io5";
import CountUp from "react-countup";

const CurrentStatus = () => {
  return (
    <div className="customWidth px-8 py-8 my-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-center gap-3 md:grid-cols-3 lg:grid-cols-4">
        {/* Active Tutors */}
        <HoverCard className="secondaryBg">
          <VscVmActive className="h-14 w-14" />
          <div>
            <h1 className="font-bold text-xl">
              <CountUp end={1000} duration={10} redraw={true} />
            </h1>
            <h1>Active Tutors</h1>
          </div>
        </HoverCard>

        {/* Live Tuitions */}
        <HoverCard>
          <TbLivePhoto className="h-14 w-14" />
          <div>
            <h1 className="font-bold text-xl">
              <CountUp end={1000} duration={10} redraw={true} />
            </h1>
            <h1>Live Tuitions</h1>
          </div>
        </HoverCard>

        {/* Happy Students */}
        <HoverCard>
          <IoHappyOutline className="h-14 w-14" />
          <div>
            <h1 className="font-bold text-xl">
              <CountUp end={1000} duration={10} redraw={true} />
            </h1>
            <h1>Happy Students</h1>
          </div>
        </HoverCard>

        {/* Average Rating */}
        <HoverCard>
          <AiOutlineLike className="h-14 w-14" />
          <div>
            <h1 className="font-bold text-xl">4.8/5</h1>
            <h1>Average Rating</h1>
          </div>
        </HoverCard>
      </div>
    </div>
  );
};

const HoverCard = ({ children }) => (
  <div className="relative secondaryBg flex space-x-3 py-4 items-center justify-center text-white rounded shadow overflow-hidden group">
    {/* Hover effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#405cfd] to-[#405cfd] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></div>
    {/* Content */}
    <div className="relative z-10 flex items-center space-x-3">{children}</div>
  </div>
);

export default CurrentStatus;
