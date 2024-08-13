"use client"
import Image from "next/image";
import Link from "next/link";

interface Props {
  id: number;
  title: string;
  icon: string;
  image: string;
}

export const CategoryGridItem = ({ id, title, icon, image }: Props) => {
  return (
    <Link
      href={`/propiedades`}
      onClick={() => {
        const filterBody = {
          value: "",
          minPrice: 0,
          maxPrice: 0,
          bedrooms: 0,
          bathrooms: 0,
          numparking: 0,
          areaMin: 0,
          areaMax: 0,
          selectedCity: null,
          selectedZones: null,
          selectedCategories: [id],
          selectedTypes: null,
          selectedFeatures: null,
          page: 1,
          agent : null
        }
        localStorage.setItem("filtro", JSON.stringify(filterBody));
      }}
      className="relative cursor-pointer hover:shadow-lg transition-all duration-200 ease-in-out"
    >
      <Image
        className="block w-full h-[320px] object-cover rounded-md brightness-75"
        width={400}
        height={400}
        src={image}
        alt={title}
      />

      <div className="absolute top-0 w-full h-full grid place-items-center z-30">
        <div>
          <Image
            className="block w-[150px] h-[70px] m-auto mb-2"
            width={150}
            height={70}
            src={icon}
            alt={title}
          />
          <p className="text-white text-center text-2xl font-bold uppercase">
            {title}
          </p>
        </div>
      </div>
    </Link>
  );
};
