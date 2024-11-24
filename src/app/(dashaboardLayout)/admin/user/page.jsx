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
import { Locations } from "@/lib/Country";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

const AllUser = () => {
  const [allUser, setAllUser] = useState(null);
  const [openJob, setOpenJob] = useState(false);

  // Fetch User data
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/User.json");
        const data = await res.json();
        setAllUser(data);
      } catch (err) {
        console.log("Error fetching User:", err);
      }
    };
    fetchUser();
  }, []);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log("User added!");
  };

  const Loading = () => (
    <div className="flex justify-center items-center py-4">
      <span>Loading User...</span>
    </div>
  );

  return (
    <div className="relative w-full p-4">
      {/* Header Section */}
      <div className="flex flex-wrap sticky top-16 items-center justify-between bg-white p-4 shadow-lg rounded-lg mb-4 gap-4">
        <h1 className="text-lg font-semibold text-gray-800">
          Total Users:{" "}
          <span className="text-primary font-bold">{allUser?.length || 0}</span>
        </h1>

        {/* Search Bar */}
        <div className="relative flex-1 max-w-xs">
          <Input
            type="search"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Search Users..."
          />
          <CiSearch
            className="absolute top-1/2 right-3 text-gray-500 transform -translate-y-1/2"
            size={20}
          />
        </div>

        {/* Add User Button */}
        <Button
          onClick={() => setOpenJob(!openJob)}
          className="primaryBg text-white px-4 py-2 rounded-md hover:bg-primary-dark transition"
        >
          {openJob ? "Close User" : "Add User"}
        </Button>
      </div>

      {/* Add User Modal */}
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

            <h2 className="text-lg font-bold text-center mb-4">Add New User</h2>
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

                  {/* Gender Input */}
                  <div className="col-span-12 sm:col-span-6">
                    <Label htmlFor="Gender" className="my-2">
                      Gender
                    </Label>
                    <RadioGroup className="flex my-3" defaultValue="">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Male" id="r2" />
                        <Label htmlFor="r2">Male</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem className="" value="Female" id="r3" />
                        <Label htmlFor="r3">Female</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Others" id="r3" />
                        <Label htmlFor="r3">Others</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  {/* Email Input */}
                  <div className="col-span-12 sm:col-span-6">
                    <Label htmlFor="email" className="my-2">
                      Email
                    </Label>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter Email Address"
                      required
                      className="rounded px-2 py-1 border w-full"
                    />
                  </div>
                  {/* Mobile Input */}
                  <div className="col-span-12 sm:col-span-6">
                    <Label htmlFor="email" className="my-2">
                      Mobile
                    </Label>
                    <Input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Enter Your Number"
                      required
                      className="rounded px-2 py-1 border w-full"
                    />
                  </div>
                  {/* City Input */}
                  <div className="col-span-12 sm:col-span-6">
                    <Label htmlFor="city" className="my-2">
                      City
                    </Label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a City" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {/* <SelectLabel>Fruits</SelectLabel> */}
                          <SelectItem value="CHATTOGRAM">CHATTOGRAM</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  {/* Location Input */}
                  <div className="col-span-12 sm:col-span-6">
                    <Label htmlFor="Locations" className="my-2">
                      Locations
                    </Label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a Locations" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {/* <SelectLabel>Fruits</SelectLabel> */}
                          {Locations.map((value, key) => (
                            <SelectItem key={key} value={value.value}>
                              {value.value}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  {/* Password Input */}
                  <div className="col-span-12 sm:col-span-6">
                    <Label htmlFor="Locations" className="my-2">
                      Locations
                    </Label>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter Your password"
                      required
                      className="rounded px-2 py-1 border w-full"
                    />
                  </div>
                  {/* Confirm Password */}
                  <div className="col-span-12 sm:col-span-6">
                    <Label htmlFor="Locations" className="my-2">
                      Confirm Password
                    </Label>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter Your password"
                      required
                      className="rounded px-2 py-1 border w-full"
                    />
                  </div>
                  {/* Agree to Terms */}
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

      {/* User Listings */}
      <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
        {allUser ? (
          allUser.map((job, index) => (
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

export default AllUser;
