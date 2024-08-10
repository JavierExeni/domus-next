"use client";

import { InputText } from "primereact/inputtext";
import { MultiSelect } from "primereact/multiselect";
import { Dropdown } from "primereact/dropdown";
import { InputNumber } from "primereact/inputnumber";
import { Slider } from "primereact/slider";

import { useEffect, useState } from "react";
import { City, Feature, getPropertyCategories, getPropertyTypes, Zone } from "@/types";
import { usePropertiesContext } from "@/app/(main)/propiedades/layout";

export const PropertyFilterForm = () => {
  const { cities, features, filterBody, setFilterBody } = usePropertiesContext();

  const [zones, setZones] = useState<Zone[]>([]);

  const updateZones = async () => {
    if (filterBody.selectedCity) {
      const city = cities.find((city: City) => city.id === filterBody.selectedCity);
      setZones(city?.zones ?? []);
    } else {
      setZones([]);
    }
  };

  useEffect(() => {
    updateZones();
  }, [
    filterBody.selectedCity,
    filterBody.selectedZones,
  ]);

  const handleInputChange = (name: string, value: any) => {
    if (name === "selectedCity") {
      value = value ? value : null;
    }
    setFilterBody({ ...filterBody, [name]: value });
  };

  return (
    <>
      <form className="flex flex-col gap-4">
        <div>
          <InputText
            id="title"
            value={filterBody.value}
            onChange={(e) => handleInputChange("value", e.target.value)}
            placeholder="Código o Nombre"
            className="w-full"
          />
        </div>
        <div>
          <Dropdown
            value={filterBody.selectedCity}
            onChange={(e) => handleInputChange("selectedCity", e.value)}
            options={cities}
            optionLabel="name"
            optionValue="id"
            placeholder="Selecionar Ciudad"
            showClear
            filter
            className="!w-full !border !border-[#d1d5db]"
          />
        </div>
        <div>
          <MultiSelect
            value={filterBody.selectedZones}
            onChange={(e) => handleInputChange("selectedZones", e.value)}
            options={zones}
            optionLabel="name"
            optionValue="id"
            display="chip"
            placeholder="Seleccionar Zonas"
            maxSelectedLabels={3}
            className="!w-full !border !border-[#d1d5db]"
          />
        </div>

        <div>
          <MultiSelect
            id="property_category"
            value={filterBody.selectedCategories}
            onChange={(e) => handleInputChange("selectedCategories", e.value)}
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
        </div>

        <div>
          <MultiSelect
            id="property_type"
            value={filterBody.selectedTypes}
            onChange={(e) => handleInputChange("selectedTypes", e.value)}
            options={getPropertyTypes()}
            optionLabel="name"
            optionValue="id"
            display="chip"
            filter={true}
            filterBy="name"
            placeholder="Seleccionar Tipo"
            maxSelectedLabels={3}
            className="!w-full !border !border-[#d1d5db]"
          />
        </div>

        <div>
          <MultiSelect
            id="features"
            value={filterBody.selectedFeatures}
            onChange={(e) => handleInputChange("selectedFeatures", e.value)}
            options={features}
            optionLabel="name"
            optionValue="id"
            display="chip"
            filter={true}
            filterBy="name"
            placeholder="Seleccionar Caracteristica"
            maxSelectedLabels={3}
            className="!w-full !border !border-[#d1d5db]"
          />
        </div>

        <div>
          <label htmlFor="precio">Introduzca su precio en $us</label>
          <div className="grid grid-cols-2 gap-3 mt-3">
            <InputNumber
              inputId="precio_min"
              mode="decimal"
              placeholder="Precio Min."
              minFractionDigits={2}
              min={0}
              value={filterBody.minPrice}
              onValueChange={(e) => handleInputChange("minPrice", e.value!)}
              inputClassName="w-[120px]"
            />
            <InputNumber
              inputId="precio_max"
              mode="decimal"
              placeholder="Precio Max."
              minFractionDigits={2}
              min={0}
              value={filterBody.maxPrice}
              onValueChange={(e) => handleInputChange("maxPrice", e.value!)}
              inputClassName="w-[120px]"
            />
          </div>
        </div>

        <div>
          <label htmlFor="bedrooms">
            Dormitorios &nbsp;
            <strong>{filterBody.bedrooms > 10 ? "Mas de 10" : filterBody.bedrooms}</strong>
          </label>
          <Slider
            value={filterBody.bedrooms}
            max={11}
            onChange={(e) => handleInputChange("bedrooms", e.value)}
            className="!w-full my-3"
          />
        </div>
        <div>
          <label htmlFor="bathrooms">
            Baños &nbsp;
            <strong>{filterBody.bathrooms > 10 ? "Mas de 10" : filterBody.bathrooms}</strong>
          </label>
          <Slider
            value={filterBody.bathrooms}
            max={11}
            onChange={(e) => handleInputChange("bathrooms", e.value)}
            className="!w-full my-3"
          />
        </div>
        <div>
          <label htmlFor="numparking">
            Estacionamientos &nbsp;
            <strong>{filterBody.numparking > 10 ? "Mas de 10" : filterBody.numparking}</strong>
          </label>
          <Slider
            value={filterBody.numparking}
            max={11}
            onChange={(e) => handleInputChange("numparking", e.value)}
            className="!w-full my-3"
          />
        </div>
        <div>
          <label htmlFor="area">Area m2</label>
          <div className="grid grid-cols-2 gap-3 mt-3">
            <InputNumber
              inputId="area_min"
              mode="decimal"
              placeholder="Area Min m2"
              minFractionDigits={2}
              min={0}
              value={filterBody.areaMin}
              onValueChange={(e) => handleInputChange("areaMin", e.value!)}
              inputClassName="w-[120px]"
            />
            <InputNumber
              inputId="area_max"
              mode="decimal"
              placeholder="Area Max m2."
              minFractionDigits={2}
              min={0}
              value={filterBody.areaMax}
              onValueChange={(e) => handleInputChange("areaMax", e.value!)}
              inputClassName="w-[120px]"
            />
          </div>
        </div>
      </form>
    </>
  );
};
