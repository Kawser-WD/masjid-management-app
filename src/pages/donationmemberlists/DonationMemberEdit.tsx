import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Edit2Icon } from "lucide-react";
import Image from "next/image"; // Assuming you are using Next.js
import { DonationMember } from "./DonationMemberTable";

interface EditDonationProps {
  onClick: () => void;
  members: DonationMember;
}

const DonationMemberEdit = ({ members, onClick }: EditDonationProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Edit2Icon className="h-6 w-8 cursor-pointer" onClick={onClick} />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogDescription>
            বিস্তারিত তথ্য নিচে প্রদর্শিত হয়েছে।
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-6 py-4 border border-gray-200 rounded-md">
          <div className="flex flex-col items-center">
            <Image
              src={members?.image}
              alt={members?.name}
              width={100}
              height={100}
              className="rounded-full object-cover border border-green-500"
            />
            <p className="mt-2 font-semibold">{members?.name}</p>
          </div>

          <div className="grid items-center gap-4 px-4">
            <label htmlFor="phone" className="font-medium">
              ফোন
            </label>
            <Input id="phone" value={members?.phone} />
          </div>

          <div className="grid items-center gap-4 px-4">
            <label htmlFor="address" className="font-medium">
              ঠিকানা
            </label>
            <Input id="address" value={members?.address} />
          </div>

          <div className="grid items-center gap-4 px-4">
            <label htmlFor="amount" className="font-medium">
              অনুদানের পরিমাণ
            </label>
            <Input id="amount" value={members?.ammount + " টাকা"} />
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button
              type="button"
              variant="outline"
              className="cursor-pointer bg-green-500 hover:bg-green-600 text-white hover:text-white"
            >
              আপডেট করুন
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default DonationMemberEdit;
