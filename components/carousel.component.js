"use client";
import { useState, useEffect } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

import Image from "next/image";
import Link from "next/link";
import "../app/globals.css";
import "./carousel.css";

import newsblog from "../assets/blogs.svg";
import jslogic from "../assets/js-square-svgrepo-com.svg";
import avatar2 from "../assets/avatar.svg";
import todolist from "../assets/list-new.svg";
import blogreact from "../assets/blog-blue.svg";
import beer from "../assets/beer.svg";
import onlineshop from "../assets/onlineshop.svg";

import html from "../assets/tech-HTML.svg";
import css from "../assets/tech-CSS.svg";
import js from "../assets/tech-JS.svg";
import react_icon from "../assets/tech-React.svg";
import redux from "../assets/tech-Redux.svg";
import materialUI from "../assets/tech-MaterialUI.svg";
import api from "../assets/tech-API.svg";
import googleMap from "../assets/google-map-icon.svg";
import googleAuth from "../assets/google_auth.svg";
import mongodb from "../assets/tech-mongodb.svg";
import tailwind from "../assets/tech-Tailwind.svg";
import sass from "../assets/tech-Sass.svg";
import nextjs from "../assets/tech-Nextjs.svg";

export default function Carousel() {
  let [current, setCurrent] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) {
      setCurrent(0);
      console.log("i been fired");
    } else setCurrent(current + 1);
  };
  let slides = [
    {
      image: avatar2,
      description: "Website with CV",
      href: "https://butlay-cv.vercel.app/",
      gitHub: "https://github.com/bLuEsKy140506/Butlay-CV",
      tech: [html, css],
    },
    {
      image: jslogic,
      description: "Practicing Logic using Javascript",
      href: "https://codesandbox.io/s/individual-project-assignment-2-nk7r3c?file=/src/index.mjs",
      gitHub: "https://github.com/bLuEsKy140506/Javascript_logic_IPA2",
      tech: [js],
    },
    {
      image: newsblog,
      description: "News Blog Website",
      href: "https://ipa-news-blog-butlay.vercel.app/",
      gitHub: "https://github.com/bLuEsKy140506/IPA-NewsBlog-Butlay",
      tech: [html, css, sass, js],
    },
    {
      image: blogreact,
      description: "Adaptive Blog Website",
      href: "https://ipa-react-news-blog-butlay.vercel.app/",
      gitHub: "https://github.com/bLuEsKy140506/IPA-ReactNewsBlog-Butlay",
      tech: [html, css, js, react_icon],
    },
    {
      image: todolist,
      description: "TodoList App",
      href: "https://todoappbyearl.vercel.app/",
      gitHub: "https://github.com/bLuEsKy140506/IPA-ToDoApp-Butlay",
      tech: [html, css, js, react_icon, redux, api, materialUI],
    },
    {
      image: beer,
      description: "Brewery Finder App",
      href: "https://brewery-finder-by-earl.vercel.app/",
      gitHub: "https://github.com/bLuEsKy140506/IPA-Brewery-Finder-by-eArL",
      tech: [html, css, js, react_icon, redux, api, googleMap],
    },
    {
      image: onlineshop,
      description: "Online Shop App",
      href: "https://onlineshopbyearl-bluesky140506.vercel.app/",
      gitHub: "https://github.com/bLuEsKy140506/onlineShopbyeArL",
      tech: [
        html,
        css,
        js,
        react_icon,
        nextjs,
        redux,
        api,
        mongodb,
        googleAuth,
      ],
    },
  ];

  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        setCurrent(current + 1);
        if (current === slides.length - 1) {
          setCurrent(0);
        } else setCurrent(current + 1);
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [slides.length, current, isHovering]);

  return (
    <div className="overflow-hidden relative border-solid border-2 w-auto h-full -mt-14">
      <div
        className="flex h-full m-auto"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {slides.map((s) => (
          <div
            key={`${s.description}--container`}
            className="flex transition ease-out duration-80 justify-center items-center "
            style={{
              transform: `translateX(-${current * 100}%)`,
              zIndex: "39",
            }}
          >
            <div className="items-icon flex flex-col justify-center items-center">
              <Link href={s.href} target="_blank">
                <Image
                  src={s.image}
                  alt="images"
                  width={100}
                  height={100}
                  className="h-60 w-auto max-sm:h-32 mb-8"
                />
              </Link>
              <div>
                <p className="text-center text-2xl mb-4">{s.description}</p>
                <figure className="flex justify-center h-12 mb-6">
                  {s.tech.map((item) => (
                    <Image
                      key={item}
                      src={item}
                      alt={`tech-images-${s.description}`}
                      width={65}
                      height={65}
                      className="grayscale-[50%] max-sm:h-7 max-sm:w-7"
                    />
                  ))}
                </figure>
                <p className="flex justify-center gap-4 mb-4">
                  <Link href={s.href} target="_blank">
                    <button className="z-50 bg-teal-500 hover:bg-teal-300 text-gray-800 font-semibold py-2 px-4 border border-gray-400 hover:border-white rounded-full shadow ">
                      Live Demo
                    </button>
                  </Link>
                  <Link href={s.gitHub} target="_blank">
                    <button className="z-50 bg-teal-500 hover:bg-teal-300 text-gray-800 font-semibold py-2 px-4 border border-gray-400 hover:border-white rounded-full shadow">
                      Source Code
                    </button>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        ))}
        ;
      </div>
      <div className="absolute bottom-0 h-full w-full justify-between items-center flex text-black px-10 max-sm:px-1 text-3xl">
        <button onClick={previousSlide} className="z-40 hover:text-gray-700">
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide} className="z-40 hover:text-gray-700">
          <BsFillArrowRightCircleFill />
        </button>
      </div>
      <div className="absolute bottom-0 py-3 flex justify-center gap-3 w-full">
        {slides.map((item, index) => (
          <>
            <div
              key={item.description}
              onClick={() => {
                setCurrent(index);
              }}
              className={`rounded-full w-5 h-5 z-40 cursor-pointer ${
                index === current ? "bg-teal-800" : "bg-teal-400"
              }`}
            ></div>
          </>
        ))}
      </div>
    </div>
  );
}
