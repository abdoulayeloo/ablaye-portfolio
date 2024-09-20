"use client";
import * as dt from "@/data";
import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  const date = new Date();
  const year = new Intl.DateTimeFormat("fr-FR", {
    year: "numeric",
    month: "short",
  }).format(date); // 15 septembre 2024
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
      }}
    >
      <div className="container mx-auto">
        <div className="mt-6 border border-t-accent" />
        <div className="my-6 grid grid-cols-2 gap-5 md:grid-cols-4">
          <ul>
            <h3 className="mb-2 text-xl font-bold text-accent">Services</h3>
            {dt.services.map((item, index) => (
              <li className="mb-1 text-sm text-white/60">
                <Link href="/services">{item.title}</Link>
              </li>
            ))}
          </ul>
          <ul>
            <h3 className="mb-2 text-xl font-bold text-accent">Liens Utiles</h3>
            {dt.navLinks.map((item, index) => (
              <li className="mb-1 text-sm capitalize text-white/60">
              <Link href={item.href}>
                  {item.name}
              </Link>
                </li>
            ))}
          </ul>
          <ul>
            <h3 className="mb-2 text-xl font-bold text-accent">Projets</h3>
            {dt.cv.projets.map((item, index) => (
              <li className="mb-1 text-sm capitalize text-white/60">
              <Link href={item.github} target="_blank">
                  {item.title}
              </Link>
                </li>
            ))}
          </ul>
          <ul>
            <h3 className="mb-2 text-xl font-bold text-accent">Contact</h3>
            {dt.contact.info.map((item, index) => (
                <li className="mb-2 flex flex-shrink-0 flex-col items-start justify-start gap-1 text-white/60">
                  <Link href={item.href}>
                    <span className="text-xs text-white">{item.title}</span>
                  </Link>
                  <span className="text-xs">{item.description}</span>
                </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex w-full flex-shrink-0 items-center justify-center bg-zinc-800 py-1 text-xs font-light uppercase">
        <div>
          <span className="capitalize">Ablaye</span>
          <span className="mr-2 rounded-full text-accent">.</span>{" "}
        </div>
        Copyright • {year}
      </div>
    </motion.div>
  );
};

export default Footer;
