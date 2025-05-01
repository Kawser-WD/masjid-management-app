"use client";
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
import { useState } from "react";
import { useRouter } from "next/navigation";

type User = {
  phoneNumber: string;
  password: string;
};
const Login: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User>({
    phoneNumber: "0123456789",
    password: "12345678",
  });

  const router = useRouter();

  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      if (user) {
        // Set cookie (expires in 1 day)
        document.cookie = `user=${encodeURIComponent(
          JSON.stringify(user)
        )}; path=/; max-age=86400`; // 86400 = 1 day in seconds

        setUser({ phoneNumber: "", password: "" });
        router.push("/");
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

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
        <form onSubmit={handleLoginSubmit}>
          <div className="grid w-full items-center gap-6 text-white">
            <div className="flex flex-col space-y-2">
              <label htmlFor="username">ফোন নাম্বার দিন</label>
              <Input
                id="username"
                placeholder="০১xxxxxxx"
                type="text"
                value={user.phoneNumber}
                onChange={(e) =>
                  setUser({ ...user, phoneNumber: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="password">পাসওয়ার্ড দিন</label>
              <Input
                id="password"
                type="password"
                placeholder="........"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>
          </div>
          <CardFooter className="flex justify-center mt-5">
            <Button
              className="bg-green-600 hover:bg-green-700 hover:text-white cursor-pointer"
              size={"lg"}
              disabled={isLoading}
              type="submit"
            >
              {isLoading ? "লগইন হচ্ছে..." : "লগইন"}
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
};

export default Login;
