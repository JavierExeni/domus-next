import { FaFilter } from "react-icons/fa6";

export const MobileFilterOption = () => {
  return (
    <div className="hidden w-full bg-white border border-gray-200 z-40 sticky top-0">
      <div className="w-[90%] md:w-[80%] m-auto flex justify-center items-center gap-3 p-3">
        <FaFilter className="text-xl text-[#1e3a58]" />
        <button
          type="button"
          aria-label="filter button"
          className="text-white w-full max-w-[200px] flex items-center justify-center gap-3 bg-[#1e3a58] enabled:hover:bg-blue-800 disabled:opacity-75 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 md:px-5 py-2.5"
        >
          <span> Filtros de Búsqueda </span>
        </button>
      </div>
    </div>
  );
};
