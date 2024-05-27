import React from 'react';
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

function ToolFour() {
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
                <p className="font-sans text-start mb-2">
                  Exction Description Four
                </p>
                <div className="flex">
                  <div className="flex-col w-[90%] divide-y divide-stone-200 border-x  border-y  mx-auto">
                    <div className="flex mx-auto">
                      <label className="w-1/2 px-2 text-stone-600 text-start">
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
                      <label className="w-1/2 px-2 text-stone-600 text-start">
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
  )
}

export default ToolFour