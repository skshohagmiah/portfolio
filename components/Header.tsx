"use client";
import { useActiveSection } from "@/context/ActionSectionContext";
import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import { act, useActionState, useEffect, useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollToggle, setScrollToggle] = useState(false);
  const { activeSection } = useActiveSection();

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.scrollY >= 80) {
        setScrollToggle(true);
      } else {
        setScrollToggle(false);
      }
    });
  }, []);

  return (
    <header
      className={cn(
        "bg-black border-b-2  shadow-md fixed top-0 left-0 right-0 z-[1000]",
        scrollToggle && "bg-black border-b-2"
      )}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={"/images/shohag.png"}
            alt="shohag"
            width={50}
            height={50}
            className="rounded-full ring-2 object-contain"
          />
          <div>
            <h2 className="text-blue-400 text-lg">Shohag Miah</h2>
            <small className="-mt-1 block">Web developer</small>
          </div>
        </Link>
        <nav className="hidden md:flex space-x-8 text-gray-300">
          <Link href="/" className={cn(" hover:text-white px-4 py-2 rounded-full", activeSection === '/' && 'bg-slate-800 ')}>
            Home
          </Link>
          <Link href="#projects" className={cn(" hover:text-white px-4 py-2 rounded-full", activeSection === 'projects' && 'bg-slate-800 ')}>
            Projects
          </Link>
          <Link href="#skills" className={cn(" hover:text-white px-4 py-2 rounded-full", activeSection === 'skills' && 'bg-slate-800 ')} >
            Skills
          </Link>
          <Link href="#about" className={cn(" hover:text-white px-4 py-2 rounded-full", activeSection === 'about' && 'bg-slate-800 ')}>
            About
          </Link>
        </nav>
        <div className="hidden md:flex">
          <Link
            href={"#contact"}
            className={cn("inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50", activeSection === 'contact' && 'ring-2')}
          >
            Contact Me
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-whites focus:outline-none focus:text-whites"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <nav className="px-4 pt-2 pb-4 space-y-4">
            <Link href="/" className="block text-whites hover:text-whites">
              Home
            </Link>
            <Link href="#about" className="block text-whites hover:text-whites">
              About
            </Link>
            <Link
              href="#projects"
              className="block text-whites hover:text-whites"
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="block text-whites hover:text-whites"
            >
              Skills
            </Link>
            <Link
              href="#contact"
              className="block text-whites hover:text-whites"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
