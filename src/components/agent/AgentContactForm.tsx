"use client";

import { useState } from "react";
import { Employee } from "@/types";
import { ContactService } from "@/services/parameter/contact-service";
import Swal from "sweetalert2";
import { usePropertiesByAgentDatosContext } from "@/app/(main)/agente/[id]/layout";

export const AgentContactForm = () => {
  const {agent} = usePropertiesByAgentDatosContext();
  const [isLoading, setIsLoading] = useState(false);

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
    message : false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, phone, message } = formValues;

    setErrors({
      name: !name,
      email: !email || !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email),
      phone: !phone,
      message: !message
    });

    if (name && email && phone && message) {
      const data = {
        name: name,
        email: email,
        phone: phone,
        message: message,
        contact_type: 0,
        property_type: null,
        property_category: null,
        agent : agent.id
      }
      setIsLoading(true);
      await ContactService.saveFormContact(data)
      .then(() => {
        setIsLoading(false);
        Swal.fire({
          title: "¡Gracias!",
          text: "Tu mensaje ha sido enviado con éxito",
          icon: "success",
          confirmButtonText: "Aceptar",
          confirmButtonColor: "#1e3a58",
        });
        setFormValues({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        console.log("Form submitted:", data);
      })
      .catch((error) => {
        console.error(error)
        setIsLoading(false)
      });
    }
  };

  if (!agent) return null;

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
      <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900">
        Contacta a {agent.first_name} {agent.last_name}
      </h5>
      <form className="flex flex-col gap-3 mt-3" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="first_name"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            className={`bg-gray-50 border ${errors.name ? "border-red-500" : "border-gray-300"} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
            placeholder="Nombre completo"
          />
        </div>
        <div>
          <input
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            className={`bg-gray-50 border ${errors.email ? "border-red-500" : "border-gray-300"} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
            placeholder="Correo electrónico"
          />
        </div>
        <div>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formValues.phone}
            onChange={handleChange}
            className={`bg-gray-50 border ${errors.phone ? "border-red-500" : "border-gray-300"} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
            placeholder="Teléfono"
          />
        </div>
        <div>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formValues.message}
            onChange={handleChange}
            className={`block p-2.5 w-full text-sm ${errors.message ? "border-red-500" : "border-gray-300"} text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500`}
            placeholder="Mensaje"
          ></textarea>
        </div>
        <button
          type="submit"
          aria-label="submit button"
          disabled={isLoading}
          className={`text-white w/full bg-[#1e3a58] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isLoading ? 'Enviando...' : 'Enviar'}
        </button>
      </form>
    </div>
  );
};
