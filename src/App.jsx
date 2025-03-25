import { useState, useEffect } from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { UserSidebar } from "./components/layouts/UserSidebar";
import { UserProfile } from "./components/user/UserProfile";
import { Login } from "./components/common/Login";
import { Signup } from "./components/common/Signup";
import { AgencySidebar } from "./components/layouts/AgencySidebar";
import Home from "./components/Home";

import Gallery from "./components/Gallery";
import Contact from "./components/Contact"; // Import Contact component
import AboutUs from "./components/AboutUs";
import { AddScreen } from "./components/agency/AddScreen";
import NewLandingPage from "./components/common/LandingPage"; 
import axios from "axios";
import "./assets/adminlte.css";
import "./assets/adminlte.min.css";
import PrivateRoutes from "./components/hooks/PrivateRoutes";
import { AddScreen2 } from "./components/agency/AddScreen2";
import { ViewMyScreens } from "./components/agency/ViewMyScreens";
import { UpdateMyScreen } from "./components/agency/UpdateMyScreen";

import { ResetPassword } from "./components/common/ResetPassword";

function App() {
  axios.defaults.baseURL = "http://localhost:3000";
  
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/signup") {
      document.body.className = ""; // Remove the unwanted class for login and signup
    } else {
      document.body.className =
        "layout-fixed sidebar-expand-lg bg-body-tertiary sidebar-open app-loaded";
    }
  }, [location.pathname]);

  return (
    <div className={location.pathname === "/login" || location.pathname === "/signup" ? "" : "app-wrapper"}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} /> {/* Add route for Contact */}
        <Route path="/" element={<PrivateRoutes />}>
       
        <Route path ="/resetpassword/:token" element={<ResetPassword/>}></Route>
      


          <Route path="/user" element={<UserSidebar />}>
            <Route path="profile" element={<UserProfile />} />
            <Route path="home" element={<Home />} />
           
            <Route path="gallery" element={<Gallery />} />
            <Route path="about" element={<AboutUs />} />
          </Route>
        </Route>
        <Route path="/agency" element={<AgencySidebar />}>
          <Route path="addscreen" element={<AddScreen2 />} />
          <Route path="myscreens" element={<ViewMyScreens />} />
          <Route path="updateScreen/:id" element={<UpdateMyScreen />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
