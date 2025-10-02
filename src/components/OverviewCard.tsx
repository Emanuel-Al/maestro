import React from "react";
import "tailwindcss";
interface OverviewCardProps {
  status: string;
  count: number;
}

const OverviewCard = ({ status, count }: OverviewCardProps) => {
  return (
    <div className="bg-white text-center rounded-b-lg p-2.5 w-full">
      <h3 className="text-gray-500">{status}</h3>
      <h3 className="font-bold">{count}</h3>
    </div>
  );
};

export default OverviewCard;
