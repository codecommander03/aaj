import * as React from "react";

export default function Header() {
  return (
    <div className="flex w-full max-w-[1499px] max-md:max-w-full">
      <div className="flex relative flex-col justify-center py-0.5 my-auto aspect-[4.471] w-[152px] max-md:mr-0">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/83db4fcd44e0dddc8cc80c956a5ef89143ce4e5d3a09a3116910153a394fff13?placeholderIfAbsent=true&apiKey=ca2799c342124e66a6ac878dc034ce56"
          className="object-cover absolute inset-0 size-full"
          alt="Company logo background"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/64b1f5c914dc7f131b743bd72b4695aec86cf9af622074c36efc43402d177e79?placeholderIfAbsent=true&apiKey=ca2799c342124e66a6ac878dc034ce56"
          className="object-contain w-full aspect-[5.03]"
          alt="Company logo"
        />
      </div>
      <nav className="flex flex-col grow shrink-0 justify-center items-end px-16 py-2.5 text-base font-semibold bg-white basis-0 shadow-[0px_0px_5px_rgba(0,0,0,0.15)] w-fit max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between max-w-full w-[983px]">
          <div className="flex gap-9 my-auto text-neutral-800 max-md:max-w-full">
            <a href="#company" tabIndex="0">
              Company
            </a>
            <a href="#calculate" tabIndex="0">
              Calculate Shipping Cost
            </a>
            <a href="#blogs" tabIndex="0">
              Blogs
            </a>
            <a href="#contact" tabIndex="0">
              Contact Us
            </a>
          </div>
          <div className="flex gap-7">
            <a href="#track" className="grow my-auto text-red-700" tabIndex="0">
              Track Shipment
            </a>
            <button className="px-12 py-2.5 text-center text-white whitespace-nowrap bg-red-700 rounded-md max-md:px-5">
              Login
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
