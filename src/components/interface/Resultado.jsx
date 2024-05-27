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
  const volAire = isNaN(parseFloat(tmnAgregado / 100)) ? 0 : parseFloat(tmnAgregado / 100);
const volCemento = isNaN(parseFloat((((resultado * 1000) / concretoConAire) / densidadConvertido).toFixed(4))) ? 0 : parseFloat((((resultado * 1000) / concretoConAire) / densidadConvertido).toFixed(4));
const volAgua = isNaN(parseFloat(resultado)) ? 0 : parseFloat(resultado);
const volAgregadoGrueso = isNaN(parseFloat(vag)) ? 0 : parseFloat(vag);


const volAgregadoFinom3 = (1-(volAire+volCemento+volAgregadoGrueso+volAgua)).toFixed(4);
const volAgregadoFinoKg = (volAgregadoFinom3*2610);

  return (
    <>
      <div className="w-[80%] mx-auto mt-4 justify-center text-center"></div>
      <div className="font-sans text-xs w-[80%] mx-auto mt-10 justify-center">
        <h2 className="font-semibold">1. Volumen de agua</h2>
        <p>volumen de agua: {resultado} m3</p>
        <h2 className="font-semibold">2. Resistencia con factor de seguridad</h2>
        <p>Resistencia: {fcsolve} kg/cm2</p>
        <h2 className="font-semibold">3.Volumen de cemento</h2>
        <p>cantidad de cemento: {volCemento} m3</p>
        <h2 className="font-semibold">4. Volumen de aire</h2>
        <p>Tmn agregado: {volAire} m3</p>
        <h2 className="font-semibold">5. Volumen de Agregado Grueso</h2>
        <p>Vag: {(volAgregadoGrueso).toFixed(5)} m3</p>
        <h2 className="font-semibold">6. Contenido de agregado fino m3</h2>
        <p>{volAgregadoFinom3}</p>
        <h2 className="font-semibold">6.1 Contenido de agregado fino kg</h2>
        <p>{(volAgregadoFinoKg).toFixed(3)}</p>

      </div>
    </>
  );
}

export default Resultado;
