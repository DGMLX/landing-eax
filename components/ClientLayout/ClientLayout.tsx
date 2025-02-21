"use client"; // Asegura que este archivo es un componente cliente

import { usePathname } from "next/navigation";
import Navbar from "../navbar/Navbar";
import NavbarMovil from "../navbarMovil/NavbarMovil";
import { Footer } from "../footer/Footer";
import NavbarV2 from "../navbar/IndiceSuperior/NavbarV2";
import { FooterV2 } from "../footer/FooterV2";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const excludedPaths = ["/inicio",];

  if (excludedPaths.includes(pathname)) {
    return <>
        <NavbarV2/>
        <NavbarMovil />
        {children}
        <FooterV2 />
    </>;

  }

  return (
    <>
      <Navbar />
      <NavbarMovil />
      {children}
      <Footer />
    </>
  );
}

