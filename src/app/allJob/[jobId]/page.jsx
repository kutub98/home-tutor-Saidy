"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { VscTypeHierarchy } from "react-icons/vsc";
import { FcMoneyTransfer } from "react-icons/fc";
import { IoLocationOutline } from "react-icons/io5";
import { FaTransgender } from "react-icons/fa6";
import { CgGenderMale } from "react-icons/cg";
import { CgGenderFemale } from "react-icons/cg";
import { LuBook } from "react-icons/lu";
import { IoChevronBackOutline } from "react-icons/io5";
import Link from "next/link";
const JobDetails = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    if (jobId) {
      async function fetchJobDetails() {
        try {
          const res = await fetch(`/jobs.json`);
          const data = await res.json();
          const selectedJob = data.find((job) => job.jobId === jobId);
          setJob(selectedJob);
        } catch (error) {
          console.error("Error fetching job details:", error);
        }
      }
      fetchJobDetails();
    }
  }, [jobId]);

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div className="customWidth mx-auto px-8 py-8">
      <div className="bg-gray-50 hover:bg-[#f8b7061c] p-3 rounded shadow-lg">
        <div className="flex justify-between">
          <h1 className=" font-bold text-base my-2">{job.title}</h1>
          <Link
            href="/allJob"
            className="px-3 py-1 rounded flex space-x-2 bg-white hover:border-white items-center  text-gray-500 font-medium"
          >
            <IoChevronBackOutline />
            Back
          </Link>
        </div>
        <div className="">
          <div className="flex space-x-1 items-center my-2 text-gray-500">
            <h1 className="flex flex-row space-x-2">
              <span>Job Id: {job.jobId} </span>
              <span>||</span>
              <span> Posted Date: {job.postedDate}</span>
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {/* tuition type */}
          <div className="">
            <div className="flex space-x-1 items-center">
              <VscTypeHierarchy />
              <span>Tuition Type</span>
            </div>
            <h1 className="md:ml-5"> {job.tuitionType}</h1>
          </div>
          {/* salary */}
          <div className="">
            <div className="flex space-x-1 items-center">
              <FcMoneyTransfer /> <span>Salary</span>
            </div>
            <h1 className="md:ml-5"> {job.salary}</h1>
          </div>
          {/* subject */}
          <div className="">
            <div className="flex space-x-1 items-center">
              <LuBook /> <span>Subject</span>
            </div>
            <h1 className="md:ml-5"> {job.subjects}</h1>
          </div>
          {/* location  */}
          <div className="">
            <div className="flex space-x-1 items-center">
              <IoLocationOutline /> <span>Location</span>
            </div>
            <h1 className="md:ml-5"> {job.location}</h1>
          </div>
        </div>
        {/* preferredTutor tutor  */}
        <div className="flex justify-between space-y-2 my-3">
          <div className="flex space-x-1">
            <h1 className="flex items-center">
              {job.preferredTutor === "Any" && <FaTransgender />}
              {job.preferredTutor === "Female" && <CgGenderFemale />}
              {job.preferredTutor === "Male" && <CgGenderMale />}
              <span className="ml-2">{job.preferredTutor}</span> Tutor preferred
            </h1>
          </div>
          <div className="flex space-x-2">
            {" "}
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
    </div>
  );
};

export default JobDetails;
