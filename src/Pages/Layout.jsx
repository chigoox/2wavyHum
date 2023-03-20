import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from '../Componets/NavBar/NavBar'
//import Header from "../Componets/Header";

const Layout = () => {

  return (
    <div className="h-full">
      {/* <Header /> */}
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Layout;