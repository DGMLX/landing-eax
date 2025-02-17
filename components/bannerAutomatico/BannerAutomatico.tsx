'use client'

import { useState, useEffect, useRef } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { TbPointFilled } from "react-icons/tb";


const banners = [
  { bg: "bg-gray-200", text: "Nuevo producto 1", urlImg:'/inicio/banner-1.png' },
  { bg: "bg-gray-300", text: "Nuevo producto 2", urlImg:'/inicio/banner-2.png' },
  { bg: "bg-gray-400", text: "Nuevo producto 3", urlImg:'/inicio/banner-3.png' },
  { bg: "bg-gray-500", text: "Nuevo producto 4", urlImg:'/inicio/banner-4.png' },
];

const BannerAutomatico: React.FC = () => {
  const [currentBanner, setCurrentBanner] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 1800);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <>
    <div className="mt-14 flex justify-center items-center">
      <div
        className={`h-[416px] w-full  ${banners[currentBanner].bg} flex justify-center items-center rounded-xl transition-all duration-500`}
        >
          {/* <Image src={banners[currentBanner].urlImg} alt="Imágenes nuevos productos" width={1000} height={500}/> */}
        <h3 className="text-3xl">{banners[currentBanner].text}</h3>
      </div>
     
    </div>
     <div className="flex justify-center items-center mt-10">
     <IoIosArrowBack className="text-3xl"/>
        {banners.map((_, index) => (
            <TbPointFilled
                key={index}
                className={`text-2xl mx-1 ${currentBanner === index ? "text-gray-600 text-3xl" : "text-gray-400"}`}
            />
        ))}
     <IoIosArrowForward className="text-3xl"/>

 </div>
          </>
  );
};


export default BannerAutomatico;