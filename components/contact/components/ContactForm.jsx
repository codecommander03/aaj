import React from "react";

export default function ContactForm() {
  return (
    <form className="flex flex-col px-11 pt-8 pb-16 mx-auto w-full text-base rounded-2xl bg-stone-100 text-neutral-700 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="self-center font-medium leading-6 text-center text-neutral-800">
        Fill the form and our sales representative will call your back within 24
        hours
      </div>

      <label htmlFor="name" className="sr-only">
        Name
      </label>
      <input
        id="name"
        type="text"
        className="px-7 py-3.5 mt-9 bg-white rounded-md border border-solid border-neutral-200 max-md:px-5 max-md:max-w-full"
        placeholder="Name"
        required
      />

      <label htmlFor="email" className="sr-only">
        Email
      </label>
      <input
        id="email"
        type="email"
        className="px-7 py-3.5 mt-4 bg-white rounded-md border border-solid border-neutral-200 max-md:px-5 max-md:max-w-full"
        placeholder="Email"
        required
      />

      <label htmlFor="phone" className="sr-only">
        Phone
      </label>
      <input
        id="phone"
        type="tel"
        className="px-7 py-3.5 mt-4 bg-white rounded-md border border-solid border-neutral-200 max-md:px-5 max-md:max-w-full"
        placeholder="Phone"
        required
      />

      <label htmlFor="support" className="sr-only">
        Contact Support
      </label>
      <select
        id="support"
        className="flex flex-wrap gap-5 justify-between px-7 py-3.5 mt-4 bg-white rounded-md border border-solid border-neutral-200 max-md:px-5 max-md:max-w-full"
        required
      >
        <option value="">Contact Support</option>
        <option value="sales">Sales</option>
        <option value="support">Support</option>
        <option value="other">Other</option>
      </select>

      <label htmlFor="message" className="sr-only">
        Message
      </label>
      <textarea
        id="message"
        className="px-7 pt-3 pb-24 mt-4 bg-white rounded-md border border-solid border-neutral-200 max-md:px-5 max-md:max-w-full"
        placeholder="Message"
        required
      />

      <button
        type="submit"
        className="px-16 py-3.5 mt-4 font-semibold text-center text-white whitespace-nowrap bg-red-700 rounded-md hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-700 max-md:px-5 max-md:max-w-full"
      >
        Submit
      </button>
    </form>
  );
}
