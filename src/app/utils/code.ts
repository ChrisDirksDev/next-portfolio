// ignore ts parsing here

const docs = {
  backend: {
    fileStructure: `src
├── controllers
│   ├── adminController
│   ├── cartController
│   ├── etc
├── middleware
│   ├── authMiddleware
│   ├── errorMiddleware
│   ├── validationMiddleware
├── models
│   ├── cartModel
│   ├── orderModel
│   ├── productModel
│   ├── etc
├── routes
│   ├── adminRoutes
│   ├── cartRoutes
│   ├── orderRoutes
│   ├── etc
├── services
│   ├── cartService
│   ├── orderService
│   ├── productService
│   ├── etc
├── utils
│   ├── shemas
│   ├── types
│   ├── etc
└── server.ts
`,
    route: {
      title: `Routes`,
      desc: `The routes are responsible for handling the requests and
                  passing them through any middleware that is needed. After
                  that, they call the appropriate controller to handle the
                  request.`,
      codeTitle: `Example: Product Route`,
      code: `router.post("/", adminAuth, validateBody(addProductSchema), createProduct);`,
      codeDesc: `This route is responsible for handling the POST request to
                  create a new product. It uses the adminAuth middleware to
                  check if the user is an admin, and it uses the validateBody
                  middleware to validate the request body against the schema. It
                  then calls the createProduct controller to handle the request.`,
    },
    middleware: {
      title: `Middleware`,
      desc: `The middleware is responsible for validating/manipulating the
                  request data before it is sent to the controller. Typically
                  this is checking if a user is authorized to access this route,
                  validating the structure of the data being sent, or catching
                  and formatting errors being sent back to the client`,
      codeTitle: `Example: Validation Middleware`,
      code: `export const validateBody =
  (Schema: Joi.ObjectSchema) => (req: Request, res: Response, next: any) => {
    const { error } = Schema.validate(req.body, { abortEarly: false });
    if (error) {
      res.status(400).json({ errors: error.details.map((e) => e.message) });
    } else {
      next();
    }
  };`,
      codeDesc: `This middleware is responsible for validating the request body
                  against the schema. If the validation fails, it sends a 400
                  response back to the client with the error details. If the
                  validation passes, it calls the next middleware or controller
                  in the chain.`,
    },
    controller: {
      title: `Controllers`,
      desc: `The controllers are responsible for handling the requests and
                  responses. They are the ones that talk to the services to get
                  the data and send it back to the client. They are also
                  responsible for handling the errors and sending the
                  appropriate response back to the client. The controllers are
                  the ones that are called by the routes.`,
      codeTitle: `Example: Cart Controller`,
      code: `export const getCart = asyncHandler(async (req, res): Promise<void> => {
  const user = extractUserFromRequest(req);
  const cart = await fetchCart(user);

  res.json(cart);
});`,
      codeDesc: `This controller function is responsible for handling the GET
                  request to get the cart for the user. It uses the
                  extractUserFromRequest function to get the user from the
                  request, and it uses the fetchCart function to get the cart
                  from the database. It then sends the cart back to the client
                  as a JSON response.`,
    },
    service: {
      title: `Services`,
      desc: `The services are responsible for handling the business logic
                  of the application. They are the ones that talk to the models
                  to get the data and send it back to the controllers. They are
                  also responsible for handling the errors and sending the
                  appropriate response back to the controllers. The services are
                  the ones that are called by the controllers.`,
      codeTitle: `Example: Order Service`,
      code: `export const updateOrderStatus = async (
  orderId: string,
  status: orderStatus,
  paymentStatus: paymentStatus
) => {
  const order = await Order.findById(orderId);

  if (!order) {
    throw new AppError("Order not found", 404);
  }

  order.status = status || order.status;
  order.paymentStatus = paymentStatus || order.paymentStatus;

  await order.save();
  return order;
};`,
      codeDesc: `This service function is responsible for updating the status
                  of the order. It uses the Order model to find the order by ID,
                  and it updates the status and payment status of the order. It
                  then saves the order back to the database and returns it.`,
    },

    model: {
      title: `Models`,
      desc: `The models are responsible for defining the structure of the
                  data and interacting with the database. They are the ones that
                  are used by the services to get the data and send it back to
                  the controllers.`,
      codeTitle: `Example: Product Model`,
      code: `import mongoose, { InferSchemaType } from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    imageUrl: { type: String },
    catagory: { type: String },
  },
  { timestamps: true }
);

export type IProduct = InferSchemaType<typeof ProductSchema>;

export default mongoose.model("Product", ProductSchema);`,
      codeDesc: `This model defines the structure of the product data and
                  interacts with the MongoDB database. It uses Mongoose to
                  define the schema and create the model.`,
    },
  },
  frontend: {
    fileStructure: `src
|── api
│   ├── admin
│   ├── anon
│   ├── cart
│   ├── order
│   ├── etc
├── components
│   ├── breadcrumb
│   ├── card
│   ├── cartIcon
│   ├── confirmDialog
│   ├── etc
├── hooks
│   ├── useAddToCart
│   ├── useRequest
├── pages
│   ├── 404
│   ├── adminDashboard
│   ├── adminLogin
│   ├── cart
│   ├── etc
├── services
│   ├── adminService
│   ├── anonService
│   ├── appService
│   ├── etc
├── store
│   ├── adminStore
│   ├── cartStore
│   ├── cookieStore
│   ├── etc
`,
    page: {
      title: `Pages`,
      desc: `The pages are responsible for rendering the UI and handling the
                  user interactions.`,
      codeTitle: `Example: Orders Page`,
      code: `import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useOrderStore from "../store/orderStore";
import { fetchOrders } from "../services/orderService";
import Card from "../components/card";
import { useRequest } from "../hooks/useRequest";
import LoadingSpinner from "../components/loadingSpinner";

const Orders = () => {
  const { orders } = useOrderStore();
  const navigate = useNavigate();
  const { error, loading, execute } = useRequest<void>();

  useEffect(() => {
    execute(fetchOrders);
  }, [execute]);

  if (loading) {
    return (
      <div className="flex justify-center mt-6">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return (
      <div className="p-4 text-danger">
        <p>{error}</p>
      </div>
    );
  }
  return (
    <div>
      <div className="header">
        <h2>My Orders</h2>
      </div>
      <div className=" p-6 max-w-4xl mx-auto">
        {orders.length === 0 ? (
          <p className="text-center">No orders found.</p>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <Card
                className="hover:scale-110 hover:shadow-2xl"
                key={order._id}
                title={\`Order #\${order._id}\`}
                onClick={() => navigate(\`/orders/\${order._id}\`)}
                footer={\`Total: $\${order.totalPrice.toFixed(2)}\`}
              >
                <p className="mb-2">
                  Status: <span className="font-semibold">{order.status}</span>
                </p>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
`,
      codeDesc: `This page is responsible for rendering the orders page. It uses the
                  useOrderStore hook to get the orders from the store, and it
                  uses the useRequest hook to fetch the orders from the server.
                  It then renders the orders in a list. If there are no orders,
                  it shows a message saying that there are no orders found. If
                  there is an error, it shows the error message. If it is
                  loading, it shows a loading spinner.`,
    },
    component: {
      title: `Components`,
      desc: `The components are responsible for rendering specific parts of the
                  UI. They are reusable and can be used in different pages.`,
      codeTitle: `Example: ProductCard Component`,
      code: `import { useNavigate } from "react-router-dom";
import { Product } from "../types";
import { useAddToCart } from "../hooks/useAddToCart";
import Card from "./card";
import clsx from "clsx";

const ProductCard = ({ product, className }: { product: Product, className?: string }) => {
  const { added, handleAddToCart } = useAddToCart();
  const navigate = useNavigate();

  const footer = (
    <button
      className='btn btn-primary'
      onClick={() => handleAddToCart(product, 1)}
    >
      {added ? "Added" : "Add to Cart"}
    </button>
  )
  return (
    <Card className={clsx("text-center", className)} title={product.name} footer={footer} onClick={() => navigate(\`/products/\${product._id}\`)}>
      <h3>{product.price}</h3>
      <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-contain" />
    </Card>

  );
};

export default ProductCard;`,
      codeDesc: `This component is responsible for rendering the product card. It
                  uses the useAddToCart hook to handle adding the product to the
                  cart, and it uses the useNavigate hook to navigate to the
                  product details page when the card is clicked. It also uses
                  the Card component to render the card.`,
    },
    service: {
      title: `Services`,
      desc: `The services are responsible for handling the business logic of the
                  application. They call the API and handle the responses. If we are
                  storing the data in a global store, that is done here as well.`,
      codeTitle: `Example: Order Service`,
      code: `import * as api from "../api/order";
import { logError } from "../utils/logging";
import { getOrders, setOrders } from "../utils/storage";

/**
 * Fetches all orders from the server and sets them in the store.
 */
export const fetchOrders = async () => {
  try {
    const response = await api.getOrders();
    setOrders(response);
  } catch (error) {
    logError("fetchOrders", error);
    throw error;
  }
};`,
      codeDesc: `This service function is responsible for fetching the orders from
                  the server and setting them in the store. It uses the api
                  module to call the API and handle the response. If there is an
                  error, it logs the error and throws it.`,
    },
    store: {
      title: `Store`,
      desc: `The store is responsible for storing the data in a global state. It
                  uses Zustand to create the store and handle the state
                  management.`,
      codeTitle: `Example: Cart Store`,
      code: `import { create } from "zustand";
import { Cart } from "../types";

interface CartState {
  cart: Cart;
  setCart: (cart: Cart) => void;
}

const useCartStore = create<CartState>((set) => ({
  cart: { _id: "", user: "", items: [], total: 0 },
  setCart: (cart) => set({ cart }),
}));

export default useCartStore;`,
      codeDesc: `This store is responsible for storing the cart data in a global
                  state. It uses Zustand to create the store and handle the
                  state management. It has a cart state and a setCart function
                  to update the cart. The store is kept very simple on purpose.`,
    },
    hook: {
      title: `Hooks`,
      desc: `The hooks are responsible for handling the reusable logic in the pages and components.`,
      codeTitle: `Example: useRequest Hook`,
      code: `import { useState, useCallback } from "react";

export const useRequest = <T,>() => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<T | null>(null);

  const execute = useCallback(async (requestFn: () => Promise<T>) => {
    setLoading(true);
    setError(null);
    try {
      const result = await requestFn();
      setData(result);
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error, execute };
};`,
      codeDesc: `This hook is responsible for handling the API requests and
                  managing the loading and error states. It uses the useState
                  and useCallback hooks to manage the state and handle the
                  requests. It returns the data, loading, error, and execute
                  function to call the API.`,
    },
    api: {
      title: `API`,
      desc: `The API is responsible for handling the requests and responses
                  from the server. It uses Axios to handle the requests and
                  responses.`,
      codeTitle: `Example: Order API`,
      code: `import axios from "./axiosConfig";
import { Order } from "../types";
import { authHeader } from "../utils";

// Fetch all orders
export const getOrders = async (): Promise<Order[]> => {
  const response = await axios.get("/orders", authHeader());
  return response.data;
};

// Place an order
export const placeOrder = async (): Promise<Order> => {
  const response = await axios.post("/orders", null, authHeader());
  return response.data;
};

// Get order by ID
export const getOrderById = async (orderId: string): Promise<Order> => {
  const response = await axios.get(\`/orders/\${orderId}\`, authHeader());
  return response.data;
};`,
      codeDesc: `This API module is responsible for handling the requests and
                  responses from the server. It uses Axios to handle the requests
                  and responses. It has functions to fetch all orders, place an
                  order, and get an order by ID. It uses the authHeader function
                  to add the authorization header to the requests.`,
    },
  },
};

export default docs;
