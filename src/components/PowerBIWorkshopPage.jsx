import React from "react";
import { VideoPlayer } from "./VideoPlayer";
import { FeaturesList } from "./FeaturesList";
import { CheckboxSection } from "./CheckboxSection";
import { CourseFeatures } from "./CourseFeatures";
import { PowerBiFeatureSection } from "./PowerBIFeatureSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { InstructorSection } from "./InstructorSection";
import { BonusSection } from "./BonusSection";
import { FAQSection } from "./FAQSection";
import { CountdownTimer } from "./CountdownTimer";
import { RegistrationButton } from "./RegistrationButton";
import { RegistrationCta } from "./RegistrationCta";

export function PowerBIWorkshopPage() {
  return (
    <div className="text-zinc-800 text-base not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-6 list-outside list-disc text-start indent-[0px] normal-case visible border-separate font-apple_system">
      <div className="box-border caret-transparent">
        {/* Hero Section */}
        <section className="bg-[linear-gradient(90deg,rgb(28,19,48)_0px,rgb(23,44,53)_100%)]">
          <div className="max-w-[767px] md:max-w-[1140px] mx-auto p-2.5 text-center">
            <h2 className="text-orange-600 text-lg md:text-[33px] font-semibold font-poppins leading-tight mt-2.5 md:mt-5 mb-5">
              <u>MASTER BUSINESS INTELLIGENCE</u>
            </h2>

            <h2 className="text-white text-lg md:text-[33px] font-semibold font-poppins leading-tight mt-[-15px] md:mt-0 mb-5">
              USING{" "}
              <span className="text-yellow-400">
                <u>MICROSOFT POWER BI</u>
              </span>{" "}
              TO BUILD
            </h2>

            <h2 className="text-white text-lg md:text-[33px] font-semibold font-poppins leading-tight mt-[-15px] md:mt-0 mb-5">
              MIND BLOWING{" "}
              <span className="text-yellow-400">
                <u>ARTIFICIALLY INTELLIGENT</u>
              </span>{" "}
              DASHBOARDS
            </h2>

            <h2 className="text-white text-lg md:text-[33px] font-semibold font-poppins leading-tight mt-[-15px] md:mt-0 mb-5">
              WITHOUT ANY{" "}
              <span className="text-yellow-400">
                <u>CODING OR PRIOR KNOWLEDGE</u>
              </span>
            </h2>

            <h2 className="text-white text-[13px] md:text-[25px] font-semibold font-poppins leading-tight mt-[-5px] mx-[15px] md:mt-0 md:mx-0 mb-5">
              (FASTEST WAY TO GET A HIGH PAYING JOB OR YOUR NEXT PROMOTION)
            </h2>
            <div className="md:mx-[150px] pb-2">
              <VideoPlayer />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="bg-[linear-gradient(90deg,rgb(28,19,48)_0px,rgb(23,44,53)_100%)] pt-2.5 pb-1 px-2.5 md:-mt-2.5">
          <div className="max-w-[767px] md:max-w-[1140px] mx-auto py-2.5 text-center">
            <RegistrationButton />
          </div>
        </div>

        {/* Features Section */}
        <section className="relative bg-[linear-gradient(90deg,rgb(28,19,48)_0px,rgb(23,44,53)_100%)] box-border caret-transparent w-full pt-2.5 pb-[30px] md:mt-0 md:pb-0">
          <div className="relative box-border caret-transparent flex flex-wrap max-w-[767px] mx-auto md:flex-nowrap md:max-w-[1140px]">
            <FeaturesList />
          </div>
        </section>

        {/* Workshop Details */}
        <section className="bg-[linear-gradient(90deg,rgb(33,19,65)_0px,rgb(22,67,86)_100%)] md:-mt-2.5">
          <div className="max-w-[767px] md:max-w-[1140px] mx-auto p-2.5 text-center">
            <h2 className="text-orange-500 text-[17px] md:text-[25px] font-semibold font-poppins leading-snug">
              Last date to get additional fee discount of Rs 1,900/- is 28
              August i.e. today.
            </h2>

            <h2 className="text-white text-[17px] md:text-[25px] font-medium font-poppins leading-snug mt-5">
              Workshop is on 13th & 14th September (Sat & Sun) from 7 PM - 10
              PM.
            </h2>

            <h2 className="text-yellow-400 text-[17px] md:text-[25px] font-semibold font-poppins leading-snug mt-2">
              ***Be Quick! Last few seats are remaining for this batch!***
            </h2>
          </div>
        </section>

        {/* Checkbox Section Header */}
        <section className="bg-neutral-100 py-8 md:py-12">
          <div className="max-w-screen-xl mx-auto px-4 text-center">
            {/* Header Text */}
            <h2 className="text-neutral-900 text-3xl md:text-5xl font-bold font-poppins mb-8">
              Please Check All Boxes Where Your Answer Is YES!
            </h2>
            <CheckboxSection />
            <p className="text-black text-lg md:text-2xl font-medium font-montserrat mt-8">
              If you checked ANY of the boxes above, then you're invited to join
              the{" "}
              <strong className="text-red-600 underline font-bold">
                2 Day Power BI Domination Workshop
              </strong>
              .
            </p>
          </div>
        </section>

        {/* Registration CTA */}
        <RegistrationCta />

        {/* Course Title */}
        <PowerBiFeatureSection />

        {/* What If Section */}
        <section className="relative bg-stone-50 pt-12 pb-16 md:pt-16 md:pb-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-black text-4xl md:text-6xl font-bold font-poppins">
              WHAT IF I TOLD YOU...
            </h2>
            <p className="text-black text-lg md:text-3xl font-poppins leading-relaxed mt-6">
              You can{" "}
              <span className="text-white bg-green-700 px-2 py-1 rounded">
                Master Business Intelligence & Data Analysis
              </span>
              , Build Artificially Intelligent Dashboards & Learn The Skills
              Needed For A High Paying Job
              <strong className="font-bold"> Without</strong> Learning Coding Or
              Spending Lakhs Of Rupees In Degree Programs
            </p>
            <p className="text-black text-lg md:text-3xl font-poppins leading-relaxed mt-6">
              Using The{" "}
              <b className="font-bold text-orange-600">
                No. 1 Business Intelligence Tool - Power BI
              </b>{" "}
              That Has Generated
              <b className="font-bold"> Lakhs Of Jobs</b> With An Average Salary
              Of <b className="font-bold">12.6 LPA.</b>
            </p>
            <p className="text-black text-2xl md:text-3xl font-bold font-poppins mt-8">
              No Prior Business or Technical Knowledge Required!
            </p>
            <h3 className="text-orange-600 text-3xl md:text-6xl font-semibold font-poppins mt-8">
              YES, It will be that Easy!
            </h3>
            <p className="text-black text-xl md:text-3xl font-poppins mt-12">
              Here is what you are going to learn...
            </p>
            <div className="mt-8 md:mt-12">
              <CourseFeatures />
            </div>
          </div>
          <div className="absolute w-full overflow-hidden left-0 -bottom-px leading-[0px]">
            <img
              src="https://c.animaapp.com/meuysrg0LDjQPC/assets/icon-2.svg"
              alt="" // Decorative images have an empty alt tag
              className="relative h-[25px] md:h-10 w-[calc(120%_+_1.3px)] md:w-[calc(100%_+_1.3px)] left-1/2 -translate-x-1/2"
            />
          </div>
        </section>

        {/* Registration CTA */}
        <RegistrationCta />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Instructor Section */}
        <InstructorSection />

        {/* Bonus Section */}
        <BonusSection />

        {/* Registration CTA */}
        <RegistrationCta />

        {/* FAQ Section */}
        <FAQSection />

        {/* Countdown Timer */}
        <CountdownTimer />
      </div>
      {/* <img
        src="https://c.animaapp.com/meuysrg0LDjQPC/assets/icon-16.svg"
        alt="Icon"
        className="box-border caret-transparent hidden"
      /> */}
    </div>
  );
}
