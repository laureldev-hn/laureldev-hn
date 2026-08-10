import * as React from "react";
import Navbar from "@/components/LandingPage/Navbar";
import Footer from "@/components/LandingPage/Footer";

const SiteLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex min-h-screen w-full flex-col overflow-hidden">
    <Navbar />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);

export default SiteLayout;
