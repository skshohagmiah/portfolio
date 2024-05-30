"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-cart";
import Link from "next/link";
import { useActiveSection } from "@/context/ActionSectionContext";
import { useInView } from "react-intersection-observer";

export function ThreeDCardDemo() {

  const { ref, inView } = useInView({ threshold: 0.5 });
  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    if (inView) {
      setActiveSection("projects");
    }
  }, [setActiveSection, inView]);

  const projectItems = [
    {
      name: "TechBazer - Next Js Electronics Ecommerce Website",
      description:
        "This is an E-commerce website build with next js, tailwindcss and shadcn ui, this is a mainly frontend focus application. I have developed more than 20+ pages with dashboard and form with proper validation using react-hook-form and zod. ",
      image: "/images/techbazer.png",
      github: "https://github.com/skshohagmiah/techBazer",
      live: "https://tech-bazer-skshohagmiahs-projects.vercel.app/",
      className: "col-span-2",
    },
    {
      name: "StayHub - Next Js Hotel Reservation System",
      description:
        "This is a Property booking application like airbnb. I build this with next js 14, tailwindcss, prisma, authjs, mongodb, uploadthing and others. This app has all necessary features like property listing, property booking, wishlist management and others",
      image: "/images/stayhub.png",
      github: "https://github.com/skshohagmiah/stayhub",
      live: "https://stayhub-rose.vercel.app/",
      className: "col-span-1",
    },
    {
      name: "Teamify - Next Js Team Collaboration App ",
      description:
        "This is a remote team collaboration tool build with next js, prisma, node js, express js, socket.io and other tools. In this app user can aassign and manage task, can do realtime calling and messaging and also multiplayer drawing and many more.",
      image: "/images/teamify.png",
      className: "md:col-span-1",
      github: "https://github.com/skshohagmiah/teamifys",
      live: "https://teamify-tau.vercel.app/",
    },
  ];



  return (
    <div ref={ref} id="projects" className="bg-gray-800 py-16 scroll-mt-8">
      <div className="text-3xl font-bold text-center text-blue-400 py-2  border-b-4 border-lime-400 rounded-b-xl w-fit mx-auto">
        Some Of My Projects
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start max-w-7xl mt-12 md:mt-0 mx-auto">
        {projectItems.map((item) => (
          <CardContainer key={item.name} className="inter-var w-full">
            <CardBody className="relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black  border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-white"
              >
                {item.name}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-sm max-w-sm mt-2 text-neutral-300"
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
                  className="px-4 py-2 rounded-xl text-xs font-normal text-white"
                >
                  Github
                </CardItem>
                <CardItem
                  translateZ={20}
                  as={Link}
                  href={item.live}
                  className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold"
                >
                  Live Link
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}
