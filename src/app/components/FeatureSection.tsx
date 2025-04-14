import { motion } from "framer-motion";
import { FeaturesCard } from "./FeaturesCard";

export default function FeatureSection() {
  const features = [
    {
      title: "Product Listing",
      description: "Browse products with images, descriptions, and prices.",
      img: "/product-listing.png",
    },
    {
      title: "Shopping Cart",
      description: "Add products to the cart and view total price.",
      img: "/shopping-cart.png",
    },
    {
      title: "Checkout Flow",
      description: "Proceed to checkout with user authentication.",
      img: "/checkout.png",
    },
    {
      title: "User Accounts",
      description: "Create and manage user accounts.",
      img: "/user-account.png",
    },
    {
      title: "Admin Panel",
      description: "Manage products, orders, and users.",
      img: "/admin.png",
    },
  ];

  return (
    <div className="features-container container mx-auto">
      <motion.div className="features-group grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <FeaturesCard
            key={index}
            title={feature.title}
            description={feature.description}
            img={feature.img}
            infoPostion={"left"}
          />
        ))}
      </motion.div>
    </div>
  );
}
