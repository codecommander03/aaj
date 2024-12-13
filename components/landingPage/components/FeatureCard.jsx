import * as React from "react";

export default function FeatureCard({ icon, title, description, className }) {
  return (
    <div
      className={`flex flex-col pt-8 pb-28 bg-white rounded-xl shadow-[0px_0px_40px_rgba(0,0,0,0.15)] text-neutral-800 max-md:pb-24 ${className}`}
    >
      <img
        loading="lazy"
        src={icon}
        className="object-contain self-end aspect-[1.22] w-[71px] max-md:mr-0"
        alt={`${title} icon`}
      />
      <div className="flex flex-col px-6 mt-4 max-md:px-5">
        <div className="text-xl font-bold leading-snug">{title}</div>
        <div className="mt-3 text-base leading-7">{description}</div>
      </div>
    </div>
  );
}
