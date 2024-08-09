import api from "../interceptor";
import { notFound } from "next/navigation";
import { PaginatedResponse } from "@/types/paginated-response.type";
import { Employee } from "@/types/user.type";

const url = "auth/user/";

export const AgentService = {
    getAgentList: async (): Promise<Employee[]> => {
        try {
            return new Promise<Employee[]>((resolve, reject) => {
                api.get(`${url}public-employees/`)
                    .then(response => {
                        resolve(response.data);
                    }
                    )
                    .catch(error => reject(error))
            });
        } catch (error) {
            console.error(error);
            return [];
        }
    },
    getSingleAgent: async (id: number): Promise<Employee> => {
        try {
            return new Promise<Employee>((resolve, reject) => {
                api.get(`${url}${id}/`)
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
    getAgentListPaginated: async (
        page: number,
        body: any
    ): Promise<PaginatedResponse<Employee>> => {
        try {
            return new Promise<PaginatedResponse<Employee>>((resolve, reject) => {
                api.post(
                    `${url}public-agents/?page=${page}`,
                    body
                )
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