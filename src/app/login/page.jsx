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
export default function LoginPage() {
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
        <Card className="mx-auto max-w-sm shadow-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Login</CardTitle>
            <CardDescription>
              Enter your email and password to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
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
