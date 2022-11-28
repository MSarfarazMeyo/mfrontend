import React, { useEffect, useState } from "react";
import ConnectPage from "../components/ConnectPage";
import LandingPage from "../components/LandingPage";
import { Outlet } from "react-router-dom";

import Appbar from "./Appbar";

const Home = () => {
  return (
    <>
      <Appbar />
      <Outlet />
    </>
  );
};

export default Home;
