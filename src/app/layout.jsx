import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Speed Concrete",
  description: "Diseño de mezclas de concreto",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          
        </ThemeProvider>
      </body>
    </html>
  );
}
