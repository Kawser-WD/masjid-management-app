import { ReactNode } from "react";
import { Card, CardContent } from "../ui/card";
import { Separator } from "../ui/separator";
type BasicCardProps = {
  title: string;
  children: ReactNode;
};

const BasicCard = ({ title, children }: BasicCardProps) => {
  return (
    <Card className="min-w-full h-auto min-h-20 shadow-none rounded-none">
      <h1 className="p-4 sm:text-3xl text-xl font-semibold tracking-normal leading-0.5">
        {title}
      </h1>
      <Separator />
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default BasicCard;
