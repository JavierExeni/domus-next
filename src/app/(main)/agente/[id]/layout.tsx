'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { City, Employee, Feature, PaginatedResponse, Property, Zone } from '@/types';
import { AgentContactForm, AgentProfileCard, PropertyFilterForm } from '@/components';
import ReduxProvider from '@/providers/redux-provider';
import { CitiesService } from '@/services/parameter/cities-service';
import { FeaturesService } from '@/services/parameter/features-service';
import { PropertyService } from '@/services/property/property-service';
import { AgentService } from '@/services/users/agent-service';
import { Sidebar } from 'primereact/sidebar';

export interface propertiesByAgentDatosContext {
    properties: PaginatedResponse<Property>,
    cities: City[],
    zones: Zone[],
    agent: Employee,
    changeCity: boolean,
    features: Feature[],
    page: number,
    filterBody: any,
    setFilterBody: any,
    setPage: any,
    setProperties: any,
    setChangeCity: any,
}
const propertiesByAgentDatosContext = createContext({} as propertiesByAgentDatosContext);

export default function layout(
    { children }: { children: React.ReactNode }
) {
    return (
        <PropertiesByAgentProvider>
            <div className="w-[90%] xl:w-[85%] m-auto py-4 flex gap-4">
                <div className="self-start flex-col gap-3 hidden xl:flex">
                    {/* Profile Card */}
                    <AgentProfileCard />

                    {/* Contact Form */}
                    <AgentContactForm />
                </div>
                <ReduxProvider>
                    {children}
                    {/* <AgentPropertyList properties={properties} /> */}
                </ReduxProvider>
            </div>
        </PropertiesByAgentProvider>
    )
}

export function PropertiesByAgentProvider(
    { children }: { children: React.ReactNode }
) {
    const [properties, setProperties] = useState<PaginatedResponse<Property>>({
        count: 0,
        next: null,
        previous: null,
        results: []
    });
    const [cities, setCities] = useState([] as City[]);
    const [zones, setZones] = useState([] as Zone[]);
    const [features, setFeatures] = useState([] as Feature[]);
    const [agent, setAgent] = useState<Employee | null>(null);

    const [filterBody, setFilterBody] = useState<any>(null);

    const [changeCity, setChangeCity] = useState(false);

    const filterDefault = {
        value: "",
        minPrice: 0,
        maxPrice: 0,
        bedrooms: 0,
        bathrooms: 0,
        numparking: 0,
        areaMin: 0,
        areaMax: 0,
        selectedCity: null,
        selectedZones: null,
        selectedCategories: null,
        selectedTypes: null,
        selectedFeatures: null,
        page: 1
    }

    async function getCities() {
        const cities = await CitiesService.getCities();
        setCities(cities);
    }

    async function getFeatures() {
        const features = await FeaturesService.getFeatures();
        setFeatures(features)
    }

    const getAgent = async (id: number) => {
        const agent = await AgentService.getSingleAgent(id);
        return agent;
    }

    const getProperties = async (): Promise<PaginatedResponse<Property>> => {
        if (!filterBody) {
            return {
                count: 0,
                next: null,
                previous: null,
                results: []
            }
        }
        const body = {
            agent: filterBody.agent,
            area_max: filterBody.areaMax,
            area_min: filterBody.areaMin,
            city: filterBody.selectedCity,
            bathrooms: filterBody.bathrooms,
            bedrooms: filterBody.bedrooms,
            features: filterBody.selectedFeatures,
            num_parking: filterBody.numparking,
            price_max: filterBody.maxPrice,
            price_min: filterBody.minPrice,
            property_category: filterBody.selectedCategories,
            property_code: filterBody.value,
            property_type: filterBody.selectedTypes,
            zones: filterBody.selectedZones,
        };
        const properties: PaginatedResponse<Property> = await PropertyService.getPropertiesFilter(filterBody.page, body);
        return properties;
    }

    useEffect(() => {
        if (filterBody == null) return;
        if (filterBody.selectedCity) {
            const city = cities.find((city: City) => city.id === filterBody.selectedCity);
            setZones(city?.zones ?? []);
        } else {
            setZones([]);
        }
    }, [cities]);

    useEffect(() => {
        if (filterBody == null) return;
        if (filterBody.selectedCity) {
            const city = cities.find((city: City) => city.id === filterBody.selectedCity);
            setZones(city?.zones ?? []);
        }
        setFilterBody({ ...filterBody, selectedZones: null });
    }, [changeCity]);

    useEffect(() => {
        getProperties().then((properties) => {
            setProperties(properties);
            setTimeout(() => {
                localStorage.removeItem('filtro');
            }, 10);
        });
    }, [filterBody]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedFilterBody = localStorage.getItem('filtro');

            //agente/1
            // obtener el id del agente de la url
            const url = window.location.pathname;
            const id = url.split("/")[2];

            getAgent(Number(id)).then((agent) => {
                setAgent(agent);

                if (savedFilterBody) {
                    console.log("savedFilterBody", savedFilterBody);
                    // validar si no tiene agent en savedFilterBody
                    if (!savedFilterBody.includes("agent")) {
                        localStorage.removeItem('filtro');
                        localStorage.removeItem('lastVisited');
                        setFilterBody({...filterDefault, agent: agent ? agent.id : null});
                    }else{
                        setFilterBody(JSON.parse(savedFilterBody));
                    }
                } else {
                    setFilterBody({...filterDefault, agent: agent ? agent.id : null});
                }
            });
        }
        getCities();
        getFeatures();
    }, []);

    const datos = {
        properties: properties,
        agent: agent,
        cities: cities,
        zones: zones,
        features: features,
        filterBody: filterBody,
        changeCity: changeCity,
        setFilterBody: setFilterBody,
        setProperties: setProperties,
        setChangeCity: setChangeCity,
    } as propertiesByAgentDatosContext;

    return (
        <propertiesByAgentDatosContext.Provider value={datos}>
            {children}
        </propertiesByAgentDatosContext.Provider>
    )
}

export const usePropertiesByAgentDatosContext = () => {
    return useContext(propertiesByAgentDatosContext);
};
