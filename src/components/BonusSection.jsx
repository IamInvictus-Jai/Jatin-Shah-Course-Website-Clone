import React from "react";
import { bonusData } from "../data/bonusData";

export function BonusSection() {
  return (
    <section>
      <div className="bg-[linear-gradient(90deg,rgb(28,19,48)_0px,rgb(23,44,53)_100%)] text-center py-8">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-white text-2xl md:text-5xl font-bold font-poppins">
            Register before midnight of{" "}
            {new Date().toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </h2>
          <p className="text-yellow-400 text-lg md:text-2xl font-bold font-poppins mt-2">
            To Unlock All Bonuses worth Rs 1,999
          </p>
        </div>
      </div>
      <div className="py-16 md:py-20">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-16">
            {bonusData.map((bonus) => (
              <div
                key={bonus.id}
                className="relative bg-zinc-100 rounded-lg pt-10 pb-6 px-4 text-center"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <h3 className="bg-neutral-800 text-yellow-400 text-xl font-medium font-poppins px-6 py-2 rounded-lg border border-zinc-800 whitespace-nowrap">
                    Bonus {bonus.number}
                  </h3>
                </div>

                {/* Icon */}
                <img src={bonus.icon} alt="" className="h-12 w-12 mx-auto" />

                {/* Title */}
                <h4 className="text-neutral-900 text-lg md:text-2xl font-semibold font-poppins mt-4">
                  {bonus.title}
                </h4>

                {/* Value Box */}
                <div className="inline-block border-2 border-sky-950 text-sky-950 text-lg md:text-2xl font-medium font-poppins px-6 py-2 rounded-lg mt-4">
                  Worth Rs {bonus.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
