import React from "react";
import { LinearProgress } from "@mui/material";
import Tag from "../tag/Tag";

type Status = "LEARNING" | "LEARNT" | "WANT_TO_LEARN" | "PRACTICING";

interface MusicProgressProps {
  name: string;
  band: string;
  status: Status;
}

const MusicProgress = ({ name, band, status }: MusicProgressProps) => {
  const getProgressStatus = (status: Status) => {
    switch (status) {
      case "WANT_TO_LEARN":
        return 0;
      case "LEARNING":
        return 40;
      case "PRACTICING":
        return 70;
      case "LEARNT":
        return 100;
      default:
        return 0;
    }
  };
  const progressStatus = getProgressStatus(status);
  return (
    <div className="w-full bg-white dark:bg-[#1E1E1E] p-3 rounded-lg shadow-sm">
      <div className="flex justify-between">
        <h3 className="font-bold dark:text-white">{name}</h3>
        <Tag status={status} />
      </div>
      <h6 className="text-gray-400">{band}</h6>
      <div className="mt-2">
        <LinearProgress variant="determinate" value={progressStatus} />
      </div>
    </div>
  );
};

export default MusicProgress;
