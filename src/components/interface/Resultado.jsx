"use client";
import React from "react";
import { useStore } from "@/store/useStore";

function Resultado() {
  const {
    resultado,
    fcsolve,
    concretoConAire,
    densidadCemento,
    tmnAgregado,
    vag,
  } = useStore((state) => ({
    resultado: state.resultado,
    resultFc: state.resultFc,
    fcsolve: state.fcsolve,
    concretoConAire: state.concretoConAire,
    densidadCemento: state.densidadCemento,
    tmnAgregado: state.tmnAgregado,
    vag: state.vag,
  }));

  const densidadConvertido = densidadCemento*1000;

  return (
    <>
      <div className="w-[80%] mx-auto mt-4 justify-center text-center"></div>
      <div className="font-sans text-xs w-[80%] mx-auto mt-10 justify-center">
        <h2 className="font-semibold">1. Volumen de agua</h2>
        <p>volumen de agua: {resultado} m3</p>
        <h2 className="font-semibold">2. Resistencia con factor de seguridad</h2>
        <p>Resistencia: {fcsolve} kg/cm2</p>
        <h2 className="font-semibold">3.Volumen de cemento</h2>
        <p>cantidad de cemento: {(((resultado*1000)/concretoConAire)/densidadConvertido).toFixed(4)} kg</p>
        <h2 className="font-semibold">4. Volumen de aire</h2>
        <p>Tmn agregado: {tmnAgregado/100} m3</p>
        <h2 className="font-semibold">5. Volumen de Agregado Grueso</h2>
        <p>Vag: {vag} m3</p>

      </div>
    </>
  );
}

export default Resultado;
