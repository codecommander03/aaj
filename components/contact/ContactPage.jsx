import React from "react";
import NavigationBar from "./components/NavigationBar";
import ContactForm from "./components/ContactForm";
import BrandLogos from "./components/BrandLogos";
import Footer from "./components/Footer";

export default function ContactPage() {
  const features = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/98efb90b12c61b3384de34ffdc39054413a334a7db61af26db093b0eeb4867f7?placeholderIfAbsent=true&apiKey=ca2799c342124e66a6ac878dc034ce56",
      text: "Get top-rated transporters at unbeatable price",
      iconClass: "object-contain shrink-0 self-start mt-2 w-14 aspect-[1.65]",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7fc646b30eed37a68590c77312dd417e9498cf7fbb30391dafa64cc9be30c162?placeholderIfAbsent=true&apiKey=ca2799c342124e66a6ac878dc034ce56",
      text: "95% Guaranteed on-time Delivery",
      iconClass:
        "object-contain shrink-0 self-start mt-1.5 aspect-[1.59] w-[62px]",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0ef4519ab1e4ae7b6ce684e7bed484c4fb63ccdae0fdf211c9e68364ed4cea66?placeholderIfAbsent=true&apiKey=ca2799c342124e66a6ac878dc034ce56",
      text: "Live Shipment Tracking and timely updates",
      iconClass: "object-contain shrink-0 aspect-square w-[52px]",
    },
  ];

  return (
    <div className="flex overflow-hidden flex-col items-center pb-6 bg-white">
      <NavigationBar />

      <div className="mt-8 w-full max-w-[1200px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start mt-6 w-full text-base font-semibold leading-6 text-neutral-700 max-md:mt-10 max-md:max-w-full">
              <h1 className="text-4xl leading-none text-neutral-800">
                Contact Us
              </h1>
              <p className="mt-5 leading-7">
                Let's Empower Your Supply Chain with Seamless and Reliable
                Logistics Solutions
              </p>
              <div className="shrink-0 self-stretch mt-12 h-px border border-solid border-zinc-300 max-md:mt-10 max-md:max-w-full" />

              {features.map((feature, index) => (
                <div key={index} className="flex gap-9 mt-9">
                  <img
                    loading="lazy"
                    src={feature.icon}
                    alt=""
                    className={feature.iconClass}
                  />
                  <div>{feature.text}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
            <ContactForm />
          </div>
        </div>
      </div>

      <h2 className="mt-10 text-4xl font-semibold leading-none text-neutral-800 max-md:max-w-full">
        Logistics Partner for Exponential Growth
      </h2>
      <p className="mt-2.5 text-base font-semibold leading-loose text-center text-neutral-700">
        Trusted by top brands and small businesses alike
      </p>

      <div className="shrink-0 mt-8 max-w-full h-px border border-solid border-stone-300 w-[1200px]" />
      <BrandLogos />
      <Footer />
    </div>
  );
}
