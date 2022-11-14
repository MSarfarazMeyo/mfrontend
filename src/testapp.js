import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Dashboard/Home";
import Profile from "./pages/Profile";
import Settings from "./pages/Profile/Settings";
import ChannalGenerate from "./pages/creates/ChannalGenerate";

import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Header from "./components/Header/Header"
// import Staking from "./pages/Staking/Staking.js"
import "./App.css";
import { useMoralis } from "react-moralis";
import { ConnectButton, Icon } from "web3uikit";
import Landing from "./pages/Landing/Landing";
import Stream from "./pages/Streaming/Stream";
import ChannelView from "./components/Cards/ChannelView";
import Channel from "./pages/Channel/Channel";
import Admin from "./pages/Admin/Admin";
import AdminSidebar from "./components/AdminSidebar";
import Signup from "./pages/Admin/Signup";
import Login from "./pages/Admin/Login";
import Ambasdor from "./pages/Admin/Ambasdor";
import AmbasdorView from "./pages/Admin/AmbasdorView";
import Cookies from "js-cookie";
import Popup from "./components/Cards/Popup";
import MainAdmin from "./components/admin/MainAdmin";

import { useNavigate} from 'react-router-dom';




const App = () => {
  const [userid, setUserid] = useState("");
  const { isAuthenticated, Moralis } = useMoralis();
 
  
  var navigate = useNavigate();
  useEffect(() => {
    let loginToken = Cookies.get("login");
    if (loginToken) {
  
    setUserid(loginToken)
    }
  
   


  }, []);

  const CustomRoutes = [
    { path: "" },
    { path: "chanelview" },
    { path: "addambasdor" },
    { path: "ambasdorlist" },
  //   { path: "announcement" },
  //   { path: "users" },
  //   { path: "profile" },
  ];



  return (
    <>


      {isAuthenticated ? (
        <>
          {/* <div className="page">
      <Header/>
      
    <Sidebar/>
    <div className="mainWindow">
         <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/profile" element={<Profile />} />
             <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>

        </div> */}


          <div className="page">
            {/ <Header/> /}
            <div className="">
              <Sidebar />

            </div>
            <div className="mainWindow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                {/ <Route path="/Staking" element={<Staking />} /> /}

                <Route path="/settings" element={<Settings />} />
                <Route path="/live" element={<Stream />} />
                <Route path="/channel/:id" element={<Channel />} />
                <Route path="/createChanal" element={<ChannalGenerate />} />


              </Routes>
            </div>

          </div>
          
        </>
      ) : (
        <>
        <Routes>
        <Route exact path="/" element={<Landing />} />
        </Routes>
        
         
          <div className="page">
          
            <div className="">

            </div>
            <div className="mainWindow">
              <Routes>
            
              
                <Route  exact  path="admin/login" element={<Login/>} />
                <Route exact path="admin/signup" element={<Signup/>} />
                <Route path="admin" element={<MainAdmin />} />
                {/ <Route exact  path="admin" element={userid ? <MainAdmin/> : navigate("admin/login", {replace:"treu"})}/> /}
                {CustomRoutes.map((cat) => {
                  return (
                    <Route
                      key={cat}
                      path={`admin/${cat.path}`}
                      element={<MainAdmin />}
                    />
                  );
                })}
              </Routes>
            </div>

          </div>



        </>
      )}
    </>
  );
};

export default App;