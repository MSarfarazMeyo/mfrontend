import React from "react";
import ContextStore from "./Context/ContextStore";

import HearderComponent from "./components/Header/HearderComponent";

const UserAdmin = () => {
  return (
    <>
      <ContextStore>
        <HearderComponent />
      </ContextStore>
    </>
  );
};

export default UserAdmin;
