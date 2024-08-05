"use client";

import { City } from "@/types";

import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";

import { useState } from "react";

interface Props {
  cities: City[];
}

export const AgentTopFilterForm = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];
  return (
    <form className="flex flex-col gap-2 md:flex-row items-center md:gap-3">
      <div className="form-element">
        <Dropdown
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.value)}
          options={cities}
          optionLabel="name"
          placeholder="Seleccionar Ciudad"
          className="!border !border-[#d1d5db]"
        />
      </div>
      <div className="form-element">
        <InputText v-model="value1" placeholder="Search" />
      </div>
    </form>
  );
};
