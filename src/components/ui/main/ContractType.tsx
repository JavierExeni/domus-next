import { FaHouseCircleCheck, FaSignHanging, FaTruckRampBox } from "react-icons/fa6";

//TODO: create a array of type an itereate with one compoent

export const ContractType = () => {
  return (
    <>
      <div className="w-[80%] m-auto py-28">
        <div className="grid responsive-contract-type gap-3 grid-cols-3">
          <div className="rounded-lg cursor-pointer shadow-sm hover:!shadow-lg border border-gray-100 bg-white grid grid-cols-[auto_1fr] items-start p-4 gap-4 transition-all duration-200">
            <span className="bg-[#1e3a58]/10 w-16 h-16 p-4 flex justify-center items-center rounded-full">
              <FaSignHanging className="text-xl" />
            </span>
            <div>
              <h2 className="font-semibold text-2xl">Venta</h2>
              <p>
                Podrás encontrar una gran cantidad de propiedades en este estado
              </p>
            </div>
          </div>

          <div className="rounded-lg cursor-pointer shadow-sm hover:!shadow-lg border border-gray-100 bg-white grid grid-cols-[auto_1fr] items-start p-4 gap-4 transition-all duration-200">
            <span className="bg-[#1e3a58]/10 w-16 h-16 p-4 flex justify-center items-center rounded-full">
              <FaTruckRampBox className="text-xl" />
            </span>
            <div>
              <h2 className="font-semibold text-2xl">Alquiler</h2>
              <p>
                Podrás encontrar una gran cantidad de propiedades en este estado
              </p>
            </div>
          </div>

          <div className="rounded-lg cursor-pointer shadow-sm hover:!shadow-lg border border-gray-100 bg-white grid grid-cols-[auto_1fr] items-start p-4 gap-4 transition-all duration-200">
            <span className="bg-[#1e3a58]/10 w-16 h-16 p-4 flex justify-center items-center rounded-full">
              <FaHouseCircleCheck className="text-xl" />
            </span>
            <div>
              <h2 className="font-semibold text-2xl">Anticrético</h2>
              <p>
                Podrás encontrar una gran cantidad de propiedades en este estado
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
