import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import logo from "@/assets/login-logo.png";
const Login = () => {
  return (
    <Card className="sm:min-w-xl w-96 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-md">
      <CardHeader>
        <CardDescription>
          <div className="flex flex-col items-center justify-center">
            <Image
              src={logo}
              alt="logo"
              height={150}
              width={150}
              className="opacity-100 object-cover"
            />
            <span className="text-white">মসজিদ ম্যানেজমেন্ট এপলিকেশন</span>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-6 text-white">
            <div className="flex flex-col space-y-2">
              <label htmlFor="username">ফোন নাম্বার দিন</label>
              <Input id="username" placeholder="০১xxxxxxx" />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="password">পাসওয়ার্ড দিন</label>
              <Input id="password" type="password" placeholder="........" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button
          className="bg-green-600 hover:bg-green-700 hover:text-white cursor-pointer"
          size={"lg"}
        >
          লগইন
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Login;
