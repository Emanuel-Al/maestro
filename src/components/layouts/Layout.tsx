import React from "react";
import { Outlet } from "react-router";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="min-h-screen w-full bg-[#F8F8F8] dark:bg-[#121212]">
      <main className="pb-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
