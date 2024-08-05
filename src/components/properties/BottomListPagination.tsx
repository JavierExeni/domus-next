"use client";

import { Paginator } from "primereact/paginator";
import { useState } from "react";

interface Props {
  count: number;
}

export const BottomListPagination = ({ count }: Props) => {
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);

  const onPageChange = (event: any) => {
    setFirst(event.first);
    setRows(event.rows);
  };
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
