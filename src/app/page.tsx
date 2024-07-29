"use client";
import Link from "next/link";
import React from "react";
import { useState, useCallback } from "react";
import Particles from "./components/particles";
import LanguageSwitcher from "./components/LanguageSwitcher";

const navigation = [
  // { name: "About", href: "/about" },
  { name: "Biography", href: "/biography" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  const [particleColor, setParticleColor] = useState("255, 255, 255");

  const handleScreenClick = useCallback(() => {
    const colorPresets = [
      "255, 0, 0", // 赤
      "0, 255, 0", // ライムグリーン
      "0, 0, 255", // 青
      "255, 255, 0", // 黄
      "255, 0, 255", // マゼンタ
      "0, 255, 255", // シアン
      "255, 128, 0", // オレンジ
      "255, 0, 128", // ピンク
    ];
    const randomIndex = Math.floor(Math.random() * colorPresets.length);
    const newColor = colorPresets[randomIndex];
    setParticleColor(newColor);
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black cursor-pointer"
      onClick={handleScreenClick}
    >
      <nav className="w-full my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-md duration-500 text-zinc-400 hover:text-zinc-100"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="absolute right-0 top-0 m-4">
        <LanguageSwitcher />
      </div>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={5000}
        color={particleColor}
        key={particleColor}
      />
      <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:py-0.5 sm:text-4xl md:text-5xl whitespace-nowrap bg-clip-text">
        Code, Coffee, Repeat
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in max-w-[75%]">
        <h2 className="text-sm  text-zinc-500 ">
          Hey there! This is Masaki Kitsugi&apos;s little corner of the web.
          <br />
          Drop me a line anytime!
        </h2>
      </div>
    </div>
  );
}
