import api from "../interceptor";
import { notFound } from "next/navigation";
import { City } from "@/types";

const url = "parameter/city/cities/";

export const CitiesService = {
    getCities: async (): Promise<City[]> => {
        try {
            return new Promise<City[]>((resolve, reject) => {
                api.get(`${url}`)
                    .then(response => {
                        resolve(response.data);
                    }
                    )
                    .catch(error => reject(error))
            });
        } catch (error) {
            notFound();
        }
    }
}