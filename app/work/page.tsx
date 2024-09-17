"use client";
import { resume as rs } from "@/data";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub, BsLinkedin } from "react-icons/bs";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import WorkSliderBtns, { StyleProps } from "@/components/WorkSliderBtns";

const page = () => {
  const projets = rs.projets;
  const [projet, setProjet] = useState(projets[0]);

  const handleSlideChange = (swiper: any) => {
    const currentIndex = swiper.activeIndex;

    setProjet(projets[currentIndex]);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="flex min-h-[80vh] items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="order-2 flex w-full flex-col xl:order-none xl:h-[460px] xl:w-[50%] xl:justify-between">
            <div className="flex h-[50%] flex-col gap-[30px]">
              {/* project num */}
              <div className="text-outline text-8xl font-extrabold leading-none text-transparent">
                {projet.num}
              </div>
              {/* project name */}
              <h2 className="text-[42px] font-bold capitalize leading-none text-white transition-all duration-500 group-hover:text-accent">
                {projet.category}{" "}
              </h2>
              {/* Description */}
              <p className="text-white/60">{projet.description}</p>
              {/* Stack */}
              <ul className="flex flex-wrap gap-4">
                {projet.stack.map((item, index) => {
                  return (
                    <li className="flex-shrink-0 text-accent" key={index}>
                      {item.name}
                      {index !== projet.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              {/* Button */}
              <div className="flex items-center gap-4">
                <Link href={projet.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="group flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white/5">
                        <BsArrowUpRight className="text-3xl text-white group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent className="bg-white px-2 py-1 text-primary">
                        Projet en live
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={projet.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="group flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white/5">
                        <BsGithub className="text-3xl text-white group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent className="bg-white px-2 py-1 text-primary">
                        Github repo
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="mb-12 xl:h-[520px]"
              onSlideChange={handleSlideChange}
            >
              {projets.map((item, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="relative flex h-[460px] items-center justify-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute inset-y-0 z-10 h-full w-full bg-black/10"></div>
                      {/* image */}
                      <div className="relative h-full w-full">
                        <Image
                          src="https://via.placeholder.com/460"
                          fill
                          alt=""
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none "
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all "
                iconsStyles="stroke-2"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default page;
