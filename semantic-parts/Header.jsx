import "./Header.css";
import Link from "next/link";
import Image from "next/image";
import image from "../assets/logo.png";

const HeaderComponent = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <Link href="#main">
          <Image
            src={image}
            alt="earl-logo"
            className="logo-format"
            width={100}
            height={100}
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

export default HeaderComponent;
