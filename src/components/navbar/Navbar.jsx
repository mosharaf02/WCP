import Link from "next/link";
import React from "react";
import Links from "./links/Links";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navContainer">
      <Link href="/" className="navLogo">
        Logo
      </Link>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
