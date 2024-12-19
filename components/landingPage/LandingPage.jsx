import * as React from "react";
import Header from "./components/Header";
import RegistrationForm from "./components/RegistrationForm";
import FeatureCard from "./components/FeatureCard";
import { features } from "./data/features";

export default function LandingPage() {
  return (
    <div className="flex overflow-hidden flex-col pb-44 bg-white max-md:pb-24">
      <Header />
      <main className="flex flex-col items-start pl-14 mt-16 w-full max-md:pl-5 max-md:mt-10 max-md:max-w-full">
        <section className="w-full max-w-[1333px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col mt-1.5 w-full max-md:mt-10 max-md:max-w-full">
                <h1 className="self-end mr-14 text-4xl font-semibold leading-[50px] text-neutral-800 max-md:mr-2.5 max-md:max-w-full">
                  More Than Just Logistics:
                  <br />
                  Your Growth Partner
                </h1>
                <p className="self-start mt-2 ml-7 text-base leading-6 text-neutral-600 max-md:max-w-full">
                  Our seamless logistics solutions empower brands to grow faster
                  and smarter. Let's move your business forward.
                </p>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
              <RegistrationForm />
            </div>
          </div>
        </section>

        <section className="mt-20 w-full max-md:mt-10">
          <h2 className="text-4xl font-semibold text-center text-neutral-800 mb-10">
            Our Features
          </h2>
          <div className="grid grid-cols-3 gap-5 px-5">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
