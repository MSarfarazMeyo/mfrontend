import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer";
import HearderComponent from "./Components/Header/HearderComponent";
import ContextStore from "./context/ContextStore";

const AdminHome = () => {
  return (
    <>
      <ContextStore>
        <HearderComponent />
        <Footer />
      </ContextStore>
    </>
  );
};

export default AdminHome;
