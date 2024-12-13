import React from "react";

export default function NavigationBar() {
  const navItems = [
    { label: "Company", link: "#" },
    { label: "Calculate Shipping Cost", link: "#" },
    { label: "Blogs", link: "#" },
    { label: "Contact Us", link: "#" },
  ];

  return (
    <div className="flex flex-wrap gap-5 justify-between self-stretch px-20 py-2.5 w-full text-base font-semibold bg-white shadow-[0px_0px_5px_rgba(0,0,0,0.15)] max-md:px-5 max-md:max-w-full">
      <div className="flex gap-9 my-auto text-neutral-800 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a861fc010da7b44f88458aac58c56ec85febc06a6065a23caf7623810ef7f312?placeholderIfAbsent=true&apiKey=ca2799c342124e66a6ac878dc034ce56"
          alt="Company Logo"
          className="object-contain shrink-0 max-w-full aspect-[5.03] w-[151px]"
        />
        {navItems.map((item, index) => (
          <a
            href={item.link}
            key={index}
            className="hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-700"
            tabIndex="0"
          >
            {item.label}
          </a>
        ))}
      </div>
      <div className="flex gap-7">
        <a
          href="#track"
          className="flex gap-1.5 my-auto text-red-700 hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-red-700"
          tabIndex="0"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfae91df8b4ff308afc5188bd17af7dcb5578c6ebfea99990adad6451ff9e72d?placeholderIfAbsent=true&apiKey=ca2799c342124e66a6ac878dc034ce56"
            alt="Track icon"
            className="object-contain shrink-0 self-start w-3 aspect-[0.8]"
          />
          <div className="basis-auto">Track Shipment</div>
        </a>
        <button className="px-12 py-2.5 text-center text-white whitespace-nowrap bg-red-700 rounded-md hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-700 max-md:px-5">
          Login
        </button>
      </div>
    </div>
  );
}
