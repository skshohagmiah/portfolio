'use client'
import React, { useEffect } from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { useInView } from "react-intersection-observer";
import { useActiveSection } from "@/context/ActionSectionContext";

export function Skills() {
  const skills = [
    { name: "HTML", level: "90%" },
    { name: "CSS", level: "85%" },
    { name: "JavaScript", level: "80%" },
    { name: "React.js", level: "75%" },
    { name: "Next.js", level: "70%" },
    { name: "Tailwind CSS", level: "80%" },
    { name: "TypeScript", level: "65%" },
    { name: "Prisma", level: "60%" },
  ];

  const { ref, inView } = useInView({ threshold: 0.5 });
  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    if (inView) {
      setActiveSection("skills");
    }
  }, [setActiveSection, inView]);

  return (
    <div
      id="skills"
      ref={ref}
      className="scroll-mt-8 min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white py-16 relative"
    >
      <BackgroundBeams className="z-0" />
      <div className="container mx-auto px-4 z-10">
        <div className="pb-8 text-center">
          <h2 className="text-3xl font-bold text-blue-400 py-2 border-b-4 border-lime-400 rounded-b-xl inline-block">
            My Skills
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-blue-300">
                {skill.name}
              </h3>
              <div className="relative pt-1">
                <div className="overflow-hidden h-3 mb-4 text-xs flex rounded bg-gray-700">
                  <div
                    style={{ width: skill.level }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                  ></div>
                </div>
                <p className="text-sm text-gray-400">
                  {skill.level} proficiency
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
