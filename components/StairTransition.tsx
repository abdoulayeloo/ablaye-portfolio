"use client";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Stairs from "./Stairs";

const StairTransition = () => {
  const pathname = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <div
          key={pathname}
          className="h-screen w-screen inset-0 fixed pointer-events-none z-40 flex"
        >
          <Stairs />
        </div>
        <motion.div
          key="transition"
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
          className="h-screen w-screen fixed top-0 pointer-events-none bg-primary"
        />
      </AnimatePresence>
    </>
  );
};

export default StairTransition;
