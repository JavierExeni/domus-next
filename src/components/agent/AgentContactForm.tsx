"use client";

import { Employee } from "@/types";

interface Props {
  agent: Employee;
}

export const AgentContactForm = ({ agent }: Props) => {
  return (
    <>
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
        <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900">
          Contacta a {agent.first_name} {agent.last_name}
        </h5>
        <form className="flex flex-col gap-3 mt-3">
          <div>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Nombre completo"
              required
            />
          </div>
          <div>
            <input
              type="email"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Correo eletrónico"
              required
            />
          </div>
          <div>
            <input
              type="number"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Teléfono"
              required
            />
          </div>
          <div>
            <textarea
              id="message"
              rows={4}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Mensaje"
            ></textarea>
          </div>
          <button
            type="submit"
            aria-label="submit button"
            className="text-white w-full bg-[#1e3a58] disabled:bg-[#ecc17d]/50 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2"
          >
            Enviar
          </button>
        </form>
      </div>
    </>
  );
};
