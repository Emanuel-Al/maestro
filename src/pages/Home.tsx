import React from "react";
import Tag from "../components/tag/Tag";
import MusicProgress from "../components/music_progress/MusicProgress";
import AddSongBtn from "../components/buttons/AddSongBtn";
import Chart from "../components/chart/Chart";
import DarkModeBtn from "../components/buttons/DarkModeBtn";
import OverviewCard from "../components/overview_card/OverviewCard";

const Home = () => {
  return (
    <div className="min-h-full flex-col items-center px-6">
      {/* HEADER*/}
      <header className="flex justify-between w-full mt-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold">Olá, Músico!</h1>
          <p className="text-gray-400">Aqui está o resumo do seu progresso</p>
        </div>
        <div>
          <DarkModeBtn />
        </div>
      </header>
      {/* OVERVIEW*/}
      <section className="w-full mt-6 mb-6">
        <h2 className="text-xl font-semibold mb-2">Visão geral</h2>
        <div className="flex justify-start gap-4">
          <OverviewCard count={1} status="Aprendidas" />
          <OverviewCard count={3} status="Aprendendo" />
          <OverviewCard count={2} status="Na fila" />
        </div>
      </section>
      {/* CHART*/}
      <section className="bg-white mt-4 p-5 shadow-sm">
        <Chart val1={2} val2={3} val3={1} val4={1} />
      </section>
      {/* SONGS*/}
      <section>
        <div className="flex justify-between mt-4">
          <div className="text-xl font-semibold">
            <h2>Músicas em Andamento: </h2>
          </div>
          <div>
            <AddSongBtn />
          </div>
        </div>
        <div className="">
          <div className="mt-2 mb-2">
            <MusicProgress
              band="Korn"
              name="Freak on a Leash"
              status="LEARNING"
            />
          </div>
          <div className="mt-2 mb-2">
            <MusicProgress
              band="Linkin Park"
              name="Somewhere I belong"
              status="LEARNT"
            />
          </div>
          <div className="mt-2 mb-2">
            <MusicProgress
              band="Avenged Sevenfold"
              name="A little Piece of Heaven"
              status="PRACTICING"
            />
          </div>
          <div className="mt-2 mb-2">
            <MusicProgress
              band="Metallica"
              name="Seek and Destroy"
              status="WANT_TO_LEARN"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
