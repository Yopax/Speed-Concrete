"use client";
import React from "react";
import { Document, Packer, Paragraph, TextRun, Header, AlignmentType } from 'docx';
import { Button } from "@/components/ui/button";

function DescargarInWord() {
  const downloadDocument = async () => {
    // Crear el título y las secciones del documento
    const title = new Paragraph({
      children: [
        new TextRun({
          text: "Informe de Diseño de Mezcla de Concreto 210 ACI",
          bold: true,
          size: 28,
        }),
      ],
      heading: "Title",
      alignment: AlignmentType.CENTER,
      spacing: {
        after: 300,
      },
    });

    const introduction = new Paragraph({
      children: [
        new TextRun({
          text: "Introducción",
          bold: true,
          size: 24,
        }),
      ],
      spacing: {
        after: 200,
      },
    });

    const introductionText = new Paragraph({
      children: [
        new TextRun({
          text: "Este informe detalla el diseño de mezcla de concreto según las normas del ACI 211.1-91. El objetivo es desarrollar una mezcla de concreto que cumpla con los requisitos de resistencia y trabajabilidad para ser utilizada en diversas aplicaciones de construcción.",
          size: 24,
        }),
      ],
      spacing: {
        after: 200,
      },
    });

    const methodology = new Paragraph({
      children: [
        new TextRun({
          text: "Metodología",
          bold: true,
          size: 24,
        }),
      ],
      spacing: {
        after: 200,
      },
    });

    const methodologyText = new Paragraph({
      children: [
        new TextRun({
          text: "La metodología utilizada para el diseño de la mezcla de concreto sigue las directrices establecidas en el ACI 211.1-91. Se realizó una selección de materiales, determinación de proporciones de mezcla, y pruebas de resistencia para asegurar que la mezcla cumple con los estándares requeridos.",
          size: 24,
        }),
      ],
      spacing: {
        after: 200,
      },
    });

    const results = new Paragraph({
      children: [
        new TextRun({
          text: "Resultados",
          bold: true,
          size: 24,
        }),
      ],
      spacing: {
        after: 200,
      },
    });

    const resultsText = new Paragraph({
      children: [
        new TextRun({
          text: "Los resultados de las pruebas de resistencia mostraron que la mezcla diseñada alcanzó una resistencia a la compresión de 210 kg/cm² a los 28 días. Además, la mezcla demostró una trabajabilidad adecuada para el proceso de colocación y acabado.",
          size: 24,
        }),
      ],
      spacing: {
        after: 200,
      },
    });

    const conclusion = new Paragraph({
      children: [
        new TextRun({
          text: "Conclusión",
          bold: true,
          size: 24,
        }),
      ],
      spacing: {
        after: 200,
      },
    });

    const conclusionText = new Paragraph({
      children: [
        new TextRun({
          text: "En conclusión, el diseño de la mezcla de concreto siguiendo las normas del ACI 211.1-91 ha sido exitoso. La mezcla cumple con los requisitos de resistencia y trabajabilidad, lo que la hace adecuada para diversas aplicaciones en la construcción. Se recomienda continuar con pruebas adicionales en campo para confirmar el rendimiento de la mezcla en condiciones reales.",
          size: 24,
        }),
      ],
      spacing: {
        after: 200,
      },
    });

    // Crear el documento
    const doc = new Document({
      sections: [
        {
          headers: {
            default: new Header({
              children: [new Paragraph("Informe Final - Diseño de Mezcla de Concreto 210 ACI")],
            }),
          },
          children: [title, introduction, introductionText, methodology, methodologyText, results, resultsText, conclusion, conclusionText],
        },
      ],
    });

    // Convertir el documento a un buffer
    const buffer = await Packer.toBuffer(doc);

    // Crear un Blob con el buffer y preparar la descarga
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Informe_Diseno_Mezcla_Concreto_210_ACI.docx");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="flex justify-between mt-5 space-x-2 max-sm:flex-col max-sm:space-x-0 max-sm:space-y-2">
        <Button
          className="text-xs"
          onClick={downloadDocument}
        >
          Descargar WORD
        </Button>
      </div>
    </>
  );
}

export default DescargarInWord;
