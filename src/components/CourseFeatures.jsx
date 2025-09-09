import React from "react";
import { courseFeatures } from "../data/courseFeatures";

export function CourseFeatures() {
  const allFeatures = courseFeatures.flatMap((section) => section.features);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-screen-xl mx-auto px-4 py-4">
      {allFeatures.map((feature, index) => {
        const isLastAndOdd =
          index === allFeatures.length - 1 && allFeatures.length % 2 !== 0;

        return (
          <div
            key={feature.id}
            className={isLastAndOdd ? "md:col-span-2 flex justify-center" : ""}
          >
            <div className="flex items-start p-6 bg-[linear-gradient(210deg,rgb(240,240,240)_0px,rgb(255,255,255)_100%)] rounded-2xl border-2 border-zinc-300 w-full max-w-lg">
              {/* Icon */}
              <img
                src={feature.icon}
                alt=""
                className="h-8 w-8 md:h-10 md:w-10 flex-shrink-0"
              />
              <div className="ml-4">
                <h3 className="text-slate-900 text-lg md:text-2xl font-semibold font-poppins">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 text-base md:text-lg font-poppins mt-1">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
