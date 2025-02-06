import FormularioHubspot from "@/components/formularios/FormularioHubspot";

import Image from "next/image";
import Link from "next/link";

import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Chipeadoras Eliet - EcoAlliance',
  description: '',
}

const Producto = () => {
    // animate-fade animate-duration-[1000ms] animate-normal animate-fill-both
    return(
        <main className="mt-40 animate-fade animate-duration-[1000ms] animate-normal animate-fill-both">
            {/* <section> 
                <Image src="/chipeadora/eliet/img_principal_eliet.png" alt="Imagen Princiapl productos Eliet" width={1600} height={200} />
            </section> */}

            <section className="px-5 sm:px-10 md:px-16 mt-28 mb-28 ">
                <h1 className="text-3xl text-center mb-10">Encuentra la chipeadora ideal para tu proyecto</h1>
                <div className="mx-5 md:mx-16  xl:mx-72">
                    <p className="text-center">En Eco Alliance, estamos comprometidos con brindarte las mejores soluciones tecnológicas para el cuidado del medio ambiente. 
                    Aquí encontrarás chipeadoras portátiles ideales para poda y mantenimiento en el hogar o áreas verdes pequeñas, diseñadas para necesidades básicas de limpieza.</p>
                </div>
            </section>


            <section className="mb-20">
                    <div className="block md:flex ">
                         <div className="w-screen  md:w-1/2">
                            <Image src="/chipeadora/eliet/chipeadora_estacionaria.png" alt="Chipeadora Estacionaria Eliet" width={1000} height={1000} className="w-full"/>
                        </div>

                        <div className="w-screen md:w-1/2 bg-[#F6F6F6]">
                            <p className="text-end pr-10 text-2xl font-bold pt-5 pb-4 md:pb-0  md:pr-10 md:pt-3 lg:pr-32 lg:pt-10">01</p>
                            <div className="md:pl-10 md:pr-4 lg:pl-24 lg:pr-20 lg:pt-10 xl:pr-52 xl:pt-36">
                                <h2 className="text-center mb-8 text-2xl md:text-start lg:text-3xl font-bold ">Chipeadoras estacionarias</h2>
                                <p className="mb-5 px-10 sm:px-20 text-center md:text-start md:px-0 ">Compactas y diseñadas para uso doméstico y de jardinería, estas chipeadoras son ideales para propietarios de jardines y pequeños espacios verdes. Permiten procesar residuos vegetales de manera eficiente, facilitando su reutilización como compost o mulch.<br/></p>
                                <div className="flex pb-10 justify-center md:justify-start md:pb-0 ">
                                <button className="md:mt-1 md:mb-3 lg:mt-10 lg:mb-0 bg-black text-white py-2 px-8 rounded-xl"><Link href={"/eliet/Chipeadoras-Estacionarias"}>Ver productos</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ------------------ APARECE EN MOVIL -------------------------- */}
                    <div className="block md:hidden">
                        <div className="w-screen md:w-1/2">
                            <Image src="/chipeadora/eliet/chipeadora_movil_rueda.jpg" alt="Chipeadoras Moviles sobre ruedas Eliet" width={1000} height={1000} className="w-full"/>
                        </div>
                        <div className="w-screen md:w-1/2 bg-[#F6F6F6] ">
                            <p className="text-end pr-10 text-2xl font-bold pt-5 pb-4">02</p>
                            <div className=" ">
                            <h2 className="text-2xl mb-8 text-center  font-bold">Chipeadoras móviles sobre ruedas</h2>
                                
                                <p className=" px-10 sm:px-20 text-center mb-5 md:mt-3  md:mb-5 lg:mt-5 lg:mb-10 ">Equipadas para facilitar el transporte en terrenos variados, son ideales para jardineros y empresas de mantenimiento de áreas verdes. Su diseño compacto permite un uso eficiente en espacios reducidos<br/></p>
                                <div className="flex pb-10 justify-center ">
                                <button className="mt-10 bg-black text-white py-2 px-8 rounded-xl"><Link href={"/eliet/Chipeadoras-Moviles-Sobre-Ruedas"}>Ver productos</Link></button>

                                </div>
                            </div>
                        </div>
                        
                    </div>



                    {/* ------------------ APARECE EN TABLET Y ESCRITORIO -------------------------- */}

                    
                    <div className="hidden md:flex">
                        <div className="w-1/2 bg-[#F6F6F6] ">
                            <p className="text-start text-2xl font-bold md:pt-3 md:pl-10 lg:pl-20 lg:pt-10 xl:pl-32 xl:pt-20">02</p>
                            <div className="md:ml-5 md:pr-10 md:pt-2 lg:pr-24 lg:pt-14 lg:pl-20 lg:ml-0 xl:pl-52 ">
                                <h2 className="md:text-2xl lg:text-3xl font-bold md:mb-3 lg:mb-8">Chipeadoras móviles sobre rueda</h2>
                                
                                <p className="md:mt-3  md:mb-5 lg:mt-5 lg:mb-5 xl:mb-10 ">Equipadas para facilitar el transporte en terrenos variados, son ideales para jardineros y empresas de mantenimiento de áreas verdes.<br/></p>
                                <button className=" xl:mt-10 bg-black text-white py-2 px-8 rounded-xl"><Link href={"/eliet/Chipeadoras-Moviles-Sobre-Ruedas"}>Ver productos</Link></button>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <Image src="/chipeadora/eliet/chipeadora_movil_rueda.jpg" alt="Chipeadoras moviles sobre ruedas Eliet" width={1000} height={1000} className="w-full"/>
                        </div>
                    </div>


                    <div className="block md:flex">
                         <div className="w-screen  md:w-1/2">
                            <Image src="/chipeadora/eliet/chipeadora_sobre_oruga.jpg" alt="Chipeadora sobre oruga Eliet" width={1000} height={1000} className="w-full"/>
                        </div>

                        <div className="w-screen md:w-1/2 bg-[#F6F6F6]">
                            <p className="text-end pr-10 text-2xl font-bold pt-5 pb-4 md:pb-0 md:pr-10 md:pt-3 lg:pr-32 lg:pt-10 xl:pt-15">03</p>
                            <div className="md:pl-10 md:pr-4 lg:pl-24 lg:pr-20 lg:pt-10 xl:pr-52 xl:pt-40">
                                <h2 className="text-center mb-8 text-2xl md:text-start lg:text-3xl font-bold ">Chipeadoras sobre oruga</h2>
                                <p className="mb-5 px-10 sm:px-20 text-center md:text-start md:px-0 ">Optimizadas para terrenos difíciles e irregulares, brindan estabilidad y tracción en zonas forestales o de acceso complicado, garantizando movilidad en condiciones adversas.<br/></p>
                                <div className="flex pb-10 justify-center md:justify-start md:pb-0">
                                <button className="mt-10 bg-black text-white py-2 px-8 rounded-xl"><Link href={"/eliet/Chipeadoras-Sobre-Oruga"}>Ver productos</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>



                        {/* ------------------ APARECE EN MOVIL -------------------------- */}
                        <div className="block md:hidden">
                        <div className="w-screen md:w-1/2">
                            <Image src="/chipeadora/eliet/chipeadora_carretera.png" alt="Chipeadoras remolcables de carretera Eliet" width={1000} height={1000} className="w-full"/>
                        </div>
                        <div className="w-screen md:w-1/2 bg-[#F6F6F6] ">
                            <p className="text-end pr-10 text-2xl font-bold pt-5 pb-4">04</p>
                            <div className=" ">
                                <h2 className="text-2xl mb-8 text-center  font-bold">Chipeadoras remolcables de carretera</h2>
                                
                                <p className=" px-10 sm:px-20 text-center mb-5 md:mt-3  md:mb-5 lg:mt-5 lg:mb-10 ">Cumplen con normativas de transporte y son ideales para contratistas y municipios que requieren movilidad entre distintos sitios de trabajo. Ofrecen un equilibrio entre rendimiento y facilidad de traslado<br/></p>
                                <div className="flex pb-10 justify-center ">
                                    <button className=" mt-10 bg-black text-white py-2 px-8 rounded-xl"><Link href={"/eliet/Chipeadoras-Remolcables-De-Carretera"}>Ver productos</Link></button>

                                </div>
                            </div>
                        </div>
                        
                    </div>



                    {/* ------------------ APARECE EN TABLET Y ESCRITORIO -------------------------- */}

                    
                    <div className="hidden md:flex">
                        <div className="w-1/2 bg-[#F6F6F6] ">
                            <p className="text-start text-2xl font-bold md:pt-3 md:pl-10 lg:pl-20 lg:pt-10 xl:pl-32 xl:pt-20">04</p>
                            <div className="md:ml-5 md:pr-10 md:pt-10 lg:pr-24 lg:pt-14 lg:pl-20 lg:ml-0 xl:pl-52 ">
                                <h2 className="md:text-2xl lg:text-3xl font-bold md:mb-3 lg:mb-8">Chipeadoras remolcables de carretera</h2>
                                
                                <p className="md:mt-3  md:mb-5 lg:mt-5 lg:mb-10 ">Cumplen con normativas de transporte y son ideales para contratistas y municipios que requieren movilidad entre distintos sitios de trabajo. Ofrecen un equilibrio entre rendimiento y facilidad de traslado<br/></p>
                                <button className="xl:mt-10 bg-black text-white py-2 px-8 rounded-xl"><Link href={"/eliet/Chipeadoras-Remolcables-De-Carretera"}>Ver productos</Link></button>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <Image src="/chipeadora/eliet/chipeadora_carretera.png" alt="Chipeadoras remolcables de carretera" width={1000} height={1000} className="w-full"/>
                        </div>
                    </div>

                   



                    <div className="block md:flex">
                         <div className="w-screen  md:w-1/2">
                            <Image src="/chipeadora/eliet/chipeadora_pto.jpg" alt="Chipeadoras PTO Eliet" width={1000} height={1000} className="w-full"/>
                        </div>

                        <div className="w-screen md:w-1/2 bg-[#F6F6F6]">
                            <p className="text-end pr-10 text-2xl font-bold pt-5 pb-4 md:pb-0 md:pr-10 md:pt-3 lg:pr-32 lg:pt-10 xl:pt-20">05</p>
                            <div className="md:pl-10 md:pr-4 lg:pl-24 lg:pr-20 lg:pt-10 xl:pr-52 xl:pt-40">
                                <h2 className="text-center mb-8 text-2xl md:text-start lg:text-3xl font-bold ">Chipeadoras PTO</h2>
                                <p className="mb-5 px-10 sm:px-20 text-center md:text-start md:px-0 ">Disenadas para ser accionadas por la toma de fuerza de tractores, son una solucion eficiente para aplicaciones agricolas y forestales, optimizando el uso de maquinaria existente sin necesidad de un motor propio<br/></p>
                                <div className="flex pb-10 justify-center md:justify-start md:pb-0">
                                    <button className="mt-5 lg:mt-10 bg-black text-white py-2 px-8 rounded-xl"><Link href={"/eliet/Chipeadoras-PTO"}>Ver productos</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </section>

                <section className="px-10 md:px-24 ">
                    <h2 className="text-center text-3xl mb-10">¿No estás seguro de qué <br/> modelo necesitas?</h2>
                </section>

              {/* <FormularioProducto/> */}
              <FormularioHubspot/>

        </main>
    )
}

export default Producto;