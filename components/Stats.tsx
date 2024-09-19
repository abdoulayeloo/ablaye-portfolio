"use client";
import CountUp from "react-countup";
import { stats } from "@/data";

const Stats = () => {
  return (
    <section className="pb-12 pt-4 xl:pb-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-6 xl:grid-cols-4">
          {stats.map((item, index) => (
            <div
              className="flex flex-1 items-center justify-center gap-4 xl:justify-normal"
              key={index}
            >
              <CountUp
                end={item.num}
                duration={5}
                delay={1}
                className="text-4xl font-extrabold xl:text-6xl"
              />
              <p
                className={`${item.text.length > 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
