import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../Navbar";

const Layout = () => {
  return (
    <>

    <div className="grid-container">
        <div className="navigator">
        <Navbar />
        </div>
        <div className="content">
        <Outlet />
        </div>
    </div>
    </>
  );
};

export default Layout;