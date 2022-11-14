import React from "react";
import AdminSidebar from "../AdminSidebar";
// import AdminSidebar from "../AdminSidebar";
// import Header from "./Header/Header";
// import Sidebar from "./Sidebar/Sidebar";
// import AdminMainPage from "./mainpage/index";
// import Popup from "./popup/Popup";
// import Announcement from "./anouncement/Announcement";
// import Users from "./users/Users";
// import Profile from "./profile/Profile";
// import NoFound from "../NoFound/NoFound";
// import Admin from "";
import Admin from "../../pages/Admin/Admin";
import Ambasdor from "../../pages/Admin/Ambasdor";
import AmbasdorView from "../../pages/Admin/AmbasdorView";

const MainAdmin = () => {
  const LastSegment = window.location.pathname.split("/").pop();
  console.log(LastSegment)
  let Content = "";
  switch (LastSegment) {
    case "/":
      Content =<h1>Welcome Page</h1>;
      break;
    case "admin":
      Content = <h1>Welcome Page</h1>;
      break;
    case "chanelview":
      Content = <Admin/>;
      break;
    case "addambasdor":
      Content = <Ambasdor/>;
      break;
    case "ambasdorlist":
      Content = <AmbasdorView/>;
      break;
    // case "announcement":
    //   Content = <Announcement />;
    //   break;
    // case "users":
    //   Content = <Users />;
    //   break;
    // case "setting":
    //   Content = <Setting />;
    //   break;
    // case "profile":
    //   Content = <Profile />;
    //   break;
    default:
      Content = <h1>No Found Page</h1>;
  }
  return (
    <div className="container-fluid">
      <div className="row ">
     
      <AdminSidebar/>
        <div className="  ">
          <div className="MarginLeft-5">
            {/ <Header /> /}
            {Content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainAdmin;