"use client";
import BarNav from "@/components/interface/BarNav";
import MyModal from "@/components/interface/MyModal";
import Resultado from "@/components/interface/Resultado";
import TableOne from "@/components/interface/TableOne";
import DescargarInPdf from "@/components/interface/documents/DescargarInPdf";
import DescargarInWord from "@/components/interface/documents/DescargarInWord";
import Facebook from "@/components/interface/icons/Facebook";
import Github from "@/components/interface/icons/Github";
import Linkedin from "@/components/interface/icons/Linkedin";
import YouTube from "@/components/interface/icons/YouTube";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <MyModal />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex w-[95%]  mx-auto my-10 max-sm:my-1 space-x-2  max-sm:flex-col max-sm:space-x-0 ">
          <div className=" border-sky-700 border max-sm:mt-2 w-1/3 h-[500px] max-sm:w-full">
            <BarNav />
            <div className="flex-col">
              <Badge variant="outline" className="mb- mt-2 ml-5 ">
                SpeedConcrete - Tabla de Resultado Finales
              </Badge>
              <p className="text-xs w-[90%] mx-auto my-2">
                Speed Concrete calcula el diseño de mezcla de concreto según las
                normas del ACI. El objetivo es desarrollar una mezcla de
                concreto que cumpla con los requisitos de resistencia y
                trabajabilidad para ser utilizada en diversas aplicaciones de
                construcción.
              </p>
              <TableOne />
              <div className="flex space-x-2 justify-center mt-2">
                <DescargarInPdf />
                <DescargarInWord />
              </div>
              <p className="text-center text-xs">
                Descarga tu informe en cualquier formato.
              </p>
              <div className="flex space-x-2 justify-center my-3">
                <motion.button
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.4 }}
                >
                  <Linkedin />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.4 }}
                >
                  <Github />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.4 }}
                >
                  <Facebook />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.4 }}
                >
                  <YouTube />
                </motion.button>
              </div>
            </div>
          </div>
          <div className=" p-2 border-sky-700 border max-sm:mt-2 w-1/3 h-[500px] max-sm:w-full">
            <Badge variant="outline">Resultados</Badge>
            <Resultado />
          </div>
          <div className=" p-2 border-sky-700 border max-sm:mt-2 w-1/3 h-[500px] max-sm:w-full">
            <Badge variant="outline">Graficos</Badge>
          </div>
        </div>
      </motion.div>
    </>
  );
}
