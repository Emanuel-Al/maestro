import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Songs from "./pages/Songs";

const RouterProvider = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route caseSensitive path="/" element={<Home />} />
        <Route caseSensitive path="/songs" element={<Songs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterProvider;
