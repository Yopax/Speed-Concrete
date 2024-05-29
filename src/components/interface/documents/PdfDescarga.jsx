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

  const handleDownload = () => {
    const props = {
      outputType: "save",
      returnJsPDFDocObject: true,
      fileName: "Speed Concrete 2024",
      orientationLandscape: false,
      compress: true,
      logo: {
        src: "https://raw.githubusercontent.com/edisonneza/jspdf-invoice-template/demo/images/logo.png",
        width: 53.33, // aspect ratio = width/height
        height: 26.66,
        margin: {
          top: 0, // negative or positive num, from the current position
          left: 0 // negative or positive num, from the current position
        }
      },
      stamp: {
        inAllPages: true,
        src: "https://raw.githubusercontent.com/edisonneza/jspdf-invoice-template/demo/images/qr_code.jpg",
        width: 20, // aspect ratio = width/height
        height: 20,
        margin: {
          top: 0, // negative or positive num, from the current position
          left: 0 // negative or positive num, from the current position
        }
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
        phone: `Diseño de: ${fcsolve}`,
        email: "client@website.al",
        otherInfo: "Resultados:",
      },
      invoice: {
        headerBorder: true,
        tableBodyBorder: true,
        header: [
          {
            title: "#",
            style: {
              width: 10
            }
          },
          {
            title: "Title",
            style: {
              width: 30
            }
          },
          {
            title: "Description",
            style: {
              width: 80
            }
          },
          { title: "Price" },
          { title: "Quantity" },
          { title: "Unit" },
          { title: "Total" }
        ],
        table: Array.from(Array(15), (item, index) => [
          index + 1,
          "There are many variations ",
          "Lorem Ipsum is simply dummy text dummy text ",
          200.5,
          4.5,
          "m2",
          400.5
        ]),
        additionalRows: [
          {
            col1: 'Total:',
            col2: '145,250.50',
            col3: 'ALL',
            style: {
              fontSize: 14 // optional, default 12
            }
          },
          {
            col1: 'VAT:',
            col2: '20',
            col3: '%',
            style: {
              fontSize: 10 // optional, default 12
            }
          },
          {
            col1: 'SubTotal:',
            col2: '116,199.90',
            col3: 'ALL',
            style: {
              fontSize: 10 // optional, default 12
            }
          }
        ],
        invDescLabel: "Invoice Note",
        invDesc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
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
