import React from "react";
import { Outlet } from "react-router-dom";
//import Header from "../Componets/Header";

const Layout = () => {

  return (
    <div className="h-full">
      {/* <Header /> */}
      <Outlet />
    </div>
  );
};

export default Layout;