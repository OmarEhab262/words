import React from "react";
import Nav from "./Nav";

const Layout = ({ children, bg }) => {
  return (
    <div
      className="min-h-screen bg-cover bg-center p-10"
      style={{ backgroundImage: bg }}
    >
      <Nav />
      {children}
    </div>
  );
};

export default Layout;
