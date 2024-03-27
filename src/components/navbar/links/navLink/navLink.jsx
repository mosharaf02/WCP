"use client";
import React from "react";
import style from "./navLink.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
const NavLink = ({ item }) => {
  const pathName = usePathname();
  return (
    <Link
      href={item.path}
      key={item.title}
      className={`${style.NavLinks} ${pathName === item.path && style.activ}`}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
