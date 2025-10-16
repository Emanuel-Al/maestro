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
  band: string;
  album: string;
  tuning: string;
  status: SongStatus;
};

const AddSongModal = ({ open, onClose }: AddSongModalProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    band: "",
    album: "",
    tuning: "",
    status: SongStatusValues.WANT_TO_LEARN,
  });

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<string>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name as string]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      const song = await createSong(formData);
      console.log("Música criada com sucesso");
      onClose();
      setFormData({
        name: "",
        band: "",
        album: "",
        tuning: "",
        status: SongStatusValues.WANT_TO_LEARN,
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
          bgcolor: "background.paper",
          color: "text.primary",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          width: 400,
          outline: "none",
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
          />
          <TextField
            label="Artista/Banda"
            name="band"
            value={formData.band}
            onChange={handleChange}
            variant="outlined"
            required
          />
          <TextField
            label="Álbum"
            name="album"
            value={formData.album}
            onChange={handleChange}
            variant="outlined"
            required
          />
          <TextField
            label="Afinação"
            name="tuning"
            value={formData.tuning}
            onChange={handleChange}
            variant="outlined"
          />

          <FormControl fullWidth>
            <InputLabel id="song-status">Status</InputLabel>
            <Select
              labelId="song-status"
              label="Status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
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
            <FormBtn type="button" handleClick={onClose} />
            <FormBtn type="submit" />
          </div>
        </form>
      </Box>
    </Modal>
  );
};

export default AddSongModal;
