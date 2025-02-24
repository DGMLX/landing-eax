import BannerPrincipal from "@/components/bannerAutomatico/BannerPrincipal";
import SliderProductos from "@/components/bannerAutomatico/SliderProductos";
import SolucionesHover from "@/components/Inicio/SolucionesHover";
import { HiArrowLongRight } from "react-icons/hi2";


const HomePage = () =>{
    return(
        <>

        <main className="mt-[80px] lg:mt-[130px] xl:mt-[135px]">
            

            <section className="w-screen h-1/4 mb-10">
                <BannerPrincipal/>
            </section>

            <section className="mx-5 md:mx-20 mb-5">
                <h2 className="text-2xl mb-5 tracking-widest">ÁREAS DE ESPECIALIZACIÓN</h2>
                <div className="flex justify-between gap-5 flex-col md:flex-row ">  

                    <div className="lg:w-1/3 hover:shadow-xl">
                        <div className="bg-gray-300 w-full h-[240px]" style={{
                            backgroundImage:`url('/inicio/multiproposito.jpg')`,
                            
                            backgroundRepeat:"no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            
                        }}></div>
                        <div className="px-6 pt-5 border-gray-300 border h-[310px] flex flex-col justify-around" >
                            <h3 className="font-bold text-lg">Multipropósito: innovación y Eficiencia en Cada Espacio</h3>
                            <p className="mt-3">Los equipos multipropósito redefinen la eficiencia y versatilidad, adaptándose a diversas necesidades en aseo, mantenimiento y tratamiento de residuos. Con más de 100 accesorios intercambiables y 300 combinaciones, optimizan recursos, reducen costos y maximizan el rendimiento, brindando innovación, sostenibilidad y alto desempeño en entornos urbanos e industriales con solo una inversión.</p>
                            <div className="my-5 flex justify-around items-center text-[#c4262e]">
                                <button className="text-xl">DESCUBRE MÁS</button>
                                <HiArrowLongRight className="text-4xl"/>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/3 hover:shadow-xl">
                        <div className="bg-gray-300 w-full h-[240px]" style={{
                            backgroundImage:`url('/inicio/tratamiento_residuos.jpg')`,
        
                            backgroundRepeat:"no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            
                        }}></div>
                        <div className="px-6 pt-5  border-gray-300 border h-[310px] flex flex-col justify-around">
                            <h3 className="font-bold text-lg">Tratamiento de Residuos: Tecnología para una Transformación Inteligente</h3>
                            <p className="mt-3">Equipos y soluciones avanzadas para una gestión de residuos eficiente, sostenible y rentable. Reducimos costos operativos, optimizamos la logística y fomentamos el reciclaje, la transformación y reutilización de residuos. Con automatización y eficiencia energética, ayudamos a gestionar y avanzar hacia un modelo circular y sustentable.</p>
                            <div className="my-5 flex justify-around items-center text-[#c4262e]">
                                <button className="text-xl">DESCUBRE MÁS</button>
                                <HiArrowLongRight className="text-4xl"/>
                            </div>
                        </div>
                    </div>
                    <div className=" lg:w-1/3 sm:hidden lg:block hover:shadow-xl">
                        <div className="bg-gray-300 w-full h-[240px]" style={{
                            backgroundImage:`url('/inicio/espacios_publicos.jpg')`,
                            
                            backgroundRepeat:"no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            
                        }}></div>
                        <div className="px-6 pt-5  border-gray-300 border h-[310px] flex flex-col justify-around">
                            <h3 className="font-bold text-lg">Mejoramiento de Espacios Públicos: Transformando Entornos para una Vida de Calidad</h3>
                            <p className="mt-3">Diseño, mantenimiento y rehabilitación de plazas, parques y calles, aplicando accesibilidad, seguridad y sostenibilidad para fortalecer la calidad de vida urbana. Incorporamos mobiliario urbano inteligente y tecnologías avanzadas para gestionar espacios de forma eficiente, promoviendo ciudades más sostenibles con entornos modernos, funcionales e inclusivos.</p>
                            <div className="my-5 flex justify-around items-center text-[#c4262e]">
                                <button className="text-xl">DESCUBRE MÁS</button>
                                <HiArrowLongRight className="text-4xl"/>
                            </div>
                        </div>
                    </div>
                    

                   
                </div>
                
            </section>
            

            <section className="mx-5 md:mx-20 mb-10">
                <div className="flex justify-between gap-5 lg:flex-row flex-col md:flex-row">  

                <div className="lg:w-1/3 hover:shadow-xl md:w-1/2 border">
                        <div className="bg-gray-300 w-full h-[240px]" style={{
                            backgroundImage:`url('/inicio/mantenimiento_urbano.jpg')`,
                            
                            backgroundRepeat:"no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            
                        }}></div>
                        <div className="px-6 pt-5  border-t h-[310px] flex flex-col justify-around">
                            <h3 className="font-bold text-lg">Gestión Urbana: Estrategias Inteligentes para Ciudades Mas Eficientes y Sostenibles</h3>
                            <p className="mt-3">Desarrollo e implementación de estrategias innovadoras para optimizar la planificación y administración de ciudades y entornos empresariales con tecnología basada en Inteligencia Artificial. Optimizamos la gestión de recursos, infraestructura y servicios, promoviendo sostenibilidad, automatización y eficiencia económica, creando entornos más conectados, funcionales y habitables.</p>
                            <div className="my-5 flex justify-around items-center text-[#c4262e]">
                                <button className="text-xl">DESCUBRE MÁS</button>
                                <HiArrowLongRight className="text-4xl"/>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/3 hover:shadow-xl md:w-1/2 border">
                        <div className="bg-gray-300 w-full h-[240px]" style={{
                            backgroundImage:`url('/inicio/aseo_urbano.jpg')`,
                         
                            backgroundRepeat:"no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            
                        }}></div>
                        <div className="px-6 pt-5  border-t h-[310px] flex flex-col justify-around">
                            <h3 className="font-bold text-lg">Aseo y Mantenimiento: Tecnologia para Entonos Más Limpios y Eficientes</h3>
                            <p className="mt-3">Ofrecemos equipos y soluciones especializadas para el aseo y mantenimiento de espacios urbanos, industriales y empresariales, asegurando rapidez, seguridad y costos optimizados. Con tecnología confiable y de alto rendimiento, facilitamos la gestión eficiente de residuos y mantención de infraestructuras, impulsando entornos más limpios, sostenibles y funcionales.</p>
                            <div className="my-5 flex justify-around items-center text-[#c4262e]">
                                <button className="text-xl">DESCUBRE MÁS</button>
                                <HiArrowLongRight className="text-4xl"/>
                            </div>
                        </div>
                    </div>
                   


                    <div className="lg:w-1/3 sm:hidden lg:block hover:shadow-xl border">
                        <div className="bg-gray-300 w-full h-[240px]" style={{
                            backgroundImage:`url('/inicio/electromovilidad.png')`,
                     
                            backgroundRepeat:"no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            
                        }}></div>
                        <div className="px-6 pt-5 border-t  h-[310px] flex flex-col justify-around">
                            <h3 className="font-bold text-lg">Electromovilidad: el Cambio Hacia un Futuro Energético y Sostenible</h3>
                            <p className="mt-3">La electromovilidad transforma la operación en ciudades e industrias con tecnología de vanguardia para desarrollar soluciones eléctricas seguras, silenciosas y libres de contaminación. Desde saneamiento hasta logística industrial, impulsa la eficiencia energética y reduce la huella de carbono. Su integración en diversos sectores genera entornos más sostenibles, resilientes.</p>
                            <div className="my-5 flex justify-around items-center text-[#c4262e]">
                                <button className="text-xl">DESCUBRE MÁS</button>
                                <HiArrowLongRight className="text-4xl"/>
                            </div>
                        </div>
                    </div>

                   
                </div>


                {/* **************************************************************** */}

                <div className=" mt-5">
            <div className="flex justify-between gap-5 lg:flex-row flex-col md:flex-row">
            <div className="lg:w-1/3 md:w-1/2 hover:shadow-xl hidden sm:block lg:hidden">
                        <div className="bg-gray-300 w-full h-[240px]" style={{
                            backgroundImage:`url('/inicio/espacios_publicos.jpg')`,
                            
                            backgroundRepeat:"no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            
                        }}></div>
                        <div className="px-6 pt-5  border-gray-300 border h-[310px] flex flex-col justify-around">
                            <h3 className="font-bold ">Mejoramiento de Espacios Públicos: Transformando Entornos para una Vida de Calidad</h3>
                            <p className="mt-3">Diseño, mantenimiento y rehabilitación de plazas, parques y calles, aplicando accesibilidad, seguridad y sostenibilidad para fortalecer la calidad de vida urbana. Incorporamos mobiliario urbano inteligente y tecnologías avanzadas para gestionar espacios de forma eficiente, promoviendo ciudades más sostenibles con entornos modernos, funcionales e inclusivos.</p>
                            <div className="my-5 flex justify-around items-center text-[#C4262E]">
                                <button className="text-xl">DESCUBRE MÁS</button>
                                <HiArrowLongRight className="text-4xl"/>
                            </div>
                        </div>
                    </div>
                   {/* desaparece para tablet */}
                   <div className="lg:w-1/3 md:w-1/2 hover:shadow-xl hidden sm:block lg:hidden">
                        <div className="bg-gray-300 w-full h-[240px]" style={{
                            backgroundImage:`url('/inicio/electromovilidad.png')`,
                            backgroundRepeat:"no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}></div>
                        <div className="px-6 pt-5  border-gray-300 border h-[310px] flex flex-col justify-around">
                            <h3 className="font-bold ">Electromovilidad: el Cambio Hacia un Futuro Energético y Sostenible</h3>
                            <p className="mt-3">La electromovilidad transforma la operación en ciudades e industrias con tecnología de vanguardia para desarrollar soluciones eléctricas seguras, silenciosas y libres de contaminación. Desde saneamiento hasta logística industrial, impulsa la eficiencia energética y reduce la huella de carbono. Su integración en diversos sectores genera entornos más sostenibles, resilientes.</p>
                            <div className="my-5 flex justify-around items-center text-[#C4262E]">
                                <button className="text-xl">DESCUBRE MÁS</button>
                                <HiArrowLongRight className="text-4xl"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                <div className="flex justify-end mt-7">
                    <button className="text-[#c4262e] flex items-center text-xl border border-[#c4262e]  py-3 px-4 rounded-full hover:bg-[#b01c1c] hover:text-white hover:underline">ÁREAS DE ESPECIALIZACIÓN <HiArrowLongRight/></button>
                </div>
            </section>

            <SolucionesHover/>




            <section className="mx-5 md:mx-20 mb-10">
                <h2 className="text-2xl mb-5 tracking-widest">PRODUCTOS DESTACADOS</h2>
                <div className="flex flex-wrap justify-between w-full">

                    <div className="w-full lg:w-[49%] xl:w-[24%] hover:shadow-xl flex flex-col">
                        <div className="bg-gray-300 w-full h-[240px]" style={{
                            backgroundImage:`url('/inicio/multicar_m31.jpg')`,
                     
                            backgroundRepeat:"no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            
                        }}></div>
                        <div className="px-6 pt-5 h-[406px] w-full flex flex-col justify-between  border-gray-300 border">
                            <div>

                                <h3 className="font-bold ">Multicar M31: Potencia y Versatilidad en un Solo Vehículo</h3>
                                <p className="mt-3"> Es el camión multipropósito ideal para realizar múltiples tareas con eficiencia, seguridad y confort. Su alta maniobrabilidad y capacidad de carga lo convierten en la solución ideal para tareas de todo el año en cualquier entorno. Con transmisión mecánica o hidrostática, este vehículo redefine el estándar en rendimiento y sostenibilidad.</p>
                            </div>
                            <div className="mt-9 mb-9 flex justify-around items-center text-[#c4262e]">
                                <button className="text-xl">DESCUBRE MÁS</button>
                                <HiArrowLongRight className="text-4xl"/>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-[49%] xl:w-[24%]  hover:shadow-xl flex flex-col mt-5 lg:mt-0">
                        <div className="bg-gray-300 w-full h-[240px]" style={{
                            backgroundImage:`url('/inicio/giant-g2200e.jpg')`,
                            backgroundRepeat:"no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            
                        }}></div>
                        <div className="px-6 pt-5 h-[406px] flex flex-col justify-between  border-gray-300 border ">
                            <div>

                                <h3 className="font-bold ">Giant G2200E: Flexibilidad Eléctrica para Cada Desafío</h3>
                                <p className="mt-3">El Giant G2200E redefine la eficiencia con su tecnología 100% eléctrica, operación silenciosa y cero emisiones. Su gran capacidad de carga y compatibilidad con más de 60 accesorios lo convierten en la solución ideal para trabajos urbanos, agrícolas y de construcción.</p>
                            </div>
                            <div className="mt-9 mb-9 flex justify-around items-center text-[#c4262e]">
                                <button className="text-xl">DESCUBRE MÁS</button>
                                <HiArrowLongRight className="text-4xl"/>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-[49%] xl:w-[24%]  hover:shadow-xl border   border-gray-300 flex flex-col mt-5 xl:mt-0">
                        <div className="bg-gray-300 w-full h-[240px]" style={{
                            backgroundImage:`url('/inicio/super_prof.jpg')`,
                            backgroundRepeat:"no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            
                        }}></div>
                        <div className="px-6 pt-5 h-[406px] flex flex-col justify-between ">
                            <div>
                                <h3 className="font-bold ">Trituradora Super Prof MAX On Road: Rendimiento y Movilidad para la Gestión de Residuos</h3>
                                <p className="mt-3">La Super Prof MAX On Road lleva la trituración a otro nivel con su innovador sistema de descarga AXELERO™, capaz de procesar ramas de gran tamaño con máxima eficiencia. Diseñada para un transporte ágil gracias a su montaje sobre tráiler, combina potencia, sostenibilidad y facilidad de uso, ideal para quienes buscan optimizar la gestión de residuos verdes.</p>
                            </div>
                            <div className="mt-9 mb-9 flex justify-around items-center text-[#c4262e]">
                                <button className="text-xl">DESCUBRE MÁS</button>
                                <HiArrowLongRight className="text-4xl"/>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-[49%] xl:w-[24%]   hover:shadow-xl flex flex-col mt-5 xl:mt-0">
                        <div className="bg-gray-300 w-full h-[240px]" style={{
                            backgroundImage:`url('/inicio/mini_compactador.jpg')`,
                            backgroundRepeat:"no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            
                        }}></div>
                        <div className="px-6 pt-5 h-[406px] flex flex-col justify-between  border-gray-300 border">
                            <div>
                                <h3 className="font-bold ">Mini Compactador MSP: Máxima Compactación en Espacios Reducidos</h3>
                                <p className="mt-3"> El Mini Compactador MSP está diseñado para zonas de difícil acceso, como estacionamientos subterráneos o áreas urbanas estrechas, ofreciendo una solución eficiente para la gestión de residuos. Su construcción modular, alta densidad de compactación (9:1) y contenedores intercambiables permiten una operación continua sin interrupciones.</p>
                            </div>
                            <div className="mt-9 mb-9 flex justify-around items-center text-[#c4262e]">
                                <button className="text-xl">DESCUBRE MÁS</button>
                                <HiArrowLongRight className="text-4xl"/>
                            </div>
                        </div>
                    </div>


                </div>

                <div className="flex justify-end mt-7">
                    <button className="text-[#C4262E] flex items-center text-xl border border-[#C4262E]  py-3 px-5 rounded-full hover:bg-[#B01C1C] hover:text-white hover:underline">VER TODOS <HiArrowLongRight className="ml-3"/></button>
                </div>

            </section>


            <section className="mx-5 md:mx-20  mb-10">
                <SliderProductos/>
            </section>


   

            <section className="md:mx-20  md:mb-20 mx-5 md-5">
                <h2 className="text-2xl mb-5 tracking-widest">PERSPECTIVAS</h2>
                <div className="flex-col md:flex-row  lg:flex-row flex gap-5 mb-7 ">
                    <div className="bg-gray-300 w-full sm:w-full md:w-1/2 h-[350px] flex flex-col justify-center" style={{
                        backgroundImage:'url(/inicio/blog2.jpg)',
                        backgroundBlendMode:"darken",
                        backgroundRepeat:"no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        
                    }}>
                        <div className="flex flex-col  px-5 text-white">
                            
                            <h3 className="xl:mb-10 underline underline-offset-[12px]">BLOG</h3>
                            <h2 className="text-4xl font-bold">Innovación y Sostenibilidad en Acción</h2>
                            <p className="mt-3 hidden xl:block">Explora artículos especializados sobre maquinaria, reciclaje y soluciones sustentables.</p>
                            <div className="flex mt-10">
                            <button className=" flex items-center text-xl border border-[#C4262E] px-4 md:py-3 md:px-4 rounded-full bg-[#C4262E] text-white hover:bg-[#B01C1C] hover:text-white hover:underline">DESCUBRE MÁS<HiArrowLongRight className="ml-5 text-3xl"/></button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-300 w-full sm:w-full md:w-1/2 h-[350px] flex flex-col justify-center" style={{
                        backgroundImage:'url(/inicio/servicios.jpg)',
                        backgroundBlendMode:"darken",
                        backgroundRepeat:"no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        
                    }}>
                        <div className="flex flex-col px-5 text-white">
                            
                            <h3 className="xl:mb-10 underline underline-offset-[12px]">SERVICIOS</h3>
                            <h2 className="text-4xl font-bold mt-5 md:block">Optimiza tu operación con nuestro soporte integral</h2>
                            <p className="mt-3 hidden xl:block">Confía en nuestro equipo para el montaje de equipos hasta el servicio postventa, insumos y repuestos, ofrecemos soluciones diseñadas para maximizar el rendimiento y la eficiencia de tus proyectos.</p>
                            <div className="flex mt-5">
                            <button className=" flex items-center text-xl border border-[#C4262E] px-4 md:py-3 md:px-4 rounded-full bg-[#C4262E] text-white hover:bg-[#B01C1C] hover:text-white hover:underline">DESCUBRE MÁS<HiArrowLongRight className="ml-5 text-3xl"/></button>
                            
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        
            
        </main>
        </>
    )
}

export default HomePage;