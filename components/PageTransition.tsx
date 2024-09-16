"use client";
import React from "react";
import { AnimatePresence, delay, motion } from "framer-motion";
import { usePathname } from "next/navigation";
const PageTransition = ({children}: {children: React.ReactNode}) => {
  const pathname = usePathname();
  console.log(pathname)
  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
          className="h-screen pointer-events-none w-screen fixed bg-primary top-8"
        />
        {children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
