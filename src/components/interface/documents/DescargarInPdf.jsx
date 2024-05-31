"use client";
import React from "react";
import { useStore } from "@/store/useStore";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Button } from "@/components/ui/button";


function DescargarInPdf() {
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
  const generarPDF = () => {
    const doc = new jsPDF();
    // Título
    var logo = new Image();
    logo.src = "https://i.imgur.com/BPtZlMH.png"; // Cambia 'ruta/del/logo.png' por la ruta de tu logo
    doc.addImage(logo, "PNG", 10, 10, 28, 8); // Ajusta las coordenadas (10, 10) y el tamaño (50, 50) según tu preferencia

    doc.setFontSize(18);
    doc.text("Informe Final", 85, 25);


    doc.setFontSize(10);

    // Dividir el texto en varias líneas para que se ajuste dentro de los márgenes
    var textLines = doc.splitTextToSize(
      `Aunque los cálculos realizados por SpeedConcrete  se ajustan rigurosamente a las normativas peruanas de construcción y han sido exhaustivamente probados, se recomienda encarecidamente que los usuarios realicen una verificación independiente de los resultados. Esto con el fin de asegurar la precisión y coherencia del análisis estructural efectuado.`,
      180
    );

    // Agregar las líneas de texto al documento
    doc.text(textLines, 15, 40);

    // Subtítulo
    doc.setFontSize(12);
    doc.text("SpeedConcrete - Tabla de Resultado Finales", 15, 62);

    const tableLosas = ["Material", "Peso por m3 (Kg)", "Porcentaje (%)", "Volumen (m3)"];
    const tableRows = [ ["Agregado grueso", `${correcionHumedad2.toFixed(2)}`, `${totalkg ? ((correcionHumedad2 / totalkg) * 100).toFixed(2) : 0}`,`${totalkg ? ((correcionHumedad2 / totalkg) * 100 / 100).toFixed(4) : 0}`], 
                       ["Agregado fino", `${correcionHumedad1.toFixed(2)}`, `${totalkg ? ((correcionHumedad1 / totalkg) * 100).toFixed(2) : 0}`,`${totalkg ? ((correcionHumedad1 / totalkg) * 100 / 100).toFixed(4) : 0}`],
                       ["Cemento", `${volCemento2.toFixed(2)}`, `${totalkg ? ((volCemento2 / totalkg) * 100).toFixed(2) : 0}`,`${totalkg ? ((volCemento2 / totalkg) * 100 / 100).toFixed(4) : 0}`],
                       ["Agua", `${(correcionAbsorcion1 + correcionAbsorcion2).toFixed(2)}`, `${totalkg
                        ? (
                            ((correcionAbsorcion1 + correcionAbsorcion2) / totalkg) *
                            100
                          ).toFixed(2)
                        : 0}`,`${totalkg ? (((correcionAbsorcion1 + correcionAbsorcion2) / totalkg) * 100 / 100).toFixed(4) : 0}`]];
    
    // Subtítulo
    doc.setFontSize(10);
    doc.text("Diseño de mezcla de concreto", 15, 72);
    // Tabla ordenada
    tableRows.sort((a, b) => a[0] - b[0]);
    doc.autoTable({
      startY: 75,
      head: [tableLosas],
      body: tableRows,
    });
    

    doc.save("speedConcrete.pdf");
  };
  return (
    <>
      <div className="flex justify-between  space-x-2 max-sm:flex-col max-sm:space-x-0 max-sm:space-y-2">
        <Button
        className="text-xs"
          onClick={generarPDF}
        >
          Descargar PDF
        </Button>
      </div>
    </>
  );
}

export default DescargarInPdf;
