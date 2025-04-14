"use client";
import Image from "next/image";
import { FaLightbulb, FaHandshake, FaCrosshairs } from "react-icons/fa";
import { motion } from "framer-motion";
import "./globals.css";
import RotatingWords from "./components/RotatingWords";
import CharacterSheet from "./components/CharacterSheet";
import PortfolioCard from "./components/PortfolioCard";
import { fadeUpAttr } from "./utils/animations";

export default function HomePage() {
  const skills = [
    {
      icon: <FaLightbulb className="w-12 h-12" />,
      title: "Curiosity",
      description:
        "I embrace challenges with an explorer’s mindset, always eager to learn, adapt, and uncover the best solutions for every project.",
    },
    {
      icon: <FaHandshake className="w-12 h-12" />,
      title: "Collaboration",
      description:
        "Great ideas come to life through teamwork. I thrive on building strong connections, sharing knowledge, and creating innovative results together.",
    },
    {
      icon: <FaCrosshairs className="w-12 h-12" />,
      title: "Precision",
      description:
        "Details matter. I take pride in crafting clean, efficient, and reliable code that brings visions to life and exceeds expectations.",
    },
  ];

  const projects = [
    {
      title: "Ecommerce Store",
      description:
        "A full-stack eCommerce example built with Vite + React, Tailwind, and Zustand on the frontend, alongside an Express backend with a hosted MongoDB database.",
      image: "/ecommerce-screenshot.png",
      link: "/ecommerce",
    },

    {
      title: "This Website",
      description:
        "A personal portfolio website showcasing my projects and skills, built with Next.js and Tailwind CSS.",
      image: "/portfolio-screen.png",
      link: "/website",
    },
  ];

  return (
    <div className="container mx-auto flex flex-col justify-center items-center p-8">
      {/* Hero Section */}
      <section className="bg-primary text-center hero-background min-h-screen flex flex-col justify-center items-center">
        <div className="relative z-10 ">
          <h1 className="text-6xl mb-4">Let&apos;s build something</h1>

          <RotatingWords
            words={["Interactive", "Responsive", "Beautiful", "Dynamic"]}
            interval={2000}
            className="text-4xl font-bold "
          />
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto flex flex-col md:flex-row items-center gap-8 py-16">
        <motion.div
          className="w-full md:w-1/3 flex justify-center"
          {...fadeUpAttr}
        >
          <Image
            src="/me.png"
            alt="Your Name"
            width={1000}
            height={1000}
            className="rounded-2xl shadow-lg"
          />
        </motion.div>

        <div className="w-full md:w-2/3">
          <motion.h2 className="mb-4" {...fadeUpAttr}>
            Behind the Screen
          </motion.h2>
          <motion.p className="mb-4" {...fadeUpAttr}>
            Hi, I’m Chris! A passionate web developer who thrives on bringing
            tech to life, creating seamless user experiences, and crafting
            responsive web designs. My journey began with a love for gaming and
            tech, and over the years, I’ve honed my skills in various frontend
            frameworks to build intuitive interfaces that make a difference.
          </motion.p>
          <motion.p className="mb-4" {...fadeUpAttr}>
            When I’m not coding, I’m moonlighting as a traveling petsitter,
            exploring new places while caring for animals. This nomadic
            lifestyle has taught me the importance of balance, adaptability, and
            problem-solving—skills that flow directly into my work as a
            developer.
          </motion.p>
          <motion.p {...fadeUpAttr}>
            I believe in the power of learning and growth, so I’m constantly
            pursuing new challenges, from developing my indie RPG to learning
            the latest in tech trends. My goal is to make an impact, whether
            through a project, teaching others, or building my dream of working
            from my own non-profit animal sanctuary.
          </motion.p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto py-16">
        <motion.h2 className="text-center mb-12" {...fadeUpAttr}>
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              {...fadeUpAttr}
            >
              {skill.icon}
              <h3 className="mt-4">{skill.title}</h3>
              <p className="mt-2">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Character Sheet Section */}
      <CharacterSheet />

      {/* Portfolio Section */}

      <section id="projects" className="py-16">
        <motion.h2 className="mb-8" {...fadeUpAttr}>
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <PortfolioCard project={project} key={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
