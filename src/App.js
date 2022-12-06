import React, { useContext, useEffect, useState } from "react";
import Appbar from "./views/Appbar";
import ContextStore from "./context/ContextStore";
import "@fontsource/poppins";
import "./App.css";
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
import UserAdmin from "./user_app/user_admin/UserAdmin";
import AdminDashboard from "./user_app/user_admin/components/pages/Dashboard";
import NftSetting from "./user_app/user_admin/components/pages/NftSetting";

import TokenDistribution from "./user_app/user_admin/components/TokenDistribution";

import Seo from "./user_app/user_admin/components/pages/sub-pages/Seo";

import Theme from "./user_app/user_admin/components/pages/sub-pages/Theme";

import Admins from "./user_app/user_admin/components/pages/sub-pages/Admin";

import Others from "./user_app/user_admin/components/pages/sub-pages/Other";

const App = () => {
  console.log(localStorage.getItem("status"));
  var adminlogedin = localStorage.getItem("status");

  const { wallet, publicKey } = useWallet();
  const [walletid, setwalletid] = useState(publicKey?.toString());

  useEffect(() => {
    setwalletid(publicKey?.toString());
  }, [publicKey]);

  return (
    <Router>
      <ContextStore>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<ConnectPage />} />
            <Route path="create" element={<NewSitePage />} />
          </Route>
          <Route path="/appdata" element={<Test />} />
          <Route exact path="admin/login" element={<SignIn />} />
          <Route path="/user/:id" element={<UserHome />}>
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

          <Route path="/admin/:id" element={<UserAdmin />}>
            <Route index element={<AdminDashboard />} />
            <Route path="nft-settings" element={<NftSetting />} />
            <Route path="token-distribution" element={<TokenDistribution />} />
            <Route path="seo" element={<Seo />} />
            <Route path="theme" element={<Theme />} />
            <Route path="admin" element={<Admins />} />
            <Route path="others" element={<Others />} />
          </Route>
        </Routes>
      </ContextStore>
    </Router>
  );
};

export default App;
