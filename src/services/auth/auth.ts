import { LoginRequest } from "@/types/auth.type";
import { apiService } from "../api-service";

const url = "token/";

export const login = async (data: LoginRequest): Promise<any> => {
  try {
    const currentUser = await apiService.post(`${url}`, data);
    return currentUser;
  } catch (error) {
    return {
      count: 0,
      next: null,
      previous: null,
      results: [],
    };
  }
};
