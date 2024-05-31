"use client";
import React from "react";
import { useStore } from "@/store/useStore";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Comparativa general de materiales ',
      
    },
  },
};

const labels = ['Agua', 'Cemento', 'AG Fino', 'AG Grueso'];

function Graph1() {
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

  const densidadConvertido = densidadCemento ? densidadCemento * 1000 : 0;
  const volAire = tmnAgregado ? parseFloat(tmnAgregado / 100) : 0;
  const volCemento =
    resultado && concretoConAire && densidadConvertido
      ? parseFloat(
          ((resultado * 1000) / concretoConAire / densidadConvertido).toFixed(4)
        )
      : 0;
  const volCemento2 =
    resultado && concretoConAire
      ? parseFloat(((resultado * 1000) / concretoConAire).toFixed(4))
      : 0;
  const volAgua = resultado ? parseFloat(resultado) : 0;
  const volAguaTrans = resultado ? resultado * 1000 : 0;
  const volAgregadoGrueso = vag ? parseFloat(vag) : 0;
  const volAgregadoFinom3 = (
    1 -
    (volAire + volCemento + volAgregadoGrueso + volAgua)
  ).toFixed(4);
  const volAgregadoFinoKg = volAgregadoFinom3 * 2610;
  const correcionAbsorcion1 =
    volAguaTrans +
    volAgregadoFinoKg *
      ((agregadoGruesoAbsorcion - agregadoGruesoHumedad) / 100);
  const correcionAbsorcion2 = agregadoGrueso
    ? agregadoGrueso * ((agregadoFinoAbsorcion - agregadoFinoHumedad) / 100)
    : 0;

  const a = agregadoGruesoHumedad
    ? 100 + parseFloat(agregadoGruesoHumedad)
    : 100;
  const correcionHumedad1 = volAgregadoFinoKg
    ? volAgregadoFinoKg * (a / 100)
    : 0;

  const b = agregadoFinoHumedad ? 100 + parseFloat(agregadoFinoHumedad) : 100;
  const correcionHumedad2 = agregadoGrueso ? agregadoGrueso * (b / 100) : 0;

  const totalkg = isNaN(
    parseFloat(
      correcionHumedad1 +
        correcionHumedad2 +
        (resultado * 1000) / concretoConAire +
        (correcionAbsorcion1 + correcionAbsorcion2)
    )
  )
    ? 0
    : parseFloat(
        correcionHumedad1 +
          correcionHumedad2 +
          (resultado * 1000) / concretoConAire +
          (correcionAbsorcion1 + correcionAbsorcion2)
      );


  const data = {
    labels,
    datasets: [
      {
        label: '360f´c',
        data: [221.95, 557.06, 517.20, 1038.6], // Your custom data
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'propio',
        data: [
          `${(correcionAbsorcion1 + correcionAbsorcion2).toFixed(2)}`,
          `${volCemento2.toFixed(2)}`,
          `${correcionHumedad1.toFixed(2)}`,
          `${correcionHumedad2.toFixed(2)}`
        ], // Your custom data
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <>
      <Bar options={options} data={data} />
    </>
  );
}

export default Graph1;
