'use client';

import { ContactService } from '@/services/parameter/contact-service';
import { Employee } from '@/types';
import Image from "next/image";
import { Button } from 'primereact/button';
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

interface Props {
    userContact: Employee | null;
}

export const ContactForm = ({ userContact }: Props) => {

    const [isLoading, setIsLoading] = useState(false);
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        contact_type: 0,
        property_type: null,
        property_category: null,
    });

    const [errors, setErrors] = useState({
        name: false,
        email: false,
        phone: false,
        message: false
    });

    useEffect(() => {
        const url = window.location.href;
        const propertyId = url.split('/').pop();
        if (propertyId) {
            setFormValues(prevValues => ({ ...prevValues, property_id: Number(propertyId), contact_type: 0 }));
        }
        if (userContact) {
            setFormValues(prevValues => ({ ...prevValues, agent: userContact.id, contact_type: 2 }));
        }
    }, [userContact]);

    const handleInputChange = (name: string, value: any) => {
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setErrors({
            name: !formValues.name,
            phone: !formValues.phone,
            email: !formValues.email || !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(formValues.email),
            message: !formValues.message,
        });

        if (formValues.name && formValues.email && formValues.phone && formValues.message) {
            const data = {
                ...formValues,
            };

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
                        contact_type: 0,
                        property_type: null,
                        property_category: null,
                    });
                    const url = window.location.href;
                    const propertyId = url.split('/').pop();
                    if (propertyId) {
                        setFormValues(prevValues => ({ ...prevValues, property_id: Number(propertyId), contact_type: 0 }));
                    }
                    if (userContact) {
                        setFormValues(prevValues => ({ ...prevValues, agent: userContact.id, contact_type: 2 }));
                    }
                    console.log("Form submitted:", data);
                })
                .catch((error) => {
                    console.error(error)
                    setIsLoading(false)
                });
        }
    };

    const sendWhatsapp = () => {
        window.open(`https://wa.me/${userContact!.phone}`, '_blank');
    };

    return (
        <div className="h-fit p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                Solicita Más Información
            </h5>
            {userContact && (
                <div>
                    <Image
                        className="w-[200px] rounded-xl mb-3"
                        width={200}
                        height={200}
                        src={userContact.image_profile || '/path/to/fallback-image.jpg'}
                        alt="admin image profile"
                    />
                    <p className="font-semibold">{`${userContact.first_name} ${userContact.last_name}`}</p>
                    <div className="flex">
                        <Button className="!bg-[#00a884] border !border-[#00a884] !px-2.5 !py-0.5" aria-label="share button" icon="pi pi-whatsapp" onClick={sendWhatsapp} />
                        <a
                            onClick={sendWhatsapp}
                            className="flex ml-2 justify-center items-center cursor-pointer"
                        >
                            {userContact.phone}
                        </a>
                    </div>
                </div>
            )}

            <form className="flex flex-col gap-3 mt-3" onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        id="name"
                        className={`bg-gray-50 border ${errors.name ? "border-red-500" : "border-gray-300"} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                        placeholder="Nombre completo"
                        value={formValues.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="email"
                        id="email"
                        className={`bg-gray-50 border ${errors.email ? "border-red-500" : "border-gray-300"} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                        placeholder="Correo electrónico"
                        value={formValues.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        id="phone"
                        className={`bg-gray-50 border ${errors.phone ? "border-red-500" : "border-gray-300"} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                        placeholder="Teléfono"
                        value={formValues.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                </div>
                <div>
                    <textarea
                        id="message"
                        rows={4}
                        className={`block p-2.5 w-full text-sm ${errors.message ? "border-red-500" : "border-gray-300"} text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500`}
                        placeholder="Mensaje"
                        value={formValues.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                    ></textarea>
                </div>
                <button
                    type="submit"
                    aria-label="submit button"
                    className={`text-white w/full bg-[#1e3a58] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                    disabled={isLoading}
                >
                    {isLoading ? 'Enviando...' : 'Enviar'}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
