import React from "react";

const DetailsSection = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-top gap-4">
        <div className="bg-dk_primary h-2 md:h-3 w-2 md:w-3 rounded-full mt-2"></div>
        <p className="text-md md:text-xl text-justify">
          <span className="font-bold">Análisis de accesos:</span> Evaluación de
          los puntos de entrada y salida, y del control de acceso de personas y
          vehículos.
        </p>
      </div>
      <div className="flex items-top gap-4">
        <div className="bg-dk_primary h-2 md:h-3 w-2 md:w-3 rounded-full mt-2"></div>
        <p className="text-md md:text-xl text-justify">
          <span className="font-bold">Revisión de sistemas electrónicos:</span>{" "}
          Evaluación de la ubicación de las instalaciones, el entorno
          circundante y la incidencia delictiva en la zona.
        </p>
      </div>
      <div className="flex items-top gap-4">
        <div className="bg-dk_primary h-2 md:h-3 w-2 md:w-3 rounded-full mt-2"></div>
        <p className="text-md md:text-xl text-justify">
          <span className="font-bold">Análisis de riesgos externos:</span>{" "}
          Revisión exhaustiva de puertas, ventanas, cercas, iluminación,
          sistemas de alarma y cámaras de seguridad.
        </p>
      </div>
      <div className="flex items-top gap-4">
        <div className="bg-dk_primary h-2 md:h-3 w-2 md:w-3 rounded-full mt-2"></div>
        <p className="text-md md:text-xl text-justify">
          <span className="font-bold">Entrevistas con el personal:</span>{" "}
          Recopilación de información sobre incidentes de seguridad previos y
          posibles riesgos internos.
        </p>
      </div>
      
    </div>
  );
};

export default DetailsSection;
