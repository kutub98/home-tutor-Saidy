"use client";

import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FcMoneyTransfer } from "react-icons/fc";
import { IoLocationOutline } from "react-icons/io5";
import { FaTransgender } from "react-icons/fa6";
import { CgGenderMale, CgGenderFemale } from "react-icons/cg";
import { VscTypeHierarchy } from "react-icons/vsc";
import { LuBook } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SelectField } from "@/lib/Selection";
import {
  Locations,
  Gender,
  TuitionCategories,
  Class,
  TuitionType,
  TutoringPerDaysInWeek
} from "@/lib/Country";
import Link from "next/link";

const AddTuition = () => {
  const [allJobs, setAllJobs] = useState(null);
  const [openJob, setOpenJob] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("/jobs.json");
        const data = await res.json();
        setAllJobs(data);
      } catch (err) {
        console.error("Error fetching jobs:", err);
      }
    };

    fetchJobs();
  }, []);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log("Job submitted!");
  };
  const Loading = () => (
    <div className="flex justify-center items-center py-4">
      <span>Loading jobs...</span>
    </div>
  );

  return (
    <div className="w-full p-1">
      {/* Top Section */}
      <div className="flex flex-wrap sticky top-16 items-center justify-between bg-white p-4 shadow-lg rounded-lg my-4 gap-4">
        <h1 className="text-lg font-semibold text-gray-800">
          Total Jobs:{" "}
          <span className="text-primary font-bold">{allJobs?.length || 0}</span>
        </h1>

        <div className="relative flex-1 max-w-xs">
          <Input
            type="search"
            className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Search jobs..."
          />
          <CiSearch
            className="absolute top-1/2 right-3 text-gray-500 transform -translate-y-1/2"
            size={20}
          />
        </div>

        <Button
          onClick={() => setOpenJob(!openJob)}
          className="primaryBg text-white px-4 py-2 rounded-md hover:bg-primary-dark transition"
        >
          {openJob ? "Close Job" : "Add Jobs"}
        </Button>
      </div>

      {/* Modal */}
      {openJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[999] flex justify-center items-center">
          <div className="bg-white w-11/12 md:w-2/3 lg:w-1/2 p-6 rounded-lg shadow-lg overflow-y-auto max-h-[90vh] relative">
            {/* Close Button */}
            <button
              onClick={() => setOpenJob(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>

            <h2 className="text-lg font-bold text-center mb-4">Add New Job</h2>
            <form onSubmit={handleSubmitForm}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="block mb-2">Tuition Categories</Label>
                  <SelectField options={TuitionCategories} name="category" />
                </div>
                <div>
                  <Label className="block mb-2">Student Gender</Label>
                  <SelectField options={Gender} name="studentGender" />
                </div>
                <div>
                  <Label className="block mb-2">Tuition Type</Label>
                  <SelectField options={TuitionType} name="tuitionType" />
                </div>
                <div>
                  <Label className="block mb-2">Tutoring Days/Week</Label>
                  <SelectField
                    options={TutoringPerDaysInWeek}
                    name="tutoringDays"
                  />
                </div>
                <div>
                  <Label className="block mb-2">Location</Label>
                  <SelectField options={Locations} name="location" />
                </div>
                <div>
                  <Label className="block mb-2">Class</Label>
                  <SelectField options={Class} name="class" />
                </div>
              </div>

              <div className="flex justify-end gap-4 mt-6">
                <Button type="submit" className="bg-primary text-white">
                  Submit
                </Button>
                <Button
                  type="reset"
                  className="bg-red-600 text-white hover:bg-red-700"
                >
                  Reset
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Job Listings */}
      <div className="grid grid-cols-1 xl:grid-cols-2  gap-4">
        {allJobs ? (
          allJobs.map((job, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition"
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
                  <Button
                    className={`${
                      job.slot === "Available"
                        ? "bg-green-500"
                        : "bg-red-500 disabled:"
                    }`}
                  >
                    {job.slot}
                  </Button>
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

export default AddTuition;
