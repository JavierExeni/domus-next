import {
  FaHouseCircleCheck,
  FaSignHanging,
  FaTruckRampBox,
} from "react-icons/fa6";

//TODO: create a array of type an itereate with one compoent

const types = [
  {
    icon: <FaSignHanging className="text-xl" />,
    title: "Venta",
    description:
      "Podrás encontrar una gran cantidad de propiedades en este estado",
  },
  {
    icon: <FaTruckRampBox className="text-xl" />,
    title: "Alquiler",
    description:
      "Podrás encontrar una gran cantidad de propiedades en este estado",
  },
  {
    icon: <FaHouseCircleCheck className="text-xl" />,
    title: "Anticrético",
    description:
      "Podrás encontrar una gran cantidad de propiedades en este estado",
  },
];

export const ContractType = () => {
  return (
    <>
      <div className="w-[90%] md:w-[80%] m-auto py-28">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-3">
          {types.map((type) => (
            <div
              key={type.title}
              className="rounded-lg cursor-pointer shadow-sm hover:!shadow-lg border border-gray-100 bg-white grid grid-cols-[auto_1fr] items-start p-4 gap-4 transition-all duration-200"
            >
              <span className="bg-[#1e3a58]/10 w-16 h-16 p-4 flex justify-center items-center rounded-full">
                {type.icon}
              </span>
              <div>
                <h2 className="font-semibold text-xl lg:text-2xl">
                  {type.title}
                </h2>
                <p className="text-sm lg:text-base">{type.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
