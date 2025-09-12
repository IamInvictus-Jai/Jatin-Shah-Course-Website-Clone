import React from "react";

export function RegistrationButton() {
  return (
    <a
      href="https://go.jatanshah.com/reg-pbi-s.html"
      className="text-white text-lg font-semibold bg-red-600 box-border caret-transparent inline-block fill-white leading-[25.2px] border border-red-600 p-2.5 rounded-[7px] border-solid font-poppins md:text-[27px] md:leading-[27px] md:p-[30px]"
    >
      <span className="text-lg box-border caret-transparent gap-x-[5px] flex fill-white justify-center leading-[25.2px] gap-y-[5px] md:text-[27px] md:leading-[27px]">
        <span className="text-lg box-border caret-transparent block fill-white leading-[25.2px] md:text-[27px] md:leading-[27px]">
          Become A Certified Trigonometry Expert At Just Rs 99/- Now!
          <br className="text-lg box-border caret-transparent fill-white leading-[25.2px] md:text-[27px] md:leading-[27px]" />
          <span className="text-[13px] box-border caret-transparent fill-white leading-[25.2px] md:leading-[27px]">
            (Offer Valid Only For Today)
          </span>
        </span>
      </span>
    </a>
  );
}
