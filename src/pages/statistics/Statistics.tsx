import { DonationAreaChart } from "@/components/DonationAreaChart";
import { DonationBarChart } from "@/components/DonationBarChart";
import { DonationPieChart } from "@/components/DonationPieChart";

const Statistics = () => {
  return (
    <div className="flex sm:flex-row flex-col items-center justify-center gap-4 w-full">
      <DonationAreaChart />
      <DonationBarChart />
      <DonationPieChart />
    </div>
  );
};

export default Statistics;
