"use client";

import { useAgentsContext } from "@/app/(main)/agentes/layout";

import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";


export const AgentTopFilterForm = () => {
  const { cities, filterBody, setFilterBody } = useAgentsContext();

  const handleInputChange = (name: string, value: any) => {
    if (name === "city_id") {
      value = value ? value : null;
    }
    setFilterBody({ ...filterBody, [name]: value, page: 1 });
  };

  if (filterBody === null) {
    return null;
  }

  return (
    <form className="flex flex-col gap-2 md:flex-row items-center md:gap-3">
      <div className="form-element">
        <Dropdown
          value={filterBody.city_id}
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
          value={filterBody.full_name}
          onChange={(e) => handleInputChange("full_name", e.target.value)}
          placeholder="Buscar..."
          className="w-full"
        />
      </div>
    </form>
  );
};
