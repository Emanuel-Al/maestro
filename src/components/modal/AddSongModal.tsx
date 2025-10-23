import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Modal,
  Box,
} from "@mui/material";
import React, { useState } from "react";
import FormBtn from "../buttons/FormBtn";
import { createSong } from "../../api/songs";
import type { SelectChangeEvent } from "@mui/material";
import { SongStatusValues, type SongStatus } from "../../enums/SongStatus";

type AddSongModalProps = {
  open: boolean;
  onClose: () => void;
};

type FormData = {
  name: string;
  album: string;
  status: SongStatus;
  band: { name: string };
  tuning: { name: string };
};

const AddSongModal = ({ open, onClose }: AddSongModalProps) => {
  const isDarkMode = document.documentElement.classList.contains("dark");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    album: "",
    status: SongStatusValues.WANT_TO_LEARN,
    band: { name: "" },
    tuning: { name: "" },
  });

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<string>
  ) => {
    const { name, value } = event.target;
    if (name == "band") {
      setFormData((prev) => ({ ...prev, band: { name: value } }));
    } else if (name == "tuning") {
      setFormData((prev) => ({ ...prev, tuning: { name: value } }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      const song = await createSong(formData);
      console.log("Música criada com sucesso");
      onClose();
      setFormData({
        name: "",
        album: "",
        status: SongStatusValues.WANT_TO_LEARN,
        band: { name: "" },
        tuning: { name: "" },
      });
    } catch (error) {
      console.error("Erro ao criar música:", error);
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: isDarkMode ? "#121212" : "#FFFFFF",
          color: isDarkMode ? "#FFF" : "#111827",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          width: 400,
          outline: "none",
          "& .MuiTextField-root": { color: "white" },
        }}
      >
        <h3 className="text-2xl dark:text-white font-semibold mb-4">
          Adicionar nova música
        </h3>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <TextField
            label="Título"
            name="name"
            value={formData.name}
            onChange={handleChange}
            variant="outlined"
            required
            sx={{
              input: { color: isDarkMode ? "#fff" : "#111827" },
              label: { color: isDarkMode ? "#E5E7EB" : "#6B7280" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: isDarkMode ? "#6B7280" : "#D1D5DB",
                },
                "&:hover fieldset": {
                  borderColor: isDarkMode ? "#9CA3AF" : "#9CA3AF",
                },
              },
            }}
          />
          <TextField
            label="Artista/Banda"
            name="band"
            value={formData.band.name}
            onChange={handleChange}
            variant="outlined"
            required
            sx={{
              input: { color: isDarkMode ? "#fff" : "#111827" },
              label: { color: isDarkMode ? "#E5E7EB" : "#6B7280" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: isDarkMode ? "#6B7280" : "#D1D5DB",
                },
                "&:hover fieldset": {
                  borderColor: isDarkMode ? "#9CA3AF" : "#9CA3AF",
                },
              },
            }}
          />
          <TextField
            label="Álbum"
            name="album"
            value={formData.album}
            onChange={handleChange}
            variant="outlined"
            required
            sx={{
              input: { color: isDarkMode ? "#fff" : "#111827" },
              label: { color: isDarkMode ? "#E5E7EB" : "#6B7280" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: isDarkMode ? "#6B7280" : "#D1D5DB",
                },
                "&:hover fieldset": {
                  borderColor: isDarkMode ? "#9CA3AF" : "#9CA3AF",
                },
              },
            }}
          />
          <TextField
            label="Afinação"
            name="tuning"
            value={formData.tuning.name}
            onChange={handleChange}
            variant="outlined"
            sx={{
              input: { color: isDarkMode ? "#fff" : "#111827" },
              label: { color: isDarkMode ? "#E5E7EB" : "#6B7280" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: isDarkMode ? "#6B7280" : "#D1D5DB",
                },
                "&:hover fieldset": {
                  borderColor: isDarkMode ? "#9CA3AF" : "#9CA3AF",
                },
              },
            }}
          />

          <FormControl fullWidth>
            <InputLabel
              id="song-status"
              sx={{
                color: isDarkMode ? "#fff" : "#6B7280",
              }}
            >
              Status
            </InputLabel>
            <Select
              labelId="song-status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
              sx={{
                color: isDarkMode ? "#fff" : "#111827",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: isDarkMode ? "#6B7280" : "#D1D5DB",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: isDarkMode ? "#9CA3AF" : "#9CA3AF",
                },
              }}
              renderValue={(selected) => {
                const labelMap: Record<SongStatus, string> = {
                  WANT_TO_LEARN: "Quero aprender",
                  LEARNING: "Aprendendo",
                  PRACTICING: "Praticando",
                  LEARNT: "Aprendido",
                };
                return labelMap[selected as SongStatus];
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    bgcolor: isDarkMode ? "#1E1E1E" : "#fff",
                    "& .MuiMenuItem-root": {
                      color: isDarkMode ? "#fff" : "#111827",
                    },
                    "& .MuiMenuItem-root:hover": {
                      bgcolor: isDarkMode ? "#2A2A2A" : "#F3F4F6",
                    },
                  },
                },
              }}
            >
              {Object.values(SongStatusValues).map((status) => (
                <MenuItem key={status} value={status}>
                  {status === "WANT_TO_LEARN"
                    ? "Quero aprender"
                    : status === "LEARNING"
                    ? "Aprendendo"
                    : status === "PRACTICING"
                    ? "Praticando"
                    : "Aprendido"}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <div className="flex justify-end gap-4">
            <FormBtn type="button" handleClick={onClose}>
              Cancelar
            </FormBtn>
            <FormBtn type="submit">Salvar Música</FormBtn>
          </div>
        </form>
      </Box>
    </Modal>
  );
};

export default AddSongModal;
