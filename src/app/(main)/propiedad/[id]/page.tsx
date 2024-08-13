import { Gallery, PropertyProfile } from "@/components";
import { PropertyDetail } from "../../../../components/property/PropertyDetail";
import ReduxProvider from "@/providers/redux-provider";
import { PropertyService } from "@/services/property/property-service";

interface Props {
  params: { id: number };
}

export async function generateMetadata({ params }: Props) {
  const property = await PropertyService.getProperty(params.id);
  const banner = property.gallery ? property.gallery?.find((el: any) => el.is_banner) : "";

  return {
      title: property.property_title,
      description: property.description,
      url: "https://firmacasas.com/" + 'propiedades/' + params.id,
      alternates: {
          canonical: "https://firmacasas.com/" + 'propiedades/' + params.id
      },
      openGraph: {
          title: property.property_title + ' | Firma Propiedades',
          description: property.description,
          url: "https://firmacasas.com/" + 'propiedades/' + params.id,
          siteName: 'Firma Propiedades',
          locale: 'es_BO',
          type: 'article',
          images: [
              {
                  url: banner ? banner.file : "/images/logo.webp",
                  width: 800,
                  height: 600,
                  alt: property.property_title
              }
          ],
      },
      robots: {
          index: true,
          follow: true,
          googleBot: {
              index: true,
              follow: true,
          },
      }
  }
}

export default async function PropertyPage({ params }: Props) {
  const property = await PropertyService.getProperty(params.id);
  return (
    <ReduxProvider>
      <div className="w-[90%] lg:max-w-[1000px] mx-auto py-10">
        <Gallery property={property} />
      </div>

      <div className="w-[90%] md:w-[80%] lg:max-w-[1250px] mx-auto pb-4 mb-12">
          <PropertyProfile property={property} />
          <PropertyDetail property={property} />
      </div>
    </ReduxProvider>
  );
}
