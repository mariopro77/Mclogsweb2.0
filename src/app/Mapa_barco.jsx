import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function MapaBarco() {
  const router = useRouter();
  const { mmsi } = router.query; // Obtener el mmsi desde los parámetros de la ruta
  const [iframeSrc, setIframeSrc] = useState("");
  const [isClient, setIsClient] = useState(false); // Detectar si estamos en el cliente

  useEffect(() => {
    // Asegurar que el código solo se ejecute en el cliente
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !mmsi) return; // Asegurar que estamos en el cliente y que mmsi está definido

    const protocol = window.location.protocol === "https:" ? "https://" : "http://";
    let src = `${protocol}www.marinetraffic.com/`;
    let overridenLatLon = "";

    const latitude = window.latitude || 0;
    const longitude = window.longitude || 0;
    const zoom = window.zoom || 3;

    if (latitude && longitude) {
      overridenLatLon = `/zoom:${zoom}/centery:${latitude}/centerx:${longitude}`;
    }

    if (typeof window.mtembedcode !== "undefined") {
      src += `${window.language || "en"}/ais/customembed${overridenLatLon}/mmsi:${mmsi || "0"}${window.trackimo ? `/trackimo:${window.trackimo}` : ""}/mtembedcode:${window.mtembedcode}`;
    } else {
      src += `${window.language || "en"}/ais/embed/zoom:${zoom}/centery:${latitude}/centerx:${longitude}/maptype:${window.maptype || "4"}/shownames:${window.shownames || "false"}/mmsi:${mmsi || "0"}/shipid:${window.trackshipid || "0"}/fleet:${window.fleet || ""}/fleet_id:${window.fleet_id || ""}/vtypes:${window.vtypes || ""}/showmenu:${window.showmenu || ""}/remember:${window.remember || "false"}`;
    }

    setIframeSrc(src);
  }, [isClient, mmsi]);

  return (
    <div className="h-screen w-full py-20">
      <div className="px-10 sm:px-10 md:px-20 lg:px-30 xl:px-30 2xl:px-40 pt-20">
        {iframeSrc ? (
          <iframe
            title="MarineTraffic"
            width="100%"
            height="500"
            scrolling="no"
            frameBorder="0"
            src={iframeSrc}
            className="clicked rounded-md overflow-hidden"
          >
            Browser does not support embedded objects.<br />
            Visit directly <a href="http://www.marinetraffic.com/">www.marinetraffic.com</a>
          </iframe>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
