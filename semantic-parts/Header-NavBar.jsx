import "./Header-NavBar.css";
import Link from "next/link";
import Image from "next/image";
import image from "../assets/logo.png";
import project from "../assets/project2.svg";
import profile from "../assets/profile2.svg";
import contact from "../assets/contact2.svg";
import "../app/globals.css";

const HeaderNavBar = () => {
  return (
    <div className="header-container z-50">
      <div className="logo-container">
        <Link href="#main">
          <Image
            src={image}
            alt="earl-logo"
            className="logo-format"
            width={250}
            height={250}
          />
        </Link>
      </div>
      <nav className="nav-container">
        <Link href="#projects" className="flex">
          <span className="icon">
            <Image src={project} alt="project-icon" width={25} height={25} />
          </span>
          <span className="text">Project</span>
        </Link>
        <Link href="#about" className="flex">
          <span className="icon">
            <Image src={profile} alt="project-icon" width={25} height={25} />
          </span>
          <span className="text">About</span>
        </Link>
        <Link href="#contact" className="flex">
          <span className="icon">
            <Image src={contact} alt="project-icon" width={25} height={25} />
          </span>
          <span className="text">Contact</span>
        </Link>
      </nav>
    </div>
  );
};

export default HeaderNavBar;
