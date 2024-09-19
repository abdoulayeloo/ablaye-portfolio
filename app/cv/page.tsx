"use client";
import { cv as rs } from "@/data";
import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import Image from "next/image";
const page = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.4, duration: 0.4, ease: "easeInOut" },
      }}
      className="flex min-h-[80vh] items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col gap-16 xl:flex-row"
        >
          <TabsList className="xl:mx-o mx-auto flex w-full max-w-[380px] flex-col gap-6">
            <TabsTrigger className="rounded-full" value="experience">
              Expérience
            </TabsTrigger>
            <TabsTrigger className="rounded-full" value="education">
              Education
            </TabsTrigger>
            <TabsTrigger className="rounded-full" value="competence">
              Compétence
            </TabsTrigger>
            <TabsTrigger className="rounded-full" value="about">
              À propos
            </TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <div className="inline-flex flex-shrink-0 items-center gap-2">
                      <Image
                        height={50}
                        width={50}
                        src={rs.experience.icon}
                        alt={rs.experience.title}
                      />
                <h3 className="text-4xl font-bold">
                  {rs.experience.title}
                </h3>
                </div>
                <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
                  {rs.experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {rs.experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="flex h-[184px] flex-col items-center justify-center gap-1 rounded-xl bg-[#232329] px-10 py-6 lg:items-start"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="min-h-[60px] max-w-[260px] text-center text-xl lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="h-[6px] w-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div className="inline-flex flex-shrink-0 items-center gap-2">
                  <Image
                    height={50}
                    width={50}
                    src={rs.education.icon}
                    alt={rs.education.title}
                  />
                  <h3 className="text-4xl font-bold">{rs.education.title}</h3>
                </div>
                <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
                  {rs.education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {rs.education.items.map((item, index) => (
                      <li
                        key={index}
                        className="flex h-[184px] flex-col items-center justify-center gap-1 rounded-xl bg-[#232329] px-10 py-6 lg:items-start"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="min-h-[60px] max-w-[260px] text-center text-xl lg:text-left">
                          {item.institution}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="h-[6px] w-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.degree}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="competence">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <div className="inline-flex flex-shrink-0 items-center gap-2">
                    <Image
                      height={50}
                      width={50}
                      src={rs.skills.icon}
                      alt={rs.skills.title}
                    />
                    <h3 className="text-4xl font-bold">{rs.skills.title}</h3>
                  </div>
                  <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
                    {rs.skills.description}
                  </p>
                </div>
                <ul className="xl:gap[30px] grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4">
                  {rs.skills.skillList.map((item, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="group flex h-[150px] w-full items-center justify-center rounded-xl bg-[#232329]">
                            <item.icon className="text-6xl transition-all duration-300 group-hover:text-accent" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="rounded-md bg-white px-2 py-1 text-primary">
                              {item.skillName}
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            {/* a propos */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <div className="inline-flex flex-shrink-0 items-center gap-2">
                  <Image
                    height={50}
                    width={50}
                    src={rs.about.icon}
                    alt={rs.about.title}
                  />
                  <h3 className="text-4xl font-bold">{rs.about.title} </h3>
                </div>
                <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
                  {rs.about.description}
                </p>
                <ul className="mx-auto grid max-w-[620px] grid-cols-1 gap-y-6 xl:mx-0 xl:grid-cols-2">
                  {rs.about.info.map((item, index) => (
                    <li
                      className="flex items-center justify-center gap-4 xl:justify-start"
                      key={index}
                    >
                      <div className="inline-flex flex-shrink-0 items-center gap-2">
                        <item.fieldIcon />
                        <span className="text-white/60">{item.fieldName}</span>
                      </div>
                      <span>{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default page;
