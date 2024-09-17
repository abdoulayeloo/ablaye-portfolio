"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { choix, contact, services } from "@/data";
import { Textarea } from "@/components/ui/textarea";

const page = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-[30px] xl:flex-row">
          {/* form */}
          <div className="order-2 xl:order-none xl:w-[54%]">
            <form
              action=""
              className="flex flex-col gap-6 rounded-xl bg-[#27272c] p-10"
            >
              <h3 className="text-4xl text-accent">{contact.title}</h3>
              <p className="text-white/60">{contact.description}</p>
              {/* input */}
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <Input type="prenom" placeholder="Prénom" />
                <Input type="nom" placeholder="Nom" />
                <Input type="email" placeholder="Email" />
                <Input type="telephone" placeholder="Téléphone" />
              </div>
              {/* select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue
                    placeholder="Choisis un service"
                    className=""
                  ></SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Choisis un service</SelectLabel>
                    {choix.map((item, index) => {
                      return (
                        <SelectItem key={index} value={item.value}>
                          {item.title}
                        </SelectItem>
                      );
                    })}
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* TextArea */}
              <Textarea className="h-[200px]" placeholder="Message ..." />
              <Button size={"sm"} className="max-w-fit">
                Envoyer le message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="order-1 mb-8 flex flex-1 items-center xl:order-none xl:mb-0 xl:justify-end">
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
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description} </h3>
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
