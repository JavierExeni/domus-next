"use client";
import { propertiesByAgentDatosContext } from "@/app/(main)/agente/[id]/layout";
import { propertiesDatosContext, usePropertiesContext } from "@/app/(main)/propiedades/layout";
import { Tag } from "primereact/tag";
import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";

interface Props {
    context: propertiesDatosContext | propertiesByAgentDatosContext;
}

export const TagFilter = ({context} : Props) => {
    const filterBody = context.filterBody;
    const [chips, setChips] = useState<any>([]);

    // TODO: Refactor this function
    const getChips = () => {
        const chips = [];

        if (filterBody.selectedCity) chips.push({ type: "selectedCity", value: `Ciudad: ${filterBody.selectedCity}` });
        if (filterBody.selectedZones) chips.push({ type: "selectedZones", value: `Zonas: ${filterBody.selectedZones.join(", ")}` });
        if (filterBody.selectedCategories) chips.push({ type: "selectedCategories", value: `Categorías: ${filterBody.selectedCategories.join(", ")}` });
        if (filterBody.selectedTypes) chips.push({ type: "selectedTypes", value: `Tipos: ${filterBody.selectedTypes.join(", ")}` });
        if (filterBody.selectedFeatures) chips.push({ type: "selectedFeatures", value: `Características: ${filterBody.selectedFeatures.join(", ")}` });

        if (filterBody.minPrice) chips.push({ type: "minPrice", value: `Min: $${filterBody.minPrice}` });
        if (filterBody.maxPrice) chips.push({ type: "maxPrice", value: `Max: $${filterBody.maxPrice}` });

        if (filterBody.bedrooms) chips.push({ type: "bedrooms", value: `Dormitorios: ${filterBody.bedrooms}` });
        if (filterBody.bathrooms) chips.push({ type: "bathrooms", value: `Baños: ${filterBody.bathrooms}` });
        if (filterBody.numparking) chips.push({ type: "numparking", value: `Parqueos: ${filterBody.numparking}` });
        
        if (filterBody.areaMin) chips.push({ type: "areaMin", value: `Área Mín: ${filterBody.areaMin}m²` });
        if (filterBody.areaMax) chips.push({ type: "areaMax", value: `Área Máx: ${filterBody.areaMax}m²` });
        return chips;
    };

    useEffect(() => {
        if (filterBody){
            setChips(getChips());
        }
    }, [filterBody]);

    return (
        <div className="flex flex-wrap gap-2 mt-2 mb-2">
            {chips.map((item : any, index : any) => (
                <Tag
                    key={index}
                    value={
                        <div className="flex items-center justify-between gap-2">
                            <span>{item.value}</span>
                            <FaTimes
                                className="cursor-pointer"
                            />
                        </div>
                    }
                    style={{ backgroundColor: "#1e3a58" }}
                    rounded
                />
            ))}
        </div>
    );
};