import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { FiEye } from "react-icons/fi";

export default function Home() {
  return (
    <section className="min-h-[70vh]">
      <div className="container mx-auto h-full">
        <div className="flex flex-col items-center justify-between xl:flex-row xl:pb-24 xl:pt-8">
          <div className="order-2 text-center xl:order-none xl:text-left">
            <span className="text-xl">Développeur web & Mobile</span>
            <h1 className="h1 mb-6">
              Hello, Je suis <br /> <span className="text-accent">Ablaye </span>
            </h1>
            <p className="mb-6 max-w-[500px]">
              J'excelle dans la création de plateformes web élégantes et performantes
              avec une expertise dans des technologies variées telles que React, Next.js, Node.js, Firebase, Prisma, MongoDB...
            </p>
            <div className="flex flex-col items-center gap-8 xl:flex-row">
              <Link href={"/cv"}>
                <Button
                  variant={"outline"}
                  size={"default"}
                  className="space-x-2 uppercase"
                >
                  <span>Voir mon CV</span>
                  <FiEye className="text-xl" />
                </Button>
              </Link>
              <div className="mb-8 xl:mb-0">
                <Socials />
              </div>
            </div>
          </div>
          <div className="order-1 mb-8 xl:order-none xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
