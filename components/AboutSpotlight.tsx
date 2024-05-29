import React from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "@/components/ui/spotlight";
import { Boxes } from "./ui/boxes";
import { BackgroundBeams } from "./ui/background-beams";

export function AboutSpotlight() {
  return (
    <div className="md:h-[40rem] w-full rounded-md p-4 md:p-0 bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <BackgroundBeams className="z-0"/>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <section className=" z-40">
        <div className="pb-8">
          <div className="text-3xl font-bold text-center text-blue-400 py-2 border-b-4 border-lime-400 rounded-b-xl w-fit mx-auto">
            Something About Me
          </div>
        </div>
        <div className="container mx-auto px-4 text-start">
          <div className="max-w-7xl mx-auto text-center md:text-start md:grid grid-cols-2 gap-6 items-start">
            <p className="text-lg">
            <span className="rounded-full aspect-square p-2 m-2 bg-slate-600 text-xl font-semibold w-8 h-16">1</span> Hey there! I&apos;m Shohag Miah, a web developer from Gazipur,
              Bangladesh, with a passion for crafting digital experiences. Let
              me share a bit about myself.
            </p>
            <p className="mt-4 text-lg">
            <span className="rounded-full aspect-square p-2 m-2 bg-slate-600 text-xl font-semibold w-8 h-16">2</span>
              It all started with a humble beginning—I began my journey in the
              tech world at a beverage company at the age of 14. However, my
              fascination with computers led me down a different path.
            </p>
            <p className="mt-4 text-lg">
            <span className="rounded-full aspect-square p-2 m-2 bg-slate-600 text-xl font-semibold w-8 h-16">3</span>
              Fast forward to 2018, when I scraped together enough money to
              purchase my first laptop. From there, I immersed myself in the
              world of digital marketing and web development, learning and
              growing with each passing day.
            </p>
            <p className="mt-4 text-lg">
            <span className="rounded-full aspect-square p-2 m-2 bg-slate-600 text-xl font-semibold w-8 h-16">4</span>
              In 2021, I took the leap into programming and web development.
              Armed with determination and a thirst for knowledge, I ventured
              into the realms of HTML, CSS, React.js, Next.js, and more.
            </p>
            <p className="mt-4 text-lg">
            <span className="rounded-full aspect-square p-2 m-2 bg-slate-600 text-xl font-semibold w-8 h-16">5</span>
              Today, React and Next.js have become my trusted companions in
              crafting beautiful and functional websites. With each line of
              code, I strive to create digital experiences that inspire and
              delight users.
            </p>
            <p className="mt-8 text-lg">
            <span className="rounded-full aspect-square p-2 m-2 bg-slate-600 text-xl font-semibold w-8 h-16">6</span>
              Outside of coding, you&apos;ll find me exploring nature, sipping
              on a cup of coffee, or lost in a good book. Let&apos;s connect and
              create something amazing together!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
