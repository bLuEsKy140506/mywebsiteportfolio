"use client";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderNavBar from "../semantic-parts/Header-NavBar";

import Navigation from "./navigation";

export default function RouterLandingPage() {
  return (
    <>
      <Router>
        <HeaderNavBar />
        <Routes>
          <Route path="/" element={<Navigation />} />
        </Routes>
      </Router>
    </>
  );
}
