"use client";

import { cn } from "@/lib/utils";
import { addDays, format, isAfter, isBefore, isEqual } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { DateRange } from "react-day-picker";
import { Calendar } from "./ui/calendar";

type Income = {
  id: number;
  amount: number;
  date: Date;
};

const dummyIncomeData: Income[] = [
  { id: 1, amount: 1000, date: new Date(2025, 0, 21) },
  { id: 2, amount: 1500, date: new Date(2025, 0, 25) },
  { id: 3, amount: 2000, date: new Date(2025, 1, 5) },
  { id: 4, amount: 500, date: new Date(2025, 1, 10) },
  { id: 5, amount: 800, date: new Date(2025, 1, 15) },
];

const DateRangeIncome = () => {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2025, 0, 20),
    to: addDays(new Date(2025, 0, 20), 20),
  });

  // Filter incomes based on selected range
  const filteredIncome = dummyIncomeData.filter((income) => {
    if (!date?.from || !date?.to) return false;

    return (
      (isAfter(income.date, date.from) || isEqual(income.date, date.from)) &&
      (isBefore(income.date, date.to) || isEqual(income.date, date.to))
    );
  });

  const totalIncome = filteredIncome.reduce(
    (sum, income) => sum + income.amount,
    0
  );

  return (
    <div className="mt-20 px-4">
      <span className="font-semibold">
        তারিখের রেঞ্জ অনুযায়ী আয়ের হিসাব দেখতে তারিখ নির্বাচন করুন -
      </span>
      <div className="grid gap-2 py-5">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant={"outline"}
              className={cn(
                "w-[300px] justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date?.from ? (
                date.to ? (
                  <>
                    {format(date.from, "LLL dd, y")} -{" "}
                    {format(date.to, "LLL dd, y")}
                  </>
                ) : (
                  format(date.from, "LLL dd, y")
                )
              ) : (
                <span>তারিখ নির্বাচন করুন</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={setDate}
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Income Data */}
      <div className="mt-8">
        {date?.from && date?.to ? (
          <>
            <h2 className="text-lg font-bold mb-4">
              মোট আয়: {totalIncome} টাকা
            </h2>
            <div className="space-y-2">
              {filteredIncome.length > 0 ? (
                filteredIncome.map((income) => (
                  <div
                    key={income.id}
                    className="border p-3 rounded-md shadow-sm"
                  >
                    <p>তারিখ: {format(income.date, "PPP")}</p>
                    <p>আয়: {income.amount} টাকা</p>
                  </div>
                ))
              ) : (
                <p>এই রেঞ্জে কোনো আয়ের তথ্য পাওয়া যায়নি।</p>
              )}
            </div>
          </>
        ) : (
          <p className="text-gray-500">
            দয়া করে একটি সম্পূর্ণ তারিখের রেঞ্জ নির্বাচন করুন।
          </p>
        )}
      </div>
    </div>
  );
};

export default DateRangeIncome;
