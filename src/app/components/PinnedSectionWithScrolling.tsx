import { motion } from "framer-motion";
import { FeaturesCard } from "./FeaturesCard";

export default function PinnedSectionWithScrolling() {
  const features = [
    {
      title: "Product Listing",
      description: "Browse products with images, descriptions, and prices.",
      img: "/ecommerce-screenshot.png",
    },
    {
      title: "Shopping Cart",
      description: "Add products to the cart and view total price.",
      img: "/ecommerce-screenshot.png",
    },
    {
      title: "Checkout Flow",
      description: "Proceed to checkout with user authentication.",
      img: "/ecommerce-screenshot.png",
    },
    {
      title: "User Accounts",
      description: "Create and manage user accounts.",
      img: "/ecommerce-screenshot.png",
    },
    {
      title: "Admin Panel",
      description: "Manage products, orders, and users.",
      img: "/ecommerce-screenshot.png",
    },
  ];

  return (
    <div className="features-container container mx-auto">
      <motion.div className="features-group flex flex-col gap-8">
        {features.map((feature, index) => (
          <FeaturesCard
            key={index}
            title={feature.title}
            description={feature.description}
            img={feature.img}
            infoPostion={index % 2 === 0 ? "left" : "right"}
          />
        ))}
      </motion.div>
    </div>
  );
}
