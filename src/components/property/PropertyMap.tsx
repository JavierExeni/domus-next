"use client";

import { FaMapLocationDot } from "react-icons/fa6";
import { GoogleMap, Circle, Marker } from "@react-google-maps/api";
import { Dialog } from "primereact/dialog";
import { useState } from "react";
import { Property } from "@/types";
import { MapProvider } from "@/providers";
import useUserInfo from "@/hooks/useUserInfo";

interface Props {
  property: Property;
}

//Map's styling
const defaultMapContainerStyle = {
  width: "100%",
  height: "600px",
  borderRadius: "15px 0px 0px 15px",
};

//Default zoom level, can be adjusted
const defaultMapZoom = 15;

//Map options
const defaultMapOptions = {
  zoomControl: true,
  tilt: 0,
  gestureHandling: "auto",
};

const radius = 500;

export const PropertyMap = ({ property }: Props) => {
  const [center, setCenter] = useState({
    lat: Number(property.latitude),
    lng: Number(property.longitude),
  });

  const { isLogged } = useUserInfo();

  const [visible, setVisible] = useState(false);

  return (
    <>
      <button
        onClick={() => setVisible(true)}
        type="button"
        aria-label="map button"
        className="text-white w-full max-h-[40px] bg-[#1e3a58] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 text-center flex justify-center gap-2 items-center mt-3"
      >
        <FaMapLocationDot />
        <span> Ver Mapa </span>
      </button>

      <Dialog
        header="Ubicación de la propiedad"
        visible={visible}
        style={{ width: "80vw" }}
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
      >
        <MapProvider>
          <GoogleMap
            mapContainerStyle={defaultMapContainerStyle}
            center={center}
            zoom={defaultMapZoom}
            options={defaultMapOptions}
          >

            {isLogged ? (
              <Marker position={center}></Marker>
            ) : (
              <Circle center={center} radius={radius}></Circle>
            )}
            <></>
          </GoogleMap>
        </MapProvider>
      </Dialog>
    </>
  );
};
