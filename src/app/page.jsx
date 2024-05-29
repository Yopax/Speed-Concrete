import BarNav from "@/components/interface/BarNav";
import Resultado from "@/components/interface/Resultado";
import TableOne from "@/components/interface/TableOne";
import ToolTwo from "@/components/interface/tools/ToolTwo";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <>
      <div className="flex w-[95%]  mx-auto my-10 space-x-2  max-sm:flex-col max-sm:space-x-0 ">
        <div className=" border-sky-700 border max-sm:mt-2 w-1/3 h-[500px] max-sm:w-full">
          <BarNav />
          <div className="flex-col">
          <Badge variant="outline" className="mb-5 mt-2 ml-5 ">Tabla de Resultado Finales</Badge>
            <TableOne />
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
    </>
  );
}
