"use client";

import { ContactService } from "@/services/parameter/contact-service";
import { useState } from "react";
import Swal from "sweetalert2";

export const TopContactForm = () => {
  const [isLoading, setisLoading] = useState(false);

  const [formValues, setFormValues] = useState({
    name: "",
    phone: 0,
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    phone: false,
    email: false,
    message: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: Number(value) });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, phone, email, message } = formValues;

    setErrors({
      name: !name,
      phone: !phone,
      email: !email || !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email),
      message: !message,
    });


    if (name && phone && email && message) {
      const data = {
        name: name,
        email: email,
        phone: phone,
        message: message,
        contact_type: 0,
        property_type: null,
        property_category: null,
      }
      setisLoading(true);

      await ContactService.saveFormContact(data)
      .then(() => {
        setisLoading(false);
        Swal.fire({
          title: "¡Gracias!",
          text: "Tu mensaje ha sido enviado con éxito",
          icon: "success",
          confirmButtonText: "Aceptar",
          confirmButtonColor: "#1e3a58",
        });
        setFormValues({
          name: "",
          phone: 0,
          email: "",
          message: "",
        });
        console.log("Form submitted:", data);
      })
      .catch((error) => {
        console.error(error)
        setisLoading(false)
      });
    }
  };

  return (
    <form className="grid gap-x-4 gap-y-6 xl:gap-x-10 items-baseline mt-5" onSubmit={handleSubmit}>
      <div className="grid gap-x-4 gap-y-10 lg:grid-cols-2 xl:gap-x-10 items-baseline">
        <div className="form-element flex flex-col gap-3">
          <label htmlFor="name">
            Nombre <strong>(*)</strong>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            className={`bg-gray-50 border ${errors.name ? "border-red-500" : "border-gray-300"} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
          />
        </div>
        <div className="form-element flex flex-col gap-3">
          <label htmlFor="phone">
            Teléfono Celular <strong>(*)</strong>
          </label>
          <input
            type="number"
            id="phone"
            name="phone"
            value={formValues.phone}
            onChange={handleNumberChange}
            className={`bg-gray-50 border ${errors.phone ? "border-red-500" : "border-gray-300"} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
          />
        </div>
      </div>

      <div className="form-element flex flex-col gap-3">
        <label htmlFor="email">
          Correo Electrónico <strong>(*)</strong>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          className={`bg-gray-50 border ${errors.email ? "border-red-500" : "border-gray-300"} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
        />
      </div>
      <div className="form-element flex flex-col gap-3">
        <label htmlFor="message">
          Mensaje <strong>(*)</strong>
        </label>
        <textarea
          id="message"
          name="message"
          value={formValues.message}
          onChange={handleChange}
          rows={5}
          className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border ${errors.message ? "border-red-500" : "border-gray-300"} focus:ring-blue-500 focus:border-blue-500`}
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          aria-label="submit button"
          className={`text-white w-full bg-[#1e3a58] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={isLoading}
        >
          {isLoading ? 'Enviando...' : 'Enviar'}
        </button>
      </div>
    </form>
  );
};
