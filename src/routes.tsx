import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Songs from "./pages/Songs";
import Layout from "./components/layouts/Layout";

const RouterProvider = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route caseSensitive index element={<Home />} />
          <Route caseSensitive path="songs" element={<Songs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterProvider;
