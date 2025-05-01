import BasicCard from "@/components/basiccard/BasicCard";
import DonationMemberTable from "./DonationMemberTable";

const DonationMemberLists = () => {
  return (
    <div>
      <BasicCard title="মাসিক চাঁদার সদস্যবৃন্দ">
        <DonationMemberTable />
      </BasicCard>
    </div>
  );
};

export default DonationMemberLists;
