"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import IconOne from "../icons/IconOne";
import { Input } from "../Input";
import { useStore } from "@/store/useStore";

function ToolFour() {
  const { 
    agregadoFinoAbsorcion, setAgregadoFinoAbsorcion,
    agregadoGruesoAbsorcion, setAgregadoGruesoAbsorcion,
    agregadoFinoHumedad, setAgregadoFinoHumedad,
    agregadoGruesoHumedad, setAgregadoGruesoHumedad 
  } = useStore();
  return (
    <>
      <Dialog>
        <DialogTrigger className=" font-sans text-xs h-20 w-20 p-2 text-white ">
          <div className="flex flex-col items-center justify-center">
            <IconOne />
            <p>Paso 4</p>
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
                <p className="font-sans text-start mb-2">Absorcion %</p>
                <div className="flex">
                  <div className="flex-col w-full divide-y divide-stone-200 border-x  border-y  mx-auto">
                    <div className="flex mx-auto">
                      <label className="w-2/3 px-2 text-stone-600 text-start">
                        Agregado fino
                      </label>
                      <Input
                      type="number"
                      value = {agregadoFinoAbsorcion}
                      onChange={(e) => setAgregadoFinoAbsorcion(e.target.value)}
                      />
                    </div>
                    <div className="flex mx-auto">
                      <label className="w-2/3 px-2 text-stone-600 text-start">
                        Agregado Grueso
                      </label>
                      <Input
                      type="number"
                      value = {agregadoGruesoAbsorcion}
                      onChange={(e) => setAgregadoGruesoAbsorcion(e.target.value)} />
                    </div>
                  </div>
                </div>
                <p className="font-sans text-start mb-2 mt-3">Contenido de humedad %</p>
                <div className="flex">
                  <div className="flex-col w-full divide-y divide-stone-200 border-x  border-y  mx-auto">
                    <div className="flex mx-auto">
                      <label className="w-2/3 px-2 text-stone-600 text-start">
                        Agregado fino
                      </label>
                      <Input
                      type="number"
                      value = {agregadoFinoHumedad}
                      onChange={(e) => setAgregadoFinoHumedad(e.target.value)}
                      />
                    </div>
                    <div className="flex mx-auto">
                      <label className="w-2/3 px-2 text-stone-600 text-start">
                        Agregado Grueso
                      </label>
                      <Input
                      type="number"
                      value = {agregadoGruesoHumedad}
                      onChange={(e) => setAgregadoGruesoHumedad(e.target.value)}
                      placeholder=""
                         />
                    </div>
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

export default ToolFour;
