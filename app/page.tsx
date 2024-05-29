import { AboutSpotlight } from "@/components/AboutSpotlight";
import ContactForm from "@/components/ContactForm";
import { HeroVertex } from "@/components/HeroVertex";
import {ThreeDCardDemo } from "@/components/ProjuctsCart";
import Skills from "@/components/Skills";

export default function Home() {


  return (
    <main className="scroll-smooth scroll-my-8">
      <HeroVertex />
      <ThreeDCardDemo
      />
      <Skills />
      <AboutSpotlight />
      <ContactForm />
    </main>
  );
}
