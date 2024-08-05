"use client";

import { FaSliders } from "react-icons/fa6";

import { Dialog } from "primereact/dialog";
import { useState } from "react";
import { BannerFormFilter } from "./BannerFormFilter";

export const BannerMobileFilterForm = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <button
        onClick={() => setVisible(true)}
        type="button"
        aria-label="filter button"
        className="rounded-full p-3 bg-[#1e3a58] text-white lg:hidden"
      >
        <FaSliders />
      </button>

      <Dialog
      contentClassName="!bg-[#ffffff59] sm:border !border-t-0 !border-[#ffffff2e] !shadow-md !backdrop-blur-[6.5px]"
      headerClassName="!bg-[#ffffff59] sm:border !border-b-0 !border-[#ffffff2e] !shadow-md !backdrop-blur-[6.5px]"
        visible={visible}
        style={{ maxWidth: "320px" }}
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
      >
        <BannerFormFilter />
      </Dialog>
    </>
  );
};
