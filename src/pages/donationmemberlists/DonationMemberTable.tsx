"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { EyeIcon, TrashIcon } from "lucide-react";
import DonationMemberEdit from "./DonationMemberEdit";
import Swal from "sweetalert2";

import AddDonation from "./AddDonation";
import Link from "next/link";
import AddDonationMember from "./AddDonationMember";
export interface DonationMember {
  id: number;
  name: string;
  phone: string;
  address: string;
  ammount: string;
  image: string;
}

const data = [
  {
    id: 1,
    name: "কামরুল হাসান কাউসার",
    phone: "০১৭০০০০০০০১",
    address: "ঢাকা, বাংলাদেশ",
    ammount: "১০০০",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTifunhA6ltTu6tVc5-fOv2g7SwTf-dUW89c5Q5eRygq53GmBb1vm5_Kurx-Mg1NwbzREU&usqp=CAU",
  },
  {
    id: 2,
    name: "রহিম উদ্দিন",
    phone: "০১৭০০০০০০০২",
    address: "চট্টগ্রাম, বাংলাদেশ",
    ammount: "১২০০",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTifunhA6ltTu6tVc5-fOv2g7SwTf-dUW89c5Q5eRygq53GmBb1vm5_Kurx-Mg1NwbzREU&usqp=CAU",
  },
  {
    id: 3,
    name: "করিম হোসেন",
    phone: "০১৭০০০০০০০৩",
    address: "খুলনা, বাংলাদেশ",
    ammount: "৯৫০",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTifunhA6ltTu6tVc5-fOv2g7SwTf-dUW89c5Q5eRygq53GmBb1vm5_Kurx-Mg1NwbzREU&usqp=CAU",
  },
  {
    id: 4,
    name: "জান্নাতুল ফেরদৌস",
    phone: "০১৭০০০০০০০৪",
    address: "সিলেট, বাংলাদেশ",
    ammount: "১১০০",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTifunhA6ltTu6tVc5-fOv2g7SwTf-dUW89c5Q5eRygq53GmBb1vm5_Kurx-Mg1NwbzREU&usqp=CAU",
  },
  {
    id: 5,
    name: "মেহেদী হাসান",
    phone: "০১৭০০০০০০০৫",
    address: "রাজশাহী, বাংলাদেশ",
    ammount: "১৩০০",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTifunhA6ltTu6tVc5-fOv2g7SwTf-dUW89c5Q5eRygq53GmBb1vm5_Kurx-Mg1NwbzREU&usqp=CAU",
  },
  {
    id: 6,
    name: "মিতু আক্তার",
    phone: "০১৭০০০০০০০৬",
    address: "বরিশাল, বাংলাদেশ",
    ammount: "১০৫০",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTifunhA6ltTu6tVc5-fOv2g7SwTf-dUW89c5Q5eRygq53GmBb1vm5_Kurx-Mg1NwbzREU&usqp=CAU",
  },
  {
    id: 7,
    name: "নাইম রহমান",
    phone: "০১৭০০০০০০০৭",
    address: "রংপুর, বাংলাদেশ",
    ammount: "৯৮০",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTifunhA6ltTu6tVc5-fOv2g7SwTf-dUW89c5Q5eRygq53GmBb1vm5_Kurx-Mg1NwbzREU&usqp=CAU",
  },
  {
    id: 8,
    name: "তানিয়া সুলতানা",
    phone: "০১৭০০০০০০০৮",
    address: "ময়মনসিংহ, বাংলাদেশ",
    ammount: "১০২০",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTifunhA6ltTu6tVc5-fOv2g7SwTf-dUW89c5Q5eRygq53GmBb1vm5_Kurx-Mg1NwbzREU&usqp=CAU",
  },
  {
    id: 9,
    name: "জাহিদ হাসান",
    phone: "০১৭০০০০০০০৯",
    address: "কুমিল্লা, বাংলাদেশ",
    ammount: "১৫০০",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTifunhA6ltTu6tVc5-fOv2g7SwTf-dUW89c5Q5eRygq53GmBb1vm5_Kurx-Mg1NwbzREU&usqp=CAU",
  },
  {
    id: 10,
    name: "সাদিয়া আফরিন",
    phone: "০১৭০০০০০০১০",
    address: "নোয়াখালী, বাংলাদেশ",
    ammount: "৯৯০",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTifunhA6ltTu6tVc5-fOv2g7SwTf-dUW89c5Q5eRygq53GmBb1vm5_Kurx-Mg1NwbzREU&usqp=CAU",
  },
  {
    id: 11,
    name: "আসিফ হোসেন",
    phone: "০১৭০০০০০০১১",
    address: "গাজীপুর, বাংলাদেশ",
    ammount: "১০১০",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTifunhA6ltTu6tVc5-fOv2g7SwTf-dUW89c5Q5eRygq53GmBb1vm5_Kurx-Mg1NwbzREU&usqp=CAU",
  },
  {
    id: 12,
    name: "রফিক ইসলাম",
    phone: "০১৭০০০০০০১২",
    address: "নারায়ণগঞ্জ, বাংলাদেশ",
    ammount: "১০৭০",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTifunhA6ltTu6tVc5-fOv2g7SwTf-dUW89c5Q5eRygq53GmBb1vm5_Kurx-Mg1NwbzREU&usqp=CAU",
  },
  {
    id: 13,
    name: "সুমি আক্তার",
    phone: "০১৭০০০০০০১৩",
    address: "টাঙ্গাইল, বাংলাদেশ",
    ammount: "১২৫০",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTifunhA6ltTu6tVc5-fOv2g7SwTf-dUW89c5Q5eRygq53GmBb1vm5_Kurx-Mg1NwbzREU&usqp=CAU",
  },
  {
    id: 14,
    name: "মামুন খান",
    phone: "০১৭০০০০০০১৪",
    address: "বগুড়া, বাংলাদেশ",
    ammount: "৯৭০",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTifunhA6ltTu6tVc5-fOv2g7SwTf-dUW89c5Q5eRygq53GmBb1vm5_Kurx-Mg1NwbzREU&usqp=CAU",
  },
  {
    id: 15,
    name: "শীলা রাণী",
    phone: "০১৭০০০০০০১৫",
    address: "যশোর, বাংলাদেশ",
    ammount: "১০৮০",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTifunhA6ltTu6tVc5-fOv2g7SwTf-dUW89c5Q5eRygq53GmBb1vm5_Kurx-Mg1NwbzREU&usqp=CAU",
  },
  {
    id: 16,
    name: "হাফিজুর রহমান",
    phone: "০১৭০০০০০০১৬",
    address: "পাবনা, বাংলাদেশ",
    ammount: "৮৯০",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTifunhA6ltTu6tVc5-fOv2g7SwTf-dUW89c5Q5eRygq53GmBb1vm5_Kurx-Mg1NwbzREU&usqp=CAU",
  },
  {
    id: 17,
    name: "লামিয়া রহমান",
    phone: "০১৭০০০০০০১৭",
    address: "সাতক্ষীরা, বাংলাদেশ",
    ammount: "১১২০",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTifunhA6ltTu6tVc5-fOv2g7SwTf-dUW89c5Q5eRygq53GmBb1vm5_Kurx-Mg1NwbzREU&usqp=CAU",
  },
  {
    id: 18,
    name: "রুবেল মিয়া",
    phone: "০১৭০০০০০০১৮",
    address: "ফরিদপুর, বাংলাদেশ",
    ammount: "৯৪০",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTifunhA6ltTu6tVc5-fOv2g7SwTf-dUW89c5Q5eRygq53GmBb1vm5_Kurx-Mg1NwbzREU&usqp=CAU",
  },
  {
    id: 19,
    name: "নাসিমা আক্তার",
    phone: "০১৭০০০০০০১৯",
    address: "কুষ্টিয়া, বাংলাদেশ",
    ammount: "১১৫০",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTifunhA6ltTu6tVc5-fOv2g7SwTf-dUW89c5Q5eRygq53GmBb1vm5_Kurx-Mg1NwbzREU&usqp=CAU",
  },
  {
    id: 20,
    name: "তানভীর আলম",
    phone: "০১৭০০০০০০২০",
    address: "দিনাজপুর, বাংলাদেশ",
    ammount: "৯৮০",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTifunhA6ltTu6tVc5-fOv2g7SwTf-dUW89c5Q5eRygq53GmBb1vm5_Kurx-Mg1NwbzREU&usqp=CAU",
  },
];

export type MemberData = {
  id: number;
  name: string;
  phone: string;
  address: string;
  ammount: string;
  image: string;
};

const handleDeleteMember = () => {
  Swal.fire({
    title: "আপনি কি নিশ্চিত?",
    text: "এই সদস্যটিকে ডিলিট করে ফেলা হবে এবং ফিরিয়ে আনা সম্ভব হবে না!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "হ্যাঁ, ডিলিট করে ফেলুন!",
    cancelButtonText: "না, বাতিল করুন",
  }).then((result) => {
    if (result.isConfirmed) {
      // your delete logic here
      Swal.fire(
        "ডিলিট করে ফেলা হয়েছে!",
        "সদস্যটি সফলভাবে ডিলিট করে ফেলা হয়েছে।",
        "success"
      );
    }
  });
};

const DonationMemberTable = () => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [selectedMember, setSelectedMember] = React.useState(
    {} as DonationMember
  );

  const handleSelectMember = (member: DonationMember) => {
    setSelectedMember(member);
  };

  const columns: ColumnDef<MemberData>[] = [
    {
      accessorKey: "image",
      header: "ছবি",
      cell: ({ row }) => {
        const imageUrl = row.getValue("image") as string;
        return (
          <Image
            src={imageUrl}
            alt="ছবি"
            width={48}
            height={48}
            className="rounded-full object-cover border border-teal-500"
          />
        );
      },
    },
    {
      accessorKey: "name",
      header: "নাম",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("name")}</div>
      ),
    },
    {
      accessorKey: "phone",
      header: "মোবাইল নম্বর",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("phone")}</div>
      ),
    },
    {
      accessorKey: "address",
      header: "ঠিকানা",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("address")}</div>
      ),
    },
    {
      accessorKey: "ammount",
      header: "চাঁদার পরিমাণ",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("ammount")} টাকা</div>
      ),
    },
    {
      accessorKey: "donation",
      header: "চাঁদা গ্রহন করুন",
      cell: ({ row }) => (
        <div className="flex items-center gap-2.5">
          <AddDonation
            onClick={() => handleSelectMember(row.original)}
            members={selectedMember}
          />
        </div>
      ),
    },
    {
      accessorKey: "action",
      header: "অ্যাকশন",
      cell: ({ row }) => (
        <div className="flex items-center gap-2.5">
          <Link
            href={{
              pathname: `/memberlists/${row.original.id}`,
              query: {
                data: JSON.stringify({
                  name: row.original.name,
                  phone: row.original.phone,
                  address: row.original.address,
                  amount: row.original.ammount,
                  image: row.original.image,
                }),
              },
            }}
          >
            <EyeIcon className="h-6 w-8" />
          </Link>
          <DonationMemberEdit
            onClick={() => handleSelectMember(row.original)}
            members={selectedMember}
          />
          <TrashIcon
            className="h-6 w-8 cursor-pointer"
            onClick={handleDeleteMember}
          />
        </div>
      ),
    },
  ];

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-4">
        <Input
          placeholder="নাম দিয়ে খুঁজুন..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="w-full sm:max-w-sm"
        />
        <AddDonationMember />
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};
export default DonationMemberTable;
