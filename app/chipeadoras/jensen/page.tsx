import FormularioHubspot from "@/components/formularios/FormularioHubspot";
import Image from "next/image";
import Link from "next/link";

import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Chipeadoras Jensen - EcoAlliance',
  description: '',
}

const Producto = () => {
    return(
        <main>
            {/* <section> 
                <Image src="/chipeadora/jensen/img_principal_chipeadora.png" alt="Imagen Princiapl productos " width={1600} height={200} />
            </section> */}

            <section className="px-5 sm:px-10 md:px-16 mt-28 mb-28">
                <h1 className="text-3xl text-center mb-10">Encuentra la chipeadora ideal para tu proyecto</h1>
                <div className="mx-5 md:mx-16  xl:mx-72">
                    <p className="text-center">En Eco Alliance, estamos comprometidos con brindarte las mejores soluciones tecnológicas para el cuidado del medio ambiente. 
                        Si tienes preguntas, inquietudes o necesitas más información sobre nuestros productos y servicios, no dudes en ponerte en contacto con nosotros.</p>
                </div>
            </section>


            <section className="mb-20">
                    <div className="block md:flex">
                         <div className="w-screen  md:w-1/2">
                            <Image src="/chipeadora/jensen/chipeadora_de_disco.png" alt="Chipeadora de disco" width={1000} height={1000} className="w-full"/>
                        </div>

                        <div className="w-screen md:w-1/2 bg-[#F6F6F6]">
                            <p className="text-end pr-10 text-2xl font-bold md:pr-10 md:pt-3 lg:pr-32 lg:pt-10 xl:pt-20">01</p>
                            <div className="md:pl-10 md:pr-4 lg:pl-24 lg:pr-20 lg:pt-10 xl:pr-52 xl:pt-40">
                                <h2 className="text-center mb-8 text-2xl md:text-start lg:text-3xl font-bold ">Chipeadoras de disco</h2>
                                <p className="mb-5 px-10 sm:px-20 text-center md:text-start md:px-0 ">• Características: Ligera y eficiente. Ideal para tareas de jardinería o poda en áreas urbanas. <br/>
                                • Por qué elegirla: Si buscas una opción confiable para trabajos cotidianos, esta es tu mejor elección.</p>
                                <div className="flex pb-10 justify-center md:justify-start md:pb-0">
                                <button className="mt-10 bg-black text-white py-2 px-8 rounded-xl"><Link href={"/chipeadoras/jensen/Chipeadoras-de-Disco"}>Ver productos</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ------------------ APARECE EN MOVIL -------------------------- */}
                    <div className="block md:hidden">
                        <div className="w-screen md:w-1/2">
                            <Image src="/chipeadora/jensen/chipeadoras_pto.png" alt="Chipeadora PTO" width={1000} height={1000} className="w-full"/>
                        </div>
                        <div className="w-screen md:w-1/2 bg-[#F6F6F6] ">
                            <p className="text-end pr-10 text-2xl font-bold">02</p>
                            <div className=" ">
                                <h2 className="text-2xl mb-8 text-center  font-bold">Chipeadoras PTO</h2>
                                
                                <p className=" px-10 sm:px-20 text-center mb-5 md:mt-3  md:mb-5 lg:mt-5 lg:mb-10 ">• Características: Aprovecha la potencia de tu tractor para operar. <br/>
                                • Por qué elegirla: Reduce costos y aumenta eficiencia al utilizar maquinaria que ya tienes.</p>
                                <div className="flex pb-10 justify-center ">
                                    <button className="mt-10 bg-black text-white py-2 px-8 rounded-xl"><Link href={"/chipeadoras/jensen/Chipeadoras-PTO"}>Ver productos</Link></button>

                                </div>
                            </div>
                        </div>
                        
                    </div>



                    {/* ------------------ APARECE EN TABLET Y ESCRITORIO -------------------------- */}

                    
                    <div className="hidden md:flex">
                        <div className="w-1/2 bg-[#F6F6F6] ">
                            <p className="text-start text-2xl font-bold md:pt-3 md:pl-10 lg:pl-20 lg:pt-10 xl:pl-32 xl:pt-20">02</p>
                            <div className="md:ml-5 md:pr-10 md:pt-2 lg:pr-24 lg:pt-14 lg:pl-20 lg:ml-0 xl:pl-52 ">
                                <h2 className="md:text-2xl lg:text-3xl font-bold md:mb-3 lg:mb-8">Chipeadoras PTO</h2>
                                
                                <p className="md:mt-3  md:mb-5 lg:mt-5 lg:mb-10 ">• Características: Aprovecha la potencia de tu tractor para operar. <br/>
                                • Por qué elegirla: Reduce costos y aumenta eficiencia al utilizar maquinaria que ya tienes.</p>
                                <button className="mt-10 bg-black text-white py-2 px-8 rounded-xl"><Link href={"/chipeadoras/jensen/Chipeadoras-PTO"}>Ver productos</Link></button>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <Image src="/chipeadora/jensen/chipeadoras_pto.png" alt="Chipeadora PTO" width={1000} height={1000} className="w-full"/>
                        </div>
                    </div>

                    <div className="block md:flex">
                         <div className="w-screen  md:w-1/2">
                            <Image src="/chipeadora/jensen/chipeadoras_con_oruga.png" alt="Chipeadora con oruga" width={1000} height={1000} className="w-full"/>
                        </div>

                        <div className="w-screen md:w-1/2 bg-[#F6F6F6]">
                            <p className="text-end pr-10 text-2xl font-bold md:pr-10 md:pt-3 lg:pr-32 lg:pt-10 xl:pt-20">03</p>
                            <div className="md:pl-10 md:pr-4 lg:pl-24 lg:pr-20 lg:pt-10 xl:pr-52 xl:pt-40">
                                <h2 className="text-center mb-8 text-2xl md:text-start lg:text-3xl font-bold ">Chipeadoras con Oruga</h2>
                                <p className="mb-5 px-10 sm:px-20 text-center md:text-start md:px-0 ">• Características: Diseño robusto con tracción para superar pendientes y superficies irregulares. <br/>
                                • Por qué elegirla: Trabaja con facilidad en áreas forestales o de difícil acceso.</p>
                                <div className="flex pb-10 justify-center md:justify-start md:pb-0">
                                    <button className="mt-10 bg-black text-white py-2 px-8 rounded-xl"><Link href={"/chipeadoras/jensen/Chipeadoras-con-Oruga"}>Ver productos</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>



                        {/* ------------------ APARECE EN MOVIL -------------------------- */}
                        <div className="block md:hidden">
                        <div className="w-screen md:w-1/2">
                            <Image src="/chipeadora/jensen/chipeadoras_con_oruga_spider.png" alt="Chipeadora con oruga spider" width={1000} height={1000} className="w-full"/>
                        </div>
                        <div className="w-screen md:w-1/2 bg-[#F6F6F6] ">
                            <p className="text-end pr-10 text-2xl font-bold">04</p>
                            <div className=" ">
                                <h2 className="text-2xl mb-8 text-center  font-bold">Chipeadoras con Oruga Spider</h2>
                                
                                <p className=" px-10 sm:px-20 text-center mb-5 md:mt-3  md:mb-5 lg:mt-5 lg:mb-10 ">• Características: Capacidad todoterreno avanzada con excelente maniobrabilidad. <br/>
                                • Por qué elegirla: Cuando otras chipeadoras no pueden llegar, la Spider sí lo hace.</p>
                                <div className="flex pb-10 justify-center ">
                                    <button className="mt-10 bg-black text-white py-2 px-8 rounded-xl"><Link href={"/chipeadoras/jensen/Chipeadoras-con-Oruga-Spider"}>Ver productos</Link></button>

                                </div>
                            </div>
                        </div>
                        
                    </div>



                    {/* ------------------ APARECE EN TABLET Y ESCRITORIO -------------------------- */}

                    
                    <div className="hidden md:flex">
                        <div className="w-1/2 bg-[#F6F6F6] ">
                            <p className="text-start text-2xl font-bold md:pt-3 md:pl-10 lg:pl-20 lg:pt-10 xl:pl-32 xl:pt-20">04</p>
                            <div className="md:ml-5 md:pr-10 md:pt-2 lg:pr-24 lg:pt-14 lg:pl-20 lg:ml-0 xl:pl-52 ">
                                <h2 className="md:text-2xl lg:text-3xl font-bold md:mb-3 lg:mb-8">Chipeadoras con Oruga Spider</h2>
                                
                                <p className="md:mt-3  md:mb-5 lg:mt-5 lg:mb-10 ">• Características: Capacidad todoterreno avanzada con excelente maniobrabilidad. <br/>
                                • Por qué elegirla: Cuando otras chipeadoras no pueden llegar, la Spider sí lo hace.</p>
                                <button className="mt-10 bg-black text-white py-2 px-8 rounded-xl"><Link href={"/chipeadoras/jensen/Chipeadoras-con-Oruga-Spider"}>Ver productos</Link></button>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <Image src="/chipeadora/jensen/chipeadoras_con_oruga_spider.png" alt="Chipeadora con oruga spider" width={1000} height={1000} className="w-full"/>
                        </div>
                    </div>

                   



                    <div className="block md:flex">
                         <div className="w-screen  md:w-1/2">
                            <Image src="/chipeadora/jensen/chipeadoras_de_tambor.png" alt="Chipeadora de tambor" width={1000} height={1000} className="w-full"/>
                        </div>

                        <div className="w-screen md:w-1/2 bg-[#F6F6F6]">
                            <p className="text-end pr-10 text-2xl font-bold md:pr-10 md:pt-3 lg:pr-32 lg:pt-10 xl:pt-20">05</p>
                            <div className="md:pl-10 md:pr-4 lg:pl-24 lg:pr-20 lg:pt-10 xl:pr-52 xl:pt-40">
                                <h2 className="text-center mb-8 text-2xl md:text-start lg:text-3xl font-bold ">Chipeadoras de tambor</h2>
                                <p className="mb-5 px-10 sm:px-20 text-center md:text-start md:px-0 ">• Características: Alta capacidad de producción y versatilidad para trabajos intensivos. <br/>
                                • Por qué elegirla: Si necesitas rendimiento continuo para proyectos grandes, esta es tu opción.</p>
                                <div className="flex pb-10 justify-center md:justify-start md:pb-0">
                                <button className="mt-10 bg-black text-white py-2 px-8 rounded-xl"><Link href={"/chipeadoras/jensen/Chipeadoras-de-Tambor"}>Ver productos</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    

                 
                    
                        {/* ------------------ APARECE EN MOVIL -------------------------- */}
                        <div className="block md:hidden">
                        <div className="w-screen md:w-1/2">
                            <Image src="/chipeadora/jensen/chipeadoras_especiales.png" alt="Chipeadoras especiales" width={1000} height={1000} className="w-full"/>
                        </div>
                        <div className="w-screen md:w-1/2 bg-[#F6F6F6] ">
                            <p className="text-end pr-10 text-2xl font-bold">06</p>
                            <div className=" ">
                                <h2 className="text-2xl mb-8 text-center  font-bold">Chipeadoras Especiales</h2>
                                
                                <p className=" px-10 sm:px-20 text-center mb-5 md:mt-3  md:mb-5 lg:mt-5 lg:mb-10 ">• Características: Modelos personalizados según tus necesidades particulares. <br/>
                                • Por qué elegirla: Cuando un proyecto requiere algo fuera de lo común, estas máquinas están diseñadas para adaptarse.</p>
                                <div className="flex pb-10 justify-center ">
                                    <button className="mt-10 bg-black text-white py-2 px-8 rounded-xl"><Link href={"/chipeadoras/jensen/Chipeadoras-de-Tambor"}>Ver productos</Link></button>

                                </div>
                            </div>
                        </div>
                        
                    </div>



                    {/* ------------------ APARECE EN TABLET Y ESCRITORIO -------------------------- */}

                    
                    <div className="hidden md:flex">
                        <div className="w-1/2 bg-[#F6F6F6] ">
                            <p className="text-start text-2xl font-bold md:pt-3 md:pl-10 lg:pl-20 lg:pt-10 xl:pl-32 xl:pt-20">06</p>
                            <div className="md:ml-5 md:pr-10 md:pt-2 lg:pr-24 lg:pt-14 lg:pl-20 lg:ml-0 xl:pl-52 ">
                                <h2 className="md:text-2xl lg:text-3xl font-bold md:mb-3 lg:mb-8">Chipeadoras Especiales</h2>
                                
                                <p className="md:mt-3  md:mb-5 lg:mt-5 lg:mb-10 ">• Características: Modelos personalizados según tus necesidades particulares. <br/>
                                • Por qué elegirla: Cuando un proyecto requiere algo fuera de lo común, estas máquinas están diseñadas para adaptarse.</p>
                                <button className="mt-10 bg-black text-white py-2 px-8 rounded-xl"><Link href={"/chipeadoras/jensen/Chipeadoras-especiales"}>Ver productos</Link></button>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <Image src="/chipeadora/jensen/chipeadoras_especiales.png" alt="Chipeadoras especiales" width={1000} height={1000} className="w-full"/>
                        </div>
                    </div>
                    
                </section>

                <section className="pr-24 pl-24 ">
                    <h2 className="text-center text-3xl mb-10">¿No estás seguro de qué <br/> modelo necesitas?</h2>
                </section>

              {/* <FormularioProducto/> */}
              <FormularioHubspot/>

        </main>
    )
}

export default Producto;