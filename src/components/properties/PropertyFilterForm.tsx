"use client";

import { InputText } from "primereact/inputtext";
import { MultiSelect } from "primereact/multiselect";
import { Dropdown } from "primereact/dropdown";
import { InputNumber } from "primereact/inputnumber";
import { Slider } from "primereact/slider";

import { useState } from "react";
import { getPropertyCategories } from "@/types";

export const PropertyFilterForm = () => {
  const [value, setValue] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [bedrooms, setBedrooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [numparking, setNumParking] = useState(0);
  const [areaMinPrice, setAreaMinPrice] = useState(0);
  const [areaMaxPrice, setAreaMaxPrice] = useState(0);

  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedZones, setSelectedZones] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState(null);
  const [selectedTypes, setSelectedTypes] = useState(null);
  const [selectedFeatures, setSelectedFeatures] = useState(null);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  return (
    <>
      <form className="flex flex-col gap-4">
        <div>
          <InputText
            id="title"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Código o Nombre"
            className="w-full"
          />
        </div>
        <div>
          <Dropdown
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.value)}
            options={cities}
            optionLabel="name"
            placeholder="Select a City"
            className="!w-full !border !border-[#d1d5db]"
          />
        </div>
        <div>
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
        </div>

        <div>
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
        </div>

        <div>
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
        </div>

        <div>
          <MultiSelect
            id="features"
            value={selectedFeatures}
            onChange={(e) => setSelectedFeatures(e.value)}
            options={getPropertyCategories()}
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
              value={minPrice}
              onValueChange={(e) => setMinPrice(e.value!)}
              inputClassName="w-[120px]"
            />
            <InputNumber
              inputId="precio_max"
              mode="decimal"
              placeholder="Precio Max."
              minFractionDigits={2}
              min={0}
              value={maxPrice}
              onValueChange={(e) => setMaxPrice(e.value!)}
              inputClassName="w-[120px]"
            />
          </div>
        </div>

        <div>
          <label htmlFor="bedrooms">
            Dormitorios <strong>{bedrooms}</strong>
          </label>
          <Slider
            value={bedrooms}
            onChange={(e) => setBedrooms((e.value as any)!)}
            className="!w-full my-3"
          />
        </div>
        <div>
          <label htmlFor="bathrooms">
            Baños <strong>{bathrooms}</strong>
          </label>
          <Slider
            value={bathrooms}
            onChange={(e) => setBathrooms((e.value as any)!)}
            className="!w-full my-3"
          />
        </div>
        <div>
          <label htmlFor="numparking">
            Baños <strong>{numparking}</strong>
          </label>
          <Slider
            value={numparking}
            onChange={(e) => setNumParking((e.value as any)!)}
            className="!w-full my-3"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <InputNumber
            inputId="area_min"
            mode="decimal"
            placeholder="Area Min m2"
            minFractionDigits={2}
            min={0}
            value={areaMinPrice}
            onValueChange={(e) => setAreaMinPrice(e.value!)}
            inputClassName="w-[120px]"
          />
          <InputNumber
            inputId="area_max"
            mode="decimal"
            placeholder="Area Max m2."
            minFractionDigits={2}
            min={0}
            value={areaMaxPrice}
            onValueChange={(e) => setAreaMaxPrice(e.value!)}
            inputClassName="w-[120px]"
          />
        </div>
      </form>
    </>
  );
};
