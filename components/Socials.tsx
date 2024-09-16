import Link from "next/link";
import { socials } from "@/data";

const Socials = () => {
  return (
    <div className="flex flex-row items-center gap-5">
      {socials.map((item, index) => (
        <Link target="_blank" className="border border-accent bg-primary transition-colors duration-500 ease-in-out group hover:bg-accent rounded-full p-2.5" key={index} href={item.href}>
          <item.icon className="text-accent xl:w-6 xl:h-6 group-hover:text-primary" />
        </Link>
      ))}
    </div>
  );
};

export default Socials;
