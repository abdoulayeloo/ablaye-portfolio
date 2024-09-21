"use client";
import { services } from "@/data";
import { easeInOut, motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDown, BsArrowDownRight } from "react-icons/bs"

const page = () => {
  return (
    <section className="flex min-h-[80vh] flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.4, duration: 0.4, ease: easeInOut },
          }}
          className="grid grid-cols-1 gap-[4rem] md:grid-cols-2"
        >
          {services.map((item, index)=>(
            <div  className="group flex flex-1 flex-col justify-center gap-6" key={index}>
              <div className="flex w-full items-center justify-between">
                <div className="text-outline group-hover:text-outline-hover text-5xl font-extrabold text-transparent transition-all duration-500">
                  {item.num}</div>
                <Link href={item.href} className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white transition-all duration-500 group-hover:-rotate-45 group-hover:bg-accent">
                <BsArrowDownRight className="text-3xl text-primary" />
                </Link>
              </div>
              {/* heading */}
              <h2 className="text-3xl font-bold leading-none text-white transition-all duration-500 group-hover:text-accent">{item.title}</h2>
              {/* description */}
              <p>{item.description} </p>
              {/* border */}
              <div className="w-full border border-white/20" />
            </div>

          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default page;
