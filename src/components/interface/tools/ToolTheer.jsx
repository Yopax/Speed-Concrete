"use client";
import React from "react";
import { useState } from "react";
import { useStore } from "@/store/useStore";

function ToolTheer() {
  const [tmn, setTmn] = useState("");
  const [mf, setMf] = useState("");
  const setVAG = useStore((state) => state.setVAG);
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
      const vag = agregadoGrueso / 2620;
      setVAG(vag);
    } else {
      alert("Por favor, ingrese valores válidos.");
    }
  };
  return (
    <>
      <div>
        <h1>Calculadora de V.A.G</h1>
        <div>
          <label>
            TMN:
            <select value={tmn} onChange={(e) => setTmn(e.target.value)}>
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
          </label>
        </div>
        <div>
          <label>
            MF:
            <select value={mf} onChange={(e) => setMf(e.target.value)}>
              <option value="">Seleccione MF</option>
              <option value={2.4}>2.4</option>
              <option value={2.6}>2.6</option>
              <option value={2.8}>2.8</option>
              <option value={3}>3</option>
            </select>
          </label>
        </div>
        <button onClick={handleCalculate}>Calcular V.A.G</button>
      </div>
    </>
  );
}

export default ToolTheer;
