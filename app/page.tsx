import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row justify-between xl:pt-8 xl:pb-24 items-center">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Développeur web & Mobile</span>
            <h1 className="h1 mb-6">
              Bonjour J'suis <br />{" "}
              <span className="text-accent">Ablaye LO</span>
            </h1>
            <p className="mb-6 max-w-[500px] ">
              J'excelle dans la création de site web élégants et performantes
              avec une expertise dans des technologies variées
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant={"outline"}
                size={"default"}
                className="uppercase space-x-2"
              >
                <span>Télécharger CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none  mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
