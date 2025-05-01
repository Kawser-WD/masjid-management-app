import MemberDetailsProfile from "@/pages/memberdetailsprofile/MemberDetailsProfile";
import { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MemberDetailsProfile />
    </Suspense>
  );
};

export default page;
