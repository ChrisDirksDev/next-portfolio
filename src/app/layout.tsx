// app/layout.tsx

import { ReactNode } from "react";
import "./globals.css";
import Navbar from "./components/Navbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <div className="min-h-screen bg-primary">
          {/* Header Section */}
          <header className="bg-secondary p-6 max-w-[1140px]">
            <Navbar />
          </header>

          {/* Main Content */}
          <main>{children}</main>

          {/* Footer Section */}
          <footer className="bg-secondary p-6 mt-8">
            <p className="text-center">
              © 2025 ChrisDirks.com - All rights reserved
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
