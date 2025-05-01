"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, ChangeEvent, FormEvent } from "react";
import donationLogo from "@/assets/earn.png";
import Image from "next/image";
export type Member = {
  name: string;
  phone: string;
  address: string;
  ammount: string;
  ammountType: string;
};

const AddDonation = () => {
  const [member, setMember] = useState<Member>({
    name: "",
    phone: "",
    address: "",
    ammount: "",
    ammountType: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setMember((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(member);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="w-full h-full flex flex-col items-center justify-center gap-2 rounded-md border border-gray-200 p-4 cursor-pointer text-center">
          <Image
            src={donationLogo}
            alt="donation"
            width={50}
            height={50}
            className="object-cover"
          />
          <span className="">আয় যুক্ত করুন</span>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle className="text-center">আয় যুক্ত করুন</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 py-4 border border-gray-200 rounded-md">
            <div className="grid items-center gap-4 px-4">
              <label htmlFor="name" className="font-medium">
                দাতার নাম
              </label>
              <Input
                id="name"
                value={member.name}
                onChange={handleInputChange}
              />
            </div>

            <div className="grid items-center gap-4 px-4">
              <label htmlFor="phone" className="font-medium">
                ফোন
              </label>
              <Input
                id="phone"
                value={member.phone}
                onChange={handleInputChange}
              />
            </div>

            <div className="grid items-center gap-4 px-4">
              <label htmlFor="address" className="font-medium">
                ঠিকানা
              </label>
              <Input
                id="address"
                value={member.address}
                onChange={handleInputChange}
              />
            </div>

            <div className="grid items-center gap-4 px-4">
              <label htmlFor="ammountType" className="font-medium">
                অনুদানের ধরন
              </label>
              <Textarea
                id="ammountType"
                value={member.ammountType}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid items-center gap-4 px-4">
              <label htmlFor="ammount" className="font-medium">
                অনুদানের পরিমাণ
              </label>
              <Input
                id="ammount"
                value={member.ammount}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <DialogFooter className="py-4">
            <Button
              type="submit"
              className="cursor-pointer bg-green-500 hover:bg-green-600 text-white hover:text-white"
            >
              সেভ করুন
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddDonation;
