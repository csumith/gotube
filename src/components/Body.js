import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const Body = () => {
  const showMenu = useSelector((store)=>store.app.isMenuOpen)
  return (
    <div className="flex bg-gray-100  bg-black">
   {  showMenu && <Sidebar />}
       <Outlet/>
     
      {/* According to browse my maincontainer is replace by main page either i have mainContainer either i have watchpage */}
    </div>
  );
};

export default Body;
