import React, {useEffect, useState} from "react"
import './App.css'
import {Routes, Route} from 'react-router-dom';
import keycloak from "./auth/Keycloak.js";

import Home from './pages/home/Home.jsx'
import NotFound from "./pages/notFound/NotFound.jsx";
import CommunityFeed from "./pages/communityFeed/CommunityFeed.jsx";
import Login from "./pages/loginPages/login/Login.jsx";

import TopMenu from "./components/menu/TopMenu.jsx";
import SideMenu from "./components/menu/SideMenu.jsx";
import Register from "./pages/loginPages/register/Register.jsx";
import ForgotPassword from "./pages/loginPages/forgotPassword/ForgotPassword.jsx";
import AddHunt from "./pages/addHunt/AddHunt.jsx";
import AboutUs from "./pages/aboutUs/AboutUs.jsx";
import Settings from "./pages/settings/Settings.jsx";
import ManageCommunity from "./pages/adminPages/manageCommunity/ManageCommunity.jsx";
import ResetPassword from "./pages/loginPages/resetPassword/ResetPassword.jsx";
import MyProfile from "./pages/publicProfiles/MyProfile.jsx";
import UserProfile from "./pages/publicProfiles/UserProfile.jsx";
import TestPage from "./pages/testpage/TestPage.jsx";

function App() {
    const [isInitialized, setIsInitialized] = useState(true);

    useEffect(() => {
        keycloak.init({ onLoad: 'login-required' }).then((authenticated) => {
            if (authenticated) {
                setIsInitialized(true);
            }
        });
    }, []);

    if (!isInitialized) {
        return <div>Loading...</div>;
    }

  return (
    <>
        <div className="appPage">
            <SideMenu />

            <div className="mainPage">
                <TopMenu />

                <main className="pageContent">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/community-feed" element={<CommunityFeed />}/>
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
                        <Route path="/testpage" element={<TestPage/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </main>
            </div>
        </div>
    </>
  );
}

export default App
