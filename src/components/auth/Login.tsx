"use client";

import { useAppDispatch } from "@/hooks";
import { AuthService } from "@/services/auth/auth";
import { saveUserInfo } from "@/slices/user-slice";
import { Button } from "primereact/button";
import { useState } from "react";

export const Login = () => {

  const dispatch = useAppDispatch();
  const [fail, setfail] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = (document.getElementById("username") as HTMLInputElement)
      .value;
    const password = (document.getElementById("password") as HTMLInputElement)
      .value;
    const data = {
      username,
      password,
    };
    const currentUser = await AuthService.login(data).catch((error) => {
      setfail(true);
    });

    if (currentUser){
      dispatch(saveUserInfo(currentUser));
      window.location.href = "/";
    }
  };

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
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

      {fail && <p className="text-red-500 text-sm">Credenciales inválidas</p>}
      <Button
        type={"submit"}
        label="Iniciar Sesión"
        aria-label="submit button"
      />
    </form>
  );
};
