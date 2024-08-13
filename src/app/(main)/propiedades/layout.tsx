'use client';
import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { City, Feature, PaginatedResponse, Property, Zone } from '@/types';
import { MobileFilterOption } from '@/components/properties/MobileFilterOption';
import { PropertyFilterForm, PropertyList } from '@/components';
import ReduxProvider from '@/providers/redux-provider';
import { CitiesService } from '@/services/parameter/cities-service';
import { FeaturesService } from '@/services/parameter/features-service';
import { PropertyService } from '@/services/property/property-service';

export interface propertiesDatosContext {
    properties: PaginatedResponse<Property>,
    cities: City[],
    zones: Zone[],
    changeCity: boolean,
    features: Feature[],
    page: number,
    filterBody: any,
    setFilterBody: any,
    setPage: any,
    setProperties: any,
    setChangeCity: any,
}
const propertiesContext = createContext({} as propertiesDatosContext);

export default function layout(
    { children }: { children: React.ReactNode }
) {
    return (
        <PropertiesProvider>
            <div className="w-[90%] xl:w-[85%] m-auto">
                <MobileFilterOption />
                <div className="lg:flex lg:items-start">
                    <div className="bg-white border border-gray-200 rounded-md w-[300px] p-4 hidden responsive-filter my-6 mr-10 sticky top-2 z-40">
                        <PropertyFilterForm />
                    </div>
                    <ReduxProvider>
                        {children}
                    </ReduxProvider>
                </div>
            </div>
        </PropertiesProvider>
    )
}

export function PropertiesProvider(
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

    const [filterBody, setFilterBody] = useState<any>(null);

    const [changeCity, setChangeCity] = useState(false);

    async function getCities() {
        const cities = await CitiesService.getCities();
        setCities(cities);
    }

    async function getFeatures() {
        const features = await FeaturesService.getFeatures();
        setFeatures(features)
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
            
            //propiedades/agente/1
            // obtener el id del agente de la url
            const url = window.location.pathname;
            const id = Number(url.split("/")[3]);

            if (savedFilterBody) {
                console.log("savedFilterBody", savedFilterBody);
                const filter = JSON.parse(savedFilterBody);
                let page = 0;
                if (filter.page && filter.agent && !id) {
                    page = 1;
                }else {
                    page = filter.page;
                }

                // const page = filter.page ? filter.page : 1;
                setFilterBody({
                    value: filter.value,
                    minPrice: filter.minPrice,
                    maxPrice: filter.maxPrice,
                    bedrooms: filter.bedrooms,
                    bathrooms: filter.bathrooms,
                    numparking: filter.numparking,
                    areaMin: filter.areaMin,
                    areaMax: filter.areaMax,
                    selectedCity: filter.selectedCity,
                    selectedZones: filter.selectedZones,
                    selectedCategories: filter.selectedCategories,
                    selectedTypes: filter.selectedTypes,
                    selectedFeatures: filter.selectedFeatures,
                    page: page,
                    agent: id ? id : null
                });
            } else {
                setFilterBody({
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
                    page: 1,
                    agent: id ? id : null
                });
            }
        }
        getCities();
        getFeatures();
    }, []);

    const datos = {
        properties: properties,
        cities: cities,
        zones: zones,
        features: features,
        filterBody: filterBody,
        changeCity: changeCity,
        setFilterBody: setFilterBody,
        setProperties: setProperties,
        setChangeCity: setChangeCity,
    } as propertiesDatosContext;

    return (
        <propertiesContext.Provider value={datos}>
            {children}
        </propertiesContext.Provider>
    )
}

export const usePropertiesContext = () => {
    return useContext(propertiesContext);
};
