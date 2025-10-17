import { Box, Modal } from "@mui/material";
import React from "react";

interface RemoveSongModalProps {
  open: boolean;
  onClose: () => void;
  onDelete: () => void;
  name: string;
}

const RemoveSongModal = ({
  open,
  onClose,
  name,
  onDelete,
}: RemoveSongModalProps) => {
  const isDarkMode = document.documentElement.classList.contains("dark");

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: isDarkMode ? "#121212" : "#FFFFFF",
          color: isDarkMode ? "#FFFFFF" : "#111827",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          width: 400,
          outline: "none",
          transition: "all 0.3s ease",
        }}
      >
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-2xl text-center font-semibold">
              Confirmar exclusão
            </h1>
            <p className="text-center text-gray-600 dark:text-gray-300 mt-2">
              Você tem certeza que quer excluir{" "}
              <span className="font-semibold">"{name}"</span>?
            </p>
          </div>

          <div className="flex justify-end gap-2 mt-3">
            <button
              onClick={onClose}
              className="cursor-pointer bg-[#4B5563] text-white rounded-lg px-4 py-2 font-semibold hover:opacity-70 transition"
            >
              Cancelar
            </button>
            <button
              onClick={onDelete}
              className="cursor-pointer bg-[#EF4444] text-white rounded-lg px-4 py-2 font-semibold hover:opacity-80 transition"
            >
              Excluir
            </button>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default RemoveSongModal;
