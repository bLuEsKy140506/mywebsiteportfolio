"use client";
import Hero from "../semantic-parts/Section-Hero.jsx";
import Carousel from "../components/carousel.component.js";
import SectionAbout from "../semantic-parts/Section-About.jsx";
import SectionContact from "../semantic-parts/Section-Contact.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderNavBar from "../semantic-parts/Header-NavBar";
import "./globals.css";

export default function Home() {
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

export function Navigation() {
  return (
    <main className={`landing-page-container`}>
      <section id="hero" className="main-container">
        <Hero />
      </section>

      <section id="projects" className="max-sm:h-full">
        <Carousel />
      </section>

      <section id="about" className="about-me max-sm:flex-col ">
        <SectionAbout />
      </section>

      <section id="contact" className="contact-me">
        <SectionContact />
      </section>
    </main>
  );
}
