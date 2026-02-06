import { CiMusicNote1 } from "react-icons/ci";
import AddSongBtn from "../buttons/AddSongBtn";
import { useState } from "react";
import AddSongModal from "../modal/AddSongModal";
const NoSongs = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className=" display flex flex-col items-center dark:text-white">
      <div className="bg-[#1F2937] rounded-full p-8 mb-4">
        <CiMusicNote1 color="#3478F6" size={100} />
      </div>
      <div>
        <h2 className="text-center font-bold text-2xl mb-1">
          Organize suas músicas com Maestro!
        </h2>
        <p className="mb-2">
          Ainda não há nenhuma música adicionada. Adicione novas músicas para
          começar a desfrutar de todos os recursos
        </p>
      </div>
      <div className="text-center">
        <AddSongBtn handleClick={handleOpen} />
      </div>
      <AddSongModal open={open} onClose={handleClose} />
    </div>
  );
};

export default NoSongs;
