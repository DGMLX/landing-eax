'use client';


import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";



const banners = [
    {
      id: 1,
      header:"SOLUCIONES",
      titulo:"Solución de Limpieza, Sanitización y Desinfección: Espacios Públicos más Seguros y Saludables", 
      descripcion: "Transforma la higiene urbana con un sistema de agua a alta presión y desinfectantes complementarios, diseñado para mantener los espacios públicos en óptimas condiciones. Adaptable a diversos vehículos, incluyendo el Camión Multipropósito Multicar.", 
      urlImg:'/inicio/banner_soluciones.jpg',
      boton:"DESCUBRE MÁS",
      href:"https://ecoalliance.cl/soluciones/"
    },
    {
      id: 2,
      header:"PRODUCTOS",
      titulo:"Barredoras de Calle: Innovación para Ciudades Más Limpias",
      descripcion: "Mantén los espacios públicos libres de residuos con barredoras de desempeño confiable y bajo mantenimiento. Su tecnología de barrido y aspiración, junto con materiales resistentes a la corrosión, aseguran una limpieza profunda y duradera.", 
      urlImg:'/inicio/banner_productos3.jpg',
      boton:"DESCUBRE MÁS",
      href:"https://ecoalliance.cl/productos/"
    },
    {
      id: 3,
      header:"SERVICIOS",
      titulo:"Montaje de Equipos: Eficiencia desde el Primer Día", 
      descripcion: "Contamos con la experiencia y capacidad para realizar el montaje y puesta en marcha de equipos y máquinas especiales, asegurando una instalación eficiente y operativa desde el primer momento.", 
      urlImg:'/inicio/banner_servicios2.jpg',
      boton:"DESCUBRE MÁS",
      href:"https://ecoalliance.cl/servicios/"
    },

  ];
  

const BannerPrincipal:React.FC = () =>{

    const [currentBanner, setCurrentBanner] = useState<number>(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const resetInterval = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current); 
      }
      intervalRef.current = setInterval(() => {
        setCurrentBanner((prev) => (prev + 1) % banners.length);
      }, 4000);
    };
    
    useEffect(() => {
      resetInterval();
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current); 
        }
      };
    }, [currentBanner]); 



    return(
        <>
        
       
          <section className={` w-screen bg-black/35 h-[420px] md:h-[470px] 2xl:h-[550px]  justify-center flex-col flex relative overflow-hidden `}>
              <AnimatePresence initial={false}>
              <motion.div
                key={banners[currentBanner].id}
                initial={{ x: "100%" }}
                animate={{  x: 0 }}
                exit={{  x: "-100%" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 flex flex-col justify-center  bg-cover bg-center bg-black/35 "
                style={{ backgroundImage:banners[currentBanner].urlImg !== '' ? `url(${banners[currentBanner].urlImg})` : 'bg-gray-500',
                backgroundBlendMode:"darken",
                backgroundRepeat:"no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center", }}
              >
                      
                  <MdOutlineArrowBackIos className={`text-2xl md:text-5xl  text-white absolute  left-5 md:left-10 `}  onClick={()=>{
                    if(currentBanner === 0){
                      setCurrentBanner(2)
                      resetInterval()
                    }else{
                      setCurrentBanner((prev) => (prev - 1) % banners.length);
                      resetInterval()
                    }
                  }}/>
                  <MdOutlineArrowForwardIos className={`text-2xl md:text-5xl  text-white absolute ${currentBanner === 1 ? 'right-5 md:right-6' : 'right-5 md:right-10'} `} onClick={()=>setCurrentBanner((prev) => (prev + 1 ) % banners.length)}/>
              

                  <div className="pl-20 pr-14 md:pr-0  md:w-2/3 xl:w-[55%] p-5  md:pl-32 mt-5">
                      <div className="h-[250px] w-full flex flex-col justify-around">
                        <h2 className=" text-lg 2xl:text-xl font-bold text-[#FBFBFB] mb-3 tracking-[5px]">{banners[currentBanner].header}</h2>
                        <h2 className="  text-[21px] 2xl:text-4xl  md:text-3xl font-bold text-[#FBFBFB]">{banners[currentBanner].titulo}</h2>
                        <p className="mt-3 text-lg hidden lg:block text-[#FBFBFB]">{banners[currentBanner].descripcion}</p>
                        <div className="flex justify-center sm:justify-start">
                            <Link href={banners[currentBanner].href} className="hover:bg-[#A7283D] bg-[#e34f4f] text-white text-[16px] py-2 px-7 rounded-full mt-10 font-bold   flex items-center">{banners[currentBanner].boton}<HiArrowLongRight className="text-3xl ml-4"/></Link>
                        </div>
                      </div>
                  </div>
                  <div className="flex justify-center mt-16 items-center gap-2">
                    <button className={` h-[10px] w-[30px] rounded-full ${currentBanner === 0 ? 'bg-[#c4262e]' : 'bg-white'}`} onClick={()=>setCurrentBanner(0)} ></button>
                    <button className={` h-[10px] w-[30px] rounded-full ${currentBanner === 1 ? 'bg-[#c4262e]' : 'bg-white'}`} onClick={()=>setCurrentBanner(1)}></button>
                    <button className={` h-[10px] w-[30px] rounded-full ${currentBanner === 2 ? 'bg-[#c4262e]' : 'bg-white'}`} onClick={()=>setCurrentBanner(2)}></button>
                
                  </div>
                  </motion.div>
                  </AnimatePresence>
               
            </section> 

        </>
    )
}

export default BannerPrincipal