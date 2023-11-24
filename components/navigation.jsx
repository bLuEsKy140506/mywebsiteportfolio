import Hero from "../semantic-parts/Section-Hero.jsx";
import Carousel from "../components/carousel.component.js";
import SectionAbout from "../semantic-parts/Section-About.jsx";
import SectionContact from "../semantic-parts/Section-Contact.jsx";

import "../app/globals.css";

export default function Navigation() {
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
