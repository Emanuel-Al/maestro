import React from "react";
import FilterBtn from "../components/FilterBtn";
import Tab from "../components/Tab";
import MusicProgress from "../components/MusicProgress";

const Songs = () => {
  return (
    <div className="min-h-screen flex flex-col px-6 py-4">
      {/* Header */}
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Minhas Músicas</h1>
        <FilterBtn />
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
        <MusicProgress band="The Strokes" name="Reptilia" status="LEARNING" />
        <MusicProgress
          band="Guns n’ Roses"
          name="Knocking on Heaven’s Door"
          status="LEARNING"
        />
        <MusicProgress band="Limp Bizkit" name="Generation" status="LEARNT" />
        <MusicProgress
          band="Korn"
          name="Falling Away from Me"
          status="PRACTICING"
        />
        <MusicProgress
          band="Europe"
          name="The Final Countdown"
          status="WANT_TO_LEARN"
        />
      </main>
    </div>
  );
};

export default Songs;
