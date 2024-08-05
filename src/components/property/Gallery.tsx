"use client";

import { Property, PropertyGallery } from "@/types";
import { GalleryGrid } from "./GalleryGrid";

import { Dialog } from "primereact/dialog";
import { useState } from "react";
import { GalleryList } from "./GalleryList";

interface Props {
  property: Property;
}

export const Gallery = ({ property }: Props) => {
  const [visible, setVisible] = useState(false);
  const images = property.gallery!.filter(
    (el: PropertyGallery) => !el.is_banner
  );
  const banner = property.gallery!.find((el: PropertyGallery) => el.is_banner);
  return (
    <div>
      <div onClick={() => setVisible(true)}>
        <GalleryGrid type={property.property_type} banner={banner!} images={images} />
      </div>

      <Dialog
        header="Galería de Imágenes"
        visible={visible}
        draggable={false}
        closeOnEscape={false}
        className="w-full sm:max-w-[90%] md:w-auto"
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
      >
        <GalleryList images={images} />
      </Dialog>
    </div>
  );
};
