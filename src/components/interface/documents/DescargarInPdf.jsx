"use client"
import React from "react";
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Button } from "@/components/ui/button";


function DescargarInPdf() {
  const generarPDF = () => {
    const doc = new jsPDF();
    // Título
    var logo = new Image();
    logo.src = "https://i.imgur.com/BPtZlMH.png"; // Cambia 'ruta/del/logo.png' por la ruta de tu logo
    doc.addImage(logo, "PNG", 10, 10, 28, 8); // Ajusta las coordenadas (10, 10) y el tamaño (50, 50) según tu preferencia

    doc.setFontSize(18);
    doc.text("Informe Final", 85, 25);

    doc.setFontSize(12);
    doc.text(`b`, 75, 31);

    doc.setFontSize(10);

    // Dividir el texto en varias líneas para que se ajuste dentro de los márgenes
    var textLines = doc.splitTextToSize(
      `Aunque los cálculos realizados por SpeedStructural se ajustan rigurosamente a las normativas peruanas de construcción y han sido exhaustivamente probados, se recomienda encarecidamente que los usuarios realicen una verificación independiente de los resultados. Esto con el fin de asegurar la precisión y coherencia del análisis estructural efectuado.`,
      180
    );

    // Agregar las líneas de texto al documento
    doc.text(textLines, 15, 40);

    // Subtítulo
    doc.setFontSize(12);
    doc.text("01. Predimensionamiento y Metrado de cargas", 15, 62);

    doc.save("informe.pdf");
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
