"use client";

import Image from "next/image";
import { useState } from "react";
import { Employee } from "@/types";
import { Carousel } from "primereact/carousel";

interface Props {
  agents: Employee[];
}

export const AgentsCarousel = ({ agents }: Props) => {
  const [agentList] = useState(agents);
  const responsiveOptions = [
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: "991px",
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: "767px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const agentTemplate = (agent: Employee) => {
    return (
      <div className="w-full max-w-sm m-auto bg-[#f7f6f5] border border-gray-200 rounded-lg">
        <div className="flex flex-col items-center py-10">
          <Image
            priority
            className="w-24 h-24 lg:w-44 lg:h-44 xl:w-52 xl:h-52 mb-3 rounded-full shadow-lg cursor-pointer"
            src={agent.image_profile ? agent.image_profile : ""}
            width={176}
            height={176}
            alt="carousel image"
          />
          <h2 className="mt-4 text-xl lg:text-2xl font-semibold text-gray-900">
            {agent.first_name} {agent.last_name}
          </h2>
          <p className="mt-2 mb-4 text-base font-normal text-gray-900">
            {agent.email}
          </p>
          <div className="flex">
            <a className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-[#1e3a58] rounded-lg hover:bg-[#1e3a58]/80 focus:ring-4 focus:outline-none focus:ring-blue-300">
              Ver Propiedades
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Carousel
      value={agentList}
      numScroll={3}
      numVisible={3}
      responsiveOptions={responsiveOptions}
      itemTemplate={agentTemplate}
      showIndicators={false}
    />
  );
};
