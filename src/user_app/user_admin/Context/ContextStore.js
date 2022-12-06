import React, { useState } from "react";
import Mycontext from "./Mycontext";

const ContextStore = ({ children }) => {
  const [name, setname] = useState();
  const [logo, setlogo] = useState();
  const [color, setcolor] = useState();
  const [headline, setheadline] = useState();
  const [caption, setcaption] = useState();
  const [domain, setdomain] = useState();
  const [candymachineid, setcandymachineid] = useState();

  const [rewards, setreward] = useState();
  const [nft, setnft] = useState();
  const [token, settoken] = useState();
  const [email, setemail] = useState();
  const [walletidd, setwallet] = useState();

  const walletmethod = (value) => {
    setwallet(value);
  };
  const namemethod = (value) => {
    setname(value);
  };
  const logomethod = (value) => {
    setlogo(value);
  };

  const colormethod = (value) => {
    setcolor(value);
  };

  const headlinemethod = (value) => {
    setheadline(value);
  };

  const captionmethod = (value) => {
    setcaption(value);
  };

  const domainmethod = (value) => {
    setdomain(value);
  };

  const candymachinemethod = (value) => {
    setcandymachineid(value);
  };

  const nftmethod = (value) => {
    setnft(value);
  };

  const rewardmethod = (value) => {
    setreward(value);
  };
  const tokenmethod = (value) => {
    settoken(value);
  };
  const emailmethod = (value) => {
    setemail(value);
  };

  return (
    <Mycontext.Provider
      value={{
        walletidd,
        walletmethod,
        name,
        namemethod,
        logo,
        logomethod,
        color,
        colormethod,
        headline,
        headlinemethod,
        caption,
        captionmethod,
        domain,
        domainmethod,
        candymachineid,
        candymachinemethod,
        nft,
        nftmethod,
        rewards,
        rewardmethod,
        token,
        tokenmethod,
        email,
        emailmethod,
      }}
    >
      {children}
    </Mycontext.Provider>
  );
};

export default ContextStore;
