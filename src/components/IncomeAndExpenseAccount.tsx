import AddDonation from "@/pages/accoundantescreen/AddDonation";
import BasicCard from "./basiccard/BasicCard";
import DateRangeCost from "./DateRangeCost";
import DateRangeIncome from "./DateRangeIncome";
import AddCost from "@/pages/accoundantescreen/AddCost";
import AmmontOfReserve from "./AmmontOfReserve";
import AmountOfLoan from "./AmountOfLoan";

const IncomeAndExpenseAccount = () => {
  return (
    <>
      {" "}
      <BasicCard title="আয় ও ব্যয় এর হিসাব দেখুন">
        <div className="grid sm:grid-cols-4 grid-cols-1 items-center justify-items-center gap-4 my-5">
          <AmmontOfReserve />
          <AmountOfLoan />
          <AddDonation />
          <AddCost />
        </div>
        <div className="flex sm:flex-row flex-col items-center justify-between">
          <DateRangeIncome />
          <DateRangeCost />
        </div>
      </BasicCard>
    </>
  );
};

export default IncomeAndExpenseAccount;
