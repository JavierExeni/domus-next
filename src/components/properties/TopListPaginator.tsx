"use client";

import { usePropertiesContext } from "@/app/(main)/propiedades/layout";
import { Paginator } from "primereact/paginator";
import { useState } from "react";

interface Props {
  count: number;
}

export const TopListPaginator = ({ count }: Props) => {
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);
  const {setPage} = usePropertiesContext();

  const onPageChange = (event: any) => {
    setFirst(event.first);
    setRows(event.rows);
    setPage(event.page + 1);
  };

  return (
    <>
      <div className="md:flex md:justify-between items-center">
        <div className="flex justify-center gap-2 md:block mb-3 md:!mb-0">
          <span className="text-base">MOSTRANDO </span>
          <span className="font-bold">{count}</span>
        </div>
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
