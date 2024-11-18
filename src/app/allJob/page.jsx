"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { DatePicker } from "@/lib/datePicker";
import { SelectField } from "@/lib/Selection";
import {
  Locations,
  Gender,
  TuitionCategories,
  Class,
  TuitionType,
  TutoringPerDaysInWeek
} from "@/lib/Country";
import { Label } from "@/components/ui/label";

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
      <div className="sticky z-50 top-24 w-full left-0 flex py-2 rounded-md items-center justify-between secondaryBg shadow-md px-4">
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
      <div className="customWidth overflow-hidden">
        {openFilters && (
          <form
            onSubmit={handleSubmitForm}
            className={`overflow-hidden transform transition-transform mx-auto origin-left duration-500 ease-in-out ${
              openFilters ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
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
              <div className="w-full bg-white p-2 space-y-1">
                <div className="flex space-x-2">
                  <Button className="primaryBg text-white hover:bg-[#e6b356]">
                    Submit
                  </Button>
                  <Button className="bg-red-600 text-white">RESET</Button>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
      <div className="customWidth mx-auto">
        {allJobs ? <div></div> : <Loading />}
      </div>
    </div>
  );
};

export default JobBoard;
