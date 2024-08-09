"use client"
import { AgentTopFilterForm } from "./AgentTopFilterForm"
import { useAgentsContext } from "@/app/(main)/agentes/layout";
import { Paginator } from "primereact/paginator";
import { useState } from "react";

interface Props {
    count: number
}

export const AgentTopFilters = ({ count }: Props) => {
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);
  const {setPage} = useAgentsContext();

  const onPageChange = (event: any) => {
    setFirst(event.first);
    setRows(event.rows);
    setPage(event.page + 1);
  };
  return (
    <div
      className="w-full bg-white m-auto max-w-[400px] md:max-w-[100%] border border-gray-200 rounded-lg shadow-md flex flex-col lg:flex-row justify-center sm:justify-between sm:p-4 items-center gap-2 py-3 my-4"
    >
      <div className="flex items-center gap-2">
        <span className="text-base">MOSTRANDO</span>
        <span className="font-bold">
          { count } Agentes
        </span>
        <Paginator
          first={first}
          rows={rows}
          totalRecords={count}
          onPageChange={onPageChange}
          template="FirstPageLink PrevPageLink NextPageLink LastPageLink"
        />
      </div>

      <AgentTopFilterForm  />
    </div>
  )
}
