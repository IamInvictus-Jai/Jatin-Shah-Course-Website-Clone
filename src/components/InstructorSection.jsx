import React from "react";
import { instructorData } from "../data/instructorData";
import { mentor } from "../assets/asset";

export function InstructorSection() {
  return (
    <section className="py-8 md:py-12 md:px-14">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-black text-3xl md:text-5xl font-bold font-poppins text-center mb-8 md:mb-12">
          Meet your mentor
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div>
            <img
              src={mentor}
              alt="Siddharth Singh, Trignometry Mentor"
              className="rounded-2xl w-full h-auto shadow-lg"
            />
          </div>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-[5px] md:gap-2.5">
              {instructorData.credentials.map((credential) => (
                <div
                  key={credential.id}
                  className="flex items-center bg-slate-900 text-white p-3 rounded-lg"
                >
                  <img
                    src={credential.icon}
                    alt=""
                    className="h-6 w-6 mr-3 flex-shrink-0"
                  />
                  <span className="font-medium font-poppins text-base md:text-lg">
                    {credential.text}
                  </span>
                </div>
              ))}
            </div>
            <div className="space-y-4 mt-4 md:mt-[15px]">
              {instructorData.bio.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-slate-700 text-base md:text-lg leading-relaxed font-poppins"
                >
                  {paragraph.split("**").map((part, i) =>
                    i % 2 === 1 ? (
                      <strong key={i} className="font-bold text-emerald-500">
                        {part}
                      </strong>
                    ) : (
                      part
                    )
                  )}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
