import React, { useState } from "react";
import Mycontext from "./Mycontext";

const ContextStore = ({ children }) => {
  const [name, setname] = useState("AppName");
  const [headline, setheadline] = useState("Your website headlines goes here");
  const [caption, setcaption] = useState(
    "the caption of your website goes here ."
  );
  const [subdomain, setsubdomain] = useState("subdomain");
  const [logo, setlogo] = useState(null);
  const [logo2, setlogo2] = useState(null);
  const [themecolor, setthemecolor] = useState("#2B2D2F");
  const [thememode, setthememode] = useState("light");
  const [orientation, setorientation] = useState(true);
  const [mobileview, setmobileview] = useState(true);

  const [adminlogedin, setadminlogedin] = useState(false);

  const adminmethod = (value) => {
    setadminlogedin(value);
  };

  const yourapporientation = (val) => {
    setorientation(val);
  };
  const yourappmobileview = (val) => {
    setmobileview(val);
  };

  const yourappname = (val) => {
    setname(val);
  };
  const yourappheadline = (val) => {
    setheadline(val);
  };
  const yourappcaption = (val) => {
    setcaption(val);
  };
  const yourappsubdomain = (val) => {
    setsubdomain(val);
  };
  const yourapplogo = (val) => {
    setlogo(val);
  };
  const yourapplogo2 = (val) => {
    setlogo2(val);
  };
  const yourappthemecolor = (val) => {
    setthemecolor(val);
  };

  const yourappthememode = (val) => {
    setthememode(val);
  };

  return (
    <Mycontext.Provider
      value={{
        name,
        yourappname,
        headline,
        yourappheadline,
        caption,
        yourappcaption,
        subdomain,
        yourappsubdomain,
        logo,
        yourapplogo,
        logo2,
        yourapplogo2,
        themecolor,
        yourappthemecolor,
        thememode,
        yourappthememode,
        orientation,
        yourapporientation,
        mobileview,
        yourappmobileview,
        adminlogedin,
        adminmethod,
      }}
    >
      {children}
    </Mycontext.Provider>
  );
};

export default ContextStore;