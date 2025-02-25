'use client';

import { useEffect, useRef, useState } from "react";
import { HiArrowLongRight } from "react-icons/hi2";



const banners = [
    {
      header:"SOLUCIONES",
      titulo:"Solución de Limpieza, Sanitización y Desinfección: Espacios Públicos más Seguros y Saludables", 
      descripcion: "Transforma la higiene urbana con un sistema de agua a alta presión y desinfectantes complementarios, diseñado para mantener los espacios públicos en óptimas condiciones. Adaptable a diversos vehículos, incluyendo el Camión Multipropósito Multicar.", 
      urlImg:'/inicio/banner_soluciones.jpg',
      boton:"DESCUBRE MÁS"
    },
    {
      header:"PRODUCTOS",
      titulo:"Barredoras de Calle: Innovación para Ciudades Más Limpias",
      descripcion: "Mantén los espacios públicos libres de residuos con barredoras de desempeño confiable y bajo mantenimiento. Su tecnología de barrido y aspiración, junto con materiales resistentes a la corrosión, aseguran una limpieza profunda y duradera.", 
      urlImg:'/inicio/banner_productos3.jpg',
      boton:"DESCUBRE MÁS"
    },
    {
      header:"SERVICIOS",
      titulo:"Montaje de Equipos: Eficiencia desde el Primer Día", 
      descripcion: "Contamos con la experiencia y capacidad para realizar el montaje y puesta en marcha de equipos y máquinas especiales, asegurando una instalación eficiente y operativa desde el primer momento.", 
      urlImg:'/inicio/banner_servicios.jpg',
      boton:"DESCUBRE MÁS"
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
   
            <section className=" bg-black/35 h-[420px] md:h-[470px] 2xl:h-[550px]  justify-center flex-col flex "
            style={{
              backgroundImage:banners[currentBanner].urlImg !== '' ? `url(${banners[currentBanner].urlImg})` : 'bg-gray-500',
              backgroundBlendMode:"darken",
              backgroundRepeat:"no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}>

                <div className="md:w-2/3 xl:w-[55%] p-5  md:pl-32 mt-5">
                    <div className="h-[250px] w-full flex flex-col justify-around">
                      <h2 className=" text-lg font-bold text-[#FBFBFB] mb-3 ">{banners[currentBanner].header}</h2>
                      <h2 className="  text-[21px] md:text-3xl font-bold text-[#FBFBFB]">{banners[currentBanner].titulo}</h2>
                      <p className="mt-3 text-lg hidden lg:block text-[#FBFBFB]">{banners[currentBanner].descripcion}</p>
                      <div className="flex justify-center sm:justify-start">
                          <button className="hover:bg-[#A7283D] bg-[#e34f4f] text-white text-[16px] py-2 px-7 rounded-full mt-10 font-bold   flex items-center">{banners[currentBanner].boton}<HiArrowLongRight className="text-3xl ml-4"/></button>
                      </div>
                    </div>
                </div>
                <div className="flex justify-center mt-16 items-center gap-2">
                  <button className={` h-[10px] w-[30px] rounded-full ${currentBanner === 0 ? 'bg-[#c4262e]' : 'bg-white'}`} onClick={()=>setCurrentBanner(0)}></button>
                  <button className={` h-[10px] w-[30px] rounded-full ${currentBanner === 1 ? 'bg-[#c4262e]' : 'bg-white'}`} onClick={()=>setCurrentBanner(1)}></button>
                  <button className={` h-[10px] w-[30px] rounded-full ${currentBanner === 2 ? 'bg-[#c4262e]' : 'bg-white'}`} onClick={()=>setCurrentBanner(2)}></button>
                  {/* <button className={` h-[10px] w-[30px] rounded-full ${currentBanner === 3 ? 'bg-[#c4262e]' : 'bg-white'}`} onClick={()=>setCurrentBanner(3)}></button>
                  <button className={` h-[10px] w-[30px] rounded-full ${currentBanner === 4 ? 'bg-[#c4262e]' : 'bg-white'}`} onClick={()=>setCurrentBanner(4)}></button> */}
                </div>
        

            </section>

        </>
    )
}

export default BannerPrincipal