import { motion } from "framer-motion";
import { BiArrowBack } from "react-icons/bi";
import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-[80vh] items-center justify-center py-12 xl:py-0">
      <div className="flex flex-col gap-3">
        <h1>404 - Page Introuvable</h1>
        <Link href={"/"}>
          <p className="flex items-center space-x-2">
            <BiArrowBack className="h-8 w-6 rounded-full bg-accent p-1.5 text-base text-black" />{" "}
            <span>Retour à l'accueil</span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
