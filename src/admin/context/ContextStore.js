import React, { useState } from "react";
import Mycontext from "./Mycontext";

const ContextStore = ({ children }) => {
  const [latestentries, setlatestentries] = useState();
  const [alltentries, setallentries] = useState();

  const latestentriesmethod = (val) => {
    setlatestentries(val);
  };
  const alltentriesmethod = (val) => {
    setallentries(val);
  };

  return (
    <Mycontext.Provider
      value={{
        latestentries,
        latestentriesmethod,
        alltentries,
        alltentriesmethod,
      }}
    >
      {children}
    </Mycontext.Provider>
  );
};

export default ContextStore;
