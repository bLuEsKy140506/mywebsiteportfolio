import Image from "next/image";

import { Arvo } from "next/font/google";
import avatar from "../assets/real-earl-flip.jpg";
import "./Header-NavBar.css";
import "../app/globals.css";

const arvo = Arvo({
  subsets: ["latin"],
  variable: "--font-arvo",
  weight: "400",
});

const SectionAbout = () => {
  return (
    <>
      <div className="img-container max-sm:w-1/2">
        <Image
          src={avatar}
          className="avatar "
          alt="my-avatar"
          width={300}
          height={400}
          style={{
            width: "auto",
          }}
        />
      </div>

      <div className="description-container max-sm:w-full p-2">
        <p
          className={`text-xl ${arvo.variable} font-sans leading-loose text-center max-sm:text-sm`}
        >
          Hello, I&apos;m{" "}
          <span className="text-2xl font-extrabold text-teal-600 max-sm:text-sm">
            Earl Lauriece S. Butlay
          </span>
          , aspiring web developer with a strong command of the fundamental
          aspects of web development. My expertise lies in crafting dynamic and
          responsive websites. From HTML and CSS to JavaScript and beyond, I
          create seamless and visually appealing online experiences. I am
          passionate about staying at the forefront of emerging technologies to
          ensure that my skills are always up-to-date in this ever-evolving
          field.
        </p>
      </div>
    </>
  );
};

export default SectionAbout;
