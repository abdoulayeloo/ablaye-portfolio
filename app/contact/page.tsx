"use client";
import { motion } from "framer-motion";
import { contact } from "@/data";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";

const page = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-[30px] xl:flex-row">
          {/* form */}
          <div className="order-1 xl:order-none xl:w-[54%]">
            <ContactForm />
          </div>
          {/* info */}
          <div className="order-2 mb-8 flex flex-1 items-center xl:order-none xl:mb-0 xl:justify-end">
            <ul className="flex flex-col gap-6">
              {contact.info.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="flex items-center justify-start gap-6"
                  >
                    <div className="flex h-[52px] w-[52px] items-center justify-center rounded-md bg-[#27272c] text-accent xl:h-[72px] xl:w-[72px]">
                      <item.icon className="w-full text-[28px]" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">
                        <a href={item.href}>{item.title}</a>
                      </p>
                      <h3 className="text-xl">
                        {item.href ? (
                          <Link target="_blank" href={item.href}>
                            {item.description}
                          </Link>
                        ) : (
                          item.description
                        )}
                      </h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default page;
