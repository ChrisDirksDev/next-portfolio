import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaKey,
  FaMobile,
  FaLaptop,
  FaMoneyBill,
  FaCookie,
} from "react-icons/fa";
import { fadeUpAttr } from "../utils/animations";

export default function CharacterSheet() {
  const CharacterSheetSkills = {
    frontend: [
      "React",
      "Next.js",
      "Angular",
      "Zustand",
      "ES6",
      "TypeScript",
      "Tailwind",
      "Material UI",
    ],
    backend: ["Node.js", "Express", "MongoDB", "REST APIs", "JOI"],
    testing: ["Jest", "Jasmine", "Cypress"],
    tools: ["Git", "GitHub", "Figma", "Postman"],
  };

  return (
    <section className="bg-secondary p-6 mx-auto rounded-lg shadow-lg mb-16 max-w-4xl">
      <motion.h2 className="mb-6" {...fadeUpAttr}>
        Character Sheet
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4">
          <div className="input-fields">
            <motion.div className="sheet-field" {...fadeUpAttr}>
              <h3 className="label">Name:</h3>
              <span className="entry">Chris Dirks</span>
            </motion.div>
            <motion.div className="sheet-field" {...fadeUpAttr}>
              <h3 className="label">Location:</h3>
              <span className="entry">Halifax, NS</span>
            </motion.div>
          </div>
          <motion.div className="picture" {...fadeUpAttr}>
            <Image
              src="/me-mountain.jpg"
              alt="Your Name"
              width={1000}
              height={1000}
              className="rounded-2xl shadow-lg"
            />
          </motion.div>
          <motion.div className="sheet-field" {...fadeUpAttr}>
            <h3 className="label">Inventory:</h3>
          </motion.div>
          <motion.div
            className="grid grid-cols-3 sm:grid-cols:3 gap-4 justify-items-center"
            {...fadeUpAttr}
          >
            <FaKey className="w-12 h-12 border-2 solid" />
            <FaMobile className="w-12 h-12" />
            <FaLaptop className="w-12 h-12" />
            <FaMoneyBill className="w-12 h-12" />
            <FaCookie className="w-12 h-12" />
          </motion.div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="input-fields">
            <motion.div className="sheet-field" {...fadeUpAttr}>
              <h3 className="label">Class:</h3>
              <span className="entry">Developer</span>
            </motion.div>
            <motion.div className="sheet-field" {...fadeUpAttr}>
              <h3 className="label">Level:</h3>
              <span className="entry">35</span>
            </motion.div>
          </div>
          <div className="skills-section">
            <motion.h3 className="label border-b-2 mb-4" {...fadeUpAttr}>
              Skills:
            </motion.h3>
            <div className="flex gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="skill-container">
                  <motion.h3 className="label" {...fadeUpAttr}>
                    Frontend:
                  </motion.h3>
                  <ul>
                    {CharacterSheetSkills.frontend.map((skill, index) => (
                      <motion.li key={index} className="entry" {...fadeUpAttr}>
                        {skill}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="skill-container">
                  <motion.h3 className="label" {...fadeUpAttr}>
                    Backend:
                  </motion.h3>
                  <ul>
                    {CharacterSheetSkills.backend.map((skill, index) => (
                      <motion.li key={index} className="entry" {...fadeUpAttr}>
                        {skill}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="skill-container">
                  <motion.h3 className="label" {...fadeUpAttr}>
                    Testing:
                  </motion.h3>
                  <ul>
                    {CharacterSheetSkills.testing.map((skill, index) => (
                      <motion.li key={index} className="entry" {...fadeUpAttr}>
                        {skill}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="skill-container">
                  <motion.h3 className="label" {...fadeUpAttr}>
                    Tools:
                  </motion.h3>
                  <ul>
                    {CharacterSheetSkills.tools.map((skill, index) => (
                      <motion.li key={index} className="entry" {...fadeUpAttr}>
                        {skill}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
