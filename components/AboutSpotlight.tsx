'use client';
import React, { useEffect } from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { BackgroundBeams } from "./ui/background-beams";
import { useInView } from "react-intersection-observer";
import { useActiveSection } from "@/context/ActionSectionContext";

export function AboutSpotlight() {

  const { ref, inView } = useInView({ threshold: 0.5 });
  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    if (inView) {
      setActiveSection("about");
    }
  }, [setActiveSection, inView]);

  return (
    <div id="about" ref={ref} className="scroll-mt-8 md:h-[40rem] w-full rounded-md py-16 md:p-0 bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <BackgroundBeams className="z-0" />
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <section className="z-40 w-full px-6 md:px-12 lg:px-24">
        <div className="pb-12 text-center">
          <h2 className="text-3xl font-bold text-blue-400 py-2 border-b-4 border-lime-400 rounded-b-xl inline-block">
            Something About Me
          </h2>
        </div>
        <div className="container mx-auto text-start">
          <div className="max-w-7xl mx-auto md:grid grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-lg">
              <div className="flex items-start">
                <span className="flex-shrink-0 rounded-full bg-slate-600 text-xl font-semibold w-8 h-8 flex items-center justify-center mr-4">1</span>
                <p>Hey there! I&apos;m Shohag Miah, a web developer from Gazipur, Bangladesh, with a passion for crafting digital experiences. Let me share a bit about myself.</p>
              </div>
              <div className="flex items-start mt-4">
                <span className="flex-shrink-0 rounded-full bg-slate-600 text-xl font-semibold w-8 h-8 flex items-center justify-center mr-4">2</span>
                <p>It all started with a humble beginning—I began my journey in the tech world at a beverage company at the age of 14. However, my fascination with computers led me down a different path.</p>
              </div>
              <div className="flex items-start mt-4">
                <span className="flex-shrink-0 rounded-full bg-slate-600 text-xl font-semibold w-8 h-8 flex items-center justify-center mr-4">3</span>
                <p>Fast forward to 2018, when I scraped together enough money to purchase my first laptop. From there, I immersed myself in the world of digital marketing and web development, learning and growing with each passing day.</p>
              </div>
              <div className="flex items-start mt-4">
                <span className="flex-shrink-0 rounded-full bg-slate-600 text-xl font-semibold w-8 h-8 flex items-center justify-center mr-4">4</span>
                <p>In 2021, I took the leap into programming and web development. Armed with determination and a thirst for knowledge, I ventured into the realms of HTML, CSS, React.js, Next.js, and more.</p>
              </div>
            </div>
            <div className="space-y-6 text-lg mt-8 md:mt-0">
              <div className="flex items-start">
                <span className="flex-shrink-0 rounded-full bg-slate-600 text-xl font-semibold w-8 h-8 flex items-center justify-center mr-4">5</span>
                <p>Today, React and Next.js have become my trusted companions in crafting beautiful and functional websites. With each line of code, I strive to create digital experiences that inspire and delight users.</p>
              </div>
              <div className="flex items-start mt-4">
                <span className="flex-shrink-0 rounded-full bg-slate-600 text-xl font-semibold w-8 h-8 flex items-center justify-center mr-4">6</span>
                <p>Outside of coding, you&apos;ll find me exploring nature, sipping on a cup of coffee, or lost in a good book. Let&apos;s connect and create something amazing together!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
