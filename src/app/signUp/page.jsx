import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import loginImg from "@/Assets/login.png";
export default function SignUpPage() {
  return (
    <div className="customWidth bg-[#f3922344] flex justify-center h-screen overflow-x-hidden overflow-y-scroll items-center">
      <div className="w-full max-w-5xl px-8 mx-auto lg:flex  items-center justify-center ">
        <div className="justify-center mx-auto items-center hidden ">
          <Image
            src={loginImg}
            height="100%"
            width="100%"
            alt="loginPage"
            className="shadow-lg"
          />
        </div>
        <Card className="mx-auto min-w-full  shadow-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Sign up</CardTitle>
            <CardDescription>Sign up for for more update</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="FirstName">First Name</Label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="last Name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="number">Number</Label>
                <Input
                  id="number"
                  type="number"
                  placeholder="number"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full primaryBg">
                Login
              </Button>
            </div>
            <div className="flex text-center justify-center my-4">
              {" "}
              <h1>
                {"Don't have account ?"}
                <span>
                  {" "}
                  <Link href="/signUp" className="font-semibold text-blue-500">
                    Signup
                  </Link>{" "}
                </span>
              </h1>
            </div>
          </CardContent>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="FirstName">First Name</Label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="last Name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="number">Number</Label>
                <Input
                  id="number"
                  type="number"
                  placeholder="number"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full primaryBg">
                Login
              </Button>
            </div>
            <div className="flex text-center justify-center my-4">
              {" "}
              <h1>
                {"Don't have account ?"}
                <span>
                  {" "}
                  <Link href="/signUp" className="font-semibold text-blue-500">
                    Signup
                  </Link>{" "}
                </span>
              </h1>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
