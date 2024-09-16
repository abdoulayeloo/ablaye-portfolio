"use client";
import { reverse } from "dns";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
        }}
        className="absolute rounded-full overflow-hidden mix-blend-lighten w-[298px] h-[298px] xl:w-[498px] xl:h-[498px]"
      >
        <Image
          className="object-contain"
          priority
          quality={"100"}
          src="/assets/photo.png"
          fill
          alt="Photo"
        />
      </motion.div>
      {/* cercle */}
      <motion.svg
        className={"w-[300px] z-20 h-[300px] xl:w-[506px] xl:h-[506px]"}
        fill={"transparent"}
        viewBox={"0 0 506 506"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="253"
          cy="253"
          r="250"
          stroke="#00ff99"
          stroke-width="4"
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
      <div className="absolute -z-10 bg-gradient-to-t from-primary w-[298px] h-[298px] xl:h-[498px] xl:w-[498px] bottom-0" />
    </div>
  );
};

export default Photo;
