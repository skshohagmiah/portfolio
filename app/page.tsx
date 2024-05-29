import { AboutSpotlight } from "@/components/AboutSpotlight";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import Hero from "@/components/Here";
import { HeroVertex } from "@/components/HeroVertex";
import { ProjectsGridLayout } from "@/components/ProjectsGridLayout";
import {ThreeDCardDemo } from "@/components/ProjuctsCart";
import Image from "next/image";

export default function Home() {


  return (
    <main className="space-y-8">
      <HeroVertex />
      <ThreeDCardDemo
      />
      <AboutSpotlight />
      <ContactForm />
    </main>
  );
}
