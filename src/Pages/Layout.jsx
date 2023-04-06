import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Componets/Footer/Footer";
import NavBar from '../Componets/NavBar/NavBar'
import SideBar from "../Componets/NavBar/SideBar/SideBar";
//import Header from "../Componets/Header";

const Layout = () => {
  const [clientCart, setClientCart] = useState({})
  const [cartTotal, setCartTotal] = useState({})



  const { pathname } = useLocation();








  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    Object.values(clientCart).forEach(({ count, price, name, salePrice }) => {
      console.log(count)
      setCartTotal(old => {
        return { ...old, [name + price]: (count * (salePrice ? salePrice : price)) }
      })
    })


  }, [clientCart])




  return (
    <div className="h-full">
      {/* <Header /> */}
      <NavBar clientCart={clientCart} setClientCart={setClientCart} cartTotal={Object.values(cartTotal)} />
      <SideBar />
      <Outlet context={[clientCart, setClientCart]} />
      <Footer />
    </div>
  );
};

export default Layout;