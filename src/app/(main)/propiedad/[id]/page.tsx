import { Gallery, PropertyProfile } from "@/components";
import { getProperty } from "@/services";
import { PropertyDetail } from "../../../../components/property/PropertyDetail";

interface Props {
  params: { id: number };
}

export default async function PropertyPage({ params }: Props) {
  const property = await getProperty(params.id);
  return (
    <>
      <div className="w-[90%] lg:max-w-[1000px] mx-auto py-10">
        <Gallery property={property} />
      </div>

      <div className="w-[90%] md:w-[80%] lg:max-w-[1250px] mx-auto pb-4 mb-12">
        <PropertyProfile property={property} />

        <PropertyDetail property={property} />
      </div>
    </>
  );
}
