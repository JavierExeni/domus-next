'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { City, Employee, Feature, PaginatedResponse, Property } from '@/types';
import { MobileFilterOption } from '@/components/properties/MobileFilterOption';
import { PropertyFilterForm, PropertyList } from '@/components';
import ReduxProvider from '@/providers/redux-provider';
import { getPropertyList } from '@/services/property/properties';
import { CitiesService } from '@/services/parameter/cities-service';
import { FeaturesService } from '@/services/parameter/features-service';
import { PropertyService } from '@/services/property/property-service';
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
                {/* <AgentList /> */}
            </div>
            {/* <div className="w-[90%] xl:w-[85%] m-auto">
                <MobileFilterOption />
                <div className="lg:flex lg:items-start">
                    <div className="bg-white border border-gray-200 rounded-md w-[300px] p-4 hidden responsive-filter my-6 mr-10 sticky top-2 z-40">
                        <PropertyFilterForm />
                    </div>
                    <ReduxProvider>
                        {children}
                    </ReduxProvider>
                </div>
            </div> */}
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
        role : 2
    });
    const [page, setPage] = useState(1);

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

    useEffect(() => {
        getAgents();
      }, [
        filterBody.full_name,
        filterBody.city_id,
        page
      ]);

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
