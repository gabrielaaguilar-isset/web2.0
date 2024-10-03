import type { Metadata } from "next";
import "./globals.css";
import { Syne } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";

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
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <body className={`${syne.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}