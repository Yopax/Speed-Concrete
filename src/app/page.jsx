"use client";
import Graph1 from "@/components/graficas/Graph1";
import Graph2 from "@/components/graficas/Graph2";
import BarNav from "@/components/interface/BarNav";
import MyModal from "@/components/interface/MyModal";
import NavBar from "@/components/interface/NavBar";
import Resultado from "@/components/interface/Resultado";
import TableOne from "@/components/interface/TableOne";
import { TableTwo } from "@/components/interface/TableTwo";
import DescargarInPdf from "@/components/interface/documents/DescargarInPdf";
import Facebook from "@/components/interface/icons/Facebook";
import Github from "@/components/interface/icons/Github";
import Linkedin from "@/components/interface/icons/Linkedin";
import YouTube from "@/components/interface/icons/YouTube";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function Home() {
  const styleOne =
    "max-[768px]:w-full max-[768px]:space-x-0 max-[1024px]:w-full p-2 border-sky-700 border max-sm:mt-2 w-1/3 h-[500px] max-sm:w-full";
  return (
    <>
      <MyModal />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex w-[95%]  mx-auto mt-[70px] h-full max-sm:my-1 space-x-2 max-[1024px]:gap-2 max-[1024px]:grid-cols-1 max-[1024px]:grid max-[768px]:grid-cols-1 max-[768px]:grid max-[768px]:my-2  max-sm:flex-col max-sm:space-x-0 max-[768px]:space-x-0 ">
          <NavBar />
          <div className="max-[768px]:mt-14 max-[425px]:mt-14 max-[768px]:w-full max-[1024px]:w-full border-sky-700 border max-sm:mt-2 w-1/3 h-[500px] max-sm:w-full">
            <BarNav />
            <div className="flex-col">
              <p className=" mt-2 ml-5 text-xs font-bold ">
                SpeedConcrete - Tabla de Resultado Finales
              </p>
              <TableOne />
              <p className=" mt-4 ml-5 mb-2 text-xs font-bold ">
                Tabla informativa - Asentamiento (pulg.)
              </p>
              <TableTwo />
              <div className="flex space-x-2 justify-center mt-2"></div>
              <div className="flex space-x-2 justify-center my-3 max-sm:my-0">
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
          <div className={styleOne}>
            <Badge variant="outline">Resultados</Badge>
            <Resultado />
            <div className="flex space-x-2 mt-7 justify-center">
              <DescargarInPdf />
            </div>
            <p className="text-center text-xs">
              Completa todos los pasos y descarga tu informe.
            </p>
          </div>
          <div className={styleOne}>
            <Badge variant="outline">Gráficos</Badge>
            <Graph1 />
            <Graph2 />
          </div>
        </div>
      </motion.div>
    </>
  );
}
