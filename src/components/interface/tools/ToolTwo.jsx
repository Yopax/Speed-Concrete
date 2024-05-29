"use client";
import React from "react";
import { useStore } from "@/store/useStore"; // Asegúrate de que la ruta sea correcta
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
import { AiOutlineSave } from "react-icons/ai";

function ToolTwo() {
  const {
    concreteStrength,
    setConcreteStrength,
    setFcsolve,
    calculateConcretoConAire,
    densidadCemento,
    setDensidadCemento,
  } = useStore((state) => ({
    concreteStrength: state.concreteStrength,
    setConcreteStrength: state.setConcreteStrength,
    setFcsolve: state.setFcsolve,
    fcsolve: state.fcsolve,
    concretoConAire: state.concretoConAire,
    calculateConcretoConAire: state.calculateConcretoConAire,
    densidadCemento: state.densidadCemento,
    setDensidadCemento: state.setDensidadCemento,
  }));

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
    setFcsolve(totalStrength);
    calculateConcretoConAire(totalStrength);
  };

  return (
    <>
      <Dialog>
        <DialogTrigger className="font-sans text-xs h-20 w-20 text-white">
          <div className="flex flex-col items-center justify-center">
            <IconOne />
            <p>Paso 2</p>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <div className="flex space-x-2">
                <IconOne />
                <p className="font-sans">Configuración de Datos</p>
              </div>
            </DialogTitle>
            <DialogDescription asChild>
              <div>
                <p className="font-sans text-start mb-2">
                Resistencia y cantidad de cemento
                </p>
                <div className="flex">
                  <div className="flex-col w-[90%] divide-y divide-stone-200 border-x  border-y  mx-auto">
                    <div className="flex mx-auto">
                      <label className="w-2/3 px-2 text-stone-600 text-start">
                        Resistencia inicial(f´c)
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
                      <label className="w-2/3 px-2 text-stone-600 text-start">
                        Densidad del cemento(g/cm3)
                      </label>
                      <Input
                        type="number"
                        value={densidadCemento}
                        onChange={(e) =>
                          setDensidadCemento(parseInt(e.target.value))
                        }
                        placeholder="Ingrese la resistencia del concreto"
                      />
                    </div>
                  </div>
                  <div className="w-[10%] border ">
                    <button
                      className="flex items-center text-xl justify-center w-full h-full bg-sky-700 text-white hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      onClick={calculateStrengthWithSafetyFactor}
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

export default ToolTwo;
