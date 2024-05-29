"use client";
import React from "react";
import CardResult from "./CardResult";

function Resultado() {

  const volAgua = 1+1;

  return (
    <>
      <div className="w-[90%] mx-auto grid grid-cols-3 gap-2">

        <CardResult
          title="Resistencia con factor de seguridad"
          result={volAgua}
        />
      </div>
    </>
  );
}

export default Resultado;
