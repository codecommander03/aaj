import React from "react";

export default function Footer() {
  const footerSections = [
    {
      title: "Company",
      links: ["Our Story", "Careers at AAJ", "Contact Us"],
    },
    {
      title: "Services",
      links: [
        "E Commerce Fulfillment",
        "Transport-AAJ Swift",
        "Returns Management",
        "Value Added Services",
      ],
    },
    {
      title: "Resources",
      links: ["Case Studies", "Blogs"],
    },
    {
      title: "Support",
      links: ["Track Your Order"],
    },
    {
      title: "Transportation Network",
      links: [
        "Transportation in Mumbai",
        "Transportation in Bangalore",
        "Transportation in Delhi",
        "Transportation in Hyderabad",
        "Transportation in Ghaziabad",
        "Transportation in Sonipat NCR",
      ],
    },
  ];

  return (
    <footer className="w-full">
      <div className="flex flex-wrap gap-5 justify-between items-start mt-12 w-full max-w-[1172px] text-neutral-800 max-md:mt-10 max-md:max-w-full">
        {footerSections.map((section, index) => (
          <div key={index} className="flex flex-col text-base">
            <h2 className="text-xl font-semibold leading-snug">
              {section.title}
            </h2>
            {section.links.map((link, linkIndex) => (
              <a
                key={linkIndex}
                href="#"
                className="mt-3 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-700"
                tabIndex="0"
              >
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>
      <div className="shrink-0 mt-16 max-w-full h-px border border-solid border-stone-300 w-[1200px] max-md:mt-10" />
      <div className="flex flex-wrap gap-5 justify-between mt-5 w-full text-sm leading-6 max-w-[1189px] text-neutral-800 max-md:max-w-full">
        <div>@2024 AAJ Swift. All Rights Reserved</div>
        <div className="max-md:max-w-full">
          ISO 9001: 2015, ISO 27001: 2013 Certified Company CIN:
          L63090DL2011PLC221234
        </div>
      </div>
    </footer>
  );
}
