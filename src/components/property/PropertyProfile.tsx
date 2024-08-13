"use client"
import { Property } from "@/types";
import { PropertySocialButtons } from "../properties/PropertySocialButtons";
import { FaLocationDot, FaShareNodes } from "react-icons/fa6";
import { PropertyMap } from "./PropertyMap";
import useUserInfo from "@/hooks/useUserInfo";
import { Messages } from 'primereact/messages';
import { use, useEffect, useRef } from "react";
import { Toast } from "primereact/toast";

interface Props {
  property: Property;
}

export const PropertyProfile = ({ property }: Props) => {
  const { user, isLogged } = useUserInfo();
  const toast = useRef<any>(null);

  const copyLink = () => {
    let text = window.location.href + `?agent=${user.id}`;
    navigator.clipboard.writeText(text);
    toast.current.show({ severity: 'success', summary: '¡Copiado!', detail: 'Link copiado al portapapeles', life: 3000 });
  }

  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm mb-3 md:my-5">
      <Toast ref={toast} />
      <div className="flex flex-col gap-2 md:flex-row items-start justify-between">
        <div>
          <h1 className="font-bold text-2xl">{property.property_title}</h1>
          <p className="flex items-baseline gap-2 mt-2">
            <i className="fa-solid fa-location-dot"></i>
            <FaLocationDot />
            <span className="text-base md:text-lg">
              {property.zone.city.name} -{property.zone.name}
              {/* If the user is logged in */}
              {isLogged && (<span>- {property.address}</span>)}

            </span>
          </p>
          <h2 className="font-semibold text-xl lg:text-2xl md:text-5xl text-[#ecc17d] mt-3">
            $us. {property.price}
          </h2>
        </div>

        <div>
          <PropertySocialButtons />

          <PropertyMap property={property} />

          {/* If the user is logged in */}
          {isLogged && (<button
            type="button"
            onClick={() => copyLink()}
            aria-label="share property button"
            className="text-white w-full max-h-[40px] bg-[#1e3a58] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 text-center flex justify-center gap-2 items-center mt-3"
          >
            <FaShareNodes />
            <span> Compartir </span>
          </button>)}

        </div>
      </div>

      {/* If the user is logged in */}
      {isLogged && (<div>
        <br />
        <hr />
        <br />
        <h5 className="text-xl font-bold tracking-tight text-gray-900 mb-3">
          Información para Agentes
        </h5>
        <div className="grid md:grid-cols-1 gap-3">
          <div className="flex flex-col gap-3">
            <div className="grid md:grid-cols-[200px_1fr] gap-8">
              <p>Comisión propietario:</p>
              <p className="font-semibold">{property.seller_commission} %</p>
            </div>
            <div className="grid md:grid-cols-[200px_1fr] gap-8">
              <p>Exclusividad:</p>
              <p className="font-semibold">
                {property.exclusivity ? "Si" : "No"}
              </p>
            </div>
            <div className="grid md:grid-cols-[200px_1fr] gap-8">
              <p>Otros Comentarios:</p>
              <p className="font-semibold">
                {property.extras_comments || "Sin comentarios"}
              </p>
            </div>
          </div>
        </div>
      </div>)}

    </div>
  );
};
