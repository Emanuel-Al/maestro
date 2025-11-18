import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Typography,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import type { SelectChangeEvent } from "@mui/material";
import { IoMdClose } from "react-icons/io";
import { getTuningOptions } from "../../api/tuning";
import { getBandOptions } from "../../api/band";
import FormBtn from "../buttons/FormBtn";

type FilterSongModalProps = {
  open: boolean;
  onClose: () => void;
  selectedBand: string;
  selectedTuning: string;
  setApplyFilters: React.Dispatch<
    React.SetStateAction<{ band: string; tuning: string }>
  >;
};

const FilterSongModal = ({
  open,
  onClose,
  setApplyFilters,
  selectedBand,
  selectedTuning,
}: FilterSongModalProps) => {
  const [bandOptions, setBandOptions] = useState<string[]>([]);
  const [tuningOptions, setTuningOptions] = useState<string[]>([]);
  const [formData, setFormData] = useState<{ band: string; tuning: string }>({
    band: selectedBand,
    tuning: selectedTuning,
  });

  useEffect(() => {
    const fetchOptions = async () => {
      const bands = await getBandOptions();
      const tuning = await getTuningOptions();
      setBandOptions(bands);
      setTuningOptions(tuning);
    };
    fetchOptions();
  }, []);

  const handleChange = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name as string]: value }));
  };

  const isDarkMode = document.documentElement.classList.contains("dark");

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: isDarkMode ? "#1E1E1E" : "#FFFFFF",
          color: isDarkMode ? "#FFFFFF" : "#111827",
          boxShadow: 24,
          p: 4,
          borderRadius: 3,
          width: "90%",
          maxWidth: 420,
          outline: "none",
          transition: "all 0.3s ease",
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Filtrar músicas
          </Typography>
          <Button
            onClick={onClose}
            sx={{
              minWidth: "auto",
              color: isDarkMode ? "#9CA3AF" : "#6B7280",
              "&:hover": { color: isDarkMode ? "#fff" : "#111" },
            }}
          >
            <IoMdClose size={20} />
          </Button>
        </Box>

        {/* Form */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <FormControl fullWidth variant="outlined" size="small">
            <InputLabel
              id="song-tuning"
              sx={{ color: isDarkMode ? "#E5E7EB" : "#6B7280" }}
            >
              Afinação
            </InputLabel>
            <Select
              labelId="song-tuning"
              name="tuning"
              value={formData.tuning}
              onChange={handleChange}
              label="Afinação"
              sx={{
                bgcolor: isDarkMode ? "#2C2C2C" : "#F9FAFB",
                borderRadius: 2,
                color: isDarkMode ? "#fff" : "#111",
              }}
            >
              <MenuItem value="ALL">Todas</MenuItem>
              {tuningOptions.map((tuning) => (
                <MenuItem key={tuning} value={tuning}>
                  {tuning}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth variant="outlined" size="small">
            <InputLabel
              id="song-band"
              sx={{ color: isDarkMode ? "#E5E7EB" : "#6B7280" }}
            >
              Banda
            </InputLabel>
            <Select
              labelId="song-band"
              name="band"
              value={formData.band}
              onChange={handleChange}
              label="Banda"
              sx={{
                bgcolor: isDarkMode ? "#2C2C2C" : "#F9FAFB",
                borderRadius: 2,
                color: isDarkMode ? "#fff" : "#111",
              }}
            >
              <MenuItem value="ALL">Todas</MenuItem>
              {bandOptions.map((band) => (
                <MenuItem key={band} value={band}>
                  {band}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        {/* Footer */}
        <div className="flex justify-end mt-4 gap-5">
          <FormBtn type="button" handleClick={onClose}>
            Cancelar
          </FormBtn>
          <FormBtn
            type="submit"
            handleClick={() => {
              setApplyFilters(formData);
              onClose();
            }}
          >
            Filtrar
          </FormBtn>
        </div>
      </Box>
    </Modal>
  );
};

export default FilterSongModal;
