import { getPropertyList } from "@/services";
import { TopListPaginator } from "./TopListPaginator";
import { PaginatedResponse, Property } from "@/types";
import { PropertyCard } from "./PropertyCard";
import { EmptyListMessage } from "../ui/empty-list-message/EmptyListMessage";
import { BottomListPagination } from "./BottomListPagination";

export const PropertyList = async () => {
  const properties: PaginatedResponse<Property> = await getPropertyList(1);
  return (
    <>
      <div className="py-4 w-full">
        <div className="relative">
          <h1 className="text-2xl md:text-3xl font-bold">
            Listado de Propiedades
          </h1>
          <div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm py-3 my-4 md:px-4 md:py-0 sticky top-2 z-40 max-h-[200px] overflow-y-auto">
            <TopListPaginator count={properties.count} />

            {/* Generic Tag Filter */}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 w-full">
          {!!properties.results ? (
            properties.results.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))
          ) : (
            <EmptyListMessage message="No se encontraron propiedades registradas." />
          )}
        </div>

        <BottomListPagination count={properties.count} />
      </div>
    </>
  );
};
