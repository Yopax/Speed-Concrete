"use client";
import React from "react";
import { useStore } from "@/store/useStore";

function Resultado() {
  const {
    resultado,
    fcsolve,
    concretoConAire,
    densidadCemento,
  } = useStore((state) => ({
    resultado: state.resultado,
    resultFc: state.resultFc,
    fcsolve: state.fcsolve,
    concretoConAire: state.concretoConAire,
    densidadCemento: state.densidadCemento,
  }));

  const densidadConvertido = densidadCemento*1000;

  return (
    <>
      <div className="w-[80%] mx-auto mt-4 justify-center text-center"></div>
      <div className="font-sans text-xs w-[80%] mx-auto mt-10 justify-center">
        <h2 className="font-semibold">1. Cantidad de agua</h2>
        <p>volumen de agua: {resultado} m3</p>
        <h2 className="font-semibold">2. Resistencia con factor de seguridad</h2>
        <p>Resistencia: {fcsolve} kg/cm2</p>
        <h2 className="font-semibold">3.cantidad de cemento</h2>
        <p>cantidad de cemento: {(((resultado*1000)/concretoConAire)/densidadConvertido).toFixed(4)} kg</p>

      </div>
    </>
  );
}

export default Resultado;
