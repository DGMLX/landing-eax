import Image from "next/image"

const SeccionInteres1 = () =>{

    return(
        <section>
            <h2 className="text-center text-[#F43535] text-2xl mb-20 px-10 sm:px-10">TAMBIEN TE PUEDE INTERESAR</h2>

                <div className="block md:flex xl:block w-screen">
                    <div className="xl:flex md:w-1/2 xl:w-screen">
                        <div className=" xl:w-1/3 h-1/3 ">
                            <Image src="/seccion-interes1/seccion-interes-1.png" alt="Sección de interes" width={1000} height={500} className="h-full " />
                        </div>
                       
                       {/* COMPONENTE QUE APARECE SOLO EN DISPOSITIVO MOVIL, DESAPARECE PARA TABLET Y ESCRITORIO*/}
                        <div className="md:hidden  xl:w-1/3 h-1/3 pt-10 pb-10 flex flex-col justify-center">
                            <h3 className="text-[#F43535] text-center text-xl">Redes sociales</h3>
                            <p className="text-center mt-10">Danos tu opinión, conócenos y comparte en redes sociales</p>
                        </div>


                        <div className="xl:w-1/3 h-1/3">
                            <Image src="/seccion-interes1/seccion-interes-2.png" alt="Sección de interes" width={1000} height={500} className="h-full"/>
                        </div>

                        {/* COMPONENTE QUE APARECE SOLO EN DISPOSITIVO MOVIL, DESAPARECE PARA TABLET Y ESCRITORIO*/}
                        <div className="md:hidden xl:w-1/3  h-1/3 pt-10 pb-10 bg-[#1E1E1E] text-white flex flex-col justify-center">
                            <h3 className="text-center  text-2xl">Blog</h3>
                            <p className="text-center mt-10">Conoce más sobre Electromovilidad en nuestro Blog</p>
                            <p className="text-[#F43535] text-center mt-10">Mira el blog</p>
                        </div>

                        <div className="xl:w-1/3 h-1/3">
                            <Image src="/seccion-interes1/seccion-interes-3.png" alt="Sección de interes" width={1000} height={500} className="h-full" />
                        </div>

                        {/* COMPONENTE QUE APARECE SOLO EN DISPOSITIVO MOVIL, DESAPARECE PARA TABLET Y ESCRITORIO*/}
                        <div className="md:hidden xl:w-1/3 h-1/3 pt-10  flexflex-col justify-center">
                            <h3 className="text-[#F43535] text-center text-xl pt-5 lg:pt-10">Servicios</h3>
                            <p className="text-center mt-5 lg:mt-10">Danos tu opinión, conócenos y comparte en redes sociales</p>
                            <p className="text-center mt-5 lg:mt-10 pb-10  text-[#F43535]">Conoce nuestros servicios</p>
                        </div>


                      
                    </div>


                    {/* COMPONENTE QUE DESAPARECE SOLO EN DISPOSITIVO MOVIL*/}
                    <div className="hidden md:block xl:flex md:w-1/2 xl:w-screen ">
                        <div className="xl:w-1/3 h-1/3 pt-10 pb-10 flex flex-col justify-center">
                            <h3 className="text-[#F43535] text-center text-xl">Redes sociales</h3>
                            <p className="text-center mt-10">Danos tu opinión, conócenos y comparte en redes sociales</p>
                        </div>

                        <div className="xl:w-1/3  h-1/3 pt-10 pb-10 bg-[#1E1E1E] text-white flex flex-col justify-center">
                            <h3 className="text-center  text-2xl">Blog</h3>
                            <p className="text-center mt-10">Conoce más sobre Electromovilidad en nuestro Blog</p>
                            <p className="text-[#F43535] text-center mt-10">Mira el blog</p>
                        </div>

                        <div className="xl:w-1/3 h-1/3 pt-5 lg:pt-0  flexflex-col justify-center">
                            <h3 className="text-[#F43535] text-center text-xl pt-5 lg:pt-10">Servicios</h3>
                            <p className="text-center mt-5 lg:mt-10">Danos tu opinión, conócenos y comparte en redes sociales</p>
                            <p className="text-center mt-5 lg:mt-10   text-[#F43535]">Conoce nuestros servicios</p>
                        </div>
                    </div>
                </div>

        </section>
    )
    
    
}

export default SeccionInteres1