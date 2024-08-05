"use server";

import { PaginatedResponse, Property } from "@/types";
import { apiService } from "../api-service";

const url = "properties/property/";

export const getPropertyList = async (
  page: number
): Promise<PaginatedResponse<Property>> => {
  try {
    const properties = await apiService.get(
      `${url}public-filter/?page=${page}`
    );
    return properties;
  } catch (error) {
    return {
      count: 0,
      next: null,
      previous: null,
      results: [],
    };
  }
};

export const getPropertyFilterList = async (
  agent: number
): Promise<PaginatedResponse<Property>> => {
  try {
    const properties = await apiService.post(`${url}filter-properties/`, {
      agent,
    });
    return properties;
  } catch (error) {
    return {
      count: 0,
      next: null,
      previous: null,
      results: [],
    };
  }
};
