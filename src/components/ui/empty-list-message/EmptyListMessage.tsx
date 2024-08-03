import { FaQuestion } from "react-icons/fa6";

interface Props {
  message: string;
}

export const EmptyListMessage = ({ message }: Props) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 m-10">
      <span className="border border-[#1e3a58]/10 w-16 h-16 p-4 flex justify-center items-center rounded-full">
        <FaQuestion className="text-2xl" />
      </span>
      <div className="text-center md:!text-start">
        <h2 className="font-semibold text-xl">¡Sin registros!</h2>
        <p>{message}</p>
      </div>
    </div>
  );
};
