import Hero from "../semantic-parts/Section-Hero.jsx";
import Carousel from "../components/carousel.component.js";
import SectionAbout from "../semantic-parts/Section-About.jsx";
import SectionContact from "../semantic-parts/Section-Contact.jsx";

import "./globals.css";

export default function Home() {
  return (
    <div className={`landing-page-container`}>
      <main id="main" className="main-container">
        <Hero />
      </main>

      <section id="projects" className="max-sm:h-full">
        <Carousel />
      </section>

      <section id="about" className="about-me max-sm:flex-col ">
        <SectionAbout />
      </section>
      <section id="contact" className="contact-me">
        <SectionContact />
      </section>
    </div>
  );
}
