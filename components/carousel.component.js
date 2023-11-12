"use client";
import { useState } from "react";
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

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };
  let slides = [
    {
      image: avatar2,
      href: "https://butlay-cv.vercel.app/",
      tech: [html, css],
    },
    {
      image: jslogic,
      href: "https://codesandbox.io/s/individual-project-assignment-2-nk7r3c?file=/src/index.mjs",
      tech: [js],
    },
    {
      image: newsblog,
      href: "https://ipa-news-blog-butlay.vercel.app/",
      tech: [html, css, sass, js],
    },
    {
      image: blogreact,
      href: "https://ipa-react-news-blog-butlay.vercel.app/",
      tech: [html, css, js, react_icon],
    },
    {
      image: todolist,
      href: "https://todoappbyearl.vercel.app/",
      tech: [html, css, js, react_icon, redux, api, materialUI],
    },
    {
      image: beer,
      href: "https://brewery-finder-by-earl.vercel.app/",
      tech: [html, css, js, react_icon, redux, api, googleMap],
    },
    {
      image: onlineshop,
      href: "https://onlineshopbyearl-bluesky140506.vercel.app/",
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

  return (
    <div className="overflow-hidden relative border-solid border-2 z-0 w-auto h-96">
      <div className="flex h-96 m-auto">
        {slides.map((s) => (
          <div
            key={s.href}
            className="flex transition ease-out duration-80 justify-center items-center "
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            <Link
              href={s.href}
              target="_blank"
              className="items-icon flex flex-col justify-center items-center "
            >
              <Image
                src={s.image}
                alt="images"
                width={100}
                height={100}
                className="h-72 w-auto mb-8"
              />
              <div>
                <figure className="flex w-auto h-12 justify-center">
                  {s.tech.map((item) => (
                    <Image
                      key={item}
                      src={item}
                      alt="images"
                      width={100}
                      height={100}
                    />
                  ))}
                </figure>
              </div>
            </Link>
          </div>
        ))}
        ;
      </div>
      <div className="absolute bottom-0 h-full w-full justify-between items-center flex text-black px-10 text-3xl">
        <button onClick={previousSlide} className="z-40">
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide} className="z-40">
          <BsFillArrowRightCircleFill />
        </button>
      </div>
    </div>
  );
}
