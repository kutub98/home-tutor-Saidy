"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { DatePicker } from "@/lib/datePicker";
import { SelectField } from "@/lib/Selection";
import { VscTypeHierarchy } from "react-icons/vsc";
import { FcMoneyTransfer } from "react-icons/fc";
import { IoLocationOutline } from "react-icons/io5";
import { FaTransgender } from "react-icons/fa6";
import { CgGenderMale } from "react-icons/cg";
import { CgGenderFemale } from "react-icons/cg";
import { Label } from "@/components/ui/label";
import { LuBook } from "react-icons/lu";
import Link from "next/link";
import {
  Locations,
  Gender,
  TuitionCategories,
  Class,
  TuitionType,
  TutoringPerDaysInWeek
} from "@/lib/Country";

const JobBoard = () => {
  const [openFilters, setOpenFiler] = useState(false);
  const [allJobs, setAllJobs] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      let res = await fetch("/jobs.json");
      let data = await res.json();
      setAllJobs(data);
    }
    fetchPosts();
  }, []);

  console.log(allJobs, "All Jobs");

  const Loading = () => {
    if (!allJobs) return <div>Loading...</div>;
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log("Hello");
  };
  return (
    <div className="customWidth px-8 py-8 mx-auto ">
      <div className="sticky z-50 top-20 w-full left-0 flex py-2 rounded-md items-center justify-between secondaryBg shadow-md px-4">
        <h1 className="font-semibold text-white">
          Total Jobs <span>10.00</span>
        </h1>
        <Button
          onClick={() => setOpenFiler(!openFilters)}
          className="bg-white text-gray-700 flex space-x-2 hover:bg-white hover:text-[#106fb7]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
            />
          </svg>
          {openFilters ? " Close" : "Filters"}
        </Button>
      </div>
      {/* //form  */}
      <div
        className={`customWidth overflow-hidden overflow-y-scroll sticky  top-32 ${
          openFilters && " max-h-screen"
        }`}
      >
        {openFilters && (
          <form
            onSubmit={handleSubmitForm}
            className={`overflow-hidden transform transition-transform mx-auto origin-left duration-500 ease-in-out ${
              openFilters ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="grid grid-cols-1 overflow-y-scroll bg-white md:grid-cols-2 gap-1">
              {/* Left side */}
              <div className="w-full bg-white p-2 space-y-1">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
                  {/* form date */}
                  <div className="col-span-1 p-2 sm:col-span-2  bg-white shadow-md ">
                    <DatePicker name={"Posted Date From"} />
                  </div>
                  {/* to date */}
                  <div className="col-span-1 p-2 sm:col-span-2  bg-white shadow-md ">
                    <DatePicker name={"Posted Date To"} />
                  </div>

                  <div className="col-span-1 p-2 md:col-span-4  bg-white shadow-md ">
                    <Label className="my-2 px-3"> Tuition Categories</Label>
                    <SelectField
                      options={TuitionCategories}
                      name="Select Category"
                    />
                  </div>

                  <div className="col-span-1 p-2 md:col-span-4 bg-white shadow-md ">
                    <Label className="my-2 px-3"> Student Gender</Label>
                    <SelectField options={Gender} name=" Student Gender" />
                  </div>
                </div>
              </div>
              {/* Right side */}
              <div className="w-full bg-white p-2 space-y-1">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
                  {/* 1/2 inputs */}
                  <div className="col-span-1 p-2 md:col-span-2 bg-white shadow-md ">
                    <Label className="my-2 px-3"> Tuition Type</Label>
                    <SelectField
                      options={TuitionType}
                      name="Select Select Tuition Type"
                    />
                  </div>
                  <div className="col-span-1 p-2 md:col-span-2 bg-white shadow-md ">
                    <Label className="my-2 px-3">
                      {" "}
                      Tutoring Per Days In Week
                    </Label>
                    <SelectField
                      options={TutoringPerDaysInWeek}
                      name="Select Per days"
                    />
                  </div>
                  <div className="col-span-1 p-2 md:col-span-4 bg-white shadow-md ">
                    <Label className="my-2 px-3"> Locations</Label>
                    <SelectField options={Locations} name="Select Location" />
                  </div>
                  <div className="col-span-1 p-2 md:col-span-4 bg-white shadow-md ">
                    <Label className="my-2 px-3"> Class</Label>
                    <SelectField options={Class} name="Select Class" />
                  </div>
                  <div className="col-span-1 p-2 md:col-span-4 bg-white shadow-md ">
                    <Label className="my-2 px-3"> Tutor Gender</Label>
                    <SelectField options={Gender} name="Select Gender" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full bg-white p-2 space-y-1">
              <div className="flex block space-x-2">
                <Button className="primaryBg text-white hover:bg-[#e6b356]">
                  Submit
                </Button>
                <Button className="bg-red-600 text-white">RESET</Button>
              </div>
            </div>
          </form>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
        {allJobs ? (
          allJobs.map((job, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 hover:bg-[#fffded] rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h2 className="font-semibold text-lg mb-2">{job.title}</h2>
              <p className="text-sm text-gray-600">
                <strong>Job ID:</strong> {job.jobId} |{" "}
                <strong>Posted Date:</strong> {job.postedDate}
              </p>

              <div className="mt-4 space-y-2">
                <p className="flex items-center gap-2">
                  <VscTypeHierarchy /> Tuition Type: {job.tuitionType}
                </p>
                <p className="flex items-center gap-2">
                  <FcMoneyTransfer /> Salary: {job.salary}
                </p>
                <p className="flex items-center gap-2">
                  <LuBook /> Subjects: {job.subjects}
                </p>
                <p className="flex items-center gap-2">
                  <IoLocationOutline /> Location: {job.location}
                </p>
              </div>

              <div className="sm:flex sm:justify-between sm:items-center space-y-2 my-3 w-full ">
                <div className="flex space-x-1">
                  <h1 className="flex items-center">
                    {job.preferredTutor === "Any" && <FaTransgender />}
                    {job.preferredTutor === "Female" && <CgGenderFemale />}
                    {job.preferredTutor === "Male" && <CgGenderMale />}
                    <span className="ml-2">{job.preferredTutor}</span> Tutor
                    preferred
                  </h1>
                </div>

                <div className="flex space-x-2">
                  <Link
                    href={`/allJob/${job.jobId}`}
                    className="primaryBg px-3 py-1 rounded hover:bg-[#f39223] text-white font-medium"
                  >
                    Details
                  </Link>
                  <Link
                    className="primaryBorder bg-white px-3 py-1 rounded hover:text-gray-800  hover:bg-[#ffffff] text-gray-500 font-medium"
                    href="https://wa.me/+8801847398047"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apply
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default JobBoard;
