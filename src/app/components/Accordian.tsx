import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type AccordionItemProps = {
  title: string;
  children: React.ReactNode;
};

const AccordionItem = ({ title, children }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-(--secondary-color) py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between w-full text-left text-lg font-medium"
      >
        <span>{title}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { height: "auto", opacity: 1 },
              collapsed: { height: 0, opacity: 0 },
            }}
            transition={{ duration: 0.2, ease: "easeIn" }}
            className="overflow-hidden"
          >
            <div className="pt-2">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Accordion({ items }: { items: AccordionItemProps[] }) {
  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title}>
          {item.children}
        </AccordionItem>
      ))}
    </div>
  );
}
