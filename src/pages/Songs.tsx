import React, { useEffect, useState } from "react";
import FilterBtn from "../components/buttons/FilterBtn";
import Tab from "../components/buttons/Tab";
import MusicProgress from "../components/music_progress/MusicProgress";
import DarkModeBtn from "../components/buttons/DarkModeBtn";
import { getSongs } from "../api/songs";

const Songs = () => {
  const [songs, setSongs] = useState<any[]>([]);
  const [filteredSongs, setFilteredSongs] = useState<any[]>([]);
  const [state, setState] = useState("ALL");
  async function fetchSongs() {
    try {
      const data = await getSongs();
      setSongs(data);
    } catch (error: any) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchSongs();
  }, []);
  useEffect(() => {
    console.log(state);
    if (state != "ALL") {
      setFilteredSongs(songs.filter((song) => song.status == state));
    } else {
      setFilteredSongs(songs);
    }
  }, [state, songs]);
  const handleDelete = async () => {
    await fetchSongs();
  };
  return (
    <div className="min-h-screen flex flex-col px-6 py-4">
      {/* Header */}
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Minhas Músicas
        </h1>
        <div className="flex gap-10">
          <FilterBtn />
          <DarkModeBtn />
        </div>
      </header>

      {/* Tabs */}
      <section className="flex flex-wrap gap-2 font-semibold mb-8">
        <Tab
          isActive={state === "ALL"}
          page="Todas"
          onClick={() => setState("ALL")}
        />
        <Tab
          isActive={state === "LEARNING"}
          page="Aprendendo"
          onClick={() => setState("LEARNING")}
        />
        <Tab
          isActive={state === "LEARNT"}
          page="Aprendidas"
          onClick={() => setState("LEARNT")}
        />
        <Tab
          isActive={state === "PRACTICING"}
          page="Praticando"
          onClick={() => setState("PRACTICING")}
        />
        <Tab
          isActive={state === "WANT_TO_LEARN"}
          page="Quero aprender"
          onClick={() => setState("WANT_TO_LEARN")}
        />
      </section>

      {/* Lista de músicas */}
      <main className="flex flex-col gap-3">
        {filteredSongs.map((song) => (
          <MusicProgress
            id={song.id}
            key={song.id}
            name={song.name}
            band={song.band}
            status={song.status}
            album={song.album}
            tuning={song.tuning}
            onDeleted={handleDelete}
          />
        ))}
      </main>
    </div>
  );
};

export default Songs;
