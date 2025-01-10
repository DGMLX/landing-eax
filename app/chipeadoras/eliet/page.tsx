import FormularioHubspot from "@/components/formularios/FormularioHubspot";
import SeccionInteres1 from "@/components/seccionInteres/SeccionInteres1";
import Image from "next/image";
import Link from "next/link";

import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Chipeadoras Eliet - EcoAlliance',
  description: '',
}

const Producto = () => {

    
    return(
        <main>
            <section> 
                <Image src="/chipeadora/eliet/img_principal_eliet.png" alt="Imagen Princiapl productos Eliet" width={1600} height={200} />
            </section>

            <section className="px-5 sm:px-10 md:px-16 mt-28 mb-28">
                <h1 className="text-3xl text-center mb-10">Encuentra la chipeadora ideal para tu proyecto</h1>
                <div className="mx-5 md:mx-16  xl:mx-72">
                    <p className="text-center">En Eco Alliance, estamos comprometidos con brindarte las mejores soluciones tecnológicas para el cuidado del medio ambiente. 
                        Si tienes preguntas, inquietudes o necesitas más información sobre nuestros productos y servicios, no dudes en ponerte en contacto con nosotros.</p>
                </div>
            </section>


            <section className="mb-20">
                    <div className="block md:flex">
                         <div className="w-screen  md:w-1/2">
                            <Image src="/chipeadora/eliet/chipeadora_compacta.png" alt="Chipeadora compacta Eliet" width={1000} height={1000} className="w-full"/>
                        </div>

                        <div className="w-screen md:w-1/2 bg-[#F6F6F6]">
                            <p className="text-end pr-10 text-2xl font-bold md:pr-10 md:pt-3 lg:pr-32 lg:pt-10 xl:pt-20">01</p>
                            <div className="md:pl-10 md:pr-4 lg:pl-24 lg:pr-20 lg:pt-10 xl:pr-52 xl:pt-40">
                                <h2 className="text-center mb-8 text-2xl md:text-start lg:text-3xl font-bold ">Chipeadoras compactas</h2>
                                <p className="mb-5 px-10 sm:px-20 text-center md:text-start md:px-0 ">• Características: Ligeras, fáciles de transportar y de uso sencillo. <br/>
                                • Por qué elegirla: Ideal para mantener jardines y áreas residenciales con comodidad.</p>
                                <div className="flex pb-10 justify-center md:justify-start md:pb-0">
                                <button className="mt-10 bg-black text-white py-2 px-8 rounded-xl"><Link href={"/chipeadoras/eliet/productos"}>Ver productos</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ------------------ APARECE EN MOVIL -------------------------- */}
                    <div className="block md:hidden">
                        <div className="w-screen md:w-1/2">
                            <Image src="/chipeadora/eliet/chipeadora_de_rendimiento.png" alt="Chipeadora de rendimiento Eliet" width={1000} height={1000} className="w-full"/>
                        </div>
                        <div className="w-screen md:w-1/2 bg-[#F6F6F6] ">
                            <p className="text-end pr-10 text-2xl font-bold">02</p>
                            <div className=" ">
                                <h2 className="text-2xl mb-8 text-center  font-bold">Chipeadoras de alto rendimiento</h2>
                                
                                <p className=" px-10 sm:px-20 text-center mb-5 md:mt-3  md:mb-5 lg:mt-5 lg:mb-10 ">• Características: Potentes, robustas y con capacidad continua de trabajo. <br/>
                                • Por qué elegirla: Si tienes un jardín grande o realizas trabajos frecuentes, esta es tu mejor opción.</p>
                                <div className="flex pb-10 justify-center ">
                                <button className="mt-10 bg-black text-white py-2 px-8 rounded-xl"><Link href={"/chipeadoras/eliet/productos"}>Ver productos</Link></button>

                                </div>
                            </div>
                        </div>
                        
                    </div>



                    {/* ------------------ APARECE EN TABLET Y ESCRITORIO -------------------------- */}

                    
                    <div className="hidden md:flex">
                        <div className="w-1/2 bg-[#F6F6F6] ">
                            <p className="text-start text-2xl font-bold md:pt-3 md:pl-10 lg:pl-20 lg:pt-10 xl:pl-32 xl:pt-20">02</p>
                            <div className="md:ml-5 md:pr-10 md:pt-2 lg:pr-24 lg:pt-14 lg:pl-20 lg:ml-0 xl:pl-52 ">
                                <h2 className="md:text-2xl lg:text-3xl font-bold md:mb-3 lg:mb-8">Chipeadoras de alto rendimiento</h2>
                                
                                <p className="md:mt-3  md:mb-5 lg:mt-5 lg:mb-10 ">• Características: Potentes, robustas y con capacidad continua de trabajo. <br/>
                                • Por qué elegirla: Si tienes un jardín grande o realizas trabajos frecuentes, esta es tu mejor opción.</p>
                                <button className="mt-10 bg-black text-white py-2 px-8 rounded-xl"><Link href={"/chipeadoras/eliet/productos"}>Ver productos</Link></button>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <Image src="/chipeadora/eliet/chipeadora_de_rendimiento.png" alt="Chipeadora de rendimiento Eliet" width={1000} height={1000} className="w-full"/>
                        </div>
                    </div>

                    <div className="block md:flex">
                         <div className="w-screen  md:w-1/2">
                            <Image src="/chipeadora/eliet/chipeadora_profesional.png" alt="Chipeadora profesional Eliet" width={1000} height={1000} className="w-full"/>
                        </div>

                        <div className="w-screen md:w-1/2 bg-[#F6F6F6]">
                            <p className="text-end pr-10 text-2xl font-bold md:pr-10 md:pt-3 lg:pr-32 lg:pt-10 xl:pt-20">03</p>
                            <div className="md:pl-10 md:pr-4 lg:pl-24 lg:pr-20 lg:pt-10 xl:pr-52 xl:pt-40">
                                <h2 className="text-center mb-8 text-2xl md:text-start lg:text-3xl font-bold ">Chipeadoras profesionales</h2>
                                <p className="mb-5 px-10 sm:px-20 text-center md:text-start md:px-0 ">• Características: Rodillos hidráulicos, tracción y diseño compacto para maniobrar fácilmente. <br/>
                                • Por qué elegirla: Excelente para paisajistas y proyectos exigentes en cualquier terreno.</p>
                                <div className="flex pb-10 justify-center md:justify-start md:pb-0">
                                <button className="mt-10 bg-black text-white py-2 px-8 rounded-xl"><Link href={"/chipeadoras/eliet/productos"}>Ver productos</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>



                        {/* ------------------ APARECE EN MOVIL -------------------------- */}
                        <div className="block md:hidden">
                        <div className="w-screen md:w-1/2">
                            <Image src="/chipeadora/eliet/chipeadoras_uso_versatil.png" alt="Chipeadoras de uso versatil Eliet" width={1000} height={1000} className="w-full"/>
                        </div>
                        <div className="w-screen md:w-1/2 bg-[#F6F6F6] ">
                            <p className="text-end pr-10 text-2xl font-bold">04</p>
                            <div className=" ">
                                <h2 className="text-2xl mb-8 text-center  font-bold">Chipeadoras de uso versatil</h2>
                                
                                <p className=" px-10 sm:px-20 text-center mb-5 md:mt-3  md:mb-5 lg:mt-5 lg:mb-10 ">• Características: Autopropulsadas con ruedas u orugas, ofrecen gran adaptabilidad. <br/>
                                • Por qué elegirla: Si necesitas comodidad y rendimiento en cualquier entorno, esta máquina es ideal.</p>
                                <div className="flex pb-10 justify-center ">
                                    <button className="mt-10 bg-black text-white py-2 px-8 rounded-xl"><Link href={"/chipeadoras/eliet/productos"}>Ver productos</Link></button>

                                </div>
                            </div>
                        </div>
                        
                    </div>



                    {/* ------------------ APARECE EN TABLET Y ESCRITORIO -------------------------- */}

                    
                    <div className="hidden md:flex">
                        <div className="w-1/2 bg-[#F6F6F6] ">
                            <p className="text-start text-2xl font-bold md:pt-3 md:pl-10 lg:pl-20 lg:pt-10 xl:pl-32 xl:pt-20">04</p>
                            <div className="md:ml-5 md:pr-10 md:pt-2 lg:pr-24 lg:pt-14 lg:pl-20 lg:ml-0 xl:pl-52 ">
                                <h2 className="md:text-2xl lg:text-3xl font-bold md:mb-3 lg:mb-8">Chipeadoras de uso versatil</h2>
                                
                                <p className="md:mt-3  md:mb-5 lg:mt-5 lg:mb-10 ">• Características: Autopropulsadas con ruedas u orugas, ofrecen gran adaptabilidad. <br/>
                                • Por qué elegirla: Si necesitas comodidad y rendimiento en cualquier entorno, esta máquina es ideal.</p>
                                <button className="mt-10 bg-black text-white py-2 px-8 rounded-xl"><Link href={"/chipeadoras/eliet/productos"}>Ver productos</Link></button>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <Image src="/chipeadora/eliet/chipeadoras_uso_versatil.png" alt="Chipeadoras de uso versatil Eliet" width={1000} height={1000} className="w-full"/>
                        </div>
                    </div>

                   



                    <div className="block md:flex">
                         <div className="w-screen  md:w-1/2">
                            <Image src="/chipeadora/eliet/chipeadoras_industriales.png" alt="Chipeadoras Industriales Eliet" width={1000} height={1000} className="w-full"/>
                        </div>

                        <div className="w-screen md:w-1/2 bg-[#F6F6F6]">
                            <p className="text-end pr-10 text-2xl font-bold md:pr-10 md:pt-3 lg:pr-32 lg:pt-10 xl:pt-20">05</p>
                            <div className="md:pl-10 md:pr-4 lg:pl-24 lg:pr-20 lg:pt-10 xl:pr-52 xl:pt-40">
                                <h2 className="text-center mb-8 text-2xl md:text-start lg:text-3xl font-bold ">Chipeadoras industriales</h2>
                                <p className="mb-5 px-10 sm:px-20 text-center md:text-start md:px-0 ">• Características: Alta capacidad para triturar ramas de gran diámetro y manejar grandes volúmenes. <br/>
                                • Por qué elegirla: La solución definitiva para empresas que necesitan rendimiento y durabilidad.</p>
                                <div className="flex pb-10 justify-center md:justify-start md:pb-0">
                                    <button className="mt-10 bg-black text-white py-2 px-8 rounded-xl"><Link href={"/chipeadoras/eliet/productos"}>Ver productos</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </section>

                <section className="pr-24 pl-24 ">
                    <h2 className="text-center text-3xl mb-10">¿No estás seguro de qué <br/> modelo necesitas?</h2>
                </section>

              {/* <FormularioProducto/> */}
              <FormularioHubspot urlImagen="/chipeadora/eliet/img_formulario.png"/>

              <SeccionInteres1/>
        </main>
    )
}

export default Producto;