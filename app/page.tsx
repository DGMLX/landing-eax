'use client'


import BannerAutomatico from "@/components/bannerAutomatico/BannerAutomatico"


import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });


const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
};

const nuevosProductos = [
    {
        nombre:"Chipeadora",
        descripcion:"Reduce Residuos de Madera y Restos de Poda. Chipeadoras de Disco, Chipeadora PTO, Chipeadoras de Tambor, Chipeadoras sobre Orugas y Chipeadoras Especiales."
    },
    {
        nombre:"Chipeadora",
        descripcion:"Reduce Residuos de Madera y Restos de Poda. Chipeadoras de Disco, Chipeadora PTO, Chipeadoras de Tambor, Chipeadoras sobre Orugas y Chipeadoras Especiales."
    },
    {
        nombre:"Chipeadora",
        descripcion:"Reduce Residuos de Madera y Restos de Poda. Chipeadoras de Disco, Chipeadora PTO, Chipeadoras de Tambor, Chipeadoras sobre Orugas y Chipeadoras Especiales."
    },
    {
        nombre:"Chipeadora",
        descripcion:"Reduce Residuos de Madera y Restos de Poda. Chipeadoras de Disco, Chipeadora PTO, Chipeadoras de Tambor, Chipeadoras sobre Orugas y Chipeadoras Especiales."
    },
    {
        nombre:"Aseo urbano",
        descripcion:"Reduce Residuos de Madera y Restos de Poda. Chipeadoras de Disco, Chipeadora PTO, Chipeadoras de Tambor, Chipeadoras sobre Orugas y Chipeadoras Especiales."
    },
    {
        nombre:"Espacios públicos",
        descripcion:"Reduce Residuos de Madera y Restos de Poda. Chipeadoras de Disco, Chipeadora PTO, Chipeadoras de Tambor, Chipeadoras sobre Orugas y Chipeadoras Especiales."
    },
    {
        nombre:"Multipropósitos",
        descripcion:"Reduce Residuos de Madera y Restos de Poda. Chipeadoras de Disco, Chipeadora PTO, Chipeadoras de Tambor, Chipeadoras sobre Orugas y Chipeadoras Especiales."
    },
    {
        nombre:"Chipeadora",
        descripcion:"Reduce Residuos de Madera y Restos de Poda. Chipeadoras de Disco, Chipeadora PTO, Chipeadoras de Tambor, Chipeadoras sobre Orugas y Chipeadoras Especiales."
    }
]


const HomePage = () =>{
    return(
        <main className="mt-36 mx-5 md:mx-16">
            
            <section className=" bg-gray-200 rounded-3xl py-24 px-16">
                <h2 className="text-[25px] md:text-3xl font-bold">MAXIMIZA TU EFICIENCIA CON <br/> TECNOLOGIA DE VANGUARDIA</h2>
                <p className="mt-8 text-2xl hidden md:block">Utiliza maquinaria eficiente para limpieza y residuos <br></br>orgánicos</p>
                <button className="bg-white text-[16px] py-2 px-7 rounded-lg mt-12 font-bold">Contáctanos</button>
            </section>


            <section className="mt-24 mb-24 w-full">
                <h2 className="text-3xl font-bold">Productos</h2>
                <div className="lg:hidden ">

                    <Slider {...settings} >
                       {
                            nuevosProductos.map((card,index)=>{
                                return(
                                    

                                    <div key={index} className="md:w-[48%] rounded-xl shadow-lg shadow-gray-300 mt-14">
                                        <div className="bg-gray-100 h-[169px]">
                                        </div>
                                        <div className="px-7 pb-14">
                                            <h3 className="mt-4 text-2xl">{card.nombre}</h3>
                                            <p className="mt-7 text-xl">{card.descripcion}</p>
                                        </div>
                                    </div>
                                    
                                )
                            })
                        } 
                    </Slider>      
                </div> 
                <div className="sm:justify-between sm:flex-wrap hidden lg:flex">
                    {
                            nuevosProductos.map((card,index)=>{
                                return(
                                    <div key={index} className="md:w-[48%] lg:w-[32%] xl:w-[24%] rounded-xl shadow-lg shadow-gray-300 mt-14">
                                        <div className="bg-gray-100 h-[169px] rounded-t-xl">
                                        </div>
                                        <div className="px-7 pb-14">
                                            <h3 className="mt-4 text-2xl">{card.nombre}</h3>
                                            <p className="mt-7 text-xl">{card.descripcion}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }


                </div>
              

{/* 
                <div className="flex sm:justify-between sm:flex-wrap ">

                    <div className=" md:w-[48%] lg:w-[32%] xl:w-[24%] rounded-xl shadow-lg shadow-gray-300 mt-14">
                        <div className="bg-gray-100 h-[169px] rounded-t-xl">
                        </div>
                        <div className="px-7 pb-14">
                            <h3 className="mt-4 text-2xl">Chipeadora</h3>
                            <p className="mt-7 text-xl">Reduce Residuos de Madera y Restos de Poda. Chipeadoras de Disco, Chipeadora PTO, Chipeadoras de Tambor, Chipeadoras sobre Orugas y Chipeadoras Especiales.</p>
                        </div>
                    </div>

                    <div className=" md:w-[48%] lg:w-[32%] xl:w-[24%]  rounded-xl shadow-lg shadow-gray-300 mt-14">
                        <div className="bg-gray-100 h-[169px] rounded-t-xl">
                        </div>
                        <div className="px-7 pb-14">
                            <h3 className="mt-4 text-2xl">Chipeadora</h3>
                            <p className="mt-7 text-xl">Reduce Residuos de Madera y Restos de Poda. Chipeadoras de Disco, Chipeadora PTO, Chipeadoras de Tambor, Chipeadoras sobre Orugas y Chipeadoras Especiales.</p>
                        </div>
                    </div>

                    <div className="md:w-[48%] lg:w-[32%] xl:w-[24%]  rounded-xl shadow-lg shadow-gray-300 mt-14">
                        <div className="bg-gray-100 h-[169px] rounded-t-xl">
                        </div>
                        <div className="px-7 pb-14">
                            <h3 className="mt-4 text-2xl">Chipeadora</h3>
                            <p className="mt-7 text-xl">Reduce Residuos de Madera y Restos de Poda. Chipeadoras de Disco, Chipeadora PTO, Chipeadoras de Tambor, Chipeadoras sobre Orugas y Chipeadoras Especiales.</p>
                        </div>
                    </div>

                    <div className="md:w-[48%] lg:w-[32%] xl:w-[24%]  rounded-xl shadow-lg shadow-gray-300 mt-14">
                        <div className="bg-gray-100 h-[169px] rounded-t-xl">
                        </div>
                        <div className="px-7 pb-14">
                            <h3 className="mt-4 text-2xl">Chipeadora</h3>
                            <p className="mt-7 text-xl">Reduce Residuos de Madera y Restos de Poda. Chipeadoras de Disco, Chipeadora PTO, Chipeadoras de Tambor, Chipeadoras sobre Orugas y Chipeadoras Especiales.</p>
                        </div>
                    </div>

                    <div className="md:w-[48%] lg:w-[32%] xl:w-[24%]  rounded-xl shadow-lg shadow-gray-300 mt-14">
                        <div className="bg-gray-100 h-[169px] rounded-t-xl">
                        </div>
                        <div className="px-7 pb-14">
                            <h3 className="mt-4 text-2xl">Aseo urbano</h3>
                            <p className="mt-7 text-xl">Reduce Residuos de Madera y Restos de Poda. Chipeadoras de Disco, Chipeadora PTO, Chipeadoras de Tambor, Chipeadoras sobre Orugas y Chipeadoras Especiales.</p>
                        </div>
                    </div>

                    <div className="md:w-[48%] lg:w-[32%] xl:w-[24%]  rounded-xl shadow-lg shadow-gray-300 mt-14">
                        <div className="bg-gray-100 h-[169px] rounded-t-xl">
                        </div>
                        <div className="px-7 pb-14">
                            <h3 className="mt-4 text-2xl">Espacios públicos</h3>
                            <p className="mt-7 text-xl">Reduce Residuos de Madera y Restos de Poda. Chipeadoras de Disco, Chipeadora PTO, Chipeadoras de Tambor, Chipeadoras sobre Orugas y Chipeadoras Especiales.</p>
                        </div>
                    </div>

                    <div className="md:w-[48%] lg:w-[32%] xl:w-[24%]  rounded-xl shadow-lg shadow-gray-300 mt-14">
                        <div className="bg-gray-100 h-[169px] rounded-t-xl">
                        </div>
                        <div className="px-7 pb-14">
                            <h3 className="mt-4 text-2xl">Multipropósitos</h3>
                            <p className="mt-7 text-xl">Reduce Residuos de Madera y Restos de Poda. Chipeadoras de Disco, Chipeadora PTO, Chipeadoras de Tambor, Chipeadoras sobre Orugas y Chipeadoras Especiales.</p>
                        </div>
                    </div>

                    <div className="md:w-[48%] lg:w-[32%] xl:w-[24%]  rounded-xl shadow-lg shadow-gray-300 mt-14">
                        <div className="bg-gray-100 h-[169px] rounded-t-xl">
                        </div>
                        <div className="px-7 pb-14">
                            <h3 className="mt-4 text-2xl">Chipeadora</h3>
                            <p className="mt-7 text-xl">Reduce Residuos de Madera y Restos de Poda. Chipeadoras de Disco, Chipeadora PTO, Chipeadoras de Tambor, Chipeadoras sobre Orugas y Chipeadoras Especiales.</p>
                        </div>
                    </div>
                </div> */}
            </section>

         

            <section className="mb-24">
                <h2 className="text-3xl font-bold">Nuevos productos</h2>

                <BannerAutomatico/>
                
            </section>

        </main>
    )
}
export default HomePage