import React, { useState } from "react";
import { IoChevronBack } from "react-icons/io5";
import type { SongDataInterface } from "../interfaces/SongDataInterface";
import type { SelectChangeEvent } from "@mui/material";
import {
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import Textarea from "@mui/joy/Textarea";
import FormBtn from "../components/buttons/FormBtn";
import { SongStatusValues, type SongStatus } from "../enums/SongStatus";

const SongInfo = ({
  name,
  band,
  album,
  tuning,
  status,
  description,
}: SongDataInterface) => {
  const isDarkMode = document.documentElement.classList.contains("dark");
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id.replace("-input", "")]: value }));
  };
  const handleSelectChange = (e: SelectChangeEvent<SongStatus>) => {
    setFormData((prev) => ({
      ...prev,
      status: e.target.value as SongStatus,
    }));
  };
  const [formData, setFormData] = useState({
    name,
    band,
    album,
    tuning,
    status,
    description,
  });

  return (
    <form className="p-6">
      <header className="flex gap-5 items-center">
        <div>
          <button>
            <IoChevronBack size={25} />
          </button>
        </div>
        <div className="text-3xl font-bold mb-4">
          <h1>{name}</h1>
        </div>
      </header>
      <main className="bg-white p-5">
        <div className="">
          {/*SONG INPUT*/}
          <div>
            <InputLabel
              sx={{
                color: isDarkMode ? "#fff" : "#6B7280",
              }}
              id="song-input"
            >
              Música
            </InputLabel>
            <TextField
              fullWidth
              placeholder="Música"
              id="song-input"
              value={name}
              onChange={handleChange}
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
          </div>
          <div>
            {/*BAND INPUT*/}
            <InputLabel
              sx={{
                color: isDarkMode ? "#fff" : "#6B7280",
              }}
              id="band-input"
            >
              Banda
            </InputLabel>
            <TextField
              fullWidth
              placeholder="Banda"
              id="band-input"
              value={band}
              onChange={handleChange}
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
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              {/*ALBUM INPUT*/}
              <InputLabel
                sx={{
                  color: isDarkMode ? "#fff" : "#6B7280",
                }}
                id="album-input"
              >
                Album
              </InputLabel>
              <TextField
                fullWidth
                id="album-input"
                placeholder="Álbum"
                value={album}
                onChange={handleChange}
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
            </div>
            <div>
              {/*TUNING INPUT*/}
              <InputLabel
                sx={{
                  color: isDarkMode ? "#fff" : "#6B7280",
                }}
                id="tuning-input"
              >
                Afinação
              </InputLabel>
              <TextField
                fullWidth
                id="tuning-input"
                value={tuning}
                onChange={handleChange}
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
            </div>
          </div>
        </div>
        <div>
          {/*STATUS INPUT*/}
          <InputLabel
            sx={{
              color: isDarkMode ? "#fff" : "#6B7280",
            }}
            id="status-input"
          >
            Status
          </InputLabel>
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
              onChange={handleSelectChange}
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
        </div>
        <section>
          <div>
            {/*DESCRIPTION INPUT*/}
            <InputLabel
              sx={{
                color: isDarkMode ? "#fff" : "#6B7280",
              }}
              id="description-input"
            >
              Anotações
            </InputLabel>
            <Textarea
              placeholder="Adicione suas anotações"
              id="description-input"
              value={description}
            />
          </div>
          <div className="flex gap-2 mt-5 justify-end">
            <div>
              <FormBtn type="submit">Salvar mudanças</FormBtn>
            </div>
            <div>
              <FormBtn type="button">Cancelar</FormBtn>
            </div>
          </div>
        </section>
      </main>
    </form>
  );
};

export default SongInfo;
