"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import jsPDFInvoiceTemplate from "jspdf-invoice-template";
import { useStore } from "@/store/useStore";

function PdfDescarga() {
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
  const volCementoKg = isNaN(
    parseFloat(
      ((resultado * 1000) / concretoConAire).toFixed(2)
    )
  )
    ? 0
    : parseFloat(
        ((resultado * 1000) / concretoConAire).toFixed(2)
      );
  const volAgua = isNaN(parseFloat(resultado)) ? 0 : parseFloat(resultado);
  const volAguaTrans = resultado * 1000;
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
  const correcionAbsorcion2 =
    agregadoGrueso * ((agregadoFinoAbsorcion - agregadoFinoHumedad) / 100);

  const a = 100 + parseFloat(agregadoGruesoHumedad);
  const correcionHumedad1 = volAgregadoFinoKg * (a / 100);

  const b = 100 + parseFloat(agregadoFinoHumedad);
  const correcionHumedad2 = agregadoGrueso * (b / 100);

  const totalkg =
    correcionHumedad1 +
    correcionHumedad2 +
    (resultado * 1000) / concretoConAire +
    (correcionAbsorcion1 + correcionAbsorcion2);

    const volCemento2 =
    resultado && concretoConAire
      ? parseFloat(((resultado * 1000) / concretoConAire).toFixed(4))
      : 0;  

  const handleDownload = () => {
    const props = {
      outputType: "save",
      returnJsPDFDocObject: true,
      fileName: "Speed Concrete 2024",
      orientationLandscape: false,
      compress: true,
      logo: {
        src: "https://raw.githubusercontent.com/edisonneza/jspdf-invoice-template/demo/images/logo.png",
        width: 53.33,
        height: 26.66,
        margin: {
          top: 0,
          left: 0,
        },
      },
      stamp: {
        inAllPages: true,
        src: "https://raw.githubusercontent.com/edisonneza/jspdf-invoice-template/demo/images/qr_code.jpg",
        width: 20,
        height: 20,
        margin: {
          top: 0,
          left: 0,
        },
      },
      business: {
        name: "Speed Concrete",
        address: "La libertad, Trujillo",
        phone: "(+51) 966 665 863",
        email: "n00167313@upn.pe",
        email_1: "n00167313@gmail.com",
        website: "https://speedstructural.vercel.app/",
      },
      contact: {
        label: "Tipo de Proyecto:",
        name: "Diseño de mezcla de concreto",
        address: "sustentado en normas ACI.",
        phone: `Diseño de mezcla mas factor de seguridad: ${fcsolve}fc`,
        otherInfo: "Resultados:",
      },
      invoice: {
        headerBorder: true,
        tableBodyBorder: true,
        header: [
          {
            title: "#",
            style: {
              width: 10,
            },
          },
          {
            title: "Material",
            style: {
                width: 94,
                fontSize: 12,
                fontStyle: "bold"
            }
        },

        {
            title: "Peso por m3 (Kg)",
            style: {
                fontSize: 12,
                fontStyle: "bold"
            }
        },
        {
          title: "Porcentaje (%)	",
          style: {
              fontSize: 12,
              fontStyle: "bold"
          }
      },
      {
        title: "Volumen (m3)",
        style: {
            fontSize: 12,
            fontStyle: "bold"
        }
    }, 
        ],
        table: [
          [1, "Agregado grueso",  `${correcionHumedad2.toFixed(2)}`,`${totalkg ? ((correcionHumedad2 / totalkg) * 100).toFixed(2) : 0}`,`${totalkg ? ((correcionHumedad2 / totalkg) * 100 / 100).toFixed(4) : 0}`],
          [2, "Agregado Fino", `${correcionHumedad1.toFixed(2)}`,`${correcionHumedad1.toFixed(2)}`,`${totalkg ? ((correcionHumedad1 / totalkg) * 100 / 100).toFixed(4) : 0}` ],
          [3, "Cemento", `${volCemento2.toFixed(2)}`,`${volCemento2.toFixed(2)}`,`${totalkg ? ((volCemento2 / totalkg) * 100 / 100).toFixed(4) : 0}` ],
          [4, "Agua",  `${(correcionAbsorcion1 + correcionAbsorcion2).toFixed(2)}`, `${totalkg
            ? (
                ((correcionAbsorcion1 + correcionAbsorcion2) / totalkg) *
                100
              ).toFixed(2)
            : 0}`,`${totalkg ? (((correcionAbsorcion1 + correcionAbsorcion2) / totalkg) * 100 / 100).toFixed(4) : 0}`],
          [5, "Total", `${totalkg.toFixed(2)}`,`${totalkg
            ? (
                (correcionHumedad2 / totalkg) * 100 +
                (correcionHumedad1 / totalkg) * 100 +
                (volCemento2 / totalkg) * 100 +
                ((correcionAbsorcion1 + correcionAbsorcion2) / totalkg) *
                  100
              ).toFixed(2)
            : 0}`,`-` ],
        ],
        additionalRows: [
          {
            col1: 'Total:',
            col2: `${totalkg.toFixed(2)}kg`,
            col3: 'ALL',
            style: {
              fontSize: 14,
            },
          },
        ],
        invDescLabel: "Descripción",
        invDesc: "Las características del concreto están en función de su uso. Por ello la selección de las proporciones por unidad cúbica de concreto debe permitir obtener un concreto con la facilidad de colocación, densidad, resistencia,durabilidad u otras propiedades que se consideran necesarias para el caso particular de la mezcla diseñada.",

      },
      
      footer: {
        text: "The invoice is created on a computer and is valid without the signature and stamp.",
      },
      pageEnable: true,
      pageLabel: "Page ",
    };

    jsPDFInvoiceTemplate(props);
  };

  return (
    <div className="flex justify-between space-x-2 max-sm:flex-col max-sm:space-x-0 max-sm:space-y-2">
      <Button className="text-xs" onClick={handleDownload}>
        Descargar PDF
      </Button>
    </div>
  );
}

export default PdfDescarga;
