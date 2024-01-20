import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      /* The Header and Footer will be same in every page so we used Outlet to
      make them one component */
    </>
  );
}

export default Layout;
