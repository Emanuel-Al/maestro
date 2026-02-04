import React, { useEffect, useState } from "react";
import { IoChevronBack } from "react-icons/io5";
import { getSongById, updateSong } from "../api/songs";
import type { SelectChangeEvent } from "@mui/material";
import { useParams } from "react-router";
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
import { useNavigate } from "react-router";

const SongInfo = () => {
  const isDarkMode = document.documentElement.classList.contains("dark");
  const { id } = useParams();
  const songId = Number(id);
  const navigate = useNavigate();

  const [formData, setFormData] = useState<any>(null);

  useEffect(() => {
    async function loadData() {
      const data = await getSongById(songId);
      setFormData({
        name: data.name,
        album: data.album,
        status: data.status,
        description: data.description,
        band: { name: data.band.name },
        tuning: { name: data.tuning.name },
      });
    }
    loadData();
  }, [songId]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    if (name === "band") {
      setFormData((prev: any) => ({
        ...prev,
        band: { ...prev.band, name: value },
      }));
      return;
    }

    if (name === "tuning") {
      setFormData((prev: any) => ({
        ...prev,
        tuning: { ...prev.tuning, name: value },
      }));
      return;
    }

    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (e: SelectChangeEvent<SongStatus>) => {
    setFormData((prev: any) => ({
      ...prev,
      status: e.target.value as SongStatus,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await updateSong(songId, {
      name: formData.name,
      album: formData.album,
      description: formData.description,
      status: formData.status,
      band: { name: formData.band.name },
      tuning: { name: formData.tuning.name },
    });

    console.log("Atualizado com sucesso!");
  };

  if (!formData) return null;

  return (
    <form className="p-6" onSubmit={handleSubmit}>
      <header className="flex gap-5 items-center dark:text-white">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="cursor-pointer"
        >
          <IoChevronBack size={25} />
        </button>

        <h1 className="text-3xl font-bold mb-4 dark:text-white">
          {formData.name}
        </h1>
      </header>

      <main className="bg-white p-5 dark:bg-[#1E1E1E]">
        <div className="space-y-3">
          {/* SONG */}
          <InputLabel sx={{ color: isDarkMode ? "#fff" : "#6B7280" }}>
            Música
          </InputLabel>
          <TextField
            fullWidth
            name="name"
            value={formData.name}
            onChange={handleChange}
            sx={{
              input: { color: isDarkMode ? "#fff" : "#111827" },
              "& fieldset": {
                borderColor: isDarkMode ? "#6B7280" : "#D1D5DB",
              },
            }}
          />

          {/* BAND */}
          <InputLabel sx={{ color: isDarkMode ? "#fff" : "#6B7280" }}>
            Banda
          </InputLabel>
          <TextField
            fullWidth
            name="band"
            value={formData.band.name}
            onChange={handleChange}
            sx={{
              input: { color: isDarkMode ? "#fff" : "#111827" },
              "& fieldset": {
                borderColor: isDarkMode ? "#6B7280" : "#D1D5DB",
              },
            }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* ALBUM */}
            <div>
              <InputLabel sx={{ color: isDarkMode ? "#fff" : "#6B7280" }}>
                Álbum
              </InputLabel>
              <TextField
                fullWidth
                name="album"
                value={formData.album}
                onChange={handleChange}
                sx={{
                  input: { color: isDarkMode ? "#fff" : "#111827" },
                  "& fieldset": {
                    borderColor: isDarkMode ? "#6B7280" : "#D1D5DB",
                  },
                }}
              />
            </div>

            {/* TUNING */}
            <div>
              <InputLabel sx={{ color: isDarkMode ? "#fff" : "#6B7280" }}>
                Afinação
              </InputLabel>
              <TextField
                fullWidth
                name="tuning"
                value={formData.tuning.name}
                onChange={handleChange}
                sx={{
                  input: { color: isDarkMode ? "#fff" : "#111827" },
                  "& fieldset": {
                    borderColor: isDarkMode ? "#6B7280" : "#D1D5DB",
                  },
                }}
              />
            </div>
          </div>
        </div>

        {/* STATUS */}
        <InputLabel sx={{ color: isDarkMode ? "#fff" : "#6B7280" }}>
          Status
        </InputLabel>
        <FormControl fullWidth>
          <Select
            name="status"
            value={formData.status}
            onChange={handleSelectChange}
            required
            sx={{
              color: isDarkMode ? "#fff" : "#111827",
              "& fieldset": {
                borderColor: isDarkMode ? "#6B7280" : "#D1D5DB",
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

        {/* DESCRIPTION */}
        <InputLabel sx={{ color: isDarkMode ? "#fff" : "#6B7280" }}>
          Anotações
        </InputLabel>
        <Textarea
          sx={{ background: isDarkMode ? "#1E1E1E" : "#fff" }}
          name="description"
          minRows={4}
          value={formData.description}
          onChange={handleChange}
        />

        {/* FOOTER */}
        <div className="flex gap-2 mt-6 justify-center">
          <FormBtn type="submit">Salvar mudanças</FormBtn>
          <FormBtn type="button">Cancelar</FormBtn>
        </div>
      </main>
    </form>
  );
};

export default SongInfo;
