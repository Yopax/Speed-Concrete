"use client";
import React from "react";
import { useStore } from "@/store/useStore";
import { Input } from "../Input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import IconOne from "../icons/IconOne";


function ToolTwo() {
  const { concreteStrength, setConcreteStrength, setFcsolve } = useStore();

  const calculateStrengthWithSafetyFactor = () => {
    let safetyFactor = 0;
    if (concreteStrength < 210) {
      safetyFactor = 70;
    } else if (concreteStrength >= 210 && concreteStrength <= 350) {
      safetyFactor = 84;
    } else {
      safetyFactor = 98;
    }
    const totalStrength = concreteStrength + safetyFactor;
    setFcsolve(
      `La resistencia del concreto con un factor de seguridad es: ${totalStrength}`
    );

     
  };
  return (
    <>
      <Dialog>
        <DialogTrigger className="font-sans text-xs h-20 w-20 text-white">
          <div className="flex flex-col items-center justify-center">
            <IconOne />
            <p>Paso Dos</p>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <div className="flex space-x-2">
                <IconOne />
                <p className="font-sans">Aress you absolutely sure?</p>
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
                      <label className="w-1/2 px-2 text-stone-600 text-start">
                        Selección el asentamiento
                      </label>
                      <Input
                        type="number"
                        value={concreteStrength}
                        onChange={(e) =>
                          setConcreteStrength(parseInt(e.target.value))
                        }
                        placeholder="Ingrese la resistencia del concreto"
                      />
                    </div>
                    <div className="flex mx-auto">
                      
                    </div>
                  </div>
                  <div className="w-[10%] border ">
                    <button
                      className="w-[20%] py-1 mb-2  bg-sky-700 text-white font-semibold rounded-md hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      onClick={calculateStrengthWithSafetyFactor}
                    >
                      Guardar
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

export default ToolTwo;
