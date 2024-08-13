'use client'
import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import { City, Employee, PaginatedResponse } from '@/types';
import { CitiesService } from '@/services/parameter/cities-service';
import { AgentService } from '@/services/users/agent-service';

export interface agentsDatosContext {
    agents: PaginatedResponse<Employee>,
    cities: City[],
    filterBody: any,
    setFilterBody: any,
    setAgents: any
}
const agentsContext = createContext({} as agentsDatosContext);

export default function layout(
    { children }: { children: React.ReactNode }
) {
    return (
        <AgentsProvider>
            <div className="w-[90%] md:w-[80%] m-auto py-4 lg:!mb-10">
                {children}
            </div>
        </AgentsProvider>
    )
}

export function AgentsProvider(
    { children }: { children: React.ReactNode }
) {
    const [agents, setAgents] = useState<PaginatedResponse<Employee>>({
        count: 0,
        next: null,
        previous: null,
        results: []
    });
    const [cities, setCities] = useState([] as City[]);
    const [filterBody, setFilterBody] = useState<any>(null);
    const [changeCity, setChangeCity] = useState(false);

    async function getCities() {
        const cities = await CitiesService.getCities();
        setCities(cities);
    }

    const getAgents = async (): Promise<PaginatedResponse<Employee>> => {
        if (!filterBody) {
            return {
                count: 0,
                next: null,
                previous: null,
                results: []
            }
        }
        const body = {
            full_name: filterBody.full_name,
            city_id: filterBody.city_id,
            role: 2
        };
        const agents: PaginatedResponse<Employee> = await AgentService.getAgentListPaginated(filterBody.page, body);
        return agents;
    }

    // async function getAgents() {
    //     const agents: PaginatedResponse<Employee> = await AgentService.getAgentListPaginated(page, filterBody);
    //     setAgents(agents);
    // }

    useEffect(() => {
        // if (typeof window !== 'undefined') {
        //     setFilterBody({
        //         full_name : '',
        //         city_id : null,
        //         role : 2,
        //         page: 1
        //     });
        // }
        if (typeof window !== 'undefined') {
            const savedFilterBody = localStorage.getItem('filtroAgents');

            if (savedFilterBody) {
                setFilterBody(JSON.parse(savedFilterBody));
            } else {
                setFilterBody({
                    full_name: '',
                    city_id: null,
                    role: 2,
                    page: 1
                });
            }
        }
        getCities();
    }, []);

    useEffect(() => {
        getAgents().then((agents) => {
            setAgents(agents);
            setTimeout(() => {
                localStorage.removeItem('filtroAgents');
            }, 10);
        });
    }, [filterBody]);

    const datos = {
        agents: agents,
        cities: cities,
        filterBody: filterBody,
        setFilterBody: setFilterBody,
        setAgents: setAgents
    } as agentsDatosContext;

    return (
        <agentsContext.Provider value={datos}>
            {children}
        </agentsContext.Provider>
    )
}

export const useAgentsContext = () => {
    return useContext(agentsContext);
};
