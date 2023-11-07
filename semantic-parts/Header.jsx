import "./Header.css";

const HeaderComponent = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <h3>ICON</h3>
      </div>
      <nav className="nav-container flex ">
        <a href="#about">About</a>
        <a href="#projects">Project</a>
        <a href="#contact">Contact Me</a>
      </nav>
    </div>
  );
};

export default HeaderComponent;
