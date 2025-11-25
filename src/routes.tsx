import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Songs from "./pages/Songs";
import Layout from "./components/layouts/Layout";
import SongInfo from "./pages/SongInfo";
const RouterProvider = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="songs" element={<Songs />} />
          <Route path="/songs/:id" element={<SongInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterProvider;
