"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-cart";
import Link from "next/link";

export function ThreeDCardDemo() {
  const projectItems = [
    {
      name: "TechBazer - Next 14 Electronics Ecommerce Website",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi quod voluptates culpa aliquid. Eius beatae illo repellat facere accusamus ratione ipsum quibusdam voluptatem cupiditate error, blanditiis nulla minus doloribus? Unde.",
      image: "/images/techbazer.png",
      github: "https://github.com/skshohagmiah/techBazer",
      live: "https://tech-bazer-skshohagmiahs-projects.vercel.app/",
      className: "col-span-2",
    },
    {
      name: "StayHub - Next 14, Prisma, Taiwindcss Hotel Reservation System",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi quod voluptates culpa aliquid. Eius beatae illo repellat facere accusamus ratione ipsum quibusdam voluptatem cupiditate error, blanditiis nulla minus doloribus? Unde.",
      image: "/images/stayhub.png",
      github: "https://github.com/skshohagmiah/stayhub",
      live: "https://stayhub-rose.vercel.app/",
      className: "col-span-1",
    },
    {
      name: "Teamify - Next 14 Team Collaboration App ",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi quod voluptates culpa aliquid. Eius beatae illo repellat facere accusamus ratione ipsum quibusdam voluptatem cupiditate error, blanditiis nulla minus doloribus? Unde.",
      image: "/images/team.png",
      className: "md:col-span-1",
      github: "https://github.com/skshohagmiah/teamifys",
      live: "https://teamify-tau.vercel.app/",
    },
  ];

  return (
    <>
      <div className="text-3xl font-bold text-center text-blue-400 py-2 mt-8 border-b-4 border-lime-400 rounded-b-xl w-fit mx-auto">Some Of My Products</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start max-w-7xl mx-auto -pt-4">
        {projectItems.map((item) => (
          <CardContainer key={item.name} className="inter-var w-full !py-0">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {item.name}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {item.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={item.image}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href={item.github}
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Github
                </CardItem>
                <CardItem
                  translateZ={20}
                  as={Link}
                  href={item.live}
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Live Link
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </>
  );
}
