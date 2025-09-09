import React from "react";

function StarRating({ rating = 4.8, maxRating = 5 }) {
  const percentage = (rating / maxRating) * 100;

  return (
    <div className="relative inline-block text-4xl md:text-5xl text-slate-300">
      <span>★★★★★</span>
      <div
        className="absolute top-0 left-0 overflow-hidden text-orange-400"
        style={{ width: `${percentage}%` }}
      >
        <span>★★★★★</span>
      </div>
    </div>
  );
}

const testimonials = [
  "https://c.animaapp.com/meuysrg0LDjQPC/assets/Gurpal-Singh.png",
  "https://c.animaapp.com/meuysrg0LDjQPC/assets/Manoj-Sharma.png",
  "https://c.animaapp.com/meuysrg0LDjQPC/assets/Sushil-Kumar.png",
  "https://c.animaapp.com/meuysrg0LDjQPC/assets/Naomi-Dsouza.png",
];

export function TestimonialsSection() {
  return (
    <section>
      <div className="relative bg-[linear-gradient(100deg,rgb(28,19,48)_0px,rgb(23,44,53)_100%)] pb-16 md:pb-24">
        <div className="max-w-screen-xl mx-auto px-4 py-12 md:py-16 text-center">
          <p className="text-white text-lg md:text-3xl font-poppins max-w-4xl mx-auto">
            "Power BI Has Been The #1 BI Tool For 4 Years Now & Just By Learning
            It, My Students Have Received High Paying Jobs (12 LPA+), Gotten
            Promotions In Their Company & Leveraged The True Power Of Data!"
          </p>
          <h2 className="text-lime-300 text-3xl md:text-6xl font-bold font-poppins mt-8">
            Don't Just Take My Word For It, Here's Some Proof For You To See...
          </h2>
        </div>
        <div className="absolute w-full overflow-hidden left-0 -bottom-px leading-[0px]">
          <img
            src="https://c.animaapp.com/meuysrg0LDjQPC/assets/icon-2.svg"
            alt=""
            className="relative h-[25px] md:h-10 w-[calc(120%_+_1.3px)] md:w-[calc(100%_+_1.3px)] left-1/2 -translate-x-1/2"
          />
        </div>
      </div>
      <div className="pb-12 md:pb-16">
        {/* Testimonial Image Grid */}
        <div className="max-w-screen-lg mx-auto px-4 -mt-16 md:-mt-24 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((src, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden shadow-2xl"
              >
                <img
                  src={src}
                  alt={`Testimonial from a satisfied student ${index + 1}`}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Ratings Section */}
        <div className="text-center mt-12">
          <StarRating rating={4.8} />
          <div className="text-black text-2xl font-semibold font-poppins mt-2">
            4.8 Out of 5
          </div>
          <div className="text-gray-600 text-base font-poppins">
            (3,200+ Verified Reviews)
          </div>
        </div>
        <p className="text-black text-lg md:text-2xl leading-relaxed text-center max-w-4xl mx-auto mt-12 px-4">
          What I Will Teach You In This{" "}
          <b className="font-bold bg-yellow-400 px-2 py-1 rounded">
            2-Day Power BI Workshop
          </b>{" "}
          Will Not Just{" "}
          <b className="font-bold bg-yellow-400 px-2 py-1 rounded">
            Help You Master Business Intelligence,
          </b>{" "}
          But Also Help You Scale Any Business By Leveraging The Power Of Data.
          It's all possible by creating your own{" "}
          <b className="font-bold bg-yellow-400 px-2 py-1 rounded">
            Artificially Intelligent Dashboards!!
          </b>
        </p>
      </div>
    </section>
  );
}
