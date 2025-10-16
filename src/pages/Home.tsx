import React, { useEffect } from "react";
import Tag from "../components/tag/Tag";
import MusicProgress from "../components/music_progress/MusicProgress";
import AddSongBtn from "../components/buttons/AddSongBtn";
import Chart from "../components/chart/Chart";
import DarkModeBtn from "../components/buttons/DarkModeBtn";
import OverviewCard from "../components/overview_card/OverviewCard";
import { getSongs } from "../api/songs";
import { useState } from "react";

const Home = () => {
  const [songs, setSongs] = useState<any[]>([]);
  useEffect(() => {
    async function fetchSongs() {
      try {
        const data = await getSongs();
        setSongs(data);
      } catch (err) {
        console.error("Erro ao buscar músicas:", err);
      }
    }

    fetchSongs();
  }, []);

  console.log(songs);
  return (
    <div className="min-h-screen flex flex-col items-center px-6 p-1.5 w-full bg-[#F8F8F8] dark:bg-[#121212]">
      {/* HEADER*/}
      <header className="flex justify-between w-full mt-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-black dark:text-white">
            Olá, Músico!
          </h1>
          <p className="text-gray-400">Aqui está o resumo do seu progresso</p>
        </div>
        <div>
          <DarkModeBtn />
        </div>
      </header>
      {/* OVERVIEW*/}
      <section className="w-full mt-6 mb-6">
        <h2 className="text-xl font-semibold mb-2 dark:text-white">
          Visão geral
        </h2>
        <div className="flex justify-start gap-4">
          <OverviewCard count={1} status="Aprendidas" />
          <OverviewCard count={3} status="Aprendendo" />
          <OverviewCard count={2} status="Na fila" />
        </div>
      </section>
      {/* CHART*/}
      <section className="w-full bg-white dark:bg-[#1E1E1E] mt-4 p-5 shadow-sm rounded-lg">
        <Chart val1={2} val2={3} val3={1} val4={1} />
      </section>
      {/* SONGS*/}
      <section className="w-full">
        <div className="flex justify-between mt-4">
          <div className="text-xl font-semibold dark:text-white">
            <h2>Músicas em Andamento: </h2>
          </div>
          <div>
            <AddSongBtn />
          </div>
        </div>
        <div className="mt-2 mb-2 w-full flex flex-col gap-2">
          {songs.map((song) => (
            <MusicProgress
              key={song.id}
              name={song.name}
              band={song.band}
              status={song.status}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
