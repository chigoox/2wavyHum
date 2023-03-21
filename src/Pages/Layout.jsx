import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from '../Componets/NavBar/NavBar'
import SideBar from "../Componets/NavBar/SideBar/SideBar";
//import Header from "../Componets/Header";

const Layout = () => {

  return (
    <div className="h-full">
      {/* <Header /> */}
      <NavBar />
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Layout;