'use client';
import React from "react";
import { Vortex } from "./ui/vortex";
import Hero from "./Here";
import Header from "./Header";

export function HeroVertex() {
  return (
    <div className=" mx-auto rounded-md  h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={550}
        particleCount={100}
        baseHue={520}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full z-50"
      >
        <Header />
        <Hero />
      </Vortex>
    </div>
  );
}
