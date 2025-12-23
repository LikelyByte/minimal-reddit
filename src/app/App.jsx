import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home/Home";
import Popular from "../pages/Popular/Popular";
import Explore from "../pages/Explore/Explore";
import "./App.css"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Navigate to="/home" replace />} />
        <Route path="home" element={<Home />} />
        <Route path="popular" element={<Popular />} />
        <Route path="explore" element={<Explore />} />
      </Route>
    </Routes>
  );
};

export default App;
