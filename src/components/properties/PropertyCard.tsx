"use client";
import Image from "next/image";
import Link from "next/link";

import {
  getPropertyCategoryById,
  getPropertyTypeById,
  Property,
  PROPERTY_CATEGORY,
} from "@/types";
import { PropertySocialButtons } from "./PropertySocialButtons";
import {
  FaArrowRight,
  FaBed,
  FaLocationDot,
  FaPersonShelter,
} from "react-icons/fa6";

interface Props {
  property: Property;
  isLogged : boolean;
}

export const PropertyCard = ({ property, isLogged }: Props) => {
  // const { isLogged } = useUserInfo();
  return (
    <div className="max-w-[400px] md:max-w-full md:w-full md:flex bg-white border border-gray-200 rounded-lg shadow-md m-auto h-full hover:shadow-xl transition-all duration-150">
      <Link href={`/propiedad/${property.id}`} className="flex items-center">
        <Image
          className="object-cover object-left rounded-t-lg md:rounded-l-lg md:rounded-tr-none md:max-w-[400px] xl:max-w-[400px] md:h-[400px]"
          src={property.banner ? property.banner : "/images/logo.webp"}
          width={400}
          height={400}
          alt="Imagen de la propiedad"
        />
      </Link>

      <div className="p-4 w-full">
        <div className="flex responsive-card-property gap-2 flex-col min-[850px]:flex-row justify-between items-start mb-2">
          <div className="flex items-baseline flex-row md:items-center justify-start gap-2">
            <span className="cursor-default bg-[#ecc17d] text-white text-base font-medium px-2.5 py-0.5 rounded border border-[#ecc17d]">
              {getPropertyCategoryById(property.property_category)}
            </span>

            <span className="cursor-default bg-[#ecc17d] text-white text-base font-medium px-2.5 py-0.5 rounded border border-[#ecc17d]">
              {getPropertyTypeById(property.property_type).name}
            </span>
          </div>

          <PropertySocialButtons />
        </div>
        <h1 className="font-bold text-xl md:text-2xl mt-5">
          {property.property_title}
        </h1>
        <h2 className="font-semibold text-lg lg:text-xl text-[#ecc17d] mb-3">
          $us. {property.price}
        </h2>

        {/* If the user its logged in */}
        {isLogged && (
          <p className="flex gap-2 items-center mb-3">
            <span className="font-semibold">Agente captador:</span>
            <span className="text-base italic font-normal text-black">
              {property.created_by.first_name}
              {property.created_by.last_name}
            </span>
          </p>
      )}
        

        <p className="flex items-baseline gap-2 mt-2">
          <FaLocationDot></FaLocationDot>
          <span className="text-xs md:text-sm">
            {property.zone.city.name} - {property.zone.name}
            {/* If the user its logged in */}
            {isLogged && (
              <span>- {property.address}</span>
            )}
            {/* <span>- {property.address}</span> */}
          </span>
        </p>

        <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-4 gap-2 my-4">
          {property.bathrooms != 0 && (
            <a className="flex items-center gap-3 p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow">
              <FaBed />
              <div className="cursor-default">
                <span className="block text-sm font-medium text-gray-500">
                  Dormitorios
                </span>
                <span className="block text-xs font-medium text-gray-500">
                  cant: {property.bedrooms}
                </span>
              </div>
            </a>
          )}

          {property.bedrooms_suite != 0 &&
            property.property_category !== PROPERTY_CATEGORY.LAND && (
              <a className="flex items-center gap-3 p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow">
                <FaBed />
                <div className="cursor-default">
                  <span className="block text-sm font-medium text-gray-500">
                    Suite
                  </span>
                  <span className="block text-xs font-medium text-gray-500">
                    cant: {property.bedrooms_suite}
                  </span>
                </div>
              </a>
            )}

          {property.built_surface != 0 && (
            <a className="flex items-center gap-3 p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow">
              <FaPersonShelter />
              <div className="cursor-default">
                <span className="block text-sm font-medium text-gray-500">
                  Sp. construida
                </span>
                <span className="block text-xs font-medium text-gray-500">
                  cant: {property.built_surface}
                </span>
              </div>
            </a>
          )}

          {(property.total_area &&
            property.property_category === PROPERTY_CATEGORY.LAND) != 0 && (
            <a className="flex items-center gap-3 p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow">
              <FaPersonShelter />
              <div className="cursor-default">
                <span className="block text-sm font-medium text-gray-500">
                  Sp. Terreno m2
                </span>
                <span className="block text-xs font-medium text-gray-500">
                  cant: {property.total_area}
                </span>
              </div>
            </a>
          )}
        </div>

        <Link
          href={`/propiedad/${property.id}`}
          className="inline-flex cursor-pointer items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#ecc17d] rounded-lg hover:bg-[#e1b878] focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          <span> Ver detalles</span>
          <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};
