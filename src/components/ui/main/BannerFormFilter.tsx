"use client";

import { City, getPropertyCategories, getPropertyTypes, Zone } from "@/types";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { MultiSelect } from "primereact/multiselect";
import { useEffect, useState } from "react";
import { CitiesService } from "@/services/parameter/cities-service";

export const BannerFormFilter = () => {

  const [cities, setcities] = useState<any[]>([]);
  const [zones, setZones] = useState<Zone[]>([]);

  const [filterBody, setFilterBody] = useState<any>(null);

  useEffect(() => {
    async function getCities() {
      let cities = await CitiesService.getCities();
      const paths = [
        {
          name: "Cochabamba",
          d: "M410.7 519.1l-0.5 1.9-1 0.2-2.3 0 1.9 1.7 0.5 1-0.1 1.4-1.1-0.6-1.2-0.4-1.1 0.1-1.1 0.9 1.4 1.1 1.2 1.3 0.9 1.6 0.5 1.8 0 1-0.5 1.1-0.1 0.5 0 3 0.4 1.7 1.5 2.2 0.4 1.3-0.4 1.3-0.6 1.5-0.3 1.6 0.7 1.7-0.7 1.8 0.1 1.5 0.2 1.5-0.2 1.7-1.8 2.3-0.1 1 1.9 0.1-1.5 2.5-0.2 0.8 0.2 0.7 0.8 1 0.2 0.9-0.2 1.2-2.5 5.9-0.2 0.5-0.4 2.3-0.8 0.8-1.9 1.3-0.7 0.9-0.7 1.2-0.6 1.4-0.2 1.4 0.3 1.2 0.7 0.7 1.3 0.6 0.3 0.8-0.3 0.6-2.9 4.9-0.4 1.9-1 1.7-0.1 1 0.4 0.8 1.2 1.5 0.5 0.8 0.2 0.8 0.2 1.6 1.8 6.9 1.1 2 7.7 8.4 2 1 1.8 0.7 0.8 0.4 0.8 0.6 5.2 5.5 1.2 1 4.8 2.8 2.2 0.7 0.8 0.4 2.7 2.2 7 8 3.7 3.1 0.9 1.2 0.7 2.2 0.7 1.3 0.4 1.7-0.5 1.6-0.6 1.6-2.8 0.3-0.9-0.3-0.7 0-1.8 0.5-0.8 0-1.6-0.2-0.8 0.1-0.9 0.3-3.1 2.1-0.6 0.6-0.4 1 0 0.9 0.1 2-0.5 1.6-13 19.4-1.7 2.1-6.7 6.8-1.8 1.5-1.2 1.4-0.5 2.4 0.4 1.6 0.5 0.9 3.7 3.9 1.1 1.7 2.7 5.2 1.5 4.2 1.2 1.3 0.7 0.7 1 0.7 1.3 1.6 1.1 2.1 1.7 2.2 1.3 2.2 0.8 3.5 1.3 2.2 1.5 1.2 0.2 0.5 0 1-0.3 1.6 0.1 0.5 1 0.8 0.2 0.6-0.1 1.3 0.3 1.4 1 1.6 0.7 0.5 1.5 0.5 0.9 0.4 1.2 1 1.3 1.4 0.8 0.6 1.9 0.9 0.9 0.9 0.2 1.1-0.2 3.4 0.2 1.5 0.5 1.4 0 0.5-0.3 0.6-2.1 2.5-1.4 2.6-0.8-0.8-0.5-0.7-0.7-2.1-0.5-0.6-1.7-0.6-1.9 0.7-5.5 4.5-1 0.4-1.3 0.2-4.2 0-1.1-0.2-0.7-0.4-1.3-1.8-0.7-0.7-1.6-1.3-0.7-0.8-1.2-2.5-0.1-0.4-1.1-0.3-0.7-0.8-0.9-1.9-1.5-1-4 0-1.6-0.6-0.5-0.7-1-1.5-0.6-0.6-1.5-0.4-1.9 0.2-5.9 1.7-4.4 2.1-3.1 2.2-1.8 1.7-0.8 1-0.6 1.2-0.6 2.5-0.5 1.2-1 0.9-1.1 0.1-1.1-0.4-3.7-2.6-1.5-0.7-1.4-0.1-3.2 0.6-1.4-0.2-1.1-1.3-0.2-1.8 0-2.3-0.3-2.1-0.9-0.8-0.9-0.4-0.9-0.8-0.8-1-0.5-0.8-0.5-2.9-0.9-0.3-0.9 0.3-0.8 0-0.3-0.9-0.2-1.6-0.3-0.8-0.3-0.3-0.8-0.2-2.8-1.6-0.8-0.9-0.9-0.4-1.2-0.3-0.5-0.1-2.5-2.7-3.5-6.2-3-2.4-1.3-0.7-1.5-1.1-1.2-1.2-0.9-2.5-1-1.5-1.9-2.4-2.9-1.8-1.5-1.2-0.6-1.5-5.1-4.4-4.9-2.8-1.5-2.2-1.7 0-5.5 1.4-0.7-0.3-0.5-2.1-0.6-0.8-0.8-0.6-0.9-0.2-0.9-0.8-1.2-1.9-1.1-2.1-0.4-1.7-1.7 0-1.8-0.4-2.8-0.3-3.3 0.2-2.2 0.5-1 0.4-6.6 4.7-1.8 1.4-4.7 3.9-0.9 0.5-0.8 0.1-0.9 0-4.2-0.7-4.9 0.2-3.2-0.4-1.4-0.2-1.8 0.1-5.6 1.1-4.6-11-6.2-9.7-4.2-5.4-1.5-1.4-13.4-10.3 10.6-5.7 0.9-0.7 0.6-0.8-0.2-1.1-0.5-0.8-0.7-0.8-0.5-0.9-0.4-0.9 1.6-3.2-1.2-4.6-0.6-0.8-0.6-1.1-0.4-0.9 0-1.1 0.2-2.7-1.2-6.2-0.5-1.3-0.5-1.1-1.1-1.6-1.2-1.3-0.9-1.4-3.8-1.5-1.2-1.2-0.4-1.6 0.2-1.7 0.7-1.8 0.4-0.7 1.4-1.9 0.3-1 0.1-0.8-0.3-1.6 0.2-1.8 0.6-1.5 1.5-2.9 1.7-2.4 1.9-0.9 4.9-0.7 2-0.6 2.1-1.2 1.9-1.5 1.1-1.7 0.3-1.4-0.1-1.4-0.6-4 0-1.1 0.1-6.5-0.8-2.4-2.4-4.4-1-2.3-0.1-2.1 1.1-4.3 0.4-10.6-0.5-1.2-1.7-2.3-0.7-1.1-0.3-0.3-2.6-0.9-0.1-0.6 0.2-1.3-0.2-1.9-0.9-1.4-2.4-2.6-1.3-2.2-1.4-1.9-0.3-0.7-0.1-0.8 0.8-6.3 0-2.1-0.3-2 0-1 0.2-1 0.6-1.1 0.7-0.8 0.4-0.9 0.2-1.3-0.1-0.6-1-0.8-0.2-0.3 2.5-2.7 2.9-3.8 6.8-5.8 23 23.2 0.9 1.6 1.2 3.7 1 2.5 0.4 0.9 4.7 6.2 13.4 14.5 1.8 1.4 8 5.4 4.1 2 6.4 2.1 8.6 1.8 4.1 0.2 2.6-0.2 28.5-8.3 7.9-3.8 1.1-1.5 1.2-2.4 4.5-13.8 0-2.6 0.3-1.2 2.5-5.5 3.9-6.8 2.5-1.7 31.2-3.8 8-1.7 1.2 0.6 1 0z"
        },
        {
          name: "Sucre",
          d: "M354.6 739.5l0.2 1.6 0.3 0.9 0.8 0 0.9-0.3 0.9 0.3 0.5 2.9 0.5 0.8 0.8 1 0.9 0.8 0.9 0.4 0.9 0.8 0.3 2.1 0 2.3 0.2 1.8 1.1 1.3 1.4 0.2 3.2-0.6 1.4 0.1 1.5 0.7 3.7 2.6 1.1 0.4 1.1-0.1 1-0.9 0.5-1.2 0.6-2.5 0.6-1.2 0.8-1 1.8-1.7 3.1-2.2 4.4-2.1 5.9-1.7 1.9-0.2 1.5 0.4 0.6 0.6 1 1.5 0.5 0.7 1.6 0.6 4 0 1.5 1 0.9 1.9 0.7 0.8 1.1 0.3 0.1 0.4 1.2 2.5 0.7 0.8 1.6 1.3 0.7 0.7 1.3 1.8 0.7 0.4 1.1 0.2 4.2 0 1.3-0.2 1-0.4 5.5-4.5 1.9-0.7 1.7 0.6 0.5 0.6 0.7 2.1 0.5 0.7 0.8 0.8 0.8 0.8 0.8 1.1 0.3 1.1 0 1.1-0.2 1.3 0 1.4 0.3 1.1 1.1 2.2 0.5 1.2 0.6 2.3 0.6 1 1.6 1.4 1.8 0.9 1.6 1.1 1.1 2 0.3 1.1 0.1 1.2 0.2 1.2 0.6 0.9 1 0.6 1.2 0.2 2.4 0.2 1.3 0.4 0.7 0.8 0.7 1 0.9 0.9 1.7 0.5 0.5 0.6 3.4 12 0.2 1 0.4 1 0.7 0.7 1.3 0.4 1.5 0.1 1.5-0.2 1.2-0.3 1.1-0.5 0.7-0.8 0.6-1 0.4-1.2 0.8-6.3 0.9-1.8 1-0.8 1 0 2.2 0.7 1.7 0.1 5.1-0.6 0.8 1.4-2 14.4-0.2 5.3 3.5 60.1 0.3 0.9 1.2 2.6 3.4 35.2 1.1 3.7 1.8 0.2 5.1 0.1 3.8 0.8 0.8 0 1.1-0.4 0.5-0.5 1.4-2.1 0.6-0.7 0.7-0.4 0.8-0.3 1.6-0.2 1.1-0.5 1.1-0.9 0.5-0.7 1-1.5 0.6-0.6 0.7-0.3 1 0.8 1.1 1.7 2.5 6.1 0.7 1.1 1.4 0.5 88-0.3-1.8 2.6-3 4.5-0.7 2.4 0.5 36.8-130.7-0.1-7.6-0.2-1.7 0 0-0.3-1.6-1.5-0.6-0.9 0.2-0.9 0.6-1-0.6-0.2-1.4 0.3-2.4 0-0.7-0.5-0.3-1.6-0.7-0.6-1.6-0.4-1.7 0-1.3 0.4-1 0.1-1.1-0.7-1-1.2-0.5-0.2-0.7 1.5-0.2 1.3-0.1 2.1 0.5 5.3-0.1 1-0.9 1.3-0.3 1.4-0.4 0.7-0.1 0.5 0.5 1.3 0 0.5-0.1 1.7-0.4 1.4-1 1.3-0.8 0.5-1.3 0.1-2.2-0.7-1-0.2-5 0.6-1.5-0.3-3-1.3-2.9-2.5-1.2-0.7-1.5-0.2-1.6 0.2-2.5 0.6-1.3 0-0.7-0.5-0.6-0.7-1.9-4.6-0.2-0.3-1.6-1.8-0.4-0.5-0.9-0.9-1.5-0.9-0.5-0.7-0.5-1.3-0.5-0.6-0.4-0.2-1.5-0.1-0.9-0.2-1.1-0.6-0.9-0.3-0.6 0.2-0.6 0.4-0.8 1.2-0.7 1.4-1.2 1.8-0.5 1.3-0.1 1.1 0 1.6-0.1 0.4-0.6 1.3-0.4 1.5-0.3 0.5-0.6 0.6-1.3 0.6-1.6 0.5-1 0.4-0.7-0.3-0.9-0.9-1.2-0.6-0.7-0.5-1-1.3-0.7-0.5-1-0.3-0.3-0.2-0.4-1.4-0.3-0.4-0.7-0.4-2 0-0.8-0.4-1-0.8-0.4-0.1-1.3 0.4-0.7 0.1-0.9-1-1.1 0.1-0.6-0.1-2.6-3.1-0.6-0.6-0.9-0.2-1.6 0.6-1 0-1.4-0.4-1.4-1-0.5 0-0.5 0.3-0.5 0.6-0.4 1.1-1.1 16-1.4 4.9-0.1 0.9 0 3.5 0.2 1.8-2.3 17.6-0.3 5.1-6.8-5.1-11.5-12.5-1.4-3.3-0.1-0.5-0.1-2.2 0.9-9.2-0.5-2.4-0.1-1.1 0.2-1.8 3.5-12.2 0.5-11 2.2-3.7 0.6-1.5 1-5.1 0.4-1.3 6.2-14.9-5.7-23.2-0.3-1.8 0-3.1 0-0.8 0.9-2.9 0.4-0.8 3.1-4.5 0.4-1.5-0.5-1.9 0-1.9 0.3-0.5 0.4-0.3 0.9-0.3 0.7-0.4 1.4-1.4 1.7-1.3 1.8-0.8 2.5-0.3 1.8-0.6 8.4-0.7 1.4-0.3 15.4-8.8 6.4-6.8 2.8-3.9 0.7-1.1-0.6-1.8-1.8-3.4-6.9-9.2-0.8-1.7-0.5-1.6-0.1-1.7 0.3-1.8 0.4-1.5 0.1-0.7 0-0.8-0.9-1.2-0.5-0.6-0.3 0.1-0.3-1.8-1-2-1.2-1.7-1.4-1.2-2.2-0.6-2.5 0.2-6.3 2.1-1.9 0-0.4-0.6-0.4-0.1-0.6 0.4-1.6 0.5-2-0.7-4.9-2.8-1.3-1-1.4-0.8-3.6-0.7-1.4-0.9-1.2-1.1-4-2.8-0.9-1-1.8-2.8-2.2-1.6-1.2-1.1-0.5-1.1-0.3-2.3-0.4-1.1-0.4-0.7-0.6-0.5-2.6-1.7-1.3-2.3-1.5-4.2 0.1-0.9 0.3-0.7 1.4-2.4 2-3.4 0.6-0.6 1.1-0.9 0.3-1-0.3-1.3-0.2-1.1-0.3-1-0.4-0.9-1.3-1.2-0.4-0.7-0.2-1 0.1-0.7 0.3-0.7 3-2.6 1.3-0.9 1-1.2 0.9-1.4 0.3-1 0.1-0.9-0.4-1.4-0.3-0.4-0.8-0.5-0.9-0.3-0.5 0-3.6 0.9-1.6 0.6-8.9 4.5-0.8 0.1-1-0.4-0.4-1 0.2-0.5 0.5-0.9 0.3-0.4 1.9-1.7 0.7-0.7 0.4-1.2-1.7-9.4-0.2-3.6 0.5-4.1 0-0.9-0.3-0.7-0.9-0.6-1.7-0.8-1.2-0.9-0.7-0.9-0.4-1 0-0.8-0.5-3.1 0.2-0.8 0.7-0.6 0.9-0.2 0.3 0.1 0.4 1 0.6 0.5 1 0.1 1.3 0.7 0.5 0.1 2.4-0.1 1.1 0.3 0.6 0.6 0.6 1.3 0.9 0.6 0.9-0.2 2.3-1.1 0.9-0.2 1.1 0.5 6.2 2.1 1.9 0.8 1.2 0.2 2.7-0.6z"
        },
        {
          name: "Beni",
          d: "M661.4 320.8l-0.1 0.1-43.7 25.4-72.3 41.9-45.7 26.4-28.2 8.3-3.9 1.8 1.9 8 0.1 9.8 0.4 4.4-0.1 2.4-0.3 1.6-0.5 1.2-0.4 2.1 0.9 4 0.6 1.4 2.6 4.1 3 8.5 8.6 13.4 0.8 0.8 0.8 0.6 2 0.7 1.1 0.7 1 1.4 0.5 1.1 0.4 4.1 0.6 1.2 3.8 4 0.9 0.6 0.9 0.2 1 0 0.8 0.5 2.5 2.1 0.9 0.5 2.6 1.2 0.6 0.4 0.7 0.7 0.9 1.1 1 2.1 1.7 2.2 0.4 0.8 0.2 0.9 0.1 2.1 0.2 1.3 0.4 1.6 0.8 1.1 2.1 2.4 0.8 0.6 1 0.4 2.9 0.8 1.6 0.7-0.2 0.3-1.7 0-107.7-5.7-1 0-1.2-0.6-8 1.7-31.2 3.8-2.5 1.7-3.9 6.8-2.5 5.5-0.3 1.2 0 2.6-4.5 13.8-1.2 2.4-1.1 1.5-7.9 3.8-28.5 8.3-2.6 0.2-4.1-0.2-8.6-1.8-6.4-2.1-4.1-2-8-5.4-1.8-1.4-13.4-14.5-4.7-6.2-0.4-0.9-1-2.5-1.2-3.7-0.9-1.6-23-23.2-3.3-3.4-16.4-15.5-1.7-3.1-1.3-1.1-1.7-0.8-1.1-0.6-0.9-0.9-0.6-1-0.3-0.9-0.1-0.9 0-0.8 0.6-3.6 0-1-0.2-1.2-5.2-10.6-2.2-3.3-2-2.3-1.1-1-0.7-1.2-1.5-3.1-0.9-1.1-0.9-0.7-1-0.2-1 0.1-1.9 0.2-1.1-0.1-0.9-0.3-0.7-0.4-1.2-1-1.2-0.7-1.2-1.5-1.1-3.1-0.2-1.8-0.1-1.3 0.3-1.8 0.4-1.7 0.3-3.2-0.1-3.5-0.4-1.8-0.7-1.4-3.9-3.6-1.6-2.2-2.2-5.3-0.4-0.7 0.7-1.5 0.5-0.6 1.3-1.2 0.6-0.7 0.7-1.7 0.1-1.6-0.5-1.6-1-1.6-1.8-1.8-0.3-0.8-0.1-1.6-0.1-0.5-1-1.1-1.1-3.1-0.5-1.6-0.2-1.6 0.3-1.6 1-0.8 2.6-1.2 1.1-1.1 0.3-1.4-0.1-1.4-0.8-2.8 0.3-5.1-0.9-6.5-0.1-1-1-3.8 0-1.4 2.2-9.9 0.6-1.3 0.8-1.1 0.7-1.3 0.3-1.7-1.2-2.2 0.1-1.6 1-3.4 0.7-1.7 1.1-1.1 1.3-0.8 1-1.1 1.6-2.7 3.4-4.4 0.7-1.4 0-1.7-1.4-2.2-1.4-7.6 0-3 1.2-2.8 3.6-5.4 1.2-1.4 2.8-2.2 6.7-7.9 0.3-0.8 0.3-1.6 0.4-0.8 0.6-0.6 1.5-0.7 0.7-0.6 3.2-5.9 1.4-1.3 1.6-0.3 1.4 0.2 1.1-0.4 4-9.6 4.5-19.3 0.2-2.2-0.4-1.7-1.3-3.6 2.2-3 1-1.7 0.1-1.4-0.7-1.3-0.1-1-0.1-5.2 0.2-1.6 0.6-1.5 1.2-1.8 0.7-1.6-0.3-1.4-0.6-1.4-0.3-1.7 0.6-1.8 1.1-1.8 0.8-1.9-0.2-2-0.6-2.1 0.1-1.8 1.3-3.8 0.3-3.5-0.4-4.2-1.2-4.1-1.7-3.1-1.2-1.4-0.5-0.5-1.3 0.6-0.5-0.2-0.7-1.4-0.4-2.1 0.3-1.7 1.4-0.3 1.5 0.2 1.5-0.5 1.3-0.8 1-1.1 1-1.9-0.4-1.2-1-0.9-0.9-1.4 0-1.6 1.1-0.7 1.6 0 1.4 0.2 1.6-0.1 1-1 1-1.4 1.1-1.1 1.4-0.4 2.8 0 1.4-0.5 1.1-1.6 0.1-2-0.6-4.1 0.5-1.5 2-2.3 0.3-1.6-0.3-2.1 0.1-2 0.9-1.7 1.8-0.7 7.5-0.5 5.6 0.6 2.1-0.7 4.4-2.7 5.7-0.6 2.5-0.7 0.4-1.7 0.2-1.7 4.5-1.1 0.9-1.6-0.5-1.1-0.9-0.8-0.6-1 0.3-2 0.7-1.3 3-3.8 0.6-1.5-0.1-1.4-0.6-3.1 0.2-1.9 1-0.3 1.5 0.4 1.3 0.1 2-1.6 0.4-2.8 0-3 0.9-2.5 0.8-1.1 1.2 0.8 1.3-0.7 1-1.5 1-3.4 1-1.9 0.7-1.7-0.6-1.3-0.9-0.2-1.7 0.7-0.8 0-0.6-0.3-0.5-0.6 0-0.5 2.6-0.9 3.4-2.7 1.9-0.7 3.1 0.5 3.5 1.2 2.9 0.1 1.1-2.3-0.4-1.6-1-1.5-1.3-1.1-1.5-0.4-0.8-0.7 0.6-1.6 1.1-1.5 1-0.7 0.9 0.5 1.2 1.1 0.9 1.2 0.4 0.9 1 0.4 2.2-0.5 3.5-1.4 1.9-1.4 0.8-1.4 0.1-1.6 0-2.1-0.4-1.8-0.6-1.8 0.2-1.3 1.9-0.6 1.7 0.3 1.8 0.7 1.8 0.2 1.8-0.9 1.6-1.5 1.6-1.1 7.1-3.5 0.6-0.7 0.5-1.7 1.3-1.8 1.5-1.6 1.1-0.9 1.4-0.5 4.3-0.7 0.2 0.7 0.4 0.5-1.9 3.6-1.2 1.1-2 0.4 0 0.6 1 1.5 0.2 0.5-0.5 1.2-0.1 0.5 0.3 1.6 0.3 0.7 0.3 0.3 0.2 0.9-0.5 4.1 0 1.3 1.4 1.5 1.4 0.9 1.2 1.2 0.4 2.4-0.1 1.4-0.6 3.2-1.2 3.8 0.4 1.1 3.2 0.9 1.5 1 1.3 1.3 0.6 1.2 0.5 7.2 0.2 0.4 0.9 1.1 0 1-0.3 0.8-1.9 1.5-1.3 2 0 1.5 0.4 1.4 0.3 1.7-0.6 1.5-3.1 2.5-1.3 1.4-0.3 2.1 1.1 1.3 1.4 1 0.7 1.1-0.5 1.3-1.1 0.6-0.8 1 0.1 2 1.1 1.5 1.7 1.3 1.5 0.8 0.7 0.6-0.3 1-1.4 1.7-0.5 1-0.1 0.8 0.1 0.7 2.8 7.2 2.2 2.4 2.8-0.8 2 1.1 0.9 0.7 0.5 1.1 0 0.8-0.6 1.5 0 1.1 0.4 1.1 0.4 0.3 0.5 0 1 0.4 1.8 1.2 0.5 0.7-1.9 0.7-0.2 0.7 0.3 2.1-0.1 0.8-0.8 1.3-0.1 0.8 0 3 0.5 1.2 1.1 1.2 1.5 1.1 1 0.3 0.7-0.8 0.4-4 0.3-1.1 0.6-0.7 1.1-0.3 0.3 0.8-0.3 1.9 1.2 1.1 1.5 0.6 1.2 0.8 0.8 2.7 1.1 1.9 0.4 0.9 0 0.8-0.1 1.7 0.1 0.8 0.4 1.8 0.4 0.8 1.9 0.8 0.6 0.8 0.1 1.1-0.4 0.8-1.1 1.6-0.1 1.5 0.5 1.4 1 1 1.2 0.6 1.3 0.3 3.4 0.2 1.7 0.3 1.7 0.7 1.8 0.2 1.8-0.6 1 0.4 1.5 0.3 1.4 0.6 0.6 1.2 0.4 1.7 0.9 1.6 2.6 2.8-0.6 1.2 0.4 0.9 0.9 0.4 1-0.3 0.2-0.6 0.3-2.3 0.3-0.5 1.4-0.1 0.3 0.5 0.4 1.4 0 0.7-0.6 1-0.1 0.5 0.3 0.5 0.9 1 0.8 0.8 2 1.2 3.9 1.7 1 0.2 2.1 0 0.5 0.1 1.4 1.1 1.7 0.9 0.2-0.6 1.6 0.3 1.3 1.2 0.3 0.6 0.1 1-0.1 1.9-0.4 1.8-1.5 3.3 0.2 1.5 0.5 0.3 1.8 0.6 0.8 0.5 0.7 0.7 0.9 1.8 0.7 0.9 1.1 1.1 1.2 1.1 1.6 0.7 1.9 0.3 3.3-0.7 1.3 0.4 0.8 2.6 0.7 0.2 0.8-0.2 1-0.5 0.9-1 0.8-0.3 1.7-0.2 1.4 0.5 1.2 0.7 2.3 2.5 0.9 0.3 0.8-0.8 1.2-1.8 1.3 1.4 4.9 0.2 1.7 2.4 1.6-0.2 2.6-1 1 0.4 0.8 0.7 0.9 0.6 1.4 0.1 1-0.9 1-1.5 2.8-3.5 0-0.4 1.4-0.2 2.5-0.8 1.2-0.2 11.7 1.7 0.2 0.2 4.5 2.4 3.4 2.8 1.4 0.7 1.8 0.2 1 0.1 0.9 0.1 0.9 0.4 0.8 0.6 0.6 0.9 0.2 1.6 0.3 0.9 0.6 0.5 0.8 0.3 0.6 0.3 0.2 1 0.3 0.5 3.1 2.3 1.8 0.5 1 0.4 2.4 1.9 1 0.4 5.8-0.1 0.9-0.2 0.3-0.6 0.8-0.7 1.7-1.3 0.4-0.1 1.3 0.1 0.4-0.3 0.4-1 0.3-0.4 2.3-1 0.2-0.1 1 0.1 1.6 0.8 2.5 0.6 0.8 1.2 0.6 3 0.3 0.5 0.6 0.5 0.2 0.4-0.6 1 0 1 0.3 0.3 1.8 1.6 0.9 1 0.4 0.9 0.2 1.8 0.7 1.7 0.9 1.2 1 0.7 0.9 0.4 0.8 0 0.7-0.2 0.7-0.4 0.7-0.3 0.4 0.5 0.3 0.8 4.3 5.6 0.2 0.6 0.4 0.4 1.8 0.2 0.6 0.2 0.4 0.4 0.1 0.7 0.4 1.4 1.1 1.2 1.4 1 1.6 0.8 0.1-1.7 0.9-0.4 1.4 0 1.5-0.3 1.1-0.6 0.8-0.7 1-0.1 1.6 0.9 0.8 0.7 0.5 0.7 0.3 0.7 0.2 2 0.3 0.4 7.1 3.1 5.1-0.1 1.7 0.3 1.1 0.8 2.3 2.6 0.2 1.3 0.3 0.1 1.4 0 1.4 0.9 0.7 0.3 3.8 0.4 1.1-0.1 0.9-0.8 1.7 0.6 1.3-0.3 1.2-0.6 3.1-0.8 0.8-0.1 0.9 0.2 2.2 1.5 0.1-1.9 0.8 0.2 1.9 2.3 0.8 0.3 0.7-0.2 0.5 0.1 0.2 1.2 0 5.7 0.3 1.4 0.8 1.2 1.7 1.3 3.7 4 1.1 0.6 0.1 0.3 1.2 2 0.5 0.3 1.8 0.9 1.4 0.9 4 3.9 0.8 0.6 1.6 0.9 0.6 0.6 0.3 0.6 1.7 5.6 1 0.9 1.8 0.3 1.6-0.4 1.7-0.5 1.6-0.3 1.6 0.6 1.6-0.9 1.8-0.7 2.1-0.5 5.8-0.5 0.3 0z"
        },
        {
          name: "La Paz",
          d: "M58.6 550.7l-1.6-0.9-2.3 0.7-2.7-0.8-0.9-0.1-0.9 0.3-1.5 1.3-1 0.4-1.3 0 0.7-1.2 0.2-1.2-1-0.6-1.8-0.2 0.3-0.6 2.3-1.5 0.9-1.1 0.2-1.1 0.1-1 0.5-0.9-0.5-1.1-3.2-2.5-1-1.5 1.6-0.7 0.1 0.2 1.9 1.5 2.8 1.2 3.7 2.1 1.7 1.6 0.8 1.9 0.6 1.1 1.4 0.7 3 0.8 5.2 4.5 1.2 0.7 0.3 0.3-0.5 0.6-0.8 0.6-1 0.3-1-0.1-0.5-0.2-0.2-0.4-3.1-2.9-1.7-1.2-0.8 0.4-0.2 0.6z m166.4-324.3l-0.6 1.5-0.2 1.6 0.1 5.2 0.1 1 0.7 1.3-0.1 1.4-1 1.7-2.2 3 1.3 3.6 0.4 1.7-0.2 2.2-4.5 19.3-4 9.6-1.1 0.4-1.4-0.2-1.6 0.3-1.4 1.3-3.2 5.9-0.7 0.6-1.5 0.7-0.6 0.6-0.4 0.8-0.3 1.6-0.3 0.8-6.7 7.9-2.8 2.2-1.2 1.4-3.6 5.4-1.2 2.8 0 3 1.4 7.6 1.4 2.2 0 1.7-0.7 1.4-3.4 4.4-1.6 2.7-1 1.1-1.3 0.8-1.1 1.1-0.7 1.7-1 3.4-0.1 1.6 1.2 2.2-0.3 1.7-0.7 1.3-0.8 1.1-0.6 1.3-2.2 9.9 0 1.4 1 3.8 0.1 1 0.9 6.5-0.3 5.1 0.8 2.8 0.1 1.4-0.3 1.4-1.1 1.1-2.6 1.2-1 0.8-0.3 1.6 0.2 1.6 0.5 1.6 1.1 3.1 1 1.1 0.1 0.5 0.1 1.6 0.3 0.8 1.8 1.8 1 1.6 0.5 1.6-0.1 1.6-0.7 1.7-0.6 0.7-1.3 1.2-0.5 0.6-0.7 1.5 0.4 0.7 2.2 5.3 1.6 2.2 3.9 3.6 0.7 1.4 0.4 1.8 0.1 3.5-0.3 3.2-0.4 1.7-0.3 1.8 0.1 1.3 0.2 1.8 1.1 3.1 1.2 1.5 1.2 0.7 1.2 1 0.7 0.4 0.9 0.3 1.1 0.1 1.9-0.2 1-0.1 1 0.2 0.9 0.7 0.9 1.1 1.5 3.1 0.7 1.2 1.1 1 2 2.3 2.2 3.3 5.2 10.6 0.2 1.2 0 1-0.6 3.6 0 0.8 0.1 0.9 0.3 0.9 0.6 1 0.9 0.9 1.1 0.6 1.7 0.8 1.3 1.1 1.7 3.1 16.4 15.5 3.3 3.4-6.8 5.8-2.9 3.8-2.5 2.7 0.2 0.3 1 0.8 0.1 0.6-0.2 1.3-0.4 0.9-0.7 0.8-0.6 1.1-0.2 1 0 1 0.3 2 0 2.1-0.8 6.3 0.1 0.8 0.3 0.7 1.4 1.9 1.3 2.2 2.4 2.6 0.9 1.4 0.2 1.9-0.2 1.3 0.1 0.6 2.6 0.9 0.3 0.3 0.7 1.1 1.7 2.3 0.5 1.2-0.4 10.6-1.1 4.3 0.1 2.1 1 2.3 2.4 4.4 0.8 2.4-0.1 6.5 0 1.1 0.6 4 0.1 1.4-0.3 1.4-1.1 1.7-1.9 1.5-2.1 1.2-2 0.6-4.9 0.7-1.9 0.9-1.7 2.4-1.5 2.9-0.6 1.5-0.2 1.8 0.3 1.6-0.1 0.8-0.3 1-1.4 1.9-0.4 0.7-0.7 1.8-0.2 1.7 0.4 1.6 1.2 1.2 3.8 1.5 0.9 1.4 1.2 1.3 1.1 1.6 0.5 1.1 0.5 1.3 1.2 6.2-0.2 2.7 0 1.1 0.4 0.9 0.6 1.1 0.6 0.8 1.2 4.6-1.6 3.2 0.4 0.9 0.5 0.9 0.7 0.8 0.5 0.8 0.2 1.1-0.6 0.8-0.9 0.7-10.6 5.7-1.9-1.8-0.2-0.4-2-2.3-1.4-2-1-2.3-1.1-1.7-0.7-0.7-1.2-1-1.1-0.5-1-0.2-1.5 0-10.7 3.1-1.7 0.7-9.7 5.7-10 7.2-1.9 1.5-13.6 8.6-1.5 1.1-0.3 0.5-0.1 0.6 0.1 1.2 0.5 1.3 0.7 1.3 0.5 1.2 0.1 0.9 0 0.6-0.5 1.5-0.4 0.8-0.6 0.7-1.7 1.1-1.2 0.2-1-0.1-0.9-0.3-16.1-12.2-1.8-0.8-2.7-1-6.5-3.3-2.4-0.7-12.8-0.6-9.8 0.8-2.7 0.7-5.1 2.4-0.8 0.5-4.6 3.9-7.2 9.2-2.9 2.7-7 5.3-4.2 2.3-10.7 2.9-6 3-0.8 0.3-0.8-1.3-1 0-1.3 0.5-1.7 0.1-1.4-0.4-1.3-0.6-2.5-1.6-1.9-0.4-0.6-0.3-0.6-0.5-1.6-2-1.3 0.4-1 0.7-1 0-1.3-2.1-0.7-3.2-0.1-6.3-0.5-3.1-2.1-3.9-2.9-3.3-6.6-5.9-1.7-2.7-0.8-3.1-0.3-6.9 0.1-6.1-0.2-3-0.9-2.6-1.2-1.5-1.6-1.7-3.3-2.6-1.3-0.5-4.4-0.6 1.4-2.2 1.3-4.7 0.9-1.9 2.2-0.5 4.5-4.1 2.5-1.7 2.2-0.9 2.4-0.4 2.2-0.8 1.7-2.1 0.4-1.3-0.4-0.6-0.6-0.2-0.3-0.5 0.3-0.9 0.5-0.5 3.5-2.1 1-1.2 2.2-4.7 8.3-8.9 1.1-1.8 1.5-4.7 0.8-1.2 1.3-0.8 2.9-0.3 1.6-0.4 4.7-2.4 1.4-1.1 2.3-3.1-2.2-3-0.4-1.5 0.2-2.5 0.4 0.1 2.2 0.6 1.4 0.9 2.4 1.2 5.5 0.5 2.4 0.9 0.6-2.1 0.2-3.8-0.2-3.6-0.9-1.6-3-0.3-3.1-0.8-1.2-1.2 2.6-1.8 3-0.8 2.9-0.5 1.6 0.2 2.6 0.9 1.4 0.2 1.6-0.6 1.2-1.4 1-1.5 0.9-1.2 0.5-0.2 1.8-0.4 1.6-1.1-0.7-0.7-0.7-0.2-0.7 0.2-0.7 0.7-1.6-1.2 0-0.6 3.3-1.2 1.2-0.1 3.2 1.6 1 0.1 3.6-0.4-1.1-1.1-0.4-0.7-0.2-0.8 0.2-1.1 0.9-0.2 0.6-0.7 0.4-1.7-0.2-0.9-1.9-1-0.5-0.5-0.7-1-0.7-0.2-0.9 0.1-2.2 0.5-2.5 0-1.5-0.2-1.6-0.4-4.1-2.2-1.5-0.1-1.2 0.9-0.9 1.4-0.9 0.8-1-0.8-0.1-0.8 0.1-1.7-0.2-0.7-1.1-1.6-3.7-7.5 1.3-0.4 3.1-0.2 0.6-0.2 0.4-1.3 0.8-1.3 1.1-1.1 1.1-0.7 1.9-0.4 1-0.5 0.5-0.6-0.3-0.9-1.1-1.5-0.2-0.5-0.9-0.6-5.4-0.3-2.5-1-1.1-0.2-0.8 0.3-0.6 0.6-0.6 0.4-2.3-1-3.9-0.2-1-0.6 0-0.7 0.9-2.2 0.2-0.9-0.1-1-0.4-1.7-0.1-0.8-0.4-1.9-1-1.2-2.5-1.9-1.4-1.7-0.9-1.5-1.2-1-1.8-0.4-1.6-0.1-1.5-0.4-1.3-0.5-1-0.8 0.6-1.1 1.4 0.3 0.8-0.6 0-1-0.8-0.5-3.1-0.1-2.3 0.3-3-0.2-1.1-3-0.6-0.5-0.8-0.5 0-1.2 0.4-1.4 0.1-1 0.3-0.5-0.2-0.4-1.4-0.3-1.2-0.4-1.1-1.7-2.5-1.8 1.1-1.5 0.4-1.7 0.2-1.7 0.4-1.7 1.1-1.5 0.8-0.5 2.3-0.7 0.5-0.4 0.1-0.7-1-2.6 0.5-1.3 1.3-1.8 1.6-1.4 2.7-1 1.1-3.2 1.6-0.1 1.9 0.1 1.3-1 0.2-1.6-1.9-1.9-2.1-2.9-1.3-1.3-4.8-3.7-1.4-1.3-4.7-7.3-3.1-2.9-0.5-1.5 0.3-1.6 1.4-3.1 0.1-0.7-0.3-6.9 0.1-1.5 0.8-1.1 1.8-1.2 4.5-1.2 1.3-0.8 1.2-2.4 0.5-10.9 1-1.6 1.6-0.2 1.9 0.4 1.8 0.1 0.5-1-0.3-3.9 0.3-1.4 0.5-0.4 1.4-0.4 0.6-0.3 3.2-3.7 1.6-1.2 5.3-3 1.6-1.5-0.3-1.7-1.2-1.7-0.6-1.5-0.1-3.3 0.1-1.6 0.5-1.5 2.1-1.5 2.7-0.7 5.5-0.7 1.6-1.7-0.4-2.9-2-5.7-0.5-2.9-0.5-1.3-0.8-1.2-4.4-2.9-1.1-1.6-0.5-2.7 0-3-0.3-2.9-1.4-2.1-1.1-3.3-0.1-1.1 0.3-1.4 0.4-1 0-0.9-0.9-1.3-4.4-3.6-1.7-2.4 1.2-1.9 1-0.1 2.5 0.4 0.9-0.2 0.8-0.9 0-1-0.2-1 0.2-1.2 0.7-1 1.7-1.8 0.7-1.1 0.7-2 0.5-2.1-0.3-1.9 1-16.5-1.2-6.6-0.2-3.4 0.6-9.9-1.2-9.5 0-3.6 0.5-1.9 2.6-2 0.8-2 1-1.6 1.8 0.2 1.1-2.3 1.2-1.8 1.7-1.1 6.7-1.9 0.6-0.7 1.9-3.8-0.8-0.9-2.6-0.7-0.8-0.8 0.1-1.4 0.8-1.2 1.1-0.9 2.5-1.4 1.1-1 1-1.3 0.6-1.2 0.5-1.7 0.5-0.8 0.8-0.3-0.4-0.8 0.9 0.1 2.7 0.2 0.8-0.2 0.5-0.3 1-1.1 0.4-0.2 1.6-4.6 0.9-1.2 2-0.3 1.4 0.6 1.2 1 1.3 0.5 1.7-0.3 1-0.6 1.5-2.5 3.8-9.6 1.8-2.5 9.7-5.2 2.1-2.3 0.6-2.8 0.6-6 1.3-2.4 2.5-1.2 6.2-0.8 2.2-1.1 1.7 0.1 2-0.4 2-0.7 1.4-1 1.1-1.9 0.7-2.2 0-0.4 1.5 0.4 84 39.6z"
        },
        {
          name: "Oruro",
          d: "M219.9 664.5l13.4 10.3 1.5 1.4 4.2 5.4 6.2 9.7 4.6 11-0.7 1.7-0.8 0.7-0.9 0.7-1 0.5-5.6 1.8-0.6 1.4-0.5 8 0.1 1.9 0.4 1.1 0.5 0.9 0.6 0.7 0.8 0.6 2.8 1.2 1 0.2 1 0 2.2-0.4 2.1-0.1 0.9 0.2 1.7 0.7 0.8 0.2 1.8-0.1 1.8 0.6-1.8 2.1-2.4 1.6-3.7 1.8-2 1.3-1.8 0.9-0.9 0.8-0.3 0.6 0 0.5 0.1 2.8 0 1.5-0.2 1-0.8 3.9 0 0.9 0 1.1 0.2 0.5 1 1.6 2.9 6.3 0.6 1 0.5 0.6 0.9 0.7 6.9 5.5 2.4 1.5 7.2 2.6 5.2 0.5 4.2 1.7 1.2 1 1 1 0.4 0.9 3.7 11.5 0.2 0.5 3.1 6 4.1 5.5 6 7.1 1.5 2.7-0.1 0.9-0.4 0.7-0.8 0.7-0.9 0.4-2.4 0.5-10 0.8-17.3 1.2-1.9 0.8-3.4 1.9-9.9 9-5.9 4.6-3.2 1.8-17.1 7.8-24.9 10.8-25.4 11-11.1 3.8-4.3-0.1-7.5-1.4-37.4-12.6-23.2-8.4-0.4-0.2 3.7-5.5 1.8-2.6 1.1-1.1 3.3-1.5 0.7-0.6-0.6-1.6-1.4-1.8-1.7-1.6-8.8-6.4-2.9-1.1-2.2-1.4-2.9-5.1-1.9-2-7.7-6.8-2.6-1.9-3.9-1.3-1.1-0.8-0.9-1.2-1.9-4.5-1.5-2.8-1.1-1.1-1.2-0.9 2.4-3.3 0.7-1.6 0-1.9-0.3-0.9-4.5-9.7 0-0.2 0.6-1.1 0.1-1.2-0.2-1.2-0.5-1.1-2-3.5-0.7-4.2 0.1-4.4 0.6-4.2 0-1.9-0.6-1.8-2.9-5.1-0.4-1.4 0.2-4.7-0.1-0.8-1.2-3.6-0.1-1.7-0.3-2-0.8-1.4-2.5-2.7-1.2-4 2.4-2.5 3-2.4 0.6-3.7 0-0.1 0.8-0.3 6-3 10.7-2.9 4.2-2.3 7-5.3 2.9-2.7 7.2-9.2 4.6-3.9 0.8-0.5 5.1-2.4 2.7-0.7 9.8-0.8 12.8 0.6 2.4 0.7 6.5 3.3 2.7 1 1.8 0.8 16.1 12.2 0.9 0.3 1 0.1 1.2-0.2 1.7-1.1 0.6-0.7 0.4-0.8 0.5-1.5 0-0.6-0.1-0.9-0.5-1.2-0.7-1.3-0.5-1.3-0.1-1.2 0.1-0.6 0.3-0.5 1.5-1.1 13.6-8.6 1.9-1.5 10-7.2 9.7-5.7 1.7-0.7 10.7-3.1 1.5 0 1 0.2 1.1 0.5 1.2 1 0.7 0.7 1.1 1.7 1 2.3 1.4 2 2 2.3 0.2 0.4 1.9 1.8z"
        },
        {
          name: "Pando",
          d: "M350.4 60.2l-4.3 0.7-1.4 0.5-1.1 0.9-1.5 1.6-1.3 1.8-0.5 1.7-0.6 0.7-7.1 3.5-1.6 1.1-1.6 1.5-1.8 0.9-1.8-0.2-1.8-0.7-1.7-0.3-1.9 0.6-0.2 1.3 0.6 1.8 0.4 1.8 0 2.1-0.1 1.6-0.8 1.4-1.9 1.4-3.5 1.4-2.2 0.5-1-0.4-0.4-0.9-0.9-1.2-1.2-1.1-0.9-0.5-1 0.7-1.1 1.5-0.6 1.6 0.8 0.7 1.5 0.4 1.3 1.1 1 1.5 0.4 1.6-1.1 2.3-2.9-0.1-3.5-1.2-3.1-0.5-1.9 0.7-3.4 2.7-2.6 0.9 0 0.5 0.5 0.6 0.6 0.3 0.8 0 1.7-0.7 0.9 0.2 0.6 1.3-0.7 1.7-1 1.9-1 3.4-1 1.5-1.3 0.7-1.2-0.8-0.8 1.1-0.9 2.5 0 3-0.4 2.8-2 1.6-1.3-0.1-1.5-0.4-1 0.3-0.2 1.9 0.6 3.1 0.1 1.4-0.6 1.5-3 3.8-0.7 1.3-0.3 2 0.6 1 0.9 0.8 0.5 1.1-0.9 1.6-4.5 1.1-0.2 1.7-0.4 1.7-2.5 0.7-5.7 0.6-4.4 2.7-2.1 0.7-5.6-0.6-7.5 0.5-1.8 0.7-0.9 1.7-0.1 2 0.3 2.1-0.3 1.6-2 2.3-0.5 1.5 0.6 4.1-0.1 2-1.1 1.6-1.4 0.5-2.8 0-1.4 0.4-1.1 1.1-1 1.4-1 1-1.6 0.1-1.4-0.2-1.6 0-1.1 0.7 0 1.6 0.9 1.4 1 0.9 0.4 1.2-1 1.9-1 1.1-1.3 0.8-1.5 0.5-1.5-0.2-1.4 0.3-0.3 1.7 0.4 2.1 0.7 1.4 0.5 0.2 1.3-0.6 0.5 0.5 1.2 1.4 1.7 3.1 1.2 4.1 0.4 4.2-0.3 3.5-1.3 3.8-0.1 1.8 0.6 2.1 0.2 2-0.8 1.9-1.1 1.8-0.6 1.8 0.3 1.7 0.6 1.4 0.3 1.4-0.7 1.6-1.2 1.8-84-39.6-1.5-0.4 0 0.4-0.7 2.2-1.1 1.9-1.4 1-2 0.7-2 0.4-1.7-0.1-2.2 1.1-6.2 0.8-2.5 1.2-1.3 2.4-0.6 6-0.6 2.8-2.1 2.3-9.7 5.2-1.8 2.5-3.8 9.6-1.5 2.5-1 0.6-1.7 0.3-1.3-0.5-1.2-1-1.4-0.6-2 0.3-0.9 1.2-1.6 4.6-0.4 0.2-1 1.1-0.5 0.3-0.8 0.2-2.7-0.2-0.9-0.1-2-3.6-17.1-30.4-17-30.2-25.6-45.4-10-17.7-0.9-1.5 6.1 0.2 3.2-0.3 5.5-1.4 2.7 0.4 2.8 0.8 2.9 0.5 4.6-0.2 6.5 0.8 3 0.7 2.8-0.3 1.3 0.2 6.1 2.7 0.3 0 3.1-0.1 3.8 1.1 2 0.2 2.1-0.5 2.2-0.8 2.2-0.5 2.5 0.7 1.3 0.7-1.3 2-0.9 2-0.5 2.1 0.3 3.5 0.3 0.7 0.6 0.5 1.5 0 11.6-2.4 2.3-1.1 4.3-3.1 3.5-1.2 1.3-0.2 1.4 0 1.4 0.2 1.2-0.3 2.6-2.5 1.5-0.7 3.8-0.4 1.4-0.6 1.7-1.2 1.6-1.6 1.4-1.8 1.1-1.8 2.1-4.9 1.2-1.6 4.6-4.9 2.8-5.5 1.2-1.3 1.9-1.4 2.5-1.2 1.4-0.4 1.4-0.2 2.3 0.4 9.8-0.5 1.2 0.2 1.1 0.3 1.6 0.9 3.2 2.6 1.6 0.6 2.8-0.7 1.3-2.4 0.8-3 0.9-2.5 0.9-0.9 2.5-2.1 1-1.3 1.6-2.5 0.9-1.1 1.3-1.2 1.6-0.5 2.9-1.4 3.4-1.1 1.6-1.1 1.5-1.3 1.1-1.6 0.4-0.9 0-0.7 0.2-0.6 0.9-0.8 0.7-0.2 3.7-0.1 0.9-0.1 0.9-0.3 0.6-0.5 0.1-0.8-0.5-1.9 0.2-0.7 1.2-0.6 1.8-0.3 3.4-0.1 1.5 0.2 3.2 0.9 1.4 0 1-0.6 0.6-0.9 0.5-1 0.6-0.7 0.8-0.3 1.7 0 0.9-0.2 3.8-2.1 13.2-13.7 10.8-8.3 1.5-0.8 6.7-2.6 0.8-0.5 0.4-0.7 0.5-1.8 0.5-0.7 0.9-0.3 9.7-1.6 5 0.3 1.6-0.2 1.6-0.5 3.4-2 1.4-0.5 8-1.2 1.5-0.6 2.5-1.6 1.4-0.6 4.5-0.5 1 0.8 0.4 0.1 0.5-0.3 0.5-1 0.4-0.3 1.2-0.2 1.4 0.5 2.2 1.2 1.1 0.3 1.6-0.4 3.6-2.2 1.5-0.5 1.5-0.1 1.1 0.1 3.4 0.8 1 0.1 0.9-0.6 1.4-1.4 0.5 1.3 0.5 0.7 0.4 0.3 0.8-0.1 0.3-0.8 0.1-1.5 0.6-1.6 0.5-0.4 0.5 1.1 0.4 1.4 0.4 0.5 0.8 0.3 3.1-1.3 1.2-0.1-0.3 1.9-0.3 1.1 0.4 0.2 1.3 0 1.5-0.4 0.5 0.3 1.1 1.2 2.5 1.6 1.2 0.6 1.4 0.3 1 0 0.4-0.4 0.2-0.5 0.5-0.9 0.1-0.8 0.6-0.6 1.3-0.3 0.9-1.1 0.8-1.2 0.4-0.8 0.3-1.2 0.5-0.8 3.8-3.1 1-1.3 0.8-0.1 2.2 0 1.5 0.6 2.2 2 1.2 2.5 0.2 0.3 1.1 3.7 0.8 0.9 1.1 1 1 1.1 0.4 1.3-0.3 1.9-1.8 3.4-0.7 1.8-0.2 3.4 0.3 3.4 0.7 3.2 1.5 4.3 0.3 1.7 0.2 3.6 0.2 0.9 0.8 1.9 0.2 0.9-0.3 0.8-1.4 2.1-0.8 4.1-1 1.9-3 1.5-1.2 1.6-0.9 1.9-0.4 1.5z"
        },
        {
          name: "Potosi",
          d: "M354.6 739.5l-2.7 0.6-1.2-0.2-1.9-0.8-6.2-2.1-1.1-0.5-0.9 0.2-2.3 1.1-0.9 0.2-0.9-0.6-0.6-1.3-0.6-0.6-1.1-0.3-2.4 0.1-0.5-0.1-1.3-0.7-1-0.1-0.6-0.5-0.4-1-0.3-0.1-0.9 0.2-0.7 0.6-0.2 0.8 0.5 3.1 0 0.8 0.4 1 0.7 0.9 1.2 0.9 1.7 0.8 0.9 0.6 0.3 0.7 0 0.9-0.5 4.1 0.2 3.6 1.7 9.4-0.4 1.2-0.7 0.7-1.9 1.7-0.3 0.4-0.5 0.9-0.2 0.5 0.4 1 1 0.4 0.8-0.1 8.9-4.5 1.6-0.6 3.6-0.9 0.5 0 0.9 0.3 0.8 0.5 0.3 0.4 0.4 1.4-0.1 0.9-0.3 1-0.9 1.4-1 1.2-1.3 0.9-3 2.6-0.3 0.7-0.1 0.7 0.2 1 0.4 0.7 1.3 1.2 0.4 0.9 0.3 1 0.2 1.1 0.3 1.3-0.3 1-1.1 0.9-0.6 0.6-2 3.4-1.4 2.4-0.3 0.7-0.1 0.9 1.5 4.2 1.3 2.3 2.6 1.7 0.6 0.5 0.4 0.7 0.4 1.1 0.3 2.3 0.5 1.1 1.2 1.1 2.2 1.6 1.8 2.8 0.9 1 4 2.8 1.2 1.1 1.4 0.9 3.6 0.7 1.4 0.8 1.3 1 4.9 2.8 2 0.7 1.6-0.5 0.6-0.4 0.4 0.1 0.4 0.6 1.9 0 6.3-2.1 2.5-0.2 2.2 0.6 1.4 1.2 1.2 1.7 1 2 0.3 1.8 0.3-0.1 0.5 0.6 0.9 1.2 0 0.8-0.1 0.7-0.4 1.5-0.3 1.8 0.1 1.7 0.5 1.6 0.8 1.7 6.9 9.2 1.8 3.4 0.6 1.8-0.7 1.1-2.8 3.9-6.4 6.8-15.4 8.8-1.4 0.3-8.4 0.7-1.8 0.6-2.5 0.3-1.8 0.8-1.7 1.3-1.4 1.4-0.7 0.4-0.9 0.3-0.4 0.3-0.3 0.5 0 1.9 0.5 1.9-0.4 1.5-3.1 4.5-0.4 0.8-0.9 2.9 0 0.8 0 3.1 0.3 1.8 5.7 23.2-6.2 14.9-0.4 1.3-1 5.1-0.6 1.5-2.2 3.7-0.5 11-3.5 12.2-0.2 1.8 0.1 1.1 0.5 2.4-0.9 9.2 0.1 2.2 0.1 0.5 1.4 3.3 11.5 12.5 6.8 5.1 0 2.8-0.3 1.9-1.4 3.8-1.1 2-1.1 1.2-0.3 0.3-0.5 1.4-0.2 2.6-0.2 0.7-1.3 1.4-0.5 1.4-0.8 4.1 0.9 0.4 1 1 0.9 1.3 0.9 0.8 0.6 0.7 1.3 2 2.1 4.1 1 1.4 0.9 0.9 0.9 2.7 2.1 10.5 0.2 0.2 0 0-1.5 0-21.8 0.3-4.3-0.5-5.7-0.8-0.7 0-0.8 0.8-0.6 0.3-11.4 1.3-2.5-0.8-2.4-1.7-10.5-12.5-1.8-1-7.5-1.3-0.4-0.5-1-4.3-2.5-2.7-3.6-1.8-6.9-2.3-1.4 0.5-3.9 14.5-0.8 8.3-0.4 1.3-0.5 1-0.5-0.1-1 0.2-0.7 0.4-0.6 0.7-0.6 0.9-0.3 0.8-2 1.6-10.8 3.1-9.6 2.7-0.3 0.4-0.4 1.2-0.5 0.1-1.3-0.4-1.6-0.2-0.9-0.3-0.9-0.1-1.1 0.5-1.9 1.6-1 1.8-0.6 2-1 6.6-0.6 2-1 1.3-0.3 0.8 0.5 2.5 0 0.9-0.9 0.7-9.2 2.9-2.2 1.1-1.7 1.8-0.7 1.2-1.1 0.7-1.3 0.3-1.8-0.1-1.4 0 0.7 8.3-0.2 1.9-0.9 1.4-6.1 4.9-2.5 2.9-4.1 7-25.9 5.7-3 0.6-5.7 0.4-12.7-0.8-2.6-0.9-0.6-0.6-1.8-2.8-0.4 0.1-3.2-0.7-0.8-1.3-0.4-2.3 0-6.8 2.7-13.2-0.1-1.8-2.5-4.9-0.7-4.4-0.7-1.9-3.1-5.9-0.5-1.7-0.1-1.8 1.4-5.5 0-1.7-0.8-2.2-2.3-3.3-0.3-0.9 0.3-0.9 1-1.5 0.3-0.8-0.3-1.9-0.9-2.1-1.5-1.9-1.6-1.1-4-3.9-2-1.8-0.7-1-0.4-1.3-0.9-14.5-1.7-6.8-5.1-9.4-0.6-3 0.4-21.4-1.2-3.9-17-28.5-1.3-1.3-1.8-0.4-3.5 0.1-1.1-0.1-3.7-2.3-1.4-3.6 0-11.4 0.6-2 1.2-1.8 5.6-4.9 0.1-1.6-2.4-2-2.2-0.9-3.8-2.5-8.4-4-1.8-1.4-1.8-1.9-1.7-2.4-1.2-2.7-0.3-2.7 0.9-2.2 1.9-1.5 4.6-1.7-3.2-5.8-1-2.9 0.1-3.4 0.5-2.5-0.3-0.9-2.7-0.6-2.5-1.5-0.2-1.7 1.4-1.5 10-3.1 2.5-0.2 1.2 0.2 0.9 0.2 0.7-0.1 0.7-0.9 0.4-0.8 0.7-3 0.1-1.7 1.7-4.1 0.2-1.2-0.1-0.6-0.3-0.5-0.4-1.2-0.1-2.6-0.1-0.6-0.6-1.2-0.8-0.6-2.5-1-1.4-1.1-2.6-2.7-3.9-3.1-0.6-1.1 0.2-1.6 1.1-1.7 3.4-3.1 1.4-1.6 4.4-6.7 0.4 0.2 23.2 8.4 37.4 12.6 7.5 1.4 4.3 0.1 11.1-3.8 25.4-11 24.9-10.8 17.1-7.8 3.2-1.8 5.9-4.6 9.9-9 3.4-1.9 1.9-0.8 17.3-1.2 10-0.8 2.4-0.5 0.9-0.4 0.8-0.7 0.4-0.7 0.1-0.9-1.5-2.7-6-7.1-4.1-5.5-3.1-6-0.2-0.5-3.7-11.5-0.4-0.9-1-1-1.2-1-4.2-1.7-5.2-0.5-7.2-2.6-2.4-1.5-6.9-5.5-0.9-0.7-0.5-0.6-0.6-1-2.9-6.3-1-1.6-0.2-0.5 0-1.1 0-0.9 0.8-3.9 0.2-1 0-1.5-0.1-2.8 0-0.5 0.3-0.6 0.9-0.8 1.8-0.9 2-1.3 3.7-1.8 2.4-1.6 1.8-2.1-1.8-0.6-1.8 0.1-0.8-0.2-1.7-0.7-0.9-0.2-2.1 0.1-2.2 0.4-1 0-1-0.2-2.8-1.2-0.8-0.6-0.6-0.7-0.5-0.9-0.4-1.1-0.1-1.9 0.5-8 0.6-1.4 5.6-1.8 1-0.5 0.9-0.7 0.8-0.7 0.7-1.7 5.6-1.1 1.8-0.1 1.4 0.2 3.2 0.4 4.9-0.2 4.2 0.7 0.9 0 0.8-0.1 0.9-0.5 4.7-3.9 1.8-1.4 6.6-4.7 1-0.4 2.2-0.5 3.3-0.2 2.8 0.3 1.8 0.4 1.7 0 0.4 1.7 1.1 2.1 1.2 1.9 0.9 0.8 0.9 0.2 0.8 0.6 0.6 0.8 0.5 2.1 0.7 0.3 5.5-1.4 1.7 0 1.5 2.2 4.9 2.8 5.1 4.4 0.6 1.5 1.5 1.2 2.9 1.8 1.9 2.4 1 1.5 0.9 2.5 1.2 1.2 1.5 1.1 1.3 0.7 3 2.4 3.5 6.2 2.5 2.7 0.5 0.1 1.2 0.3 0.9 0.4 0.8 0.9 2.8 1.6 0.8 0.2 0.3 0.3 0.3 0.8z"
        },
        {
          name: "Santa Cruz de la Sierra",
          d: "M610.9 917.3l-88 0.3-1.4-0.5-0.7-1.1-2.5-6.1-1.1-1.7-1-0.8-0.7 0.3-0.6 0.6-1 1.5-0.5 0.7-1.1 0.9-1.1 0.5-1.6 0.2-0.8 0.3-0.7 0.4-0.6 0.7-1.4 2.1-0.5 0.5-1.1 0.4-0.8 0-3.8-0.8-5.1-0.1-1.8-0.2-1.1-3.7-3.4-35.2-1.2-2.6-0.3-0.9-3.5-60.1 0.2-5.3 2-14.4-0.8-1.4-5.1 0.6-1.7-0.1-2.2-0.7-1 0-1 0.8-0.9 1.8-0.8 6.3-0.4 1.2-0.6 1-0.7 0.8-1.1 0.5-1.2 0.3-1.5 0.2-1.5-0.1-1.3-0.4-0.7-0.7-0.4-1-0.2-1-3.4-12-0.5-0.6-1.7-0.5-0.9-0.9-0.7-1-0.7-0.8-1.3-0.4-2.4-0.2-1.2-0.2-1-0.6-0.6-0.9-0.2-1.2-0.1-1.2-0.3-1.1-1.1-2-1.6-1.1-1.8-0.9-1.6-1.4-0.6-1-0.6-2.3-0.5-1.2-1.1-2.2-0.3-1.1 0-1.4 0.2-1.3 0-1.1-0.3-1.1-0.8-1.1-0.8-0.8 1.4-2.6 2.1-2.5 0.3-0.6 0-0.5-0.5-1.4-0.2-1.5 0.2-3.4-0.2-1.1-0.9-0.9-1.9-0.9-0.8-0.6-1.3-1.4-1.2-1-0.9-0.4-1.5-0.5-0.7-0.5-1-1.6-0.3-1.4 0.1-1.3-0.2-0.6-1-0.8-0.1-0.5 0.3-1.6 0-1-0.2-0.5-1.5-1.2-1.3-2.2-0.8-3.5-1.3-2.2-1.7-2.2-1.1-2.1-1.3-1.6-1-0.7-0.7-0.7-1.2-1.3-1.5-4.2-2.7-5.2-1.1-1.7-3.7-3.9-0.5-0.9-0.4-1.6 0.5-2.4 1.2-1.4 1.8-1.5 6.7-6.8 1.7-2.1 13-19.4 0.5-1.6-0.1-2 0-0.9 0.4-1 0.6-0.6 3.1-2.1 0.9-0.3 0.8-0.1 1.6 0.2 0.8 0 1.8-0.5 0.7 0 0.9 0.3 2.8-0.3 0.6-1.6 0.5-1.6-0.4-1.7-0.7-1.3-0.7-2.2-0.9-1.2-3.7-3.1-7-8-2.7-2.2-0.8-0.4-2.2-0.7-4.8-2.8-1.2-1-5.2-5.5-0.8-0.6-0.8-0.4-1.8-0.7-2-1-7.7-8.4-1.1-2-1.8-6.9-0.2-1.6-0.2-0.8-0.5-0.8-1.2-1.5-0.4-0.8 0.1-1 1-1.7 0.4-1.9 2.9-4.9 0.3-0.6-0.3-0.8-1.3-0.6-0.7-0.7-0.3-1.2 0.2-1.4 0.6-1.4 0.7-1.2 0.7-0.9 1.9-1.3 0.8-0.8 0.4-2.3 0.2-0.5 2.5-5.9 0.2-1.2-0.2-0.9-0.8-1-0.2-0.7 0.2-0.8 1.5-2.5-1.9-0.1 0.1-1 1.8-2.3 0.2-1.7-0.2-1.5-0.1-1.5 0.7-1.8-0.7-1.7 0.3-1.6 0.6-1.5 0.4-1.3-0.4-1.3-1.5-2.2-0.4-1.7 0-3 0.1-0.5 0.5-1.1 0-1-0.5-1.8-0.9-1.6-1.2-1.3-1.4-1.1 1.1-0.9 1.1-0.1 1.2 0.4 1.1 0.6 0.1-1.4-0.5-1-1.9-1.7 2.3 0 1-0.2 0.5-1.9 107.7 5.7 1.7 0 0.2-0.3-1.6-0.7-2.9-0.8-1-0.4-0.8-0.6-2.1-2.4-0.8-1.1-0.4-1.6-0.2-1.3-0.1-2.1-0.2-0.9-0.4-0.8-1.7-2.2-1-2.1-0.9-1.1-0.7-0.7-0.6-0.4-2.6-1.2-0.9-0.5-2.5-2.1-0.8-0.5-1 0-0.9-0.2-0.9-0.6-3.8-4-0.6-1.2-0.4-4.1-0.5-1.1-1-1.4-1.1-0.7-2-0.7-0.8-0.6-0.8-0.8-8.6-13.4-3-8.5-2.6-4.1-0.6-1.4-0.9-4 0.4-2.1 0.5-1.2 0.3-1.6 0.1-2.4-0.4-4.4-0.1-9.8-1.9-8 3.9-1.8 28.2-8.3 45.7-26.4 72.3-41.9 43.7-25.4 0.1-0.1 0.4 0.1 2.2 2.1 0.8 0.4 3.9 0.9 3.7-0.4 3.5-1.3 5.6-2.9 1.2 0.1 1.3 0.5 2.9 0.6 1.7 1 1 0.4 0.8 0 1.9-0.6 5.4 0.2 0.8-0.5 0.5-1.7 1.2-0.8 3.5-0.5 0.3-0.3 1-0.6 1-0.2 0.5 0.8 0 3.4 1.6 1.7 3.6 0.7 4 0.2 2.6 0.6 1.6 1.5 0.6 0.4 5.6 2.4 12.2 9.7 2.8 1.5 1.9 0.4 0.5 0.2 0.4 0.4 0.4 1 0.4 0.4 0.7 0.4 6.2 1.5 1.4 0.8 0.6 1.6 0.2 2.3 0.5 2.3 0.7 2.2 0.8 1.8 0.7 0.7 1.8 1.5 0.1 0.5-0.4 0.9 0.5 0.5 1.3 0.7 0.2 0.7 0 0.5-0.7 1.6-1.1 3.9-0.8 1.9-1.5 1.2-1.9 0.6-0.6 0.4-0.4 1.2-0.4 1.9-0.1 1.9 0.3 1.1 1.1 1.9 0 2.2-0.3 2.3 0.1 2.3 0.8 1.5 4.5 3.7 0.7 1.4 1.2 5.3 2.7 6 0.4 3.6-2.5 0.8 1.3 2.8 4 2.7 1 1.9 1.8 38.4-0.4 1-25.1 0.3 4.3 3.8 14.5 17.5 7.5 9 1.1 1.9 0.7 2.1 2.6 29.8 1 12.6 1.2 18.8 1.6 3.6 2.5 0.7 21.2 0.8 31.2 1.1 15.6 0.6 15.5 0.6 31.2 1.1 21.5 0.8 1.8-0.3 1.7-0.8 0.6-0.8 1.1-2.1 0.7-0.4 3.5 0.1 0.8 0.7 0.4 8.3-0.3 1.2-1.9 1.6-0.1 1.5 1.7 3.1-1.1 3.1-8.2 9.4-1.4 2.6-0.6 2.9 0.3 3.7 1.7 6.4 0.2 3.3-0.1 0.6-0.8 1.6-0.2 0.8 0.1 1 0.8 4.2 1.4 2.6 0.5 1.6 0.5 6 0.4 1.3 0.9 1.5 0.4 1.9 0.1 7.6 0.4 3.3 1.5 2.5 3.1 1.7 2.6 0.3 0.8 0.3 0.8 0.5 1.4 1.2 0.9 0.5 0.6 0.3 1.4 0.2 0.7 0.4 0.9 1.2 1.3 2.9 1.3 0.9 1.1 0.3 0.9 0.1 0.9 0.3 1.1 0.7 2.2 2.5 0.9 0.6 2.9 1.3 1 0.5 3.6 3 2.3 1 3.1 0.8 3.1 0.2 2.4-0.7 1.8-0.3 1.4 0.2 1.9 0.8 1.1 1.1 0.8 2 0.2 2.1-0.1 2 0.2 1.4-0.1 3.3 0.2 1.6 0.7 1.6 0.8 1.1 1 1 1.2 0.8 1.3 0.6-0.7 2.7 0.3 1 1.5 1.8 1.2 2.1-0.2 1.5-2.5 0.3 7.6 13.3 4.2 10.5 2.8 5.3 3.3 1.8 1.6 0 1.4 0.3 0.7 0.8-0.1 1.9-5.6 0.1-1.5 0.3-1.1 1-12.8 41.2-4.8 15.3 3.3 0.3 0.8 0.7 0.4 1.7 0.5 5.2 0.4 3.7-4.5 0.4-1.4 0.9-10.1 21.1-8.1 17.2-9.3 19.9 0.6 2.4 12.8 11.8 8.3 7.6-0.9 1.1-0.9 1.4-1.2 1.3-1.8 0.9-2.1-0.6-1.3-0.1-0.6 0.4-0.2 0.7-0.5 0.7-0.8 0.5-1 0.2-2 0.8-2.6 3.8-2.1 0.8-0.6 0.3-0.9 1.5-0.5 0.5-1 0.6-3.5 1.3-0.1-2.3 1.3-4.6 0.1-1.8-0.1-3.7 0.2-1.9-0.3-2.8-1.4-5-0.1-2.7 0.2-2.9-0.3-1.3-0.8-1-18.5-11.5-15.3-9.5-15.2-9.5-19.4-12.1-4.8-3.4-1.6-0.4-22.1 0.3-15.4 0.2-15.4 0.2-22.1 0.3-40 8.7-27.7 6-27.7 6.1-27.7 6-18.5 2.8-1.3 0.6-0.7 1-3.8 10.7-6.9 19.2-4.2 9-5.5 8.3-16.3 23.7z"
        },
        {
          name: "Tarija",
          d: "M605.9 963.6l-0.4 5.8-8.1 27.9-3 10.3-2.8 9.3-6.8 22.7-3.6 12-4.4 16.2-1.9 4.5-0.7-0.3-0.2-0.6-0.1-0.8-0.4-0.8-1-1.1-3.5-2.5-3.8-1.9-1.2-1.2-0.6-1.6 0-2.8-0.6-1 0.3-0.8 0-0.8-0.5-3.4-0.3-0.8-1.2-0.3-3.5-0.7-12.2 0.7-51.4-0.3-3.1 0.6-1.4 0.7-3.8 3.4-0.9-0.4-3.4-3-1.6-0.8-7.6-0.5-2.2 0.4-1.2 0.5-0.3 0.3 0 0.5-0.8 2-0.3 1.7-0.3 0.7-0.6 0.7-1.2 0.4-0.4 0.4-0.8 1.4-1.2 5-2.6 6.5-0.6 1-1.6 0.9-0.6 0.6-6.1 16-2 2.9-4.2 4-1.2 2.2-3.5 13.3-0.1 6.4-0.7 1.7-1.9 6.8 0.1 1.1-1.5-0.7-0.3-4.1-1-1.3 0.6-2.1-0.3-2.4-1.1-2-1.8-0.8-0.9-0.7-2.1-4.7-0.8-0.7-0.8-0.3-0.5-0.5-0.2-1.3 0.1-1 0.4-1.7 0-0.9 0.4-1 0.6-0.8 0.6-0.9 0.2-1.3-4.6-4.5-1.1-1.7-0.5-2-0.3-0.5-1.5-1-0.5-0.6 0.1-0.9 0.6-1.7-0.1-1-1.1-1-1.7-1.2-1.1-1.5 0.8-2.1 1.1-1.3 0.6-1.2-0.1-1.4-0.7-1.8-0.7-1.1-2.2-2.7-0.8-0.5-1.6-0.4-1.8-0.9-1.6-1.2-1.7-0.3-0.7-0.2-0.7 0.1-1.5 0.7-0.7 0.1-3.3-0.8-5.7-3.2-15.4-3.6-12.4 0.1-0.2-0.2-2.1-10.5-0.9-2.7-0.9-0.9-1-1.4-2.1-4.1-1.3-2-0.6-0.7-0.9-0.8-0.9-1.3-1-1-0.9-0.4 0.8-4.1 0.5-1.4 1.3-1.4 0.2-0.7 0.2-2.6 0.5-1.4 0.3-0.3 1.1-1.2 1.1-2 1.4-3.8 0.3-1.9 0-2.8 0.3-5.1 2.3-17.6-0.2-1.8 0-3.5 0.1-0.9 1.4-4.9 1.1-16 0.4-1.1 0.5-0.6 0.5-0.3 0.5 0 1.4 1 1.4 0.4 1 0 1.6-0.6 0.9 0.2 0.6 0.6 2.6 3.1 0.6 0.1 1.1-0.1 0.9 1 0.7-0.1 1.3-0.4 0.4 0.1 1 0.8 0.8 0.4 2 0 0.7 0.4 0.3 0.4 0.4 1.4 0.3 0.2 1 0.3 0.7 0.5 1 1.3 0.7 0.5 1.2 0.6 0.9 0.9 0.7 0.3 1-0.4 1.6-0.5 1.3-0.6 0.6-0.6 0.3-0.5 0.4-1.5 0.6-1.3 0.1-0.4 0-1.6 0.1-1.1 0.5-1.3 1.2-1.8 0.7-1.4 0.8-1.2 0.6-0.4 0.6-0.2 0.9 0.3 1.1 0.6 0.9 0.2 1.5 0.1 0.4 0.2 0.5 0.6 0.5 1.3 0.5 0.7 1.5 0.9 0.9 0.9 0.4 0.5 1.6 1.8 0.2 0.3 1.9 4.6 0.6 0.7 0.7 0.5 1.3 0 2.5-0.6 1.6-0.2 1.5 0.2 1.2 0.7 2.9 2.5 3 1.3 1.5 0.3 5-0.6 1 0.2 2.2 0.7 1.3-0.1 0.8-0.5 1-1.3 0.4-1.4 0.1-1.7 0-0.5-0.5-1.3 0.1-0.5 0.4-0.7 0.3-1.4 0.9-1.3 0.1-1-0.5-5.3 0.1-2.1 0.2-1.3 0.7-1.5 0.5 0.2 1 1.2 1.1 0.7 1-0.1 1.3-0.4 1.7 0 1.6 0.4 0.7 0.6 0.3 1.6 0.7 0.5 2.4 0 1.4-0.3 0.6 0.2-0.6 1-0.2 0.9 0.6 0.9 1.6 1.5 0 0.3 1.7 0 7.6 0.2 130.7 0.1z"
        }
      ]

      // agregar parametro d a cities, cuando los nombres de las ciudades sean iguales a los nombres de las ciudades en el svg
      const newCities = cities.map(city => {
        const matchingPath = paths.find(path => path.name === city.name);
        return matchingPath ? { ...city, d: matchingPath.d } : city;
      });
      setcities(newCities);
    }
    getCities();
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
      page: 1
    });
  }, []);

  useEffect(() => {
    if (filterBody === null) return;
    if (filterBody.selectedCity) {
      const city = cities.find((city: City) => city.id === filterBody.selectedCity);
      setZones(city?.zones ?? []);
    } else {
      setZones([]);
    }
  }, [filterBody?.selectedCity]);

  const handleCityClick = (city: any) => {
    if (!city) {
      const elements = document.querySelectorAll("path");
      elements.forEach((element) => {
        element.style.fill = "#1e3a58";
      });
    } else {
      const lastCity = document.getElementById(filterBody.selectedCity!);
      if (lastCity) {
        lastCity.style.fill = "#1e3a58";
      }
      const element = document.getElementById(city.id);
      if (element) {
        element.style.fill = "#ecc27d";
      }
      setFilterBody({ ...filterBody, selectedCity: city.id });
    }
  };


  const handleInputChange = (name: string, value: any) => {
    if (name === "selectedCity") {
      value = value ? value : null;
      handleCityClick(cities.find((city: City) => city.id === value));
    }
    setFilterBody({ ...filterBody, [name]: value });
  };


  const handleSubmit = (e: any) => {
    e.preventDefault();
    localStorage.setItem("filtro", JSON.stringify(filterBody));
    window.location.href = "/propiedades";
  }

  if (filterBody === null) return null;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
      {/* <BannerMap /> */}
      <div>
        <h2 id="city_name" className="font-semibold text-center">
          {filterBody.selectedCity ? cities.find((city: City) => city.id === filterBody.selectedCity).name : "Seleccione una ciudad"}
        </h2>
        <div className="flex items-center justify-center">
          <svg
            className="w-[250px] h-[250px] 2xl:w-[300px] 2xl:h-[300px]"
            baseProfile="tiny"
            fill="#1e3a58"
            stroke="#ffffff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="5"
            version="1.2"
            viewBox="0 0 1000 1132"
            xmlns="http://www.w3.org/2000/svg"
          >
            {cities.map((city) => (
              <path
                key={city.name}
                id={city.id}
                d={city.d}
                onClick={() => handleCityClick(city)}
              />
            ))}
            <circle cx="436" cy="710.7" id="0"></circle>
            <circle cx="357.7" cy="792.2" id="1"></circle>
            <circle cx="417.9" cy="872.4" id="2"></circle>
          </svg>
        </div>
      </div>

      <MultiSelect
        id="property_type"
        value={filterBody.selectedTypes}
        onChange={(e) => handleInputChange("selectedTypes", e.value)}
        options={getPropertyTypes()}
        optionLabel="name"
        optionValue="id"
        display="chip"
        filter={true}
        filterBy="name"
        placeholder="Seleccionar Tipo"
        maxSelectedLabels={3}
        className="!w-full !border !border-[#d1d5db]"
      />
      <MultiSelect
        id="property_category"
        value={filterBody.selectedCategories}
        onChange={(e) => handleInputChange("selectedCategories", e.value)}
        options={getPropertyCategories()}
        optionLabel="name"
        optionValue="id"
        display="chip"
        filter={true}
        filterBy="name"
        placeholder="Seleccionar Categoria"
        maxSelectedLabels={3}
        className="!w-full !border !border-[#d1d5db]"
      />
      <Dropdown
        value={filterBody.selectedCity}
        onChange={(e) => {
          handleInputChange("selectedCity", e.value)
        }}
        options={cities}
        optionLabel="name"
        optionValue="id"
        placeholder="Selecionar Ciudad"
        showClear
        filter
        className="!w-full !border !border-[#d1d5db]"
      />
      <MultiSelect
        value={filterBody.selectedZones}
        onChange={(e) => handleInputChange("selectedZones", e.value)}
        options={zones}
        optionLabel="name"
        optionValue="id"
        display="chip"
        placeholder="Seleccionar Zonas"
        maxSelectedLabels={3}
        className="!w-full !border !border-[#d1d5db]"
      />
      <InputText
        id="title"
        value={filterBody.value}
        onChange={(e) => handleInputChange("value", e.target.value)}
        placeholder="Código o Nombre"
        className="w-full"
      />
      <button
        type="submit"
        aria-label="submit button"
        className="text-white w-full bg-[#1e3a58] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
      >
        Búsqueda
      </button>
    </form>
  );
};
