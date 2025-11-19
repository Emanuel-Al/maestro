import React, { useEffect } from "react";
import MusicProgress from "../components/music_progress/MusicProgress";
import AddSongBtn from "../components/buttons/AddSongBtn";
import Chart from "../components/chart/Chart";
import DarkModeBtn from "../components/buttons/DarkModeBtn";
import OverviewCard from "../components/overview_card/OverviewCard";
import { getSongs, getStatusCount } from "../api/songs";
import { useState } from "react";
import AddSongModal from "../components/modal/AddSongModal";
import NoSongs from "../components/noSongs/NoSongs";

const Home = () => {
  const [songs, setSongs] = useState<any[]>([]);
  const [status, setStatus] = useState({
    LEARNT: 0,
    LEARNING: 0,
    WANT_TO_LEARN: 0,
    PRACTICING: 0,
  });
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  async function fetchSongs() {
    try {
      const data = await getSongs();
      setSongs(data);
    } catch (err) {
      console.error("Erro ao buscar músicas:", err);
    }
  }

  async function countStatus() {
    try {
      const data = await getStatusCount();
      setStatus(data);
    } catch (err) {
      console.log("Erro ao contar status");
    }
  }
  useEffect(() => {
    fetchSongs();
    countStatus();
  }, []);

  const handleChange = async () => {
    await fetchSongs();
    await countStatus();
  };

  console.log(status);
  return (
    <div>
      {songs.length == 0 ? (
        <div className=" min-h-screen flex flex-col items-center justify-center align-center">
          <NoSongs />
        </div>
      ) : (
        <div className="min-h-screen flex flex-col items-center px-6 p-1.5 w-full bg-[#F8F8F8] dark:bg-[#121212]">
          {/* HEADER */}
          <header className="flex justify-between w-full mt-4 mb-6">
            <div>
              <h1 className="text-3xl font-bold text-black dark:text-white">
                Olá, Músico!
              </h1>
              <p className="text-gray-400">
                Aqui está o resumo do seu progresso
              </p>
            </div>
            <div className="p-1 flex items-center">
              <DarkModeBtn />
            </div>
          </header>

          {/* OVERVIEW */}

          <section className="w-full mt-6 mb-6">
            <h2 className="text-xl font-semibold mb-2 dark:text-white">
              Visão geral
            </h2>
            <div className="flex justify-start gap-4">
              <OverviewCard count={status.WANT_TO_LEARN} status="Na fila" />
              <OverviewCard count={status.LEARNING} status="Aprendendo" />
              <OverviewCard count={status.PRACTICING} status="Praticando" />
              <OverviewCard count={status.LEARNT} status="Aprendidas" />
            </div>
          </section>

          {/* CHART */}

          <section className="w-full bg-white dark:bg-[#1E1E1E] mt-4 p-5 shadow-sm rounded-lg">
            <Chart
              val1={status.WANT_TO_LEARN}
              val2={status.LEARNING}
              val3={status.PRACTICING}
              val4={status.LEARNT}
            />
          </section>

          {/* SONGS */}
          <section className="w-full">
            <div className="flex justify-between mt-4">
              <h2 className="text-xl font-semibold dark:text-white">
                Músicas em Andamento:
              </h2>
              <AddSongBtn handleClick={handleOpen} />
            </div>
            <AddSongModal open={open} onClose={handleClose} />
            <div className="mt-2 mb-2 w-full flex flex-col gap-2">
              {songs.map((song) => (
                <MusicProgress
                  key={song.id}
                  id={song.id}
                  name={song.name}
                  band={song.band?.name}
                  status={song.status}
                  album={song.album}
                  tuning={song.tuning}
                  onDeleted={handleChange}
                />
              ))}
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Home;
