import { getPropertyTypeById, PropertyGallery } from "@/types";
import Image from "next/image";
import { FaImages } from "react-icons/fa6";

interface Props {
  type: number;
  banner: PropertyGallery;
  images: PropertyGallery[];
}

export const GalleryGrid = ({ banner, images, type }: Props) => {

  return (
    <div className="relative grid grid-cols-[742px_250px] gap-2 responsive_grid_images_detail_property">
      <div className="overflow-hidden bg-cover bg-no-repeat cursor-pointer">
        <Image
          priority
          src={banner ? banner.file_watermark : "/images/ph-room.png"}
          width={742}
          height={420}
          className="rounded-l-xl w-full max-h-[520px] object-cover transition duration-300 ease-in-out hover:scale-110"
          alt="file watermark 0"
        />
      </div>
      <div className="hidden min-[1100px]:grid grid-cols-1 gap-2">
        <div className="overflow-hidden bg-cover bg-no-repeat cursor-pointer">
          <Image
            priority
            src={images ? images[0].file_watermark : "/images/ph-house2.png"}
            width={250}
            height={200}
            className="rounded-tr-xl w-full max-h-[256px] h-full object-cover transition duration-300 ease-in-out hover:scale-110"
            alt="file watermark 1"
          />
        </div>
        <div className="overflow-hidden bg-cover bg-no-repeat cursor-pointer">
          <Image
            priority
            src={images ? images[1].file_watermark : "/images/ph-house2.png"}
            width={250}
            height={200}
            className="rounded-br-xl w-full max-h-[256px] h-full object-cover transition duration-300 ease-in-out hover:scale-110"
            alt="file watermark 2"
          />
        </div>
      </div>
      <span className="absolute top-3 left-3 shadow-2xl bg-[#ecc17d] text-white text-base font-medium mr-2 px-2.5 py-0.5 rounded border border-[#ecc17d] cursor-pointer">
        { getPropertyTypeById(type).name }
      </span>
      <span className="absolute bottom-3 right-2 flex items-center gap-1 shadow-2xl bg-[#3b4144cc] hover:bg-[#3b4144cc]/60 transition-all duration-200 ease-in-out text-white text-base font-medium mr-2 px-2.5 py-0.5 rounded border border-black cursor-default">
        <FaImages className="text-base" />
        <span>{images!.length}</span>
      </span>
    </div>
  );
};
