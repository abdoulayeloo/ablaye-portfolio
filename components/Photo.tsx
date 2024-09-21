"use client";
import { reverse } from "dns";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="relative h-full w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.4, duration: 0.4, ease: "easeInOut" },
        }}
        className="absolute h-[298px] w-[298px] overflow-hidden rounded-full mix-blend-lighten xl:h-[498px] xl:w-[498px]"
      >
        <Image
          className="object-contain opacity-20"
          priority
          quality={"100"}
          src="/assets/photo-3.png"
          fill
          alt="Photo"
        />
      </motion.div>
      {/* cercle */}
      <motion.svg
        className={"z-20 h-[300px] w-[300px] xl:h-[506px] xl:w-[506px]"}
        fill={"transparent"}
        viewBox={"0 0 506 506"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
        className="" cx="253"
          cy="253"
          r="250"
          stroke="#fff"
          stroke-width="1"
          strokeLinecap={"round"}
          strokeLinejoin={"round"}
          initial={{ strokeDasharray: "24 10 0 0" }}
          animate={{
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate: [120, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        />
      </motion.svg>
      <div className="absolute bottom-0 -z-10 h-[298px] w-[298px] bg-gradient-to-t from-primary xl:h-[498px] xl:w-[498px]" />
    </div>
  );
};

export default Photo;
