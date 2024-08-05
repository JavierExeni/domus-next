import { Employee } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

interface Props {
  agent: Employee;
}

export const AgentCard = ({ agent }: Props) => {
  return (
    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow max-w-[400px] xl:max-w-full xl:flex-row h-full xl:w-full m-auto">
      <Image
        src={agent.image_profile ? agent.image_profile : "/images/logo.webp"}
        alt="user image profile"
        width={250}
        height={250}
        className="object-cover rounded-lg w-[250px] m-4 xl:!mr-0 xl:w-[200px] 2xl:w-[250px] 2xl:m-4"
      />

      <div className="flex flex-col justify-between px-4 py-4 leading-normal w-full">
        <h5 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900 mb-1">
          {agent.first_name} {agent.last_name}
        </h5>
        <p className="mb-3 text-sm">
          <span>Agente Firma Propiedades </span>
        </p>

        <div className="flex gap-2 mb-2">
          <p>Ciudad:</p>
          <p className="font-semibold">{agent.city!.name}</p>
        </div>
        <div className="flex gap-2 mb-2">
          <p>Whatsapp:</p>
          <p className="font-semibold">{agent.phone}</p>
        </div>
        <div className="flex gap-2">
          <p>P. disponibles:</p>
          <p className="font-semibold">{agent.properties_count}</p>
        </div>
        <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <p>Email:</p>
            <p className="font-semibold">{agent.email}</p>
          </div>
          <Link
            href={`/agente/${agent.id}`}
            className="mt-4 inline-flex cursor-pointer items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#ecc17d] rounded-lg hover:bg-[#e1b878] focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            <span>
            Ver listados
            </span>
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};
