import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Songs from "./pages/Songs";
import Layout from "./components/layouts/Layout";
import SongInfo from "./pages/SongInfo";
import Login from "./pages/Login";
const RouterProvider = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route index element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="songs" element={<Songs />} />
          <Route path="/songs/:id" element={<SongInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterProvider;
