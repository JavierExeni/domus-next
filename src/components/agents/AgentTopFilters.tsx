import { AgentTopFilterForm } from "./AgentTopFilterForm"

interface Props {
    count: number
}

export const AgentTopFilters = ({ count }: Props) => {
  return (
    <div
      className="w-full bg-white m-auto max-w-[400px] md:max-w-[100%] border border-gray-200 rounded-lg shadow-md flex flex-col lg:flex-row justify-center sm:justify-between sm:p-4 items-center gap-2 py-3 my-4"
    >
      <div className="flex items-center gap-2">
        <span className="text-base">MOSTRANDO</span>
        <span className="font-bold">
          { count } Agentes
        </span>
      </div>

      <AgentTopFilterForm  />

    </div>
  )
}
