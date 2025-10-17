import React, { useEffect, useState } from "react";
import FilterBtn from "../components/buttons/FilterBtn";
import Tab from "../components/buttons/Tab";
import MusicProgress from "../components/music_progress/MusicProgress";
import DarkModeBtn from "../components/buttons/DarkModeBtn";
import { getSongs } from "../api/songs";

const Songs = () => {
  const [songs, setSongs] = useState<any[]>([]);
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
        <Tab isActive={true} page="Todas" />
        <Tab isActive={false} page="Aprendendo" />
        <Tab isActive={false} page="Aprendidas" />
        <Tab isActive={false} page="Praticando" />
        <Tab isActive={false} page="Quero aprender" />
      </section>

      {/* Lista de músicas */}
      <main className="flex flex-col gap-3">
        {songs.map((song) => (
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
