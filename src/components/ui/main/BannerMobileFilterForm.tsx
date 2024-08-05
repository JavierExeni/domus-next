"use client";

import { FaSliders } from "react-icons/fa6";

export const BannerMobileFilterForm = () => {
  return (
    <>
      <button
        type="button"
        aria-label="filter button"
        className="rounded-full p-3 bg-[#1e3a58] text-white lg:hidden"
      >
        <FaSliders />
      </button>
    </>
  );
};
