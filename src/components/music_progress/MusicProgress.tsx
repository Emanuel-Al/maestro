import React from "react";
import { LinearProgress } from "@mui/material";
import Tag from "../tag/Tag";
import DeleteSongBtn from "../buttons/DeleteSongBtn";
import type { SongDataInterface } from "../../interfaces/SongDataInterface";

interface MusicProgressProps extends SongDataInterface {
  id: number;
  onDeleted: () => void;
}

const MusicProgress = ({
  name,
  band,
  status,
  id,
  tuning,
  album,
  onDeleted,
}: MusicProgressProps) => {
  const getProgressStatus = (status: SongDataInterface["status"]) => {
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
    <div className="w-full bg-white dark:bg-[#1E1E1E] p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-1">
          <h3 className="font-bold dark:text-white">{name}</h3>
          <h6 className="text-gray-400">{band}</h6>
          <div className="flex items-center gap-3 mt-1 text-gray-500 dark:text-gray-400 text-sm">
            <span className="px-2 py-0.5 border border-gray-300 dark:border-gray-600 rounded-md">
              {album}
            </span>
            <span>|</span>
            <span className="px-2 py-0.5 border border-gray-300 dark:border-gray-600 rounded-md">
              {tuning}
            </span>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <Tag status={status} />
          <DeleteSongBtn id={id} name={name} onDeleted={onDeleted} />
        </div>
      </div>
      <div className="mt-2">
        <LinearProgress
          sx={{ height: 8, borderRadius: 5 }}
          variant="determinate"
          value={progressStatus}
        />
      </div>
    </div>
  );
};

export default MusicProgress;
