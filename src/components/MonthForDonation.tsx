import { useCallback, useEffect, useState } from "react";
import { Checkbox } from "./ui/checkbox";
import { Select, SelectContent, SelectTrigger, SelectValue } from "./ui/select";
interface MonthForDonationProps {
  setDate: React.Dispatch<React.SetStateAction<string[]>>;
}

export const baseMonths = [
  "জানুয়ারি",
  "ফেব্রুয়ারি",
  "মার্চ",
  "এপ্রিল",
  "মে",
  "জুন",
  "জুলাই",
  "অগাস্ট",
  "সেপ্টেম্বর",
  "অক্টোবর",
  "নভেম্বর",
  "ডিসেম্বর",
];

const getMonthYearOptions = () => {
  const currentYear = new Date().getFullYear();
  const years = [currentYear - 1, currentYear];
  const result: { label: string; value: string }[] = [];

  years.forEach((year) => {
    baseMonths.forEach((month, index) => {
      result.push({
        label: `${month} ${year}`,
        value: `${year}-${(index + 1).toString().padStart(2, "0")}`,
      });
    });
  });

  return result;
};

const getCurrentMonthValue = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  return `${year}-${month}`;
};

const MonthForDonation: React.FC<MonthForDonationProps> = ({ setDate }) => {
  const monthOptions = getMonthYearOptions();
  const [selectedMonths, setSelectedMonths] = useState<string[]>([
    getCurrentMonthValue(),
  ]);
  const toggleMonth = (value: string) => {
    setSelectedMonths((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };
  const getLabelByValue = useCallback(
    (value: string) => {
      return monthOptions.find((m) => m.value === value)?.label || value;
    },
    [monthOptions]
  );
  useEffect(() => {
    setDate(selectedMonths);
  }, [selectedMonths, setDate]);
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue
          placeholder={selectedMonths.length > 0 ? "" : "মাস নির্বাচন করুন"}
        >
          {selectedMonths.map((month) => (
            <span key={month}>{getLabelByValue(month)}</span>
          ))}
        </SelectValue>
        <div className="flex flex-wrap gap-1.5 items-center justify-center">
          {selectedMonths.length > 0 &&
            selectedMonths.map((month) => (
              <span key={month}>{getLabelByValue(month)}</span>
            ))}
        </div>
      </SelectTrigger>
      <SelectContent>
        {monthOptions.map((month) => (
          <div
            key={month.label}
            className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100 cursor-pointer"
            onClick={() => toggleMonth(month.value)}
          >
            <Checkbox
              checked={selectedMonths.includes(month.value)}
              onCheckedChange={() => toggleMonth(month.value)}
            />
            <span>{month.label}</span>
          </div>
        ))}
      </SelectContent>
    </Select>
  );
};

export default MonthForDonation;
