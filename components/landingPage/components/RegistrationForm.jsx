import * as React from "react";

export default function RegistrationForm() {
  return (
    <form className="flex flex-col grow pt-1.5 pb-10 w-full bg-white rounded-2xl border border-white border-solid shadow-[0px_0px_20px_rgba(0,0,0,0.1)] max-md:mt-10 max-md:max-w-full">
      <h2 className="self-center text-2xl font-semibold leading-[50px] text-neutral-800">
        Register
      </h2>
      <div className="flex flex-col px-6 mt-2 w-full text-base font-medium max-md:pl-5 max-md:max-w-full">
        <label
          htmlFor="email"
          className="self-start text-neutral-800 max-md:ml-1.5"
        >
          Email Id
        </label>
        <input
          id="email"
          type="email"
          className="flex shrink-0 mt-2.5 max-w-full rounded-md bg-zinc-100 h-[50px] w-[417px] max-md:mr-2"
          required
        />

        <label
          htmlFor="mobile"
          className="self-start mt-4 text-neutral-800 max-md:ml-1.5"
        >
          Mobile No.
        </label>
        <input
          id="mobile"
          type="tel"
          className="flex shrink-0 mt-1.5 max-w-full rounded-md bg-zinc-100 h-[50px] w-[417px] max-md:mr-2"
          required
        />

        <fieldset className="border-0 p-0">
          <legend className="self-start mt-4 text-neutral-800 max-md:ml-1.5">
            Are you a business which needs GST invoice
          </legend>
          <div className="flex gap-5 items-start mt-4 max-w-full font-light whitespace-nowrap w-[188px] max-md:ml-1.5">
            <button
              type="button"
              className="px-5 py-3.5 text-white bg-red-700 rounded-xl max-md:px-5"
            >
              Yes
            </button>
            <button
              type="button"
              className="px-5 py-3.5 rounded-xl border border-solid bg-neutral-50 border-zinc-300 text-neutral-700"
            >
              No
            </button>
          </div>
        </fieldset>

        <label
          htmlFor="company"
          className="self-start mt-5 text-neutral-800 max-md:ml-1.5"
        >
          Company Name
        </label>
        <input
          id="company"
          type="text"
          className="flex shrink-0 mt-1.5 max-w-full rounded-md bg-zinc-100 h-[50px] w-[417px] max-md:mr-1 max-md:ml-1.5"
          required
        />

        <label
          htmlFor="address"
          className="self-start mt-5 text-neutral-800 max-md:ml-1.5"
        >
          Company Address
        </label>
        <input
          id="address"
          type="text"
          className="flex shrink-0 max-w-full rounded-md bg-zinc-100 h-[50px] w-[417px] max-md:mr-1 max-md:ml-1.5"
          required
        />

        <div className="flex gap-5 mt-6 mr-3 whitespace-nowrap text-neutral-800 max-md:mr-2.5 max-md:ml-1">
          <div className="flex flex-col flex-1">
            <label htmlFor="state" className="self-start">
              State
            </label>
            <input
              id="state"
              type="text"
              className="flex shrink-0 mt-2 rounded-md bg-zinc-100 h-[50px]"
              required
            />
          </div>
          <div className="flex flex-col flex-1">
            <label htmlFor="pincode" className="self-start max-md:ml-2">
              Pincode
            </label>
            <input
              id="pincode"
              type="text"
              pattern="[0-9]*"
              className="flex shrink-0 mt-2.5 rounded-md bg-zinc-100 h-[50px]"
              required
            />
          </div>
        </div>

        <label
          htmlFor="gst"
          className="self-start mt-4 text-neutral-800 max-md:ml-1.5"
        >
          GST Number
        </label>
        <input
          id="gst"
          type="text"
          className="flex shrink-0 mt-2 max-w-full rounded-md bg-zinc-100 h-[50px] w-[417px] max-md:ml-2.5"
        />

        <button
          type="button"
          className="self-start px-8 py-2.5 mt-2 font-light text-red-700 rounded-md border border-red-700 border-solid bg-neutral-50 max-md:px-5 max-md:ml-1.5"
        >
          Add New GST
        </button>

        <button
          type="submit"
          className="px-16 py-3.5 mt-7 max-w-full font-semibold text-center text-white whitespace-nowrap bg-red-700 rounded-md w-[417px] max-md:px-5 max-md:mr-2.5"
        >
          Register
        </button>

        <p className="self-center mt-7 text-sm font-light text-neutral-500">
          By continuing you agree to the{" "}
          <a href="#terms" className="text-sky-500" tabIndex="0">
            Terms & Conditions
          </a>
        </p>
      </div>
    </form>
  );
}
