"use server";

import { Employee, PaginatedResponse } from "@/types";
import { apiService } from "../api-service";
import { notFound } from "next/navigation";

const url = "auth/user/";

export const getAgentList = async (): Promise<Employee[]> => {
  try {
    const agents = await apiService.get(`${url}public-employees/`);
    return agents;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getSingleAgent = async (id: number): Promise<Employee> => {
  try {
    const agents = await apiService.get(`${url}${id}/`);
    return agents;
  } catch (error) {
     notFound();
  }
};

export const getAgentListPaginated = async (
  page: number
): Promise<PaginatedResponse<Employee>> => {
  try {
    const data = {
      city_id: null,
      full_name: "",
      role: 2,
    };
    const agents = await apiService.post(
      `${url}public-agents/?page=${page}`,
      data
    );
    return agents;
  } catch (error) {
    return {
      count: 0,
      next: null,
      previous: null,
      results: [],
    };
  }
};
