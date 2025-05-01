import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { PlusCircleIcon } from "lucide-react";
import Image from "next/image";
import { useState, ChangeEvent, FormEvent } from "react";

export type Member = {
  name: string;
  phone: string;
  address: string;
  ammount: string;
  image: string;
};

const AddDonationMember = () => {
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
        <Button
          variant="default"
          className="flex items-center gap-2.5 cursor-pointer"
        >
          নতুন সদস্য যুক্ত করুন
          <PlusCircleIcon className="h-6 w-8 cursor-pointer" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogDescription>নতুন সদস্য যুক্ত করুন</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleAddMember}>
          <div className="grid gap-6 py-4 border border-gray-200 rounded-md">
            <div className="grid items-center gap-4 px-4">
              <label htmlFor="name" className="font-medium">
                নাম
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
              <label htmlFor="ammount" className="font-medium">
                অনুদানের পরিমাণ
              </label>
              <Input
                id="ammount"
                value={member.ammount}
                onChange={handleInputChange}
              />
            </div>

            <div className="grid items-center gap-4 px-4">
              <label htmlFor="image" className="font-medium">
                ছবি যুক্ত করুন
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

          <DialogFooter>
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

export default AddDonationMember;
