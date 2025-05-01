// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogClose,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { EyeIcon } from "lucide-react";
// import Image from "next/image"; // Assuming you are using Next.js

// const member = {
//   id: 1,
//   name: "কামরুল হাসান কাউসার",
//   phone: "০১৭০০০০০০০১",
//   address: "ঢাকা, বাংলাদেশ",
//   ammount: "১০০০",
//   image:
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTifunhA6ltTu6tVc5-fOv2g7SwTf-dUW89c5Q5eRygq53GmBb1vm5_Kurx-Mg1NwbzREU&usqp=CAU",
// };

// export function DonationMemberDetails({ members, onClick }) {
//   console.log("member:", members);
//   return (
//     <Dialog>
//       <DialogTrigger asChild className="cursor-pointer">
//         <EyeIcon className="h-6 w-8" onClick={onClick} />
//       </DialogTrigger>
//       <DialogContent className="sm:max-w-[550px]">
//         <DialogHeader>
//           <DialogDescription>
//             বিস্তারিত তথ্য নিচে প্রদর্শিত হয়েছে।
//           </DialogDescription>
//         </DialogHeader>

//         <div className="grid gap-6 py-4 border border-gray-200 rounded-md">
//           <div className="flex flex-col items-center">
//             <Image
//               src={members?.image}
//               alt={members?.name}
//               width={100}
//               height={100}
//               className="rounded-full object-cover border border-green-500"
//             />
//             <p className="mt-2 font-semibold">{members?.name}</p>
//           </div>

//           <div className="grid items-center gap-4 px-4">
//             <label htmlFor="phone" className="font-medium">
//               ফোন
//             </label>
//             <Input id="phone" value={members?.phone} readOnly />
//           </div>

//           <div className="grid items-center gap-4 px-4">
//             <label htmlFor="address" className="font-medium">
//               ঠিকানা
//             </label>
//             <Input id="address" value={members?.address} readOnly />
//           </div>

//           <div className="grid items-center gap-4 px-4">
//             <label htmlFor="amount" className="font-medium">
//               অনুদানের পরিমাণ
//             </label>
//             <Input id="amount" value={members?.ammount + " টাকা"} readOnly />
//           </div>
//         </div>

//         <DialogFooter>
//           <DialogClose asChild>
//             <Button
//               type="button"
//               variant="outline"
//               className="cursor-pointer bg-green-500 hover:bg-green-600 text-white hover:text-white"
//             >
//               বন্ধ করুন
//             </Button>
//           </DialogClose>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   );
// }

const DonationMemberDetails = () => {
  return <div>DonationMemberDetails</div>;
};

export default DonationMemberDetails;
