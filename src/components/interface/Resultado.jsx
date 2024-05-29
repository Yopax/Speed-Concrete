"use client";
import React from "react";
import { useStore } from "@/store/useStore";
import CardResult from "./CardResult";

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
  const volCemento = isNaN(
    parseFloat(
      ((resultado * 1000) / concretoConAire / densidadConvertido).toFixed(4)
    )
  )
    ? 0
    : parseFloat(
        ((resultado * 1000) / concretoConAire / densidadConvertido).toFixed(4)
      );
  const volCementoKg =  isNaN(
    parseFloat(
      ((resultado * 1000) / concretoConAire ).toFixed(2)
    )
  )
    ? 0
    : parseFloat(
        ((resultado * 1000) / concretoConAire ).toFixed(2)
      );  
  const volAgua = isNaN(parseFloat(resultado)) ? 0 : parseFloat(resultado);
  const volAguaTrans = resultado * 1000;
  console.log(`agua: ${volAguaTrans}`);
  const volAgregadoGrueso = isNaN(parseFloat(vag)) ? 0 : parseFloat(vag);
  const volAgregadoFinom3 = (
    1 -
    (volAire + volCemento + volAgregadoGrueso + volAgua)
  ).toFixed(4);
  const volAgregadoFinoKg = volAgregadoFinom3 * 2610;
  const correcionAbsorcion1 =
    volAguaTrans +
    volAgregadoFinoKg *
      ((agregadoGruesoAbsorcion - agregadoGruesoHumedad) / 100);
  console.log(`dato1: ${volAguaTrans + volAgregadoFinoKg}`);
  console.log(
    `dato2: ${(agregadoGruesoAbsorcion - agregadoGruesoHumedad) / 100}`
  );
  console.log(`correcion: ${correcionAbsorcion1}`);
  const correcionAbsorcion2 =
    agregadoGrueso * ((agregadoFinoAbsorcion - agregadoFinoHumedad) / 100);

  const a = 100 + parseFloat(agregadoGruesoHumedad);
  const correcionHumedad1 = volAgregadoFinoKg * (a / 100);
  console.log(`correcion humedad1: ${a}`);
  console.log(`correcion humedad2: ${correcionHumedad1}`);
  console.log(`correcion humedad: ${correcionHumedad1}`);

  const b = 100 + parseFloat(agregadoFinoHumedad);
  const correcionHumedad2 = agregadoGrueso * (b / 100);

  const totalkg =
    correcionHumedad1 +
    correcionHumedad2 +
    (resultado * 1000) / concretoConAire +
    (correcionAbsorcion1 + correcionAbsorcion2);

  return (
    <>
      <div className="w-[90%] max-sm:w-[98%] my-3 mx-auto grid grid-cols-3 gap-2">
        <CardResult
          title="V. de agua"
          result={volAgua}
          und="m3"
          description="Eloudworkstations"
        />
        <CardResult
          title="Resistencia"
          result={fcsolve}
          und="kg/cm2"
          description="+factor de seguridad"
        />
        <CardResult
          title="Cemento"
          result={volCementoKg}
          und="kg"
          description="en kilogramos"
        />
        <CardResult
          title="V. de cemento"
          result={volCemento}
          und="m3"
          description="volumen en m3"
        />
        <CardResult
          title="V. de aire"
          result={volAire}
          und="m3"
          description="volumen en m3"
        />
        <CardResult
          title="AG Grueso"
          result={agregadoGrueso}
          und="kg"
          description="agregado grueso"
        />
        <CardResult
          title="V. AG Grueso"
          result={volAgregadoGrueso.toFixed(4)}
          und="m3"
          description="agregado grueso"
        />
        <CardResult
          title="AG fino"
          result={volAgregadoFinoKg}
          und="kg"
          description="agregado fino"
        />
        
        <CardResult
          title="V. AG fino"
          result={volAgregadoFinom3}
          und="m3"
          description="volumen agregado fino"
        />
        
        <CardResult
          title="Agua corregida"
          result={(correcionAbsorcion1 + correcionAbsorcion2).toFixed(3)}
          und="L"
          description="Eloudworkstations"
        />
        <CardResult
          title="AG.F corregido"
          result={correcionHumedad1.toFixed(2)}
          und="kg"
          description="Eloudworkstations"
        />
        <CardResult
          title="AG.G corregido"
          result={correcionHumedad2.toFixed(2)}
          und="kg"
          description="Eloudworkstations"
        />
      </div>
    </>
  );
}

export default Resultado;
