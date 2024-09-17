import Link from "next/link";
import { socials } from "@/data";

const Socials = () => {
  return (
    <div className="flex flex-row items-center gap-5">
      {socials.map((item, index) => (
        <Link target="_blank" className="group rounded-full border border-accent bg-primary p-2.5 transition-colors duration-500 ease-in-out hover:bg-accent" key={index} href={item.href}>
          <item.icon className="text-accent group-hover:text-primary xl:h-6 xl:w-6" />
        </Link>
      ))}
    </div>
  );
};

export default Socials;
