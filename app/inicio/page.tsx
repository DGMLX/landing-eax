import BannerPrincipal from "@/components/bannerAutomatico/BannerPrincipal";
import SliderProductos from "@/components/bannerAutomatico/SliderProductos";
import { HiArrowLongRight } from "react-icons/hi2";


const HomePage = () =>{
    return(
        <>

        <main className="mt-[80px] lg:mt-[99px] xl:mt-[120px]">
            

            <section className="w-screen h-1/4 mb-10">
                <BannerPrincipal/>
            </section>

            <section className="mx-20 mb-5">
                <h2 className="text-2xl mb-5 tracking-widest">ÁREAS DE ESPECIALIZACIÓN</h2>
                <div className="flex justify-between gap-5">  

                    <div className="w-1/3 hover:shadow-xl">
                        <div className="bg-gray-300 w-full h-[240px]"></div>
                        <div className="px-6 pt-5  border-gray-300 border">
                            <h3 className="font-bold ">Multipropósito</h3>
                            <p className="mt-3">Equipos versátiles con más de 100 accesorios y 300 combinaciones, maximizando innovación y ahorro en espacios públicos e industriales</p>
                            <div className="my-5 flex justify-around items-center text-[#c4262e]">
                                <button className="text-xl">DESCUBRE MÁS</button>
                                <HiArrowLongRight className="text-4xl"/>
                            </div>
                        </div>
                    </div>

                    <div className="w-1/3 hover:shadow-xl">
                        <div className="bg-gray-300 w-full h-[240px]"></div>
                        <div className="px-6 pt-5  border-gray-300 border">
                            <h3 className="font-bold ">Tratamiento de Residuos</h3>
                            <p className="mt-3">Reduce costos y optimiza la gestión de residuos a través del reciclaje, transformación y reutilización, generando un impacto ambiental positivo.</p>
                            <div className="my-5 flex justify-around items-center text-[#c4262e]">
                                <button className="text-xl">DESCUBRE MÁS</button>
                                <HiArrowLongRight className="text-4xl"/>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3 hover:shadow-xl">
                        <div className="bg-gray-300 w-full h-[240px]"></div>
                        <div className="px-6 pt-5  border-gray-300 border">
                            <h3 className="font-bold ">Espacios Públicos</h3>
                            <p className="mt-3">Diseño de mobiliario urbano pensado para el bienestar y disfrute de las personas, promoviendo una convivencia segura y sostenible.</p>
                            <div className="my-5 flex justify-around items-center text-[#c4262e]">
                                <button className="text-xl">DESCUBRE MÁS</button>
                                <HiArrowLongRight className="text-4xl"/>
                            </div>
                        </div>
                    </div>
                    

                   
                </div>
                
            </section>
            

            <section className="mx-20 mb-10">
                <div className="flex justify-between gap-5">  

                <div className="w-1/3 hover:shadow-xl">
                        <div className="bg-gray-300 w-full h-[240px]"></div>
                        <div className="px-6 pt-5  border-gray-300 border">
                            <h3 className="font-bold ">Mantenimiento Urbano</h3>
                            <p className="mt-3">Equipamiento confiable y eficiente que agiliza la mantención de infraestructura urbana y rural, garantizando seguridad, rapidez y costos reducidos.</p>
                            <div className="my-5 flex justify-around items-center text-[#c4262e]">
                                <button className="text-xl">DESCUBRE MÁS</button>
                                <HiArrowLongRight className="text-4xl"/>
                            </div>
                        </div>
                    </div>

                    <div className="w-1/3 hover:shadow-xl">
                        <div className="bg-gray-300 w-full h-[240px]"></div>
                        <div className="px-6 pt-5  border-gray-300 border">
                            <h3 className="font-bold ">Aseo Urbano</h3>
                            <p className="mt-3">Soluciones de limpieza y recolección diseñadas para máxima eficiencia y mínimo gasto, impulsando el desarrollo y la calidad de vida en los espacios públicos.</p>
                            <div className="my-5 flex justify-around items-center text-[#c4262e]">
                                <button className="text-xl">DESCUBRE MÁS</button>
                                <HiArrowLongRight className="text-4xl"/>
                            </div>
                        </div>
                    </div>
                   
                    <div className="w-1/3 hover:shadow-xl">
                        <div className="bg-gray-300 w-full h-[240px]"></div>
                        <div className="px-6 pt-5  border-gray-300 border">
                            <h3 className="font-bold ">Electromovilidad</h3>
                            <p className="mt-3">Tecnología de vanguardia para operaciones silenciosas y libres de contaminación, revolucionando la gestión urbana e industrial con eficiencia energética.</p>
                            <div className="my-5 flex justify-around items-center text-[#c4262e]">
                                <button className="text-xl">DESCUBRE MÁS</button>
                                <HiArrowLongRight className="text-4xl"/>
                            </div>
                        </div>
                    </div>

                   
                </div>
                <div className="flex justify-end mt-7">
                    <button className="text-[#c4262e] flex items-center text-xl border border-[#c4262e]  py-3 px-4 rounded-full hover:bg-[#b01c1c] hover:text-white hover:underline">ÁREAS DE ESPECIALIZACIÓN <HiArrowLongRight/></button>
                </div>
            </section>

            <section className="mx-20 mb-10">
                <h2 className="text-2xl mb-5 tracking-widest">SOLUCIONES</h2>
                <div className="w-full flex justify-between">
                    <div className="w-3/6">
                        <div className="flex justify-between py-5 hover:bg-gray-300 px-4">
                            <h4 className="text-lg">Tratamiento de residuos orgánicos y restos de poda</h4>
                            <HiArrowLongRight className="text-3xl"/>
                        </div>

                        <div className="flex justify-between py-5 hover:bg-gray-300 px-4">
                            <h4 className="text-lg">Tratamiento de residuos reciclables</h4>
                            <HiArrowLongRight className="text-3xl"/>
                        </div>

                        <div className="flex justify-between py-5 hover:bg-gray-300 px-4">
                            <h4 className="text-lg">Tratamiento de residuos de gran tamaño</h4>
                            <HiArrowLongRight className="text-3xl"/>
                        </div>

                        <div className="flex justify-between py-5 hover:bg-gray-300 px-4">
                            <h4 className="text-lg">Limpieza y sanitización</h4>
                            <HiArrowLongRight className="text-3xl"/>
                        </div>

                        <div className="flex justify-between py-5 hover:bg-gray-300 px-4">
                            <h4 className="text-lg">Mantención de arbustos y arbolado</h4>
                            <HiArrowLongRight className="text-3xl"/>
                        </div>

                        <div className="flex justify-between py-5 hover:bg-gray-300 px-4">
                            <h4 className="text-lg">Autonomía energética y sostenibilidad ambiental</h4>
                            <HiArrowLongRight className="text-3xl"/>
                        </div>

                      

                    </div>

                    <div className="w-3/6 pl-14">
                        <div className="bg-gray-300 w- h-4/5 flex justify-center items-center">
                            <p>Item </p>
                        </div>
                    </div>

                </div>


                <div className="flex justify-end mt-7">
                    <button className="text-[#c4262e] flex items-center text-xl border border-[#c4262e]  py-3 px-5 rounded-full hover:bg-[#b01c1c] hover:text-white hover:underline">VER TODOS <HiArrowLongRight className="ml-3"/></button>
                </div>
            </section>


            <section className="mx-20 mb-10">
                <h2 className="text-2xl mb-5 tracking-widest">PRODUCTOS DESTACADOS</h2>
                <div className="flex gap-5">

                    <div className="w-1/4 hover:shadow-xl">
                        <div className="bg-gray-300 w-full h-[170px]"></div>
                        <div className="px-6 pt-5 h-[406px] flex flex-col justify-between  border-gray-300 border">
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

                    <div className="w-1/4  hover:shadow-xl">
                        <div className="bg-gray-300 w-full h-[170px]"></div>
                        <div className="px-6 pt-5 h-[406px] flex flex-col justify-between  border-gray-300 border">
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

                    <div className="w-1/4  hover:shadow-xl">
                        <div className="bg-gray-300 w-full h-[170px]"></div>
                        <div className="px-6 pt-5 h-[406px] flex flex-col justify-between  border-gray-300 border">
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

                    <div className="w-1/4   hover:shadow-xl">
                        <div className="bg-gray-300 w-full h-[170px]"></div>
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
                    <button className="text-[#c4262e] flex items-center text-xl border border-[#c4262e]  py-3 px-5 rounded-full hover:bg-[#b01c1c] hover:text-white hover:underline">VER TODOS <HiArrowLongRight className="ml-3"/></button>
                </div>

            </section>


            <section className="mx-20  mb-10">
                <SliderProductos/>
            </section>


   

            <section className="mx-20  mb-20">
                <h2 className="text-2xl mb-5 tracking-widest">PERSPECTIVAS</h2>
                <div className="flex gap-5 mb-7 ">
                    <div className=" bg-gray-300 w-1/2 h-[350px] flex flex-col justify-center">
                        <div className="flex flex-col  justify-start px-28 text-white">
                            
                            <h3 className="mb-10 underline underline-offset-[12px]">BLOG</h3>
                            <h1 className="text-4xl font-bold">Innovación y Sostenibilidad en Acción</h1>
                            <p className="mt-3">Explora artículos especializados sobre maquinaria, reciclaje y soluciones sustentables.</p>
                            <div className="flex mt-10">
                            <button className=" flex items-center text-xl border border-[#c4262e]  py-3 px-4 rounded-full bg-[#c4262e] text-white hover:bg-[#b01c1c] hover:text-white hover:underline">DESCUBRE MÁS<HiArrowLongRight className="ml-5 text-3xl"/></button>
                        
                            </div>
                        </div>
                    </div>

                    <div className=" bg-gray-300 w-1/2 h-[350px] flex flex-col justify-center">
                        <div className="flex flex-col justify-start px-28 text-white">
                            
                            <h3 className="mb-5 underline underline-offset-[12px]">SERVICIOS</h3>
                            <h1 className="text-4xl font-bold">Optimiza tu operación con nuestro soporte integral</h1>
                            <p className="mt-3">Confía en nuestro equipo para el montaje de equipos hasta el servicio postventa, insumos y repuestos, ofrecemos soluciones diseñadas para maximizar el rendimiento y la eficiencia de tus proyectos.</p>
                            <div className="flex mt-5">
                                <button className=" flex items-center text-xl border border-[#c4262e]  py-3 px-4 rounded-full bg-[#c4262e] text-white hover:bg-[#b01c1c] hover:text-white hover:underline">DESCUBRE MÁS<HiArrowLongRight className="ml-5 text-3xl"/></button>
                            
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