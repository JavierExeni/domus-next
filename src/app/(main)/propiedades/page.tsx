import {
  MobileFilterOption,
  PropertyFilterForm,
  PropertyList,
} from "@/components";

export default function PropertiesPage() {
  return (
    <>
      <div className="w-[90%] xl:w-[85%] m-auto">
        <MobileFilterOption />

        <div className="lg:flex lg:items-start">
          <div className="bg-white border border-gray-200 rounded-md w-[300px] p-4 hidden lg:block  my-6 mr-10 sticky top-2 z-40">
            <PropertyFilterForm />
          </div>

          <PropertyList />
        </div>
      </div>
    </>
  );
}
