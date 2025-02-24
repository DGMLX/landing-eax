'use client'

import { useEffect, useRef, useState } from "react";
import { HiArrowLongRight } from "react-icons/hi2";



const banners = [
    {
   
      titulo:"Trituradoras: Nuevas soluciones para el manejo de residuos verdes", 
      descripcion: "Descubre la gama más avanzada de trituradoras, diseñadas para adaptarse a cada necesidad con máxima eficiencia y versatilidad. Desde modelos estacionarios, móviles y sobre oruga, hasta remolcables y PTO.", 
      urlImg:'/inicio/trituradoras.jpg',
      boton:"DESCUBRE MÁS"
    },

    {
   
      titulo:"Briquetadoras: Convierte Residuos en Valor",
      descripcion: "Maximiza el aprovechamiento de materiales, una solución eficiente para transformar residuos en briquetas compactas y listas para su uso. Con un proceso limpio y sencillo, reducen costos de almacenamiento y transporte, aportando valor agregado a materiales desechables.", 
      urlImg:'/inicio/briqueta.jpg',
      boton:"DESCUBRE MÁS"
    },
    {
     
      titulo:"Multicar: Versatilidad y Rendimiento para Cada Desafío", 
      descripcion: "El Multicar es la solución ideal para quienes buscan versatilidad y rendimiento en tareas urbanas e industriales. Con un diseño técnicamente avanzado, ofrece máxima eficiencia operativa, reduciendo costos y optimizando recursos.", 
      urlImg:'/inicio/multicar.jpg',
      boton:"DESCUBRE MÁS"
    }
  ];
  


const SliderProductos = () =>{

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
         <section className=" bg-black/30 pt-24 pb-16 h-[400px]  justify-center flex-col flex"  style={{
            backgroundImage:`url(${banners[currentBanner].urlImg})`,
            backgroundBlendMode:"darken",
            backgroundRepeat:"no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
                    
            <div className="w-full lg:w-1/2 pl-5 pr-10 md:pr-36 lg:pr-0   lg:pl-32 ">
                <div className="h-[250px] w-full flex flex-col justify-center">
              
                <h2 className="text-[21px]  md:text-3xl font-bold text-[#FBFBFB]">{banners[currentBanner].titulo}</h2>
                <p className="mt-3 text-lg hidden lg:block text-[#FBFBFB]">{banners[currentBanner].descripcion}</p>
                <div className="">
                    <button className="hover:bg-[#A7283D] bg-[#e34f4f] text-white text-[16px] py-2 px-7 rounded-full mt-5 font-bold   flex items-center">{banners[currentBanner].boton}<HiArrowLongRight className="text-3xl ml-4"/></button>
                </div>
                </div>
            </div>
            <div className="flex justify-center mt-16 items-center gap-2">
            <button className={` h-[10px] w-[30px] rounded-full ${currentBanner === 0 ? 'bg-[#c4262e]' : 'bg-white'}`} onClick={()=>setCurrentBanner(0)}></button>
            <button className={` h-[10px] w-[30px] rounded-full ${currentBanner === 1 ? 'bg-[#c4262e]' : 'bg-white'}`} onClick={()=>setCurrentBanner(1)}></button>
            <button className={` h-[10px] w-[30px] rounded-full ${currentBanner === 2 ? 'bg-[#c4262e]' : 'bg-white'}`} onClick={()=>setCurrentBanner(2)}></button>
           
            </div>
    

        </section>
        </>
    )
}

export default SliderProductos;