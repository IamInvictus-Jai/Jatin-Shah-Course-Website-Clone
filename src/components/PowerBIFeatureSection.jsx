import React from "react";
import { RegistrationButton } from "./RegistrationButton";
import { practise_questions, mock_test, handwritten_notes } from "../assets/asset";

const dashboardData = [
  {
    imgSrc: practise_questions,
    imgAlt: "Trignometry Practise Questions",
    title: "Practise Questions",
  },
  {
    imgSrc: mock_test,
    imgAlt: "Mock Tests",
    title: "Mock Tests",
  },
  {
    imgSrc: handwritten_notes,
    imgAlt: "Handwritten Notes",
    title: "Handwritten Notes",
  }
];

export function PowerBiFeatureSection() {
  return (
    <section>
      <div className="bg-[linear-gradient(100deg,rgb(28,19,48)_0px,rgb(23,44,53)_100%)] text-center py-8 md:py-12">
        <h2 className="text-white text-3xl md:text-5xl font-bold font-poppins px-4">
          Achieve Full Marks in Trigonometry with Ease
        </h2>
      </div>

      <div className="py-8 md:py-12">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dashboardData.map((dashboard, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden text-center"
              >
                <img
                  src={dashboard.imgSrc}
                  alt={dashboard.imgAlt}
                  className="w-full h-auto"
                />
                <h4 className="text-black text-xl font-semibold font-poppins p-4">
                  {dashboard.title}
                </h4>
              </div>
            ))}
          </div>
          <h2 className="text-neutral-900 text-3xl md:text-4xl font-bold font-poppins text-center mt-8 md:mt-12">
            And Many More...
          </h2>
          {/* <div className="text-center mt-8">
            <div className="mb-4">
              <RegistrationButton />
            </div>
            <p className="text-black text-base md:text-xl font-semibold font-montserrat">
              Register before{" "}
              <strong className="font-black text-orange-400">
                August 29, 2025
              </strong>{" "}
              to unlock bonuses worth{" "}
              <strong className="font-black text-orange-400">₹ 16,000</strong>
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
}