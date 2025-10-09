import React from "react";
import { Outlet } from "react-router";
import Footer from "../Footer";

const Layout = () => {
  return (
    <div>
      <main className="pb-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
