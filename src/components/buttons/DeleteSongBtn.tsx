import React, { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { deleteSong, getSongById } from "../../api/songs";
import RemoveSongModal from "../modal/RemoveSongModal";

interface deleteSongProp {
  id: number;
  name: string;
  onDeleted: () => void;
}

const DeleteSongBtn = ({ id, name, onDeleted }: deleteSongProp) => {
  const [open, setOpen] = useState(false);
  const handleDelete = async () => {
    try {
      const response = await deleteSong(id);
      setOpen(false);
      onDeleted();
    } catch (e: any) {
      console.log(e);
    }
  };
  return (
    <div>
      <button onClick={() => setOpen(true)} type="submit">
        <FaRegTrashAlt className="cursor-pointer hover:text-red-600 transition delay-50 dark:text-white dark:hover:text-red-600" />
      </button>
      <RemoveSongModal
        open={open}
        onDelete={handleDelete}
        onClose={() => setOpen(false)}
        name={name}
      />
    </div>
  );
};

export default DeleteSongBtn;
