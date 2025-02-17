'use client';

import { useEffect, useRef, useState } from "react";



const banners = [
    {titulo1:"MAXIMIZA TU EFICIENCIA CON",titulo2:"TECNOLOGÍA DE VANGUARDIA", descripcion: "Utiliza maquinaria eficiente para limpieza y residuos orgánicos", urlImg:'' },
    {titulo1:"SOLUCIONES INNOVADORAS",titulo2:"PARA UN ENTORNO SOSTENIBLE",descripcion: "Utiliza maquinaria eficiente para limpieza y residuos orgánicos", urlImg:'' },
    {titulo1:"POTENCIA TU OPERACIÓN",titulo2:"CON NUESTRO SOPORTE", descripcion: "Utiliza maquinaria eficiente para limpieza y residuos orgánicos", urlImg:'' },
    {titulo1:"COMPROMISO CON LA",titulo2:"INNOVACIÓN Y LA SOSTENIBILIDAD",descripcion: "Utiliza maquinaria eficiente para limpieza y residuos orgánicos", urlImg:'' },
  ];
  

const BannerPrincipal:React.FC = () =>{

    const [currentBanner, setCurrentBanner] = useState<number>(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    
    useEffect(() => {
        intervalRef.current = setInterval(() => {
          setCurrentBanner((prev) => (prev + 1) % banners.length);
        }, 4000);
    
        return () => {
          if (intervalRef.current) clearInterval(intervalRef.current);
        };
      }, []);

    return(
        <>
          <section className=" bg-gray-200 rounded-lg py-24 px-5 md:px-16 h-[407px] lg:[500px]  flex-col justify-center flex">
                <h2 className="text-[21px] md:text-3xl font-bold">{banners[currentBanner].titulo1}</h2>
                <h2 className="text-[21px] md:text-3xl font-bold">{banners[currentBanner].titulo2}</h2>
                <p className="mt-8 text-2xl hidden md:block">{banners[currentBanner].descripcion}</p>
                <div>
                    <button className="bg-[#A7283D] text-white text-[16px] py-2 px-7 rounded-lg mt-12 font-bold">Contáctanos</button>
                </div>
            </section>
        </>
    )
}

export default BannerPrincipal