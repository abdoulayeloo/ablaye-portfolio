"use client";

import { navLinks } from "@/data";
import { link } from "fs";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
    const pathname = usePathname()
    console.log(pathname)
  return (
    <nav className="flex gap-8">
      {navLinks.map((link, index) => (
        <Link className={`${link.href === pathname && "text-accent border-b-accent border-b-2"} capitalize font-medium hover:text-accent-hover transition-all`} key={index} href={link.href}>{link.name}</Link>
      ))}
    </nav>
  );
};
 
export default Nav;
