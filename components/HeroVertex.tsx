'use client';
import React, { useEffect } from "react";
import { Vortex } from "./ui/vortex";
import Hero from "./Here";
import Header from "./Header";
import { useInView } from "react-intersection-observer";
import { useActiveSection } from "@/context/ActionSectionContext";

export function HeroVertex() {

  const { ref, inView } = useInView({ threshold: 0.5 });
  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    if (inView) {
      setActiveSection("/");
    }
  }, [setActiveSection, inView]);

  return (
    <div ref={ref} className=" mx-auto rounded-md  h-screen overflow-hidden">
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
