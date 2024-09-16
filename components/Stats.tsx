"use client";
import CountUp from "react-countup";
import { stats } from "@/data";

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap max-w-[80vw] gap-6 mx-auto xl:max-w-none">
          {stats.map((item, index) => (
            <div className="flex-1 gap-4 flex items-center justify-center xl:justify-normal" key={index}>
              <CountUp 
              end={item.num}
              duration={5} 
              delay={1} 
              className="text-4xl xl:text-6xl font-extrabold"
              />
              <p className={`${item.text.length>15? "max-w-[100px]":"max-w-[150px]"} leading-snug text-white/80` } >{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
