"use client";

import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { useState } from "react";

export const TopContactForm = () => {
  const [value, setValue] = useState("");
  const [value1, setValue1] = useState(0);
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
        <label htmlFor="message">
          Mensaje <strong>(*)</strong>
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
