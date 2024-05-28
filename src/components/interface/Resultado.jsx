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
    agregadoGrueso,
    agregadoFinoAbsorcion,
  agregadoGruesoAbsorcion,
  agregadoFinoHumedad,
  agregadoGruesoHumedad,
  } = useStore((state) => ({
    resultado: state.resultado,
    resultFc: state.resultFc,
    fcsolve: state.fcsolve,
    concretoConAire: state.concretoConAire,
    densidadCemento: state.densidadCemento,
    tmnAgregado: state.tmnAgregado,
    vag: state.vag,
    agregadoGrueso: state.agregadoGrueso,
    agregadoFinoAbsorcion: state.agregadoFinoAbsorcion,
    agregadoGruesoAbsorcion: state.agregadoGruesoAbsorcion,
    agregadoFinoHumedad: state.agregadoFinoHumedad,
    agregadoGruesoHumedad: state.agregadoGruesoHumedad,
  }));

  const densidadConvertido = densidadCemento * 1000;
  const volAire = isNaN(parseFloat(tmnAgregado / 100))
    ? 0
    : parseFloat(tmnAgregado / 100);
  const volCemento = isNaN(parseFloat(((resultado * 1000) / concretoConAire / densidadConvertido).toFixed(4)
    )
  )
    ? 0
    : parseFloat(
        ((resultado * 1000) / concretoConAire / densidadConvertido).toFixed(4)
      );
  const volAgua = isNaN(parseFloat(resultado)) ? 0 : parseFloat(resultado);
  const volAguaTrans = resultado * 1000;
  console.log(`agua: ${volAguaTrans}`);
  const volAgregadoGrueso = isNaN(parseFloat(vag)) ? 0 : parseFloat(vag);
  const volAgregadoFinom3 = (1 -(volAire + volCemento + volAgregadoGrueso + volAgua)).toFixed(4);
  const volAgregadoFinoKg = volAgregadoFinom3 * 2610;
  const correcionAbsorcion1 = (volAguaTrans+volAgregadoFinoKg*((agregadoGruesoAbsorcion-agregadoGruesoHumedad)/100));
  console.log(`dato1: ${(volAguaTrans+volAgregadoFinoKg)}`);
  console.log(`dato2: ${(agregadoGruesoAbsorcion-agregadoGruesoHumedad)/100}`);
  console.log(`correcion: ${correcionAbsorcion1}`);
  const correcionAbsorcion2 = (agregadoGrueso)*((agregadoFinoAbsorcion-agregadoFinoHumedad)/100);

  const a = 100+parseFloat(agregadoGruesoHumedad);
  const correcionHumedad1 = volAgregadoFinoKg*(a/100);
  console.log(`correcion humedad1: ${a}`);
  console.log(`correcion humedad2: ${correcionHumedad1}`);
  console.log(`correcion humedad: ${correcionHumedad1}`);

  const b = 100+parseFloat(agregadoFinoHumedad);
  const correcionHumedad2 = agregadoGrueso*(b/100)

  const totalkg = correcionHumedad1 + correcionHumedad2 + ((resultado * 1000) / concretoConAire) + (correcionAbsorcion1 + correcionAbsorcion2);

  return (
    <>
      <div className="w-[80%] mx-auto mt-4 justify-center text-center"></div>
      <div className="font-sans text-xs w-[80%] mx-auto mt-10 justify-center">
        <h2 className="font-semibold">1. Volumen de agua</h2>
        <p>volumen de agua: {volAgua} m3</p>
        <h2 className="font-semibold">
          2. Resistencia con factor de seguridad
        </h2>
        <p>Resistencia: {fcsolve} kg/cm2</p>
        <h2 className="font-semibold">3.Volumen de cemento</h2>
        <p>cantidad de cemento: {volCemento} m3</p>
        <h2 className="font-semibold">4. Volumen de aire</h2>
        <p>Tmn agregado: {volAire} m3</p>
        <h2 className="font-semibold">5. Volumen de Agregado Grueso</h2>
        <p>Vag: {volAgregadoGrueso.toFixed(5)} m3</p>
        <h2 className="font-semibold">5.1 Contenido de agregado Grueso kg</h2>
        <p>{agregadoGrueso.toFixed(2)}</p>
        <h2 className="font-semibold">6. Contenido de agregado fino m3</h2>
        <p>{volAgregadoFinom3}</p>
        <h2 className="font-semibold">6.1 Contenido de agregado fino kg</h2>
        <p>{volAgregadoFinoKg.toFixed(3)}</p>
        <h2 className="font-semibold">
          7. Corrección por Absorción: Cantidad de agua corregida{" "}
        </h2>
        <p>
          Agua corregida:{" "}
          {(correcionAbsorcion1 + correcionAbsorcion2).toFixed(3)}
        </p>
        <h2 className="font-semibold">
          8. Corrección por Humedad: Cantidad de agregados corregidos
        </h2>
        <p>AG. fino corregido: {correcionHumedad1.toFixed(2)}</p>
        <p>AG. grueso corregido: {correcionHumedad2.toFixed(2)}</p>
      </div>
    </>
  );
}

export default Resultado;
