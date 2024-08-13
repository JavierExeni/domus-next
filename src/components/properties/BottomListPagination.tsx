"use client";

import { agentsDatosContext } from "@/app/(main)/agentes/layout";
import { propertiesDatosContext, usePropertiesContext } from "@/app/(main)/propiedades/layout";
import { Paginator } from "primereact/paginator";
import { useEffect, useState } from "react";

interface Props {
  count: number;
  rows: number;
  context?: propertiesDatosContext | agentsDatosContext;
}

export const BottomListPagination = ({ count, rows, context }: Props) => {
  const [first, setFirst] = useState(0);

  const filter = context?.filterBody;
  const setFilter = context?.setFilterBody;

  const page = filter?.page;

  const onPageChange = (event: any) => {
    setFirst(event.first);
    setFilter({ ...filter, page: event.page + 1 });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    setFirst(10 * (page - 1));
  }, [page]);

  if (filter === null) {
    return null;
  }

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
