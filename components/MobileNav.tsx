"use client";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { navLinks } from "@/data";
import { link } from "fs";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex items-center justify-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* Logo */}
        <div className="text-2xl pt-14 text-center font-semibold">
          Ablaye<span className="text-accent">.</span>{" "}
        </div>
        {/* nav */}
        <nav className="flex flex-col items-center justify-center space-y-3 ">
          {navLinks.map((link, index) => (
            <Link key={index} className={`${link.href === pathname && "text-accent border-b-2  border-b-accent"} transition-colors hover:text-accent-hover capitalize w-fit`} href={link.href}>{link.name}</Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
