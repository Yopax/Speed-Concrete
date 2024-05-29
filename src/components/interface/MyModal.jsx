import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";


export default function MyModal() {
  let [isOpen, setIsOpen] = useState(true);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <>
      <Transition appear show={isOpen}>
        <Dialog
          as="div"
          className="relative z-10 focus:outline-none"
          onClose={close}
        >
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-slate-200 bg-opacity-50">
            <div className="flex min-h-full w-full items-center justify-center p-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="w-[30%] max-sm:w-[90%] max-w-md bg-white border border-sky-700 p-6 backdrop-blur-2xl">
                  <DialogTitle
                    as="h3"
                    className=" text-base/7 font-medium text-black"
                  >
                    <div className="flex justify-between">
                    <p>Speed Concrete</p>
                    <Button
                      className=" inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                      onClick={close}
                    >
                      <IoMdClose />
                    </Button>
                    </div>
                    
                  </DialogTitle>
                  <p className="text-xs text-slate-500">
                    Bienvenido a nuestra aplicación web para el diseño de
                    mezclas de concreto. Aquí te guiamos a través de un proceso
                    sencillo de cuatro pasos que te permitirá obtener un diseño
                    de mezcla optimizado y listo para su uso en tus proyectos de
                    construcción. Sigue estos pasos y descarga tu diseño de
                    mezcla de concreto en pocos minutos.
                  </p>   
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
