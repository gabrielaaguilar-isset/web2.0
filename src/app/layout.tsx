import type { Metadata } from "next";
import "./globals.css";
import { Syne } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

const syne = Syne({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Gabriela Aguilar | Frontend Developer",
  description:
    "¡Bienvenido/a a mi sitio web! Aquí podrás descubrir mis proyectos digitales, las paginas web que he hecho y mis habilidades",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${syne.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
