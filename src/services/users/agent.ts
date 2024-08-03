"use server";

import { apiService } from "../api-service";

const url = "auth/user/public-employees/";

export const getAgentList = async () => {
  try {
    const agents = await apiService.get(url);
    console.log(agents);
    return agents;
  } catch (error) {
    console.error(error);
  }
};
