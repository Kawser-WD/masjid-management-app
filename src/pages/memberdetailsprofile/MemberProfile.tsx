import MemberDonationHistory from "@/components/MemberDonationHistory";
import MemberDetailsProfile from "./MemberDetailsProfile";
import BasicCard from "@/components/basiccard/BasicCard";

const MemberProfile = () => {
  return (
    <BasicCard title="অনুদান দাতার বিস্তারিত তথ্য নিচে প্রদর্শিত করা হয়েছে।">
      <div className="space-y-10">
        <MemberDetailsProfile />
        <MemberDonationHistory />
      </div>
    </BasicCard>
  );
};

export default MemberProfile;
