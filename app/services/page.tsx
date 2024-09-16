"use client";
import { services } from "@/data";
import { easeInOut, motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDown, BsArrowDownRight } from "react-icons/bs"

const page = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: easeInOut },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[4rem]"
        >
          {services.map((item, index)=>(
            <div  className="flex flex-col flex-1 justify-center gap-6 group" key={index}>
              <div className="w-full flex items-center justify-between">
                <div className="text-outline group-hover:text-outline-hover transition-all duration-500 text-transparent text-5xl font-extrabold">
                  {item.num}</div>
                <Link href={item.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex items-center justify-center group-hover:-rotate-45 ">
                <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>
              {/* heading */}
              <h2 className="text-3xl font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{item.title}</h2>
              {/* description */}
              <p>{item.description} </p>
              {/* border */}
              <div className="border border-white/20 w-full" />
            </div>

          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default page;
