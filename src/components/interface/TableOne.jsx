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

function TableOne() {
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

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Material</TableHead>
            <TableHead>Peso por m3 (Kg)</TableHead>
            <TableHead>Porcentaje (%)</TableHead>
            <TableHead>Volumen (m3)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>AG grueso</TableCell>
            <TableCell>{correcionHumedad2.toFixed(2)}</TableCell>
            <TableCell>
              {totalkg ? ((correcionHumedad2 / totalkg) * 100).toFixed(2) : 0}
            </TableCell>
            <TableCell>{totalkg ? ((correcionHumedad2 / totalkg) * 100 / 100).toFixed(4) : 0}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>AG fino</TableCell>
            <TableCell>{correcionHumedad1.toFixed(2)}</TableCell>
            <TableCell>
              {totalkg ? ((correcionHumedad1 / totalkg) * 100).toFixed(2) : 0}
            </TableCell>
            <TableCell>{totalkg ? ((correcionHumedad1 / totalkg) * 100 / 100).toFixed(4) : 0}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Cemento</TableCell>
            <TableCell>{volCemento2.toFixed(2)}</TableCell>
            <TableCell>
              {totalkg ? ((volCemento2 / totalkg) * 100).toFixed(2) : 0}
            </TableCell>
            <TableCell>{totalkg ? ((volCemento2 / totalkg) * 100 / 100).toFixed(4) : 0}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Agua</TableCell>
            <TableCell>
              {(correcionAbsorcion1 + correcionAbsorcion2).toFixed(2)}
            </TableCell>
            <TableCell>
              {totalkg
                ? (
                    ((correcionAbsorcion1 + correcionAbsorcion2) / totalkg) *
                    100
                  ).toFixed(2)
                : 0}
            </TableCell>
            <TableCell>{totalkg ? (((correcionAbsorcion1 + correcionAbsorcion2) / totalkg) * 100 / 100).toFixed(4) : 0}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Total</TableCell>
            <TableCell>{totalkg.toFixed(2)}</TableCell>
            <TableCell>
              {totalkg
                ? (
                    (correcionHumedad2 / totalkg) * 100 +
                    (correcionHumedad1 / totalkg) * 100 +
                    (volCemento2 / totalkg) * 100 +
                    ((correcionAbsorcion1 + correcionAbsorcion2) / totalkg) *
                      100
                  ).toFixed(2)
                : 0}
            </TableCell>
            <TableCell>-</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}

export default TableOne;
