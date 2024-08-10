"use client";

import { agentsDatosContext } from "@/app/(main)/agentes/layout";
import { propertiesDatosContext, usePropertiesContext } from "@/app/(main)/propiedades/layout";
import { Paginator } from "primereact/paginator";
import { useEffect, useState } from "react";

interface Props {
  count: number;
  rows : number;
  context : propertiesDatosContext | agentsDatosContext;
}

export const BottomListPagination = ({ count, rows, context }: Props) => {
  const [first, setFirst] = useState(0);
  const page = context.page;
  const setPage = context.setPage;

  const onPageChange = (event: any) => {
    setFirst(event.first);
    setPage(event.page + 1);
  };

  useEffect(() => {
    setFirst(10*(page - 1));
  }, [page]);
  
  return (
    <>
      <div className="hidden md:block my-14">
        <Paginator
          first={first}
          rows={rows}
          totalRecords={count}
          onPageChange={onPageChange}
        />
      </div>
      <div className="block md:hidden my-14">
        <Paginator
          first={first}
          rows={rows}
          totalRecords={count}
          onPageChange={onPageChange}
          template="FirstPageLink PrevPageLink NextPageLink LastPageLink"
        />
      </div>
    </>
  );
};
