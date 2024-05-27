import React from "react";

function Template() {
  return (
    <>
      <Dialog>
        <DialogTrigger className="bg-gradient-to-r font-sans text-xs h-20 w-20 from-cyan-500 to-blue-500 mx-auto p-2 text-white m-2 rounded-md">
          <div className="flex flex-col items-center justify-center">
            <IconOne />
            <p>Datos Generales</p>
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
                      <label className="w-1/2 px-2 text-stone-600 text-start">
                        TMN del agregado
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

              <div>
                <ToolTwo />
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Template;