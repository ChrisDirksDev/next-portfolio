// components/Navbar.tsx

import Link from "next/link";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

const links = [
  {
    link: "https://github.com/ChrisDirksDev",
    icon: FaGithub,
  },
  {
    link: "https://www.linkedin.com/in/chris-dirks/",
    icon: FaLinkedin,
  },
  {
    link: "/resume.pdf",
    icon: FaDownload,
  },
];

export default function Navbar() {
  return (
    <nav className="bg-primary fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-8">
        {/* Logo (on the left) */}
        <div className="text-2xl font-heading">
          <Link href="/">
            <h2 className="transition"> ChrisDirks.com </h2>
          </Link>
        </div>

        {/* Navigation Links (on the right) */}
        <div className="flex gap-4">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.link}
              target={link.link.startsWith("http") ? "_blank" : "_self"}
              rel="noopener noreferrer"
            >
              <link.icon className="w-10 h-10 text-primary transition" />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
