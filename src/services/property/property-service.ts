import { Property } from "@/types/property.type";
import api from "../interceptor";
import { notFound } from "next/navigation";
import { PaginatedResponse } from "@/types/paginated-response.type";

const url = "properties/property/";

export const PropertyService = {
    getProperty: async (id: number): Promise<Property> => {
        try {
            return new Promise<Property>((resolve, reject) => {
                api.get(`${url}${id}`)
                    .then(response => {
                        resolve(response.data);
                    }
                    )
                    .catch(error => reject(error))
            });
        } catch (error) {
            notFound();
        }
    },
    getPropertyList: async (
        page: number
    ): Promise<PaginatedResponse<Property>> => {
        try {
            return new Promise<PaginatedResponse<Property>>((resolve, reject) => {
                api.get(`${url}public-filter/?page=${page}`)
                    .then(response => {
                        resolve(response.data);
                    }
                    )
                    .catch(error => reject(error))
            });
        } catch (error) {
            return {
                count: 0,
                next: null,
                previous: null,
                results: [],
            };
        }
    },
    getPropertyFilterList: async (
        agent: number
    ): Promise<PaginatedResponse<Property>> => {
        try {
            return new Promise<PaginatedResponse<Property>>((resolve, reject) => {
                api.post(`${url}filter-properties/`, {
                    agent,
                })
                    .then(response => {
                        resolve(response.data);
                    }
                    )
                    .catch(error => reject(error))
            });
        } catch (error) {
            return {
                count: 0,
                next: null,
                previous: null,
                results: [],
            };
        }
    },
    getPropertiesFilter: async (
        page: number,
        body: any
    ): Promise<PaginatedResponse<Property>> => {
        try {
            return new Promise<PaginatedResponse<Property>>((resolve, reject) => {
                api.post(`${url}filter-properties/?page=${page}`,
                    body)
                    .then(response => {
                        resolve(response.data);
                    }
                    )
                    .catch(error => reject(error))
            });
        } catch (error) {
            return {
                count: 0,
                next: null,
                previous: null,
                results: [],
            };
        }
    }
}