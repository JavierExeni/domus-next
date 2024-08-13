"use client";

import { usePropertiesContext } from "@/app/(main)/propiedades/layout";
import { Paginator } from "primereact/paginator";
import { useEffect, useState } from "react";

interface Props {
  count: number;
}

export const TopListPaginator = ({ count }: Props) => {
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);
  const { filterBody, setFilterBody } = usePropertiesContext();

  const page = filterBody?.page;

  const onPageChange = (event: any) => {
    setFirst(event.first);
    setRows(event.rows);
    setFilterBody({ ...filterBody, page: event.page + 1 });
  };

  useEffect(() => {
    setFirst(10*(page- 1));
  }, [page]);


  if (filterBody === null) {
    return null;
  }

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
