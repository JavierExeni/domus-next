"use client";
import { Employee, Property } from "@/types";
import { PropertyFeatures } from "./PropertyFeatures";
import { useEffect, useState } from "react";
import useUserInfo from "@/hooks/useUserInfo";
import ReduxProviders from "@/providers/redux-provider";
import ContactForm from "../ui/contact/ContactForm";
import { AgentService } from "@/services/users/agent-service";

interface Props {
  property: Property;
}

export const PropertyDetail = ({ property }: Props) => {

  const { isLogged } = useUserInfo();
  const [userSearchParam, setuserSearchParam] = useState<Employee | null>();

  const getAgent = async (id: number) => {
    const response = await AgentService.getSingleAgent(id);
    setuserSearchParam(response);
  }
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const agent = urlParams.get('agent');
    if (agent) {
      getAgent(parseInt(agent));
    }
  }, []);

  return (
    <div className="grid lg:grid-cols-[1fr_auto] gap-3 lg:!gap-5">
      <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
        <h5 className="text-xl font-bold tracking-tight text-gray-900 mb-3">
          Detalles de la Propiedad
        </h5>
        <div className="grid md:grid-cols-2 gap-3">
          <div className="flex flex-col gap-3">
            {/* si es admin mostrar esta columna */}
            {isLogged && (
              <div className="grid md:grid-cols-2">
                <p>Código :</p>
                <p className="font-semibold">{property.code || "Sin código"}</p>
              </div>
            )}
            <div className="grid md:grid-cols-2">
              <p>Precio :</p>
              <p className="font-semibold">$us. {property.price}</p>
            </div>
            <div className="grid md:grid-cols-2">
              <p>Sup. Construida :</p>
              <p className="font-semibold">
                {property.built_surface} m<sup>2</sup>
              </p>
            </div>
            <div className="grid md:grid-cols-2">
              <p>Sup. Terreno :</p>
              <p className="font-semibold">
                {property.total_area} m<sup>2</sup>
              </p>
            </div>
            <div className="grid md:grid-cols-2">
              <p>Zona :</p>
              <p className="font-semibold">{property.zone.name}</p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="grid md:grid-cols-2">
              <p>Habitaciones :</p>
              <p className="font-semibold">{property.bedrooms || 0}</p>
            </div>
            <div className="grid md:grid-cols-2">
              <p>Habitaciones Suite:</p>
              <p className="font-semibold">{property.bedrooms_suite || 0}</p>
            </div>
            <div className="grid md:grid-cols-2">
              <p>Baños :</p>
              <p className="font-semibold">{property.bathrooms || 0}</p>
            </div>
            <div className="grid md:grid-cols-2">
              <p>Estacionamiento :</p>
              <p className="font-semibold">{property.num_parking || 0}</p>
            </div>
          </div>
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <h5 className="text-xl font-bold tracking-tight text-gray-900 mb-3">
          Descripción
        </h5>
        <div
          className="content__html"
          dangerouslySetInnerHTML={{ __html: property.description }}
        ></div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

        <PropertyFeatures />
      </div>
      {/* si esta logeado mandar el usuario, sino mandar null */}
      {userSearchParam && <ContactForm userContact={userSearchParam} />}
      {!userSearchParam && <ContactForm userContact={isLogged ? property.created_by : null} />}
      {/* <ContactForm userContact={isLogged ? property.created_by : null}></ContactForm> */}
    </div>
  );
};
