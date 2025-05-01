import MonthForDonation from "@/components/MonthForDonation";
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
import { PlusCircleIcon } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { DonationMember } from "./DonationMemberTable";

interface AddDonationProps {
  onClick: () => void;
  members: DonationMember;
}

const AddDonation = ({ onClick, members }: AddDonationProps) => {
  const [date, setDate] = useState<string[]>([]);
  const [amount, setAmount] = useState("");

  // When members change, update amount
  useEffect(() => {
    if (members) {
      setAmount(members.ammount || "");
    }
  }, [members]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // You can submit date and amount here
    const donationData = {
      memberId: members?.id,
      name: members?.name,
      date: date,
      amount: amount,
    };
    console.log("Submitted Donation Data:", donationData);
    setAmount("");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="flex items-center gap-2 cursor-pointer bg-green-500 hover:bg-green-600"
          onClick={onClick}
        >
          <span>এখানে ক্লিক করুন</span>
          <PlusCircleIcon className="h-6 w-8" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-center">মাসিক চাঁদা গ্রহন</DialogTitle>
        </DialogHeader>
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

        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            {/* Date */}
            <MonthForDonation setDate={setDate} />
            {/* Amount */}
            <div className="grid items-center gap-4">
              <label htmlFor="amount">পরিমাণ</label>
              <Input
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="পরিমাণ লিখুন"
              />
            </div>
          </div>

          {/* Submit */}
          <DialogFooter>
            <Button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white hover:text-white cursor-pointer"
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
