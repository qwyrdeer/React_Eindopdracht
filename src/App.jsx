import React from "react"
import './App.css'
import { Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home.jsx'
import NotFound from "./pages/notFound/NotFound.jsx";
import CommunityFeed from "./pages/communityFeed/CommunityFeed.jsx";
import Login from "./pages/entryPages(Reg_Login)/login/Login.jsx";

import TopMenu from "./components/menu/TopMenu.jsx";
import SideMenu from "./components/menu/SideMenu.jsx";
import Register from "./pages/entryPages(Reg_Login)/register/Register.jsx";
import ForgotPassword from "./pages/entryPages(Reg_Login)/forgotPassword/ForgotPassword.jsx";
import AddHunt from "./pages/addHunt/AddHunt.jsx";
import AboutUs from "./pages/aboutUs/AboutUs.jsx";
import Settings from "./pages/settings/Settings.jsx";
import ManageCommunity from "./pages/adminPages/manageCommunity/ManageCommunity.jsx";
import ResetPassword from "./pages/entryPages(Reg_Login)/resetPassword/ResetPassword.jsx";
import MyProfile from "./pages/publicProfiles/MyProfile.jsx";
import UserProfile from "./pages/publicProfiles/UserProfile.jsx";

function App() {

  return (
    <>
        <div className="appPage">
            <SideMenu />

            <div className="mainPage">
                <TopMenu />

                <main className="pageContent">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/community-feed" element={<CommunityFeed/>}/>
                        <Route path="/add-hunt" element={<AddHunt/>}/>
                        <Route path="/about-us" element={<AboutUs/>}/>
                        <Route path="/my-profile" element={<MyProfile/>}/>
                        <Route path="/userProfile/:id" element={<UserProfile/>}/>
                        <Route path="/manage-community" element={<ManageCommunity/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/reset-password" element={<ResetPassword/>}/>
                        <Route path="/forgot-password" element={<ForgotPassword/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </main>
            </div>
        </div>
    </>
  );
}

export default App
