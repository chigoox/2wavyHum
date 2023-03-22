import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Componets/Footer/Footer";
import NavBar from '../Componets/NavBar/NavBar'
import SideBar from "../Componets/NavBar/SideBar/SideBar";
//import Header from "../Componets/Header";

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="h-full">
      {/* <Header /> */}
      <NavBar />
      <SideBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;