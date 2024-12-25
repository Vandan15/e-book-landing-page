import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface CommonLayoutProps {
  children: React.ReactNode;
}

const CommonLayout: React.FC<CommonLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CommonLayout;
