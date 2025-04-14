import Image from "next/image";
import classNames from "classnames";
import { motion } from "framer-motion";

export const FeaturesCard = ({
  title,
  description,
  img,
  infoPostion = "right",
  className,
}: {
  title: string;
  description: string;
  img: string;
  infoPostion?: string;
  className?: string;
}) => {
  const infoStyle =
    infoPostion === "left"
      ? "md:left-[-20%] md:rotate-345"
      : "md:right-[-20%] md:rotate-15";
  const infoAnimation = {
    initial: { opacity: 0, x: infoPostion === "left" ? -100 : 100 },
    exit: { opacity: 0, x: infoPostion === "left" ? -100 : 100 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, amount: 0.2 },
  };

  return (
    <div
      className={classNames(
        "features-card rounded-lg shadow-md flex flex-col items-center justify-center bg-primary p-4 mb-8",
        className
      )}
    >
      <div className="relative flex flex-col md:flex-row items-center md:items-start md:justify-center">
        <motion.div
          className={classNames(
            "bg-(--tertiary-color) rounded-lg p-2 mt-4 md:absolute max-w-xs text-xs sm:text-sm md:text-base text-center w-fit",
            infoStyle
          )}
          {...infoAnimation}
        >
          <h3 className="mb-2 text-base md:text-lg lg:text-xl">{title}</h3>
          <p className="text-xs md:text-sm lg:text-md">{description}</p>
        </motion.div>
        <Image
          src={img}
          alt={title}
          width={1000}
          height={1000}
          className={classNames("mb-4 flex-1")}
        />
      </div>
    </div>
  );
};
