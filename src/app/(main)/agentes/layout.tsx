'use client'
import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import { City, Employee, PaginatedResponse } from '@/types';
import { CitiesService } from '@/services/parameter/cities-service';
import { AgentService } from '@/services/users/agent-service';

export interface agentsDatosContext {
    agents: PaginatedResponse<Employee>,
    cities: City[],
    page: number,
    filterBody: any,
    setFilterBody: any,
    setPage: any,
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
    const [filterBody, setFilterBody] = useState({
        full_name: "",
        city_id: null,
        role: 2
    });
    const [page, setPage] = useState(1);
    const prevFilterBody = useRef(filterBody);

    async function getCities() {
        const cities = await CitiesService.getCities();
        setCities(cities);
    }

    async function getAgents() {
        const agents: PaginatedResponse<Employee> = await AgentService.getAgentListPaginated(page, filterBody);
        setAgents(agents);
    }

    useEffect(() => {
        getCities();
    }, []);

    // useEffect(() => {
    //     getAgents();
    // }, [
    //     filterBody.full_name,
    //     filterBody.city_id,
    //     page
    // ]);

    useEffect(() => {
        console.log("filterBody", filterBody);

        if (JSON.stringify(prevFilterBody.current) !== JSON.stringify(filterBody)) {
            if (page === 1) {
                getAgents();
            } else {
                setPage(1);
            }
        } else {
            getAgents();
        }
        prevFilterBody.current = filterBody;
    }, [filterBody]);

    useEffect(() => {
        if (JSON.stringify(prevFilterBody.current) === JSON.stringify(filterBody)) {
            getAgents();
        }
    }, [page]);

    const datos = {
        agents: agents,
        cities: cities,
        page: page,
        filterBody: filterBody,
        setFilterBody: setFilterBody,
        setPage: setPage,
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
