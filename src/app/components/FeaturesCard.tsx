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

  const imageOffset = infoPostion === "left" ? "md:ml-[20%]" : "md:mr-[20%]";
  return (
    <div
      className={classNames(
        "features-card rounded-lg shadow-md flex flex-col items-center justify-center bg-primary p-4 mb-8",
        className,
        imageOffset
      )}
    >
      <div className="relative flex flex-col md:flex-row items-center md:items-start md:justify-center">
        <motion.div
          className={classNames(
            "bg-(--tertiary-color) rounded-lg p-4 flex flex-col items-center mt-4 md:absolute max-w-xs",
            infoStyle
          )}
          {...infoAnimation}
        >
          <h3 className="mb-2">{title}</h3>
          <p className="text-center">{description}</p>
        </motion.div>
        <Image
          src={img}
          alt={title}
          width={500}
          height={500}
          className={classNames("mb-4")}
        />
      </div>
    </div>
  );
};
