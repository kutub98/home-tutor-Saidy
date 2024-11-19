"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Locations } from "@/lib/Country";
import { IoIosArrowForward } from "react-icons/io";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Link from "next/link";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import signup from "@/Assets/signup.png";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
export default function SignUpPage() {
  return (
    <div className="customWidth mx-auto px-8 py-8">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-12 gap-4 lg:gap-16 items-center">
          {/* Left side */}
          <div className="md:col-span-5 md:block hidden bg-[#fffded]">
            <div>
              <Image
                src={signup}
                width={1000}
                height={375}
                alt="Signup Illustration"
              />
            </div>
          </div>

          {/* Right side */}
          <form className="md:col-span-7 col-span-12  items-center bg-white">
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
                <div className="col-span-12 mt-3 sm:col-span-6">
                  <div className="flex space-x-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        <span>
                          I agree with
                          <Link href={"/"} className="text-blue-400">
                            Terms and privacy Policy
                          </Link>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                {/* SignUp */}
                <div className="col-span-12 items-center block sm:flex justify-between">
                  <Button
                    className="primaryBg mt-3 mb-2 flex w-full sm:w-32  text-white"
                    type=" submit"
                  >
                    Sign up
                    <IoIosArrowForward className="ml-3" />
                  </Button>
                  <span className="mt-3 mb-2">
                    Already have an account ?
                    <Link href={"/login"} className="text-blue-400">
                      sign in
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
