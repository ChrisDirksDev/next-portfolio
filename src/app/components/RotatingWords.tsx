// components/RotatingWords.tsx

"use client";
import { useState, useEffect } from "react";
import classNames from "classnames";
import { motion, AnimatePresence } from "framer-motion";

interface RotatingWordsProps {
  words: string[];
  interval?: number;
  className?: string;
}

export default function RotatingWords({ words, interval = 2000, className = "" }: RotatingWordsProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [words, interval]);

  return (
    <div className="relative inline-block w-60 h-10 overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={words[index]}
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          className={classNames("absolute left-0 right-0", className)}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
