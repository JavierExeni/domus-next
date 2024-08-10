'use client'
import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { City, Feature, PaginatedResponse, Property } from '@/types';
import { MobileFilterOption } from '@/components/properties/MobileFilterOption';
import { PropertyFilterForm, PropertyList } from '@/components';
import ReduxProvider from '@/providers/redux-provider';
import { CitiesService } from '@/services/parameter/cities-service';
import { FeaturesService } from '@/services/parameter/features-service';
import { PropertyService } from '@/services/property/property-service';

export interface propertiesDatosContext {
    properties: PaginatedResponse<Property>,
    cities: City[],
    features: Feature[],
    page: number,
    filterBody: any,
    setFilterBody: any,
    setPage: any,
    setProperties: any
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
                        {/* <PropertyList properties={properties}/> */}
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
    const [features, setFeatures] = useState([] as Feature[]);
    const [filterBody, setFilterBody] = useState({
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
    });
    const [page, setPage] = useState(1);
    const prevFilterBody = useRef(filterBody);

    async function getCities() {
        const cities = await CitiesService.getCities();
        setCities(cities);
    }

    async function getFeatures() {
        const features = await FeaturesService.getFeatures();
        setFeatures(features)
    }
    
    const getProperties = useCallback(async () => {
        const body = {
            agent: "",
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
        const properties: PaginatedResponse<Property> = await PropertyService.getPropertiesFilter(page, body);
        setProperties(properties);
    }, [filterBody, page]);



    useEffect(() => {
        getCities();
        getFeatures();
    }, []);

    useEffect(() => {
        console.log("filterBody", filterBody);
        if (prevFilterBody.current.selectedCity !== filterBody.selectedCity) {
            setFilterBody({ ...filterBody, selectedZones: null });
        }

        if (JSON.stringify(prevFilterBody.current) !== JSON.stringify(filterBody)) {
            if (page === 1) {
                getProperties();
            } else {
                setPage(1);
            }
        } else {
            getProperties();
        }
        prevFilterBody.current = filterBody;
    }, [filterBody]);

    useEffect(() => {
        if (JSON.stringify(prevFilterBody.current) === JSON.stringify(filterBody)) {
            getProperties();
        }
    }, [page]);

    const datos = {
        properties: properties,
        cities: cities,
        features: features,
        page: page,
        filterBody: filterBody,
        setFilterBody: setFilterBody,
        setPage: setPage,
        setProperties: setProperties
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
