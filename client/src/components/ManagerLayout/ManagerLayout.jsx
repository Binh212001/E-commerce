import React from "react";
import Footer from "../footter/Footer";
import Header from "./Header";

function ManagerLayout({ children }) {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default ManagerLayout;
