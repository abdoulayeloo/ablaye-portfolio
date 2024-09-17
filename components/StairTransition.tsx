"use client";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Stairs from "./Stairs";

const StairTransition = () => {
  const pathname = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">Â
        <div className="pointer-events-none fixed inset-0 z-40 flex h-screen w-screen">
          <Stairs />
        </div>
        <motion.div
          key={pathname}
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
          className="pointer-events-none fixed top-0 h-screen w-screen bg-primary"
        />
      </AnimatePresence>
    </>
  );
};

export default StairTransition;
