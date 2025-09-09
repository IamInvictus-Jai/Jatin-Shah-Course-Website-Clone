import React, { useState, useEffect } from "react";

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ minutes: 15, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          clearInterval(timer);
          return { minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="fixed md:static bottom-0 w-screen md:w-auto z-[99] 
                 bg-[linear-gradient(rgb(11,11,11)_0px,rgb(15,20,28)_100%)] 
                 border-t-2 md:border-[3px] border-white 
                 box-border caret-transparent"
    >
      <div className="flex flex-wrap md:flex-nowrap max-w-[767px] md:max-w-[1140px] mx-auto p-2.5 md:p-5">
        {/* Left: Timer */}
        <div className="w-1/2 flex flex-col items-center md:items-start text-white font-poppins mb-5 md:mb-0">
          <p className="text-[15px] md:text-base mb-2">Price increases in…</p>
          <div className="flex justify-center space-x-5">
            <div className="text-center">
              <span className="text-yellow-400 text-[15px] md:text-[69px] font-roboto block leading-none">
                {timeLeft.minutes}
              </span>
              <span className="text-[13px] md:text-[19px] block">Minutes</span>
            </div>
            <div className="text-center">
              <span className="text-yellow-400 text-[15px] md:text-[69px] font-roboto block leading-none">
                {timeLeft.seconds}
              </span>
              <span className="text-[13px] md:text-[19px] block">Seconds</span>
            </div>
          </div>
        </div>

        {/* Right: Price + CTA */}
        <div className="w-1/2 flex flex-col items-center md:items-end text-white font-poppins space-y-3">
          <div className="text-[21px] md:text-base text-center md:text-start">
            <s className="mr-2">₹1999</s>
            <b>₹99</b>
          </div>

          <a
            href="https://go.jatanshah.com/reg-pbi-s.html"
            className="text-white font-semibold bg-[linear-gradient(350deg,rgb(237,50,41)_0px,rgb(251,111,49)_100%)] 
                       border border-orange-500 px-2 py-1 md:px-[90px] md:py-[30px] 
                       rounded-[5px] font-montserrat text-base md:text-[25px] 
                       inline-block"
          >
            Register Now
          </a>

          <p className="text-[10px] md:text-base text-center md:text-start">
            100% Money Back Guarantee
          </p>
        </div>
      </div>
    </section>
  );
}
