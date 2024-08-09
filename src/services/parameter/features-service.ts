import api from "../interceptor";
import { notFound } from "next/navigation";
import { Feature } from "@/types";

const url = "parameter/feature/features/";

export const FeaturesService = {
    getFeatures: async (): Promise<Feature[]> => {
        try {
            return new Promise<Feature[]>((resolve, reject) => {
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