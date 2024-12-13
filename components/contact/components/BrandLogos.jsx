import React from "react";

export default function BrandLogos() {
  const logos = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1e29ac52d5be5e3ba80a4e0ff8e5eec48ff115bf4c424fdf74a1146463462186?placeholderIfAbsent=true&apiKey=ca2799c342124e66a6ac878dc034ce56",
      alt: "Brand logo 1",
      className: "object-contain aspect-[3.91] w-[238px]",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b7d8be1f9b4116b876ba5c2e38d1f849172b039bde08f1a5d0540d675e0bd930?placeholderIfAbsent=true&apiKey=ca2799c342124e66a6ac878dc034ce56",
      alt: "Brand logo 2",
      className:
        "object-contain mx-5 mt-32 aspect-[4.08] w-[200px] max-md:mx-2.5 max-md:mt-10",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2664c00e51341f3a81ca89f9db0393b87fd27028748a40987deea602f85f1fa5?placeholderIfAbsent=true&apiKey=ca2799c342124e66a6ac878dc034ce56",
      alt: "Brand logo 3",
      className:
        "object-contain shrink-0 mt-6 max-w-full aspect-[4.98] w-[194px] max-md:mt-10",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2efaa25584b19109bf2e7a86672db3fbb20512cd45fa7599768e8e45450357cd?placeholderIfAbsent=true&apiKey=ca2799c342124e66a6ac878dc034ce56",
      alt: "Brand logo 4",
      className:
        "object-contain self-center max-w-full aspect-[1.51] w-[110px]",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a5ac7e4439b721c9d81b09bb6070022aba6f5a3209ca6e20c27bb8474c7f8150?placeholderIfAbsent=true&apiKey=ca2799c342124e66a6ac878dc034ce56",
      alt: "Brand logo 5",
      className: "object-contain mt-24 aspect-[1.87] w-[153px] max-md:mt-10",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/fcf8a11c5551ff528b55c8cbff8246afd9d68923b0d39f5da22429578f83a785?placeholderIfAbsent=true&apiKey=ca2799c342124e66a6ac878dc034ce56",
      alt: "Brand logo 6",
      className:
        "object-contain shrink-0 self-start mt-20 max-w-full aspect-[5.38] w-[210px] max-md:mt-10",
    },
  ];

  return (
    <div className="flex flex-wrap w-full max-w-[1201px] max-md:max-w-full">
      <div className="shrink-0 w-px border border-solid border-stone-300 h-[354px]" />
      <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
        <div className="z-10 ml-9 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {logos.map((logo, index) => (
              <img
                key={index}
                loading="lazy"
                src={logo.src}
                alt={logo.alt}
                className={logo.className}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
