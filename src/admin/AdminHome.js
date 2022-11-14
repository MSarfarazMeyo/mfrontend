import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer";
import HearderComponent from "./Components/Header/HearderComponent";

const AdminHome = () => {
  return (
    <>
      <HearderComponent />
      <Footer />
    </>
  );
};

export default AdminHome;
