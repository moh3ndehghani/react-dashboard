import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "layouts/main-layout/MainLayout";
import Home from "views/home/Home";
import AuthLayout from "layouts/auth-layout/AuthLayout";
import Login from "views/login/Login";
import Profile from "views/profile/profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index id="home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
