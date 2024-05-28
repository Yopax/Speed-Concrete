"use client";
import React from "react";
import { useState } from "react";
import { useStore } from "@/store/useStore";
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

function ToolTheer() {
  const [tmn, setTmn] = useState("");
  const [mf, setMf] = useState("");
  const setVAG = useStore((state) => state.setVAG);
  const setAgregadoGrueso = useStore((state) => state.setAgregadoGrueso);
  const handleCalculate = () => {
    const table = {
      '3/8"': { 2.4: 0.5, 2.6: 0.48, 2.8: 0.46, 3: 0.44 },
      '1/2"': { 2.4: 0.59, 2.6: 0.57, 2.8: 0.55, 3: 0.53 },
      '3/4"': { 2.4: 0.66, 2.6: 0.64, 2.8: 0.62, 3: 0.6 },
      '1"': { 2.4: 0.71, 2.6: 0.69, 2.8: 0.67, 3: 0.65 },
      '1 1/2"': { 2.4: 0.76, 2.6: 0.74, 2.8: 0.72, 3: 0.7 },
      '2"': { 2.4: 0.78, 2.6: 0.76, 2.8: 0.74, 3: 0.72 },
      '3"': { 2.4: 0.81, 2.6: 0.79, 2.8: 0.77, 3: 0.75 },
      '6"': { 2.4: 0.87, 2.6: 0.85, 2.8: 0.83, 3: 0.81 },
    };

    const coeficiente = table[tmn]?.[mf];
    if (coeficiente) {
      const agregadoGrueso = coeficiente * 1610;
      console.log(agregadoGrueso);
      setAgregadoGrueso(agregadoGrueso); // Actualiza el store
      const vag = agregadoGrueso / 2620;
      setVAG(vag);
    } else {
      alert("Por favor, ingrese valores válidos.");
    }
  };
  
  return (
    <>
      <Dialog>
        <DialogTrigger className=" font-sans text-xs h-20 w-20 p-2 text-white ">
          <div className="flex flex-col items-center justify-center">
            <IconOne />
            <p>Paso 3</p>
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
                <p className="font-sans text-start mb-2">
                  Exction Description One
                </p>
                <div className="flex">
                  <div className="flex-col w-[90%] divide-y divide-stone-200 border-x  border-y  mx-auto">
                    <div className="flex mx-auto">
                      <label className="w-2/3 px-2 text-stone-600 text-start">
                        TMN
                      </label>
                      <select
                        value={tmn}
                        onChange={(e) => setTmn(e.target.value)}
                        className="flex h-5 w-1/3 text-stone-600 font-sans  bg-transparent px-3 text-xs border-l focus-visible:outline-none"
                      >
                        <option value="">Seleccione TMN</option>
                        <option value='3/8"'>3/8"</option>
                        <option value='1/2"'>1/2"</option>
                        <option value='3/4"'>3/4"</option>
                        <option value='1"'>1"</option>
                        <option value='1 1/2"'>1 1/2"</option>
                        <option value='2"'>2"</option>
                        <option value='3"'>3"</option>
                        <option value='6"'>6"</option>
                      </select>
                    </div>
                    <div className="flex mx-auto">
                      <label className="w-2/3 px-2 text-stone-600 text-start">
                        Modulo de Finura
                      </label>
                      <select
                        value={mf}
                        onChange={(e) => setMf(e.target.value)}
                        className="flex h-5 w-1/3 text-stone-600 font-sans  bg-transparent px-3 text-xs border-l focus-visible:outline-none"
                      >
                        <option value="">Seleccione MF</option>
                        <option value={2.4}>2.4</option>
                        <option value={2.6}>2.6</option>
                        <option value={2.8}>2.8</option>
                        <option value={3}>3</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-[10%] border ">
                    <button
                      className="flex items-center text-xl justify-center w-full h-full bg-sky-700 text-white hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      onClick={handleCalculate}
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

export default ToolTheer;
