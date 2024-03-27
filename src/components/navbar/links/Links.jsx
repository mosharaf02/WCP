"use client";
import React, { useState } from "react";
import "./links.css";
import NavLink from "./navLink/navLink";
import Image from "next/image";

const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];
const Links = () => {
  const [open, setOpen] = useState(false);
  // temporary
  const session = true;
  const isAdmin = false;
  return (
    <div className="containerLinks">
      <div className="links">
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}

        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className="logout">Logout</button>
          </>
        ) : (
          <NavLink item={{ title: "login", path: "/login" }} />
        )}
      </div>
      <Image
        className="btns"
        src="/menu.png"
        width={30}
        height={30}
        alt="none"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="mobileLinks">
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
