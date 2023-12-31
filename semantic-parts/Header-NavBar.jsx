"use client";
import "./Header-NavBar.css";
import Link from "next/link";
import Image from "next/image";
import image from "../assets/logo.png";
import project from "../assets/project2.svg";
import profile from "../assets/profile2.svg";
import contact from "../assets/contact2.svg";
import "../app/globals.css";
import { useState, useEffect } from "react";
import { sectionIds } from "../components/sectionIds.jsx";

const HeaderNavBar = () => {
  const [activeLink, setActiveLink] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  // const scrollToSection = (sectionIds) => {
  //   const element = document.getElementById(sectionIds);
  //   if (element) {
  //     const marginTop = 0;
  //     const scrollToY =
  //       element.getBoundingClientRect().top + window.scrollY - marginTop;
  //     window.scrollTo({ top: scrollToY, behavior: "smooth" });
  //     setActiveLink(sectionIds);
  //   }
  // };

  const determineActiveSection = () => {
    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const section = document.getElementById(sectionIds[i]);
      if (section) {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveLink(sectionIds[i]);
          break;
        }
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      determineActiveSection();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="header-container z-50">
      <div className="logo-container">
        <div>
          <Link href="#hero">
            <Image
              src={image}
              alt="earl-logo"
              className={
                activeLink === "hero"
                  ? "active-logo logo-format"
                  : "logo-format"
              }
              width={250}
              height={250}
            />
          </Link>
        </div>
      </div>
      <nav className="nav-container">
        <Link href="#projects" className="flex gap-2 items-center">
          <span>
            <Image src={project} alt="project-icon" width={35} height={35} />
          </span>
          <span className={activeLink === "projects" ? "active show" : "hide"}>
            Projects
          </span>
        </Link>

        <Link href="#about" className="flex gap-2 items-center">
          <span>
            <Image src={profile} alt="about-icon" width={35} height={35} />
          </span>
          <span className={activeLink === "about" ? "active show" : "hide"}>
            About
          </span>
        </Link>

        <Link href="#contact" className="flex gap-2 items-center">
          <span>
            <Image src={contact} alt="about-icon" width={35} height={35} />
          </span>
          <span className={activeLink === "contact" ? "active show" : "hide"}>
            Contact
          </span>
        </Link>
      </nav>
    </div>
  );
};

export default HeaderNavBar;
