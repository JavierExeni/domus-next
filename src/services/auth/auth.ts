import { LoginRequest } from "@/types/auth.type";
import api from "../interceptor";

const url = "token/";

export const AuthService = {
  
  login: async (data: LoginRequest): Promise<any> => {
    try {
      return new Promise<any>((resolve, reject) => {
        api.post(`${url}`, data)
          .then(response => 
            {
              localStorage.setItem('accessToken', response.data.access);
              api.defaults.headers['Authorization'] = `Bearer ${response.data.access}`;
              const user = AuthService.getUserInfo();
              resolve(user);
            }
          )
          .catch(error => reject(error))
      });
    } catch (error) {
      return Promise.reject(error);
    }
  },
  getUserInfo : async (): Promise<any> => {
    try {
      return new Promise<any>((resolve, reject) => {
        api.get(`auth/user/current-user/`)
          .then(response => 
            {
              resolve(response.data);
            }
          )
          .catch(error => console.error(error))
      });
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

