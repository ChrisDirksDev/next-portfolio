import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Project } from "../utils/types";
import { fadeUpAttr } from "../utils/animations";

interface PortfolioCardProps {
  project: Project;
}

export default function PortfolioCard({ project }: PortfolioCardProps) {
  return (
    <motion.div className="border p-6 rounded-lg flex flex-col" {...fadeUpAttr}>
      <Image
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover rounded-md mb-4"
        width={500}
        height={500}
      />
      <h3>{project.title}</h3>
      <p className="pb-2 flex-1">{project.description}</p>
      <Link
        href={project.link}
        rel="noopener noreferrer"
        className="text-accent"
      >
        View Project
      </Link>
    </motion.div>
  );
}
