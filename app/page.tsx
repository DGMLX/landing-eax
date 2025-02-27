'use client'


import BannerAutomatico from "@/components/bannerAutomatico/BannerAutomatico"


import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavbarMovilActualizada from "@/components/navbarMovil/NavbarMovilActualizada";
import NavbarActualizada from "@/components/navbar/NavbarActualizada";
import BannerPrincipalV1 from "@/components/bannerAutomatico/BannerPrincipalV1";

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
        <>
        <NavbarMovilActualizada/>
        <NavbarActualizada/>
        <main className="mt-36 mx-5 md:mx-16">
            
          
            <BannerPrincipalV1/>

            <section className="mt-24 mb-24 w-full ">
                <h2 className="text-3xl font-bold text-[#A7283D]">Productos</h2>
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
              
            </section>

         

            <section className="mb-24">
                <h2 className="text-3xl font-bold text-[#A7283D]">Nuevos productos</h2>

                <BannerAutomatico/>
                
            </section>

            <section className="rounded-xl bg-[#1E1E1E] text-white mb-[124px] pb-8">
                    <h3 className="flex justify-center py-7 text-[30px] font-bold ">Te puede interesar</h3>
                <div className="sm:flex flex-wrap justify-center">
                    {/* primer recuadro */}
                    <div className="mr-[22px] ml-[22px] :justify-center pb-5">
                        <div className="bg-gray-300 h-[178px] sm:w-[415px] rounded-lg"></div>
                            <div>
                                <h3 className="mt-5 text-[24px] font-bold m-3">EAXBlog</h3>
                                <p className="mt-2 text-[20px] m-3">Conoce más nuestras Soluciones <br />en nuestro Blog</p>
                            </div>
                    </div>
                    {/* segundo recuadro */}
                    <div className="mr-[22px] ml-[22px] sm:justify-center pb-5">
                        <div className="bg-gray-300 h-[178px] sm:w-[415px] rounded-lg"></div>
                            <div>
                                <h3 className="mt-5 text-[24px] font-bold m-3">Servicios</h3>
                                <p className="mt-2 text-[20px] m-3">Aumenta tu confiabilidad con el apoyo <br className='hidden sm:block'/> de nuestro Servicio Postventa</p>
                            </div>
                    </div>
                    {/* tercer recuadro */}
                    <div className="mr-[22px] ml-[22px] sm:justify-center pb-5">
                        <div className="bg-gray-300 h-[178px] sm:w-[415px] rounded-lg"></div>
                            <div>
                                <h3 className="mt-5 text-[24px] font-bold m-3">Sobre Nosotros</h3>
                                <p className="mt-2 text-[20px] m-3">Averigua más sobre nosotros y nuestros <br className='hidden sm:block'/>valores</p>
                            </div>
                    </div>
                </div>
            </section>

        </main>
                        </>
       
    )
}
export default HomePage