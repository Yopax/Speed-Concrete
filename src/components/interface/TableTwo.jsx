import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
   
  const invoices = [
    {
      invoice: "Muros de Cimentación y Zapatas",
      paymentStatus: "3",
      paymentMethod: "1",
    },
    {
      invoice: "Cajones de cimentación",
      paymentStatus: "3",
      paymentMethod: "1",
    },
    {
      invoice: "Vigas y muros reforzados",
      paymentStatus: "4",
      paymentMethod: "1",
    },
    {
      invoice: "Columnas para edificios",
      paymentStatus: "4",
      paymentMethod: "1",
    },
    {
      invoice: "Pavimentos y losas",
      paymentStatus: "3",
      paymentMethod: "1",
    },
    {
      invoice: "Concreto masivo ",
      paymentStatus: "3",
      paymentMethod: "1",
    },
  ]
   
  export function TableTwo() {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Tipos de Construcción</TableHead>
            <TableHead>Máximo</TableHead>
            <TableHead>Mínimo</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className="text-right">{invoice.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }