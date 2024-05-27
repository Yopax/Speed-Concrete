"use client";
import { useStore } from "@/store/useStore";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import IconOne from "../icons/IconOne";
import { AiOutlineSave } from "react-icons/ai";

function ToolOne() {
  const [fila, setFila] = useState(null);
  const [columna, setColumna] = useState(null);
  const setResultado = useStore((state) => state.setResultado);
  const filaOptions = { 0: "1-2", 1: "3-4", 2: "6-7" };
  const columnaOptions = {
    0: "3/8”",
    1: "½”",
    2: "¾”",
    3: "1”",
    4: "1 ½”",
    5: "2”",
    6: "3”",
    7: "6”",
  };
  const datosTabla = [
    [207, 199, 190, 179, 166, 154, 130, 113],
    [228, 216, 205, 193, 181, 169, 145, 124],
    [243, 228, 216, 202, 190, 178, 160, null],
  ];
  const buscarValor = (fila, columna) => {
    if (
      fila !== null &&
      columna !== null &&
      fila >= 0 &&
      fila < datosTabla.length &&
      columna >= 0 &&
      columna < datosTabla[0].length
    ) {
      return datosTabla[fila][columna];
    } else {
      return null;
    }
  };
  const handleSubmit = () => {
    const valorObtenido = buscarValor(fila, columna);
    setResultado(valorObtenido / 1000);
  };

  return (
    <>
      <Dialog>
        <DialogTrigger className="font-sans text-xs h-20 w-20  text-white">
          <div className="flex flex-col items-center justify-center">
            <IconOne />
            <p>Paso Uno</p>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <div className="flex space-x-2">
                <IconOne />
                <p className="font-sans">Are you absolutely sure?</p>
              </div>
            </DialogTitle>
            <DialogDescription asChild="asChild">
              <div>
                <p className="font-sans text-start mb-2">Exction Description One</p>
                <div className="flex">
                  <div className="flex-col w-[90%] divide-y divide-stone-200 border-x  border-y  mx-auto">
                    <div className="flex mx-auto">
                      <label className="w-2/3 px-2 text-stone-600 text-start">
                        Selección el asentamiento
                      </label>
                      <select
                        value={fila === null ? "" : fila}
                        onChange={(e) => setFila(parseInt(e.target.value))}
                        className="flex h-5 w-1/3 text-stone-600 font-sans  bg-transparent px-3 text-xs border-l focus-visible:outline-none"
                      >
                        <option value="">Selecciona</option>
                        {Object.entries(filaOptions).map(([index, label]) => (
                          <option key={index} value={index}>
                            {label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="flex mx-auto">
                      <label className="w-2/3 px-2 text-stone-600 text-start">
                        TMN del agregado
                      </label>
                      <select
                        value={columna === null ? "" : columna}
                        onChange={(e) => setColumna(parseInt(e.target.value))}
                        className="flex h-5 w-1/3 text-stone-600 font-sans  bg-transparent px-3 text-xs border-l focus-visible:outline-none"
                      >
                        <option value="">Selecciona</option>
                        {Object.entries(columnaOptions).map(
                          ([index, label]) => (
                            <option key={index} value={index}>
                              {label}
                            </option>
                          )
                        )}
                      </select>
                    </div>
                  </div>
                  <div className="w-[10%] border ">
                    <button
                      onClick={handleSubmit}
                      className="flex items-center text-xl justify-center w-full h-full bg-sky-700 text-white hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      <AiOutlineSave />
                    </button>
                  </div>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ToolOne;
