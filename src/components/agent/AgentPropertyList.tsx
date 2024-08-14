"use client";
import { TopListPaginator } from "../properties/TopListPaginator";
import { PropertyCardByAgent } from "../properties/PropertyCard";
import { EmptyListMessage } from "../ui/empty-list-message/EmptyListMessage";
import { BottomListPagination } from "../properties/BottomListPagination";
import { FaFilter } from "react-icons/fa6";
import useUserInfo from "@/hooks/useUserInfo";
import { usePropertiesByAgentDatosContext } from "@/app/(main)/agente/[id]/layout";
import { Sidebar } from "primereact/sidebar";
import { useState } from "react";
import { PropertyFilterForm } from "../properties/PropertyFilterForm";
import { AgentPropertyFilterForm } from "./AgentPropertyFilterForm";
import { AgentTagFilter } from "./AgentTagFilter";

export const AgentPropertyList = () => {

  const { properties } = usePropertiesByAgentDatosContext();
  const { user, isLogged } = useUserInfo();

  const [sidebarVisible, setSidebarVisible] = useState(false);

  return (
    <>
      <div className="py-4 w-full">
        <div className="relative">
          <h1 className="text-2xl md:text-3xl font-bold">
            Listado de Propiedades
          </h1>
          <div className="w-full bg-white border grid grid-cols-[auto_1fr] items-center gap-5 border-gray-200 rounded-lg shadow-sm py-3 my-4 md:p-4 sticky top-2 z-40 max-h-[200px] overflow-y-auto">
            <a onClick={() => setSidebarVisible(!sidebarVisible)} className="text-white cursor-pointer bg-[#1e3a58] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center">
              <FaFilter className="w-5 h-5 flex items-center justify-center" />
              <span>Filtros</span>
            </a>
            <TopListPaginator count={properties.count} context={usePropertiesByAgentDatosContext()} />

            <AgentTagFilter />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 w-full">
          {!!properties.results ? (
            properties.results.map((property) => (
              <PropertyCardByAgent key={property.id} property={property} isLogged={isLogged} userLogged={user} />
            ))
          ) : (
            <EmptyListMessage message="No se encontraron propiedades registradas." />
          )}
        </div>

        <BottomListPagination count={properties.count} rows={10} context={usePropertiesByAgentDatosContext()} />
      </div>
      <Sidebar visible={sidebarVisible} onHide={() => setSidebarVisible(false)}>
        <AgentPropertyFilterForm />
      </Sidebar>
    </>
  );
};
