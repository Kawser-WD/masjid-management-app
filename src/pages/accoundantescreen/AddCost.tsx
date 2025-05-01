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
import Image from "next/image";
import { useState, ChangeEvent, FormEvent } from "react";
import costLogo from "@/assets/cost.png";
export type Member = {
  name: string;
  phone: string;
  address: string;
  ammount: string;
  image: string;
};

const AddCost = () => {
  const [member, setMember] = useState<Member>({
    name: "",
    phone: "",
    address: "",
    ammount: "",
    image: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setMember((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setMember((prev) => ({
          ...prev,
          image: reader.result as string, // base64 image
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddMember = (e: FormEvent) => {
    e.preventDefault();
    console.log(member);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="w-full h-full flex flex-col items-center justify-center gap-2 rounded-md border border-gray-200 p-4 cursor-pointer text-center">
          <Image
            src={costLogo}
            alt="cost"
            width={50}
            height={50}
            className="object-cover"
          />
          <span>ব্যয় যুক্ত করুন</span>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle className="text-center">ব্যয় যুক্ত করুন</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleAddMember}>
          <div className="grid gap-6 py-4 border border-gray-200 rounded-md">
            <div className="grid items-center gap-4 px-4">
              <label htmlFor="name" className="font-medium">
                ব্যায়ের ধরন
              </label>
              <Input
                id="name"
                value={member.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid items-center gap-4 px-4">
              <label htmlFor="ammount" className="font-medium">
                ব্যায়ের পরিমাণ
              </label>
              <Input
                id="ammount"
                value={member.ammount}
                onChange={handleInputChange}
              />
            </div>

            <div className="grid items-center gap-4 px-4">
              <label htmlFor="image" className="font-medium">
                প্রয়োজনীয় ছবি যুক্ত করুন
              </label>
              <Input
                id="image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>

            {member?.image && (
              <div className="flex justify-center px-4">
                <Image
                  src={member?.image}
                  alt="Uploaded Preview"
                  className="h-24 w-24 object-cover rounded-full"
                />
              </div>
            )}
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
export default AddCost;
