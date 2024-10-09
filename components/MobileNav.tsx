"use client";

import { Sheet, SheetContent, SheetTrigger, SheetClose } from "./ui/sheet";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { navLinks } from "@/data";
import { useState } from "react";

const MobileNav = () => {
  const [openSheet, setOpenSheet] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  return (
    <Sheet>
      <SheetTrigger className="flex items-center justify-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* Logo */}
        <div className="pt-14 text-center text-2xl font-semibold">
          <Link href={"/"}>
            Ablaye<span className="text-accent">.</span>{" "}
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col items-center justify-center space-y-3">
          {navLinks.map((link, index) => (
            <SheetClose asChild>
              <Link
                key={index}
                className={`${
                  link.href === pathname &&
                  "text-accent border-b-2  border-b-accent"
                } transition-colors hover:text-accent-hover capitalize w-fit`}
                href={link.href}
              >
                {link.name}
              </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
