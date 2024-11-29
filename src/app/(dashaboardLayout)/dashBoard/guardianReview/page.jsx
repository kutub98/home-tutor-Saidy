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
import { Textarea } from "@/components/ui/textarea";
import { CiImageOn } from "react-icons/ci";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import Image from "next/image";
const AllGuardianReview = () => {
  const [allGuardianReview, setAllGuardianReview] = useState(null);
  const [openJob, setOpenJob] = useState(false);
  const [preview, setPreview] = useState(null);

  // Fetch GuardianReview data
  useEffect(() => {
    const fetchGuardianReview = async () => {
      try {
        const res = await fetch("/GuardianReview.json");
        const data = await res.json();
        setAllGuardianReview(data);
      } catch (err) {
        console.log("Error fetching GuardianReview:", err);
      }
    };
    fetchGuardianReview();
  }, []);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log("GuardianReview added!");
  };

  const Loading = () => (
    <div className="flex justify-center items-center py-4">
      <span>Loading GuardianReview...</span>
    </div>
  );

  const handleFileChange = () => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  return (
    <div className="relative w-full p-4">
      {/* Header Section */}
      <div className="flex flex-wrap sticky top-16 items-center justify-between bg-white p-4 shadow-lg rounded-lg mb-4 gap-4">
        <h1 className="text-lg font-semibold text-gray-800">
          Total GuardianReviews:{" "}
          <span className="text-primary font-bold">
            {allGuardianReview?.length || 0}
          </span>
        </h1>

        {/* Search Bar */}
        <div className="relative flex-1 max-w-xs">
          <Input
            type="search"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Search GuardianReviews..."
          />
          <CiSearch
            className="absolute top-1/2 right-3 text-gray-500 transform -translate-y-1/2"
            size={20}
          />
        </div>

        {/* Add GuardianReview Button */}
        <Button
          onClick={() => setOpenJob(!openJob)}
          className="primaryBg text-white px-4 py-2 rounded-md hover:bg-primary-dark transition"
        >
          {openJob ? "Close GuardianReview" : "Add GuardianReview"}
        </Button>
      </div>

      {/* Add GuardianReview Modal */}
      {openJob && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[999] flex justify-center items-center overflow-hidden"
          aria-modal="true"
          role="dialog"
        >
          <div className="bg-white w-11/12 sm:w-3/4 lg:w-1/2 p-6 rounded-lg shadow-lg max-h-[90vh] overflow-y-auto relative">
            {/* Close Button */}
            <button
              onClick={() => setOpenJob(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 focus:outline-none"
              aria-label="Close modal"
            >
              ✕
            </button>

            <h2 className="text-lg font-bold text-center mb-4">
              Add New GuardianReview
            </h2>
            <form onSubmit={handleSubmitForm} className="">
              <div className="w-full bg-white rounded-md shadow-xl border p-4 overflow-hidden">
                <div className="grid grid-cols-12 gap-2 items-center">
                  {/* Full Name Input */}
                  <div className="col-span-12 sm:col-span-6">
                    <Label htmlFor="fullName" className="my-2">
                      Full Name
                    </Label>
                    <Input
                      type="text"
                      name="fullName"
                      id="fullName"
                      placeholder="Enter Full Name"
                      required
                      className="rounded px-2 py-1 border w-full"
                    />
                  </div>

                  <div className="col-span-12 sm:col-span-6 row-span-5">
                    {preview ? (
                      <div className="mt-4 w-full max-w-52 h-full max-h-52 mx-auto">
                        <Image
                          width={100}
                          height={100}
                          src={preview}
                          alt="Selected Preview"
                          className="w-full h-auto rounded-lg border"
                        />
                      </div>
                    ) : (
                      <div className="mt-4">
                        <CiImageOn className="w-full h-52 opacity-95" />
                      </div>
                    )}

                    <Label
                      htmlFor="imgFile"
                      className="my-2 flex flex-col items-center cursor-pointer text-center border rounded-lg px-4 py-2 bg-gray-100 hover:bg-gray-200 transition"
                    >
                      <span className="text-gray-700">Upload Image</span>
                      <Input
                        type="file"
                        name="imgFile"
                        id="imgFile"
                        required
                        accept="image/*"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                    </Label>
                  </div>

                  {/* Address Input */}
                  <div className="col-span-12 sm:col-span-6">
                    <Label htmlFor="Address" className="my-2">
                      Address
                    </Label>
                    <Input
                      type="text"
                      name="Address"
                      id="Address"
                      placeholder="Enter Address"
                      required
                      className="rounded px-2 py-1 border w-full"
                    />
                  </div>
                  {/* Review Input */}
                  <div className="col-span-12 sm:col-span-6">
                    <Label htmlFor="Address" className="my-2">
                      Review
                    </Label>
                    <Textarea
                      name="Address"
                      id="Address"
                      placeholder="Write your thought"
                      required
                      className="rounded px-2 py-1 border w-full"
                    />
                  </div>
                  <div className="col-span-12 mt-3">
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
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* GuardianReview Listings */}
      <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
        {allGuardianReview ? (
          allGuardianReview.map((job, index) => (
            <div
              key={index}
              className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition"
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

export default AllGuardianReview;
