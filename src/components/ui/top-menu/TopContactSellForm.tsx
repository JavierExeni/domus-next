"use client";

import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";

import { Dropdown } from "primereact/dropdown";

import { useState } from "react";
import { getPropertyCategories, getPropertyTypes } from "@/types";

export const TopContactSellForm = () => {
  const [value, setValue] = useState("");
  const [value1, setValue1] = useState(0);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <form className="grid gap-x-4 gap-y-6 xl:gap-x-10 items-baseline mt-5">
      <div className="grid gap-x-4 gap-y-10 lg:grid-cols-2 xl:gap-x-10 items-baseline">
        <div className="form-element flex flex-col gap-3">
          <label htmlFor="name">
            Nombre <strong>(*)</strong>
          </label>
          <InputText
            id="name"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div className="form-element flex flex-col gap-3">
          <label htmlFor="phone">
            Teléfono Celular <strong>(*)</strong>
          </label>
          <InputNumber
            inputClassName="w-full"
            inputId="phone"
            value={value1}
            onValueChange={(e) => setValue1(e.value!)}
          />
        </div>
      </div>

      <div className="form-element flex flex-col gap-3">
        <label htmlFor="email">
          Correo Electrónico <strong>(*)</strong>
        </label>
        <InputText
          id="email"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>

      <div className="form-element flex flex-col gap-3">
        <label htmlFor="property_type">
          Tipo propiedad <strong>(*)</strong>
        </label>
        <Dropdown
          id="property_type"
          value={selectedType}
          onChange={(e) => setSelectedType(e.value)}
          options={getPropertyCategories()}
          optionLabel="name"
          optionValue="id"
          placeholder="Selecciona un Tipo de propiedad"
          className="!w-full border border-[#d1d5db]"
        />
      </div>

      <div className="form-element flex flex-col gap-3">
        <label htmlFor="property_category">
          Estado <strong>(*)</strong>
        </label>
        <Dropdown
          id="property_category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.value)}
          options={getPropertyTypes()}
          optionLabel="name"
          optionValue="id"
          placeholder="Selecciona el estado de la propiedad"
          className="!w-full border border-[#d1d5db]"
        />
      </div>

      <div className="form-element flex flex-col gap-3">
        <label htmlFor="message">
          Descripcion <strong>(*)</strong>
        </label>
        <InputTextarea
          id="message"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          rows={5}
          cols={30}
        />
      </div>

      <div className="flex justify-end">
        <Button type={"submit"} label="Guardar" aria-label="submit button" />
      </div>
    </form>
  );
};
