import { Employee } from "@/types";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa6";

interface Props {
  agent: Employee;
}

export const AgentProfileCard = ({ agent }: Props) => {
  return (
    <div className="relative flex flex-col w-max bg-white border border-gray-200 rounded-lg shadow-sm m-auto gap-0 h-auto">
      <div>
        <Image
          className="object-cover rounded-lg w-[250px] m-4"
          src={
            agent.image_profile
              ? agent.image_profile
              : "images/image-profile.webp"
          }
          width={250}
          height={250}
          alt="image profile"
        />
      </div>
      <div className="flex flex-col justify-between px-4 py-4 pt-0 leading-normal w-full">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 mb-1">
          {agent.first_name} {agent.last_name}
        </h5>
        <p className="mb-3 text-sm">
          <span>Agente Firma Propiedades </span>
        </p>

        <div className="flex gap-2 mb-2">
          <p>Ciudad:</p>
          <p className="font-semibold">
            {agent.city ? agent.city!.name : "Todas"}
          </p>
        </div>
        <div className="flex gap-2 mb-2">
          <p>Whatsapp:</p>
          <p className="font-semibold">{agent.phone}</p>
        </div>
        <div className="flex gap-2">
          <p>Email:</p>
          <p className="font-semibold">{agent.email}</p>
        </div>
        <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="flex items-center gap-2">
          {agent.facebook && (
            <a
              href={agent.facebook}
              target="_blank"
              id="facebook-icon"
              className="text-white bg-[#1e3a58] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center"
            >
              <FaFacebookF className="w-5 h-5 !flex items-center justify-center" />
            </a>
          )}

          {agent.whatsapp && (
            <a
              href={agent.whatsapp}
              target="_blank"
              id="whatsapp-icon"
              className="text-white bg-[#1e3a58] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center"
            >
              <FaWhatsapp className="w-5 h-5 !flex items-center justify-center" />
            </a>
          )}

          {agent.instagram && (
            <a
              href={agent.instagram}
              target="_blank"
              id="instagram-icon"
              className="text-white bg-[#1e3a58] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center"
            >
              <FaInstagram className="w-5 h-5 !flex items-center justify-center" />
            </a>
          )}

          {agent.tiktok && (
            <a
              href={agent.tiktok}
              target="_blank"
              id="tiktok-icon"
              className="text-white bg-[#1e3a58] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center"
            >
              <FaTiktok className="w-5 h-5 !flex items-center justify-center" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
