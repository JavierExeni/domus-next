"use client";

import { Button } from "primereact/button";

export const Login = () => {

  return (
    <form className="flex flex-col gap-6">
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Nombre de usuario
        </label>
        <input
          type="text"
          id="username"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Contraseña
        </label>
        <input
          type="password"
          id="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
        />
      </div>
      <Button
        type={"submit"}
        label="Iniciar Sesión"
        aria-label="submit button"
      />
    </form>
  );
};
