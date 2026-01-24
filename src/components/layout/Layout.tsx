"use client";

import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="max-w-2xl mx-auto px-4 flex-1 w-full">
        <Header />
        <main className="pb-16">{children}</main>
      </div>
      <div className="max-w-2xl mx-auto px-4 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
