'use client';

import { useEffect, useRef, useState } from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const banners = [
    {
      header:"CENTROS DE DATOS Y REDES",
      titulo:"Cooling Next-Generation Data Centers", 
      descripcion: "nVent's broad, modular portfolio of Data Center and Networking Solutions, combined with our cutting edge cooling technology, enables you to specify and deploy your project on time to ensure data and network infrastructure availability and protection.", 
      urlImg:'',
      boton:"OBTENGA MÁS INFORMACIÓN"
    },

    {
      header:"SOSTENIBILIDAD Y ELECTRIFICACIÓN",
      titulo:"Construcción de un mundo más sustentable y electrificado",
      descripcion: "At nVent, our solutions connect and protect a more sustainable and electrified world, bringing efficiency, resiliency and safety to critical systems around the globe.", 
      urlImg:'',
      boton:"MÁS INFORMACIÓN"
    },
    {
      header:"SUSTAINABILITY REPORT",
      titulo:"nVent Releases 2023 Sustainability Report", 
      descripcion: "Report details meaningful progress across its four focus areas of People, Products, Planet and Governance.", 
      urlImg:'',
      boton:"MÁS INFORMACIÓN"
    },
    {
      header:"COMUNICADO DE PRENSA",
      titulo:"nVent Completes Sale of Thermal Management Business",
      descripcion: "nVent Electric PLC announced that it has completed the previously announced sale of its Thermal Management business to funds managed by Brookfield Asset Management", 
      urlImg:'', 
      boton:"OBTENGA MÁS INFORMACIÓN"
    },
    {
      header:"COMUNICADO DE PRENSA",
      titulo:"nVent Completa la adquisición de Trachte",
      descripcion: "nVent anunció hoy que ha completado la adquisición previamente anunciada de la empresa matriz de Trachte, LLC.", 
      urlImg:'',
      boton:"MÁS INFORMACIÓN"
    },
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
          <section className=" bg-gray-400  py-24 pl-32  h-[407px] lg:[500px]  flex-col justify-center flex">
              <div className="w-1/2">
                  <h2 className="text-lg font-bold text-[#FBFBFB] mb-3">{banners[currentBanner].header}</h2>
                  <h2 className="text-[21px] md:text-3xl font-bold text-[#FBFBFB]">{banners[currentBanner].titulo}</h2>
                  <p className="mt-3 text-lg hidden md:block text-[#FBFBFB]">{banners[currentBanner].descripcion}</p>
                  <div>
                      <button className="hover:bg-[#A7283D] bg-[#e34f4f] text-white text-[16px] py-2 px-7 rounded-full mt-12 font-bold   flex items-center">{banners[currentBanner].boton}<HiArrowLongRight className="text-3xl ml-4"/></button>
                  </div>
              </div>
            </section>
        </>
    )
}

export default BannerPrincipal