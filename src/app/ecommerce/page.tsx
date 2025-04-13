"use client";
import Link from "next/link";
import Image from "next/image";
import PinnedSectionWithScrolling from "../components/PinnedSectionWithScrolling";
import Accordion from "../components/Accordian";
import docs from "../utils/code";
import CodeSection from "../components/CodeSection";
import TabbedDocs from "../components/TabLayout";

export default function EcommerceProject() {
  const apiEndpoints = [
    {
      title: "Products",
      children: (
        <ul className="list-disc list-inside mt-2">
          <li>
            <strong>GET /api/products</strong> - Get all products
          </li>
          <li>
            <strong>GET /api/products/:id</strong> - Get a single product
          </li>
          <li>
            <strong>POST /api/products</strong> - Create a new product
          </li>
          <li>
            <strong>PUT /api/products/:id</strong> - Update a product
          </li>
          <li>
            <strong>DELETE /api/products/:id</strong> - Delete a product
          </li>
        </ul>
      ),
    },
    {
      title: "Cart",
      children: (
        <ul className="list-disc list-inside mt-2">
          <li>
            <strong>GET /api/cart</strong> - Get the cart for the user
          </li>
          <li>
            <strong>POST /api/cart/items</strong> - Add a product to the cart
          </li>
          <li>
            <strong>PUT /api/cart/items/:id</strong> - Update the cart
          </li>
          <li>
            <strong>DELETE /api/cart/items/:id</strong> - Remove a product from
            the cart
          </li>
        </ul>
      ),
    },
    {
      title: "Orders",
      children: (
        <ul className="list-disc list-inside mt-2">
          <li>
            <strong>GET /api/orders</strong> - Get all orders for the user
          </li>
          <li>
            <strong>GET /api/orders/:id</strong> - Get a single order
          </li>
          <li>
            <strong>POST /api/orders</strong> - Create a new order
          </li>
          <li>
            <strong>PUT /api/orders/:id</strong> - Update an order
          </li>
        </ul>
      ),
    },
    {
      title: "Users",
      children: (
        <ul className="list-disc list-inside mt-2">
          <li>
            <strong>POST /api/user/login</strong> - Login a user
          </li>
          <li>
            <strong>POST /api/user/signup</strong> - Create a new user
          </li>
        </ul>
      ),
    },
    {
      title: "Admin",
      children: (
        <ul className="list-disc list-inside mt-2">
          <li>
            <strong>POST /api/admin/login</strong> - Login an admin user
          </li>
        </ul>
      ),
    },
    {
      title: "Anonymous",
      children: (
        <ul className="list-disc list-inside mt-2">
          <li>
            <strong>GET /api/anon/</strong> - Get an anon user
          </li>
        </ul>
      ),
    },
  ];

  return (
    <main className="min-h-screen px-4 py-12 pt-24">
      <div className="mx-auto flex flex-col gap-8">
        <section className="container">
          <div className="flex justify-center mb-12">
            <Image
              src="/ecommerce-screenshot.png"
              alt="E-Commerce Project Screenshot"
              className="rounded-lg shadow-lg"
              width={800}
              height={450}
            />
          </div>
          <div>
            <h1 className="mb-4">E-Commerce Project</h1>
            <p className="mb-6">
              This is a demo e-commerce store built with the MERN stack,
              featuring product listings, a shopping cart, a basic checkout
              flow, user accounts, and an admin panel. The goal was to
              demonstrate full-stack skills, scalability, and UI/UX design.
            </p>

            <Link
              href="https://ecommerce-two-mauve-22.vercel.app/"
              target="_blank"
              className="inline-block text-accent hover:underline mb-12"
            >
              👉 View Live Project
            </Link>

            <p>
              You can view the github repo{" "}
              <Link
                href="https://github.com/ChrisDirksDev/Ecommerce"
                target="_blank"
                className="text-accent hover:underline"
              >
                here
              </Link>
              .
            </p>
          </div>

          <hr className="border-[#161B22] my-8" />
        </section>

        <section className="container">
          <h2 className="flex container">🔧 Features Built</h2>
          <PinnedSectionWithScrolling />
          <div className=" items-center">
            <h2>📚 Lessons Learned</h2>
            <p className="mt-4 ">
              This project helped reinforce API design, authentication flows,
              and working with modular state management (Zustand). I also
              learned how to refine UI decisions based on user expectations.
            </p>
          </div>
        </section>
        <section className="container">
          <h2>🚀 Tech Stack</h2>
          <ul className="list-disc list-inside mt-4 ">
            <li>Frontend: React (Vite) + TypeScript + Zustand</li>
            <li>Backend: Node.js + Express + MongoDB</li>
            <li>Styling: TailwindCSS</li>
            <li>Hosting: Vercel (Frontend), Railway (Backend)</li>
          </ul>
        </section>
        {/* Section talking about design patterns and structure*/}
        <section className="container">
          <h2>📐 Design Patterns</h2>
          <p className="mt-4">
            One of the things that I really wanted to do well with this project
            was to make sure that I was using the right design patterns and
            structure. I refactored the structure multiple times during
            development as features were added and changed. These changes caused
            me to take new factors into consideration, such as how to best
            handle seperation of concerns, and how to best handle the state of
            the application. I ended up using Zustand for state management, and
            I found that it worked really well with the structure I had in
            place. I also used a lot of custom hooks to handle the logic of the
            application, which helped to keep the components clean and easy to
            read.
          </p>

          <h2 className="my-4 gap-4">📦 File Structure</h2>
          <TabbedDocs
            tabs={[
              {
                id: "frontend",
                label: "Frontend",
                content: (
                  <div className="p-4">
                    <div className="overflow-x-auto">
                      <pre>
                        <code>{docs.frontend.fileStructure}</code>
                      </pre>
                      <div className="mt-4">
                        The simple flow of the frontend is as follows:
                        <ul className="list-disc list-inside mt-2 space-y-2">
                          <li>
                            The user interacts with the UI, loading specific
                            pages using react-router.
                          </li>
                          <li>
                            The page uses hooks to fetch data needed for the
                            page, either using a service or the api directly.
                          </li>
                          <li>
                            The service handles fetches data via the appropriate
                            api and any business logic needed for the page, such
                            as formatting the data, handling errors, and caching
                            the data in the store.
                          </li>
                          <li>
                            The api formats the request sent to the backend
                            service and returns the response.
                          </li>
                          <li>
                            The service will either place the data in a store or
                            return it directly to the page depending on the
                            buisiness logic.
                          </li>
                          <li>
                            The page will render the data using the appropriate
                            components.
                          </li>
                        </ul>
                        <p className="mt-4">
                          Each part of the application is responsible for a
                          specific task, and it can be tested and debugged
                          independently.
                        </p>
                      </div>
                      <div className="code-examples">
                        {Object.entries(docs.frontend).map(
                          ([key, value], index) => {
                            if (typeof value !== "object") return null;
                            return (
                              <div key={key} className="mt-4">
                                <CodeSection
                                  code={value.code}
                                  codeDesc={value.codeDesc}
                                  title={value.title}
                                  codeTitle={value.codeTitle}
                                  desc={value.desc}
                                />
                                {index <
                                  Object.entries(docs.frontend).length - 1 && (
                                  <hr className="my-8 border-(--secondary-color)" />
                                )}
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                id: "backend",
                label: "Backend",
                content: (
                  <div className="p-4">
                    <div className="overflow-x-auto ">
                      <pre>
                        <code>{docs.backend.fileStructure}</code>
                      </pre>
                      <div className="mt-4">
                        The typical flow of a request is as follows:
                        <ul className="list-disc list-inside mt-4 space-y-2">
                          <li>
                            The request comes in through the routes, which are
                            defined in the routes folder.
                          </li>
                          <li>
                            The routes call the appropriate middleware, which
                            can include authentication, validation, and error
                            handling.
                          </li>
                          <li>
                            The middleware calls the appropriate controller,
                            which is defined in the controllers folder.
                          </li>
                          <li>
                            The controller calls the appropriate service, which
                            is defined in the services folder.
                          </li>
                          <li>
                            The service calls the appropriate model, which is
                            defined in the models folder.
                          </li>
                          <li>
                            The model interacts with the database to fetch or
                            update the data.
                          </li>
                          <li>The model returns the data to the service.</li>
                          <li>
                            The service returns the data to the controller.
                          </li>
                          <li>
                            The controller returns the data to the middleware.
                          </li>
                          <li>
                            The middleware returns the data to the routes.
                          </li>
                          <li>The routes return the data to the client.</li>
                        </ul>
                        <p className="mt-2">
                          This flow allows for a clear separation of concerns,
                          and it allows for easy testing and debugging. Each
                          part of the application is responsible for a specific
                          task, and it can be tested and debugged independently.
                          This makes it easy to add new features and fix bugs,
                          as each part of the application can be changed without
                          affecting the rest of the application.
                        </p>
                      </div>
                    </div>
                    <div className="mt-12">
                      {Object.entries(docs.backend).map(
                        ([key, value], index) => {
                          if (typeof value !== "object") return null;
                          return (
                            <div key={key} className="mt-4">
                              <CodeSection
                                code={value.code}
                                codeDesc={value.codeDesc}
                                title={value.title}
                                codeTitle={value.codeTitle}
                                desc={value.desc}
                              />
                              {index <
                                Object.entries(docs.frontend).length - 1 && (
                                <hr className="my-8 border-(--secondary-color)" />
                              )}
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                ),
              },
            ]}
          />
        </section>

        <section className="container">
          <h2 className="">📡 API</h2>
          <p className="mt-2">
            The API is built using Express and MongoDB, and it follows RESTful
            principles. The API is designed to be modular and scalable, with a
            clear separation of concerns. The API is also designed to be easy to
            use and understand, with clear documentation and error handling.
          </p>
          <p className="mt-2">
            The API is built using the following endpoints:
          </p>
          <Accordion items={apiEndpoints} />
        </section>

        <section className="container">
          <h2 className="flex container">📸 Screenshots</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <Image
              src="/ecommerce-screenshot.png"
              alt="E-Commerce Project Screenshot"
              className="rounded-lg shadow-lg"
              width={800}
              height={450}
            />
            <Image
              src="/ecommerce-screenshot.png"
              alt="E-Commerce Project Screenshot"
              className="rounded-lg shadow-lg"
              width={800}
              height={450}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
