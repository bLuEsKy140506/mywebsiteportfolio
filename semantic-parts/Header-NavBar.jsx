import "./Header-NavBar.css";
import Link from "next/link";
import Image from "next/image";
import image from "../assets/logo.png";

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
        <Link href="#projects">Project</Link>

        <Link href="#about">About</Link>
        <Link href="#contact">Contact</Link>
      </nav>
    </div>
  );
};

export default HeaderNavBar;
