"use client";

import { PropertyGallery } from "@/types";
import Image from "next/image";

import { Galleria } from "primereact/galleria";
import { Button } from "primereact/button";
import { FaDownload } from "react-icons/fa6";
import { useRef, useState } from "react";

interface Props {
  images: PropertyGallery[];
}

export const GalleryList = ({ images }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const galleria = useRef(null);

  const responsiveOptions = [
    {
      breakpoint: "991px",
      numVisible: 4,
    },
    {
      breakpoint: "767px",
      numVisible: 3,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
    },
  ];

  const itemTemplate = (item: any) => {
    return (
      <Image
        src={item ? item.file_watermark : "/images/ph-room.png"}
        width={800}
        height={480}
        alt="default gallery image"
        style={{ width: "100%" }}
      />
    );
  };

  return (
    <div>
      <Galleria
        ref={galleria}
        value={images}
        activeIndex={activeIndex}
        responsiveOptions={responsiveOptions}
        numVisible={7}
        fullScreen={true}
        circular={true}
        showItemNavigators={true}
        showThumbnails={false}
        style={{ maxWidth: "850px" }}
        item={itemTemplate}
      />
      {/* If the user its logged in */}
      <Button aria-label="descarga de imagenes button">
        <FaDownload />
        <span className="px-3">Descarga de imágenes en bloque</span>
      </Button>
      {images.map((image, index) => (
        <div key={image.id} className="mt-3">
          <div className="hidden xl:block relative">
            <Image
              src={image ? image.file_watermark : "/images/ph-room.png"}
              width={800}
              height={450}
              alt="image"
              className="cursor-pointer"
              onClick={() => {
                setActiveIndex(index);
                if (galleria && galleria.current) {
                  (galleria.current as any).show();
                }
              }}
            ></Image>
          </div>
        </div>
      ))}
    </div>
  );
};
