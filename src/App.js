import React, { useContext, useEffect, useState } from "react";
import Appbar from "./views/Appbar";
import ContextStore from "./context/ContextStore";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./views/Home";
import Test from "./Test";
import Test2 from "./Test2";

import AdminHome from "./admin/AdminHome";
import BlogPost from "./admin/Components/BodyComponent/BlogPost";
import Link1 from "./admin/Components/BodyComponent/Link1";
import { Connection, clusterApiUrl, PublicKey } from "@solana/web3.js";
import { useWallet } from "@solana/wallet-adapter-react";
import Notification from "./admin/Components/Header/ActionTab/Notification";
import Dashboard from "./admin/Components/BodyComponent/Dashboard/Dashboard";
import HearderComponent from "./admin/Components/Header/HearderComponent";
import SignIn from "./admin/SignIn";
import Mycontext from "./context/Mycontext";
import Logoutmodel from "./admin/Logoutmodel";
import NewSitePage from "./views/NewSitePage";
import ConnectPage from "./components/ConnectPage";
import LandingPage from "./components/LandingPage";
import UserHome from "./user_app/user_home/components/UserHome";
import StackingDashboard from "./user_app/user_home/Pages/StackingDashboard";
import StackingHome from "./user_app/user_home/Pages/StackingHome";

const App = () => {
  console.log(localStorage.getItem("status"));
  var adminlogedin = localStorage.getItem("status");

  const { wallet, publicKey } = useWallet();
  const [walletid, setwalletid] = useState(publicKey?.toString());

  useEffect(() => {
    setwalletid(publicKey?.toString());
  }, [publicKey]);

  // const CustomRoutes = [
  //   { path: "" },
  //   { path: "dashboard" },
  //   { path: "blog" },
  //   { path: "link1" },
  //   { path: "notification" },
  //   { path: "logout" },
  // ];

  return (
    <Router>
      <ContextStore>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route
              index
              element={walletid ? <ConnectPage /> : <LandingPage />}
            />
            <Route path="create" element={<NewSitePage />} />
          </Route>
          <Route path="/appdata" element={<Test />} />
          <Route exact path="admin/login" element={<SignIn />} />
          <Route path="/user/home" element={<UserHome />}>
            <Route
              index
              element={walletid ? <StackingDashboard /> : <StackingHome />}
            />
          </Route>
          <Route
            path={"/admin"}
            element={
              adminlogedin ? (
                <AdminHome />
              ) : (
                <Navigate to="/admin/login" replace={true} />
              )
            }
          >
            <Route index element={<Dashboard />} />
            <Route path={"blog"} element={<BlogPost />} />

            <Route path={"logout"} element={<Logoutmodel />} />
          </Route>

          {/* <Route path="/admin" element={<AdminHome />}>
            <Route path={`/${LastSegment}`} element={<BlogPost />} />
          </Route>
        </Routes> */}
        </Routes>
        {/* <Routes>  
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
          </Routes> */}
      </ContextStore>
    </Router>
  );
};

export default App;
