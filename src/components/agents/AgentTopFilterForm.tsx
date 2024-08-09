"use client";

import { useAgentsContext } from "@/app/(main)/agentes/layout";
import { City } from "@/types";

import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";

import { useEffect, useState } from "react";


export const AgentTopFilterForm = () => {
  const { cities, filterBody, setFilterBody } = useAgentsContext();
  const [formValues, setFormValues] = useState(filterBody);

  const handleInputChange = (name: string, value: any) => {
    if (name === "city_id") {
      value = value ? value : null;
    }
    setFormValues({ ...formValues, [name]: value });
    setFilterBody({ ...formValues, [name]: value });
  };

  return (
    <form className="flex flex-col gap-2 md:flex-row items-center md:gap-3">
      <div className="form-element">
        <Dropdown
          value={formValues.city_id}
          onChange={(e) => handleInputChange("city_id", e.value)}
          options={cities}
          optionLabel="name"
          optionValue="id"
          placeholder="Selecionar Ciudad"
          showClear
          filter
          className="!w-full !border !border-[#d1d5db]"
        />
      </div>
      <div className="form-element">
        <InputText
          id="title"
          value={formValues.full_name}
          onChange={(e) => handleInputChange("full_name", e.target.value)}
          placeholder="Buscar..."
          className="w-full"
        />
      </div>
    </form>
  );
};
