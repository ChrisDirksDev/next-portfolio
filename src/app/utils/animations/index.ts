const fadeUpVariants = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
};

export const fadeUpAttr = {
  initial: "initial",
  whileInView: "animate",
  viewport: { once: true, amount: 0.2 },
  variants: fadeUpVariants,
  transition: { duration: 0.5, type: "spring", stiffness: 100 },
};
