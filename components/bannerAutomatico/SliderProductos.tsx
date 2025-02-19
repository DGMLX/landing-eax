'use client'

import { useEffect, useRef, useState } from "react";
import { HiArrowLongRight } from "react-icons/hi2";



const banners = [
    {
      header:"",
      titulo:"Nuevo centro de productos", 
      descripcion: "Convenient location to find the latest new product launches", 
      urlImg:'',
      boton:"SEE ALL NEW PRODUCTOS"
    },

    {
      header:"NEW PRODUCTOS NEWS",
      titulo:"Enclosures for Electric Vehicle (EV) Charging Inverters",
      descripcion: "As the world becomes more sustainable and electrified, people around the world are looking for ways to reduce their impact on the environment.", 
      urlImg:'',
      boton:"OBTENGA MÁS INFORMACIÓN"
    },
    {
      header:"PRODUCTO NUEVO",
      titulo:"RDHX PRO", 
      descripcion: "Revolutionary new high-performance rear door cooling unit, offering the capability to upgrade data centres with up to 78 kW high-density racks, meeting the requirements for the growing use of AI-enhanced applications, demands for higher energy efficiency and sustainability, and the need for greater data centre space utilisation.", 
      urlImg:'',
      boton:"FIND OUT MORE"
    },
    {
      header:"PRODUCTO NUEVO",
      titulo:"Software Design to Manufacturing (DTM)",
      descripcion: "Gracias a la biblioteca fácil de usar e inteligente de piezas principales, los diseñadores pueden trabajar con eficiencia en un solo proyecto mientras el software garantiza, de forma automática, la sincronización de los datos. En consecuencia, se simplifica el proceso de diseño y planificación, y se disminuyen los errores.", 
      urlImg:'', 
      boton:"OBTENGA MÁS INFORMACIÓN"
    },
    {
      header:"PRODUCTO NUEVO",
      titulo:"Rack Safety Plus Product Configuration",
      descripcion: "Select the power input, power output, additional features such as a surge arrester or EMC filter based on your infrastructure.", 
      urlImg:'',
      boton:"OBTENGA MÁS INFORMACIÓN"
    },
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
         <section className=" bg-gray-400  pt-24 pb-16 h-[400px]  justify-center flex-col flex">
                    
            <div className="w-1/2  pl-32 ">
                <div className="h-[250px] w-full">
                <h2 className="text-lg font-bold text-[#FBFBFB] mb-3 ">{banners[currentBanner].header}</h2>
                <h2 className="text-[21px] md:text-3xl font-bold text-[#FBFBFB]">{banners[currentBanner].titulo}</h2>
                <p className="mt-3 text-lg hidden md:block text-[#FBFBFB]">{banners[currentBanner].descripcion}</p>
                <div>
                    <button className="hover:bg-[#A7283D] bg-[#e34f4f] text-white text-[16px] py-2 px-7 rounded-full mt-5 font-bold   flex items-center">{banners[currentBanner].boton}<HiArrowLongRight className="text-3xl ml-4"/></button>
                </div>
                </div>
            </div>
            <div className="flex justify-center mt-16 items-center gap-2">
            <button className={` h-[10px] w-[30px] rounded-full ${currentBanner === 0 ? 'bg-[#c4262e]' : 'bg-white'}`} onClick={()=>setCurrentBanner(0)}></button>
            <button className={` h-[10px] w-[30px] rounded-full ${currentBanner === 1 ? 'bg-[#c4262e]' : 'bg-white'}`} onClick={()=>setCurrentBanner(1)}></button>
            <button className={` h-[10px] w-[30px] rounded-full ${currentBanner === 2 ? 'bg-[#c4262e]' : 'bg-white'}`} onClick={()=>setCurrentBanner(2)}></button>
            <button className={` h-[10px] w-[30px] rounded-full ${currentBanner === 3 ? 'bg-[#c4262e]' : 'bg-white'}`} onClick={()=>setCurrentBanner(3)}></button>
            <button className={` h-[10px] w-[30px] rounded-full ${currentBanner === 4 ? 'bg-[#c4262e]' : 'bg-white'}`} onClick={()=>setCurrentBanner(4)}></button>
            </div>
    

        </section>
        </>
    )
}

export default SliderProductos;