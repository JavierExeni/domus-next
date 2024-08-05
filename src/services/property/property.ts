import { Property } from "@/types";
import { apiService } from "../api-service";
import { notFound } from "next/navigation";

const url = "properties/property/";

export const getProperty = async (id: number): Promise<Property> => {
  try {
    const properties = await apiService.get(`${url}${id}`);
    return properties;
  } catch (error) {
    notFound()
  }
};
