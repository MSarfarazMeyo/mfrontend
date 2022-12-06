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
  const [thememode, setthememode] = useState("dark");
  const [orientation, setorientation] = useState(false);
  const [mobileview, setmobileview] = useState(false);
  const [verified, setverified] = useState(false);
  const [candymachin, setcandymachin] = useState("");
  const [tokenfromwallet, settokenfromwallet] = useState("");
  const [nftperday, setnftperday] = useState();
  const [dailyreward, setdailyreward] = useState("");
  const [email, setemail] = useState("");
  const [adminlogedin, setadminlogedin] = useState(false);
  const [appnameerror, setappnameerror] = useState(false);

  const [headlineerror, appheadlineerror] = useState(false);

  const [domainerror, setdomainerror] = useState(false);

  const [logoerror, setlogoerror] = useState(false);
  const [candymachinerror, setcandymachinerror] = useState(false);
  const [tokenfromwalleterror, settokenfromwalleterror] = useState(false);
  const [dailyrewarderror, setdailyrewarderror] = useState(false);
  const [emailerror, setemailerror] = useState(false);
  const [loading, setloading] = useState(false);

  const loadingmethod = (val) => {
    setloading(val);
  };

  const candymachinerrormethod = (val) => {
    setcandymachinerror(val);
  };
  const tokenfromwalleterrormethod = (val) => {
    settokenfromwalleterror(val);
  };
  const dailyrewarderrormethod = (val) => {
    setdailyrewarderror(val);
  };
  const emailerrormethod = (val) => {
    setemailerror(val);
  };

  const logoerrormethod = (val) => {
    setlogoerror(val);
  };

  const headlineerrormethod = (val) => {
    appheadlineerror(val);
  };

  const domainerrormethod = (val) => {
    setdomainerror(val);
  };

  const appnameerrormethod = (val) => {
    setappnameerror(val);
  };

  const nftperdaymethod = (val) => {
    setnftperday(val);
  };

  const dailyrewardmethod = (val) => {
    setdailyreward(val);
  };

  const emailmethod = (val) => {
    setemail(val);
  };

  const tokenfromwalletmethod = (val) => {
    settokenfromwallet(val);
  };

  const verifiedmethod = (val) => {
    setverified(val);
  };

  const candymachinmethod = (val) => {
    setcandymachin(val);
  };

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
        candymachin,
        candymachinmethod,
        verified,
        verifiedmethod,
        tokenfromwallet,
        tokenfromwalletmethod,
        dailyreward,
        dailyrewardmethod,
        nftperday,
        nftperdaymethod,
        email,
        emailmethod,
        appnameerror,
        appnameerrormethod,
        headlineerror,
        headlineerrormethod,
        domainerror,
        domainerrormethod,
        logoerror,
        logoerrormethod,
        candymachinerror,
        candymachinerrormethod,
        tokenfromwalleterror,
        tokenfromwalleterrormethod,
        dailyrewarderror,
        dailyrewarderrormethod,
        emailerror,
        emailerrormethod,
        loading,
        loadingmethod,
      }}
    >
      {children}
    </Mycontext.Provider>
  );
};

export default ContextStore;
