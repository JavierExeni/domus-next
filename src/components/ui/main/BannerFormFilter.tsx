"use client";

import { getPropertyCategories } from "@/types";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { MultiSelect } from "primereact/multiselect";
import { useState } from "react";
import { BannerMap } from "./BannerMap";

export const BannerFormFilter = () => {
  const [selectedCategories, setSelectedCategories] = useState(null);
  const [selectedTypes, setSelectedTypes] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedZones, setSelectedZones] = useState(null);
  const [value, setValue] = useState("");

  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  return (
    <form action="" className="flex flex-col gap-3 w-full">
      <BannerMap />

      <MultiSelect
        id="property_type"
        value={selectedTypes}
        onChange={(e) => setSelectedTypes(e.value)}
        options={getPropertyCategories()}
        optionLabel="name"
        optionValue="id"
        display="chip"
        filter={true}
        filterBy="name"
        placeholder="Seleccionar Tipo"
        maxSelectedLabels={3}
        className="!w-full !border !border-[#d1d5db]"
      />
      <MultiSelect
        id="property_category"
        value={selectedCategories}
        onChange={(e) => setSelectedCategories(e.value)}
        options={getPropertyCategories()}
        optionLabel="name"
        optionValue="id"
        display="chip"
        filter={true}
        filterBy="name"
        placeholder="Seleccionar Categoria"
        maxSelectedLabels={3}
        className="!w-full !border !border-[#d1d5db]"
      />
      <Dropdown
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.value)}
        options={cities}
        optionLabel="name"
        placeholder="Select a City"
        className="!w-full !border !border-[#d1d5db]"
      />
      <MultiSelect
        value={selectedZones}
        onChange={(e) => setSelectedZones(e.value)}
        options={cities}
        optionLabel="name"
        display="chip"
        placeholder="Seleccionar Zonas"
        maxSelectedLabels={3}
        className="!w-full !border !border-[#d1d5db]"
      />
      <InputText
        id="title"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Código o Nombre"
        className="w-full"
      />
      <button
        type="submit"
        aria-label="submit button"
        className="text-white w-full bg-[#1e3a58] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
      >
        Búsqueda
      </button>
    </form>
  );
};
