import api from "../interceptor";
import { notFound } from "next/navigation";
import { System } from "@/types";

const url = "parameter/system/images/";

export const SystemService = {
    getSystemData: async (): Promise<System> => {
        try {
            return new Promise<System>((resolve, reject) => {
                api.get(`${url}`)
                    .then(response => {
                        resolve(response.data[0]);
                    }
                    )
                    .catch(error => reject(error))
            });
        } catch (error) {
            notFound();
        }
    }
}