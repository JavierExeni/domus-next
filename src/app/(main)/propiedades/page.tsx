import {

  PropertyList,
} from "@/components";

export default async function PropertiesPage() {
  // const properties: PaginatedResponse<Property> = await getPropertyList(1);
  // const cities = await CitiesService.getCities();
  return (
    <PropertyList />
    // <>
    //   <div className="w-[90%] xl:w-[85%] m-auto">
    //     <MobileFilterOption />

    //     <div className="lg:flex lg:items-start">
    //       <div className="bg-white border border-gray-200 rounded-md w-[300px] p-4 hidden responsive-filter my-6 mr-10 sticky top-2 z-40">
    //         <PropertyFilterForm cities={cities} />
    //       </div>
    //       <ReduxProvider>
            
    //       </ReduxProvider>
    //     </div>
    //   </div>
    // </>
  );
}
