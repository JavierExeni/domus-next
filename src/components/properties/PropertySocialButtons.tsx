"use client";

import { Button } from "primereact/button";

export const PropertySocialButtons = () => {
  return (
    <div className="flex items-center justify-start gap-2">
      <Button className="!bg-[#0866ff] border !border-[#0866ff] !px-2.5 !py-0.5" aria-label="share button" icon="pi pi-facebook" />
      <Button className="!bg-[#0a66c2] border !border-[#0a66c2] !px-2.5 !py-0.5" aria-label="share button" icon="pi pi-linkedin" />
      <Button className="!bg-[#00a884] border !border-[#00a884] !px-2.5 !py-0.5" aria-label="share button" icon="pi pi-whatsapp" />
    </div>
  );
};
