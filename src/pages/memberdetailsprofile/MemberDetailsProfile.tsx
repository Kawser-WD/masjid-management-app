"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { DonationMember } from "../donationmemberlists/DonationMemberTable";

const MemberDetailsProfile = () => {
  const searchParams = useSearchParams();
  const [member, setMember] = useState<DonationMember | null>(null);

  useEffect(() => {
    const data = searchParams!.get("data");
    if (data) {
      try {
        const parsed = JSON.parse(data);
        setMember(parsed);
        console.log("member:", parsed);
      } catch (error) {
        console.error("Invalid JSON in query param:", error);
      }
    }
  }, [searchParams]);

  return (
    <div className="max-w-md mx-auto mt-6">
      {member ? (
        <div className="space-y-4">
          <div>
            {member.image && (
              <div className="mt-4">
                <Image
                  src={member.image}
                  alt="Member"
                  className="w-full h-auto rounded-xl border border-gray-200 shadow-sm"
                  width={200}
                  height={200}
                />
              </div>
            )}
          </div>
          <div className="flex items-center justify-center">
            <div className="flex flex-col gap-2">
              <div className="text-lg font-semibold text-gray-800">
                নাম:{" "}
                <span className="font-normal text-gray-600">{member.name}</span>
              </div>
              <div className="text-lg font-semibold text-gray-800">
                ফোন:{" "}
                <span className="font-normal text-gray-600">
                  {member.phone}
                </span>
              </div>
              <div className="text-lg font-semibold text-gray-800">
                ঠিকানা:{" "}
                <span className="font-normal text-gray-600">
                  {member.address}
                </span>
              </div>
              <div className="text-lg font-semibold text-gray-800">
                পরিমাণ:{" "}
                <span className="font-normal text-green-600">
                  {member.ammount} টাকা
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-gray-500 text-center">তথ্য লোড হচ্ছে...</p>
      )}
    </div>
  );
};

export default MemberDetailsProfile;
