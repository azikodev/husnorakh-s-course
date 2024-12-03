import React from "react";

//components
import { Navbar, Footer } from "../components";

//rrd imports
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="flex-1 h-auto bg-[#eee3e3]">
      <main className="container max-w-[1200px] m-auto">
        <Navbar />
      </main>
      <main className="container max-w-[1200px] m-auto">
        <Outlet />
      </main>
      <main  className="container max-w-[1400px] m-auto">
        <Footer />
      </main>
    </div>
  );
}

export default MainLayout;
