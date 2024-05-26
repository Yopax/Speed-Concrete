"use client";
import React from "react";
import { useStore } from "@/store/useStore";

import { Input } from "../Input";

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
      <div>
        <p className="font-sans text-start my-2">Resistencia del concreto sin f`c</p>
        <div className="flex-col my-2  divide-y divide-stone-200  w-full border-x  border-y  mx-auto">
          <div className="flex mx-auto">
            <label className="text-start w-1/2 text-xs font-sans px-2">
              Selección del asentamiento
            </label>
            <Input
              type="number"
              value={concreteStrength}
              onChange={(e) => setConcreteStrength(parseInt(e.target.value))}
              placeholder="Ingrese la resistencia del concreto"
            />
          </div>
        </div>
        <button
          className="w-[20%] py-1 mb-2  bg-sky-700 text-white font-semibold rounded-md hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          onClick={calculateStrengthWithSafetyFactor}
        >
          Guardar
        </button>
      </div>
    </>
  );
}

export default ToolTwo;
