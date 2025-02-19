import BannerPrincipal from "@/components/bannerAutomatico/BannerPrincipal";
import SliderProductos from "@/components/bannerAutomatico/SliderProductos";
import { HiArrowLongRight } from "react-icons/hi2";


const HomePage = () =>{
    return(
        <main className="mt-[99px]">

            <section className="w-screen h-1/4 mb-10">
                <BannerPrincipal/>
            </section>

            <section className="mx-20 mb-10">
                <h2 className="text-2xl mb-5">FEATURED STORIES</h2>
                <div className="flex justify-between">  

                    <div className="w-[250px] hover:shadow-xl">
                        <div className="bg-gray-300 w-[250px] h-[150px]"></div>
                        <div className="px-6 pt-5  border-gray-300 border">
                            <h3 className="font-bold ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, possimus!</h3>
                            <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ipsum? Similique omnis voluptas qui perspiciatis optio? Odit voluptates iste facere inventore atque aliquid voluptatem, exercitationem necessitatibus tempore mollitia repellat, magnam dolores tempora minus natus illo?</p>
                            <div className="mt-9 mb-9 flex justify-around items-center text-[#c4262e]">
                                <button className="text-xl">MÁS <br /> INFORMACION</button>
                                <HiArrowLongRight className="text-4xl"/>
                            </div>
                        </div>
                    </div>

                    <div className="w-[250px] hover:shadow-xl">
                        <div className="bg-gray-300 w-[250px] h-[150px]"></div>
                        <div className="px-6 pt-5  border-gray-300 border">
                            <h3 className="font-bold ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, possimus!</h3>
                            <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ipsum? Similique omnis voluptas qui perspiciatis optio? Odit voluptates iste facere inventore atque aliquid voluptatem, exercitationem necessitatibus tempore mollitia repellat, magnam dolores tempora minus natus illo?</p>
                            <div className="mt-9 mb-9 flex justify-around items-center text-[#c4262e]">
                                <button className="text-xl">MÁS <br /> INFORMACION</button>
                                <HiArrowLongRight className="text-4xl"/>
                            </div>
                        </div>
                    </div>

                    <div className="w-[250px] hover:shadow-xl">
                        <div className="bg-gray-300 w-[250px] h-[150px]"></div>
                        <div className="px-6 pt-5  border-gray-300 border">
                            <h3 className="font-bold ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, possimus!</h3>
                            <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ipsum? Similique omnis voluptas qui perspiciatis optio? Odit voluptates iste facere inventore atque aliquid voluptatem, exercitationem necessitatibus tempore mollitia repellat, magnam dolores tempora minus natus illo?</p>
                            <div className="mt-9 mb-9 flex justify-around items-center text-[#c4262e]">
                                <button className="text-xl">MÁS <br /> INFORMACION</button>
                                <HiArrowLongRight className="text-4xl"/>
                            </div>
                        </div>
                    </div>

                    <div className="w-[250px] hover:shadow-xl">
                        <div className="bg-gray-300 w-[250px] h-[150px]"></div>
                        <div className="px-6 pt-5  border-gray-300 border">
                            <h3 className="font-bold ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, possimus!</h3>
                            <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ipsum? Similique omnis voluptas qui perspiciatis optio? Odit voluptates iste facere inventore atque aliquid voluptatem, exercitationem necessitatibus tempore mollitia repellat, magnam dolores tempora minus natus illo?</p>
                            <div className="mt-9 mb-9 flex justify-around items-center text-[#c4262e]">
                                <button className="text-xl">MÁS <br /> INFORMACION</button>
                                <HiArrowLongRight className="text-4xl"/>
                            </div>
                        </div>
                    </div>

                    <div className="w-[250px] hover:shadow-xl">
                        <div className="bg-gray-300 w-[250px] h-[150px]"></div>
                        <div className="px-6 pt-5  border-gray-300 border">
                            <h3 className="font-bold ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, possimus!</h3>
                            <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ipsum? Similique omnis voluptas qui perspiciatis optio? Odit voluptates iste facere inventore atque aliquid voluptatem, exercitationem necessitatibus tempore mollitia repellat, magnam dolores tempora minus natus illo?</p>
                            <div className="mt-9 mb-9 flex justify-around items-center text-[#c4262e]">
                                <button className="text-xl">MÁS <br /> INFORMACION</button>
                                <HiArrowLongRight className="text-4xl"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end mt-7">
                    <button className="text-[#c4262e] flex items-center text-xl border border-[#c4262e]  py-3 px-4 rounded-full hover:bg-[#b01c1c] hover:text-white hover:underline">NEW AND INSIGHTS <HiArrowLongRight/></button>
                </div>
            </section>


            <section className="mx-20 mb-10">
                <h2 className="text-2xl mb-5">INDUSTRY SOLUTIONS</h2>
                <div className="w-full flex justify-between">
                    <div className="w-3/6">
                        <div className="flex justify-between py-5 hover:bg-gray-300 px-4">
                            <h4 className="text-lg">Centro de datos y redes</h4>
                            <HiArrowLongRight className="text-3xl"/>
                        </div>

                        <div className="flex justify-between py-5 hover:bg-gray-300 px-4">
                            <h4 className="text-lg">Automatización industrial</h4>
                            <HiArrowLongRight className="text-3xl"/>
                        </div>

                        <div className="flex justify-between py-5 hover:bg-gray-300 px-4">
                            <h4 className="text-lg">Servicios públicos de energía</h4>
                            <HiArrowLongRight className="text-3xl"/>
                        </div>

                        <div className="flex justify-between py-5 hover:bg-gray-300 px-4">
                            <h4 className="text-lg">Energía renovable</h4>
                            <HiArrowLongRight className="text-3xl"/>
                        </div>

                        <div className="flex justify-between py-5 hover:bg-gray-300 px-4">
                            <h4 className="text-lg">Almacenamiento de energía</h4>
                            <HiArrowLongRight className="text-3xl"/>
                        </div>

                        <div className="flex justify-between py-5 hover:bg-gray-300 px-4">
                            <h4 className="text-lg">Sector automotriz y movilidad electrónica</h4>
                            <HiArrowLongRight className="text-3xl"/>
                        </div>

                        <div className="flex justify-between py-5 hover:bg-gray-300 px-4">
                            <h4 className="text-lg">Edificios comerciales</h4>
                            <HiArrowLongRight className="text-3xl"/>
                        </div>

                        <div className="flex justify-between py-5 hover:bg-gray-300 px-4">
                            <h4 className="text-lg">Transición energética</h4>
                            <HiArrowLongRight className="text-3xl"/>
                        </div>

                        <div className="flex justify-between py-5 hover:bg-gray-300 px-4">
                            <h4 className="text-lg">Telecomunicaciones</h4>
                            <HiArrowLongRight className="text-3xl"/>
                        </div>

                        <div className="flex justify-between py-5 hover:bg-gray-300 px-4">
                            <h4 className="text-lg">Ferrocarril</h4>
                            <HiArrowLongRight className="text-3xl"/>
                        </div>

                    </div>

                    <div className="w-3/6 pl-14">
                        <div className="bg-gray-300 w- h-2/3 flex justify-center items-center">
                            <p>Item </p>
                        </div>
                    </div>

                </div>


                <div className="flex justify-end mt-7">
                    <button className="text-[#c4262e] flex items-center text-xl border border-[#c4262e]  py-3 px-5 rounded-full hover:bg-[#b01c1c] hover:text-white hover:underline">VIEW ALL <HiArrowLongRight className="ml-3"/></button>
                </div>
            </section>


            <section className="mx-20 mb-10">
                <h2 className="text-2xl mb-5">PRODUCTOS DESTACADOS</h2>
                <div className="flex gap-5">


                    <div className="w-1/4 hover:shadow-xl">
                        <div className="bg-gray-300 w-full h-[170px]"></div>
                        <div className="px-6 pt-5  border-gray-300 border">
                            <h3 className="font-bold ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, possimus!</h3>
                            <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ipsum? Similique omnis voluptas qui perspiciatis optio? Odit voluptates iste facere inventore atque aliquid voluptatem, exercitationem necessitatibus tempore mollitia repellat, magnam dolores tempora minus natus illo?</p>
                            <div className="mt-9 mb-9 flex justify-around items-center text-[#c4262e]">
                                <button className="text-xl">MÁS  INFORMACION</button>
                                <HiArrowLongRight className="text-4xl"/>
                            </div>
                        </div>
                    </div>

                    <div className="w-1/4 hover:shadow-xl">
                        <div className="bg-gray-300 w-full h-[170px]"></div>
                        <div className="px-6 pt-5  border-gray-300 border">
                            <h3 className="font-bold ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, possimus!</h3>
                            <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ipsum? Similique omnis voluptas qui perspiciatis optio? Odit voluptates iste facere inventore atque aliquid voluptatem, exercitationem necessitatibus tempore mollitia repellat, magnam dolores tempora minus natus illo?</p>
                            <div className="mt-9 mb-9 flex justify-around items-center text-[#c4262e]">
                                <button className="text-xl">MÁS  INFORMACION</button>
                                <HiArrowLongRight className="text-4xl"/>
                            </div>
                        </div>
                    </div>

                    <div className="w-1/4 hover:shadow-xl">
                        <div className="bg-gray-300 w-full h-[170px]"></div>
                        <div className="px-6 pt-5  border-gray-300 border">
                            <h3 className="font-bold ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, possimus!</h3>
                            <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ipsum? Similique omnis voluptas qui perspiciatis optio? Odit voluptates iste facere inventore atque aliquid voluptatem, exercitationem necessitatibus tempore mollitia repellat, magnam dolores tempora minus natus illo?</p>
                            <div className="mt-9 mb-9 flex justify-around items-center text-[#c4262e]">
                                <button className="text-xl">MÁS  INFORMACION</button>
                                <HiArrowLongRight className="text-4xl"/>
                            </div>
                        </div>
                    </div>

                    <div className="w-1/4 hover:shadow-xl">
                        <div className="bg-gray-300 w-full h-[170px]"></div>
                        <div className="px-6 pt-5  border-gray-300 border">
                            <h3 className="font-bold ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, possimus!</h3>
                            <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ipsum? Similique omnis voluptas qui perspiciatis optio? Odit voluptates iste facere inventore atque aliquid voluptatem, exercitationem necessitatibus tempore mollitia repellat, magnam dolores tempora minus natus illo?</p>
                            <div className="mt-9 mb-9 flex justify-around items-center text-[#c4262e]">
                                <button className="text-xl">MÁS  INFORMACION</button>
                                <HiArrowLongRight className="text-4xl"/>
                            </div>
                        </div>
                    </div>


                </div>

            </section>


            <section className="mx-20  mb-10">
                <SliderProductos/>
            </section>


   

            <section className="mx-20  ">
                <h2 className="text-2xl mb-5">PERSPECTIVAS</h2>
                <div className="flex gap-5 mb-7 ">
                    <div className=" bg-gray-300 w-1/2 h-[350px] flex flex-col justify-center">
                        <div className="flex flex-col  justify-start px-28 text-white">
                            
                            <h3 className="mb-10 underline underline-offset-[12px]">ARTÍCULO</h3>
                            <h1 className="text-4xl font-bold">How to Makethe Switch to LiquidCooling</h1>
                            <div className="flex mt-10">
                            <button className=" flex items-center text-xl border border-[#c4262e]  py-3 px-4 rounded-full bg-[#c4262e] text-white hover:bg-[#b01c1c] hover:text-white hover:underline">MÁS INFORMACIÓN <HiArrowLongRight className="ml-5 text-3xl"/></button>
                        
                            </div>
                        </div>
                    </div>

                    <div className=" bg-gray-300 w-1/2 h-[350px] flex flex-col justify-center">
                        <div className="flex flex-col justify-start px-28 text-white">
                            
                            <h3 className="mb-10 underline underline-offset-[12px]">ARTÍCULO</h3>
                            <h1 className="text-4xl font-bold">Reduce Footprint in Energy Storage Systems</h1>
                            <div className="flex mt-10">
                                <button className=" flex items-center text-xl border border-[#c4262e]  py-3 px-4 rounded-full bg-[#c4262e] text-white hover:bg-[#b01c1c] hover:text-white hover:underline">MÁS INFORMACIÓN<HiArrowLongRight className="ml-5 text-3xl"/></button>
                            
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                <div className="flex gap-5">

                        <div className="w-1/4 hover:shadow-xl">
                            <div className="bg-gray-300 w-full h-[170px]"></div>
                            <div className="px-6 pt-5  border-gray-300 border">
                                <h3 className="font-bold ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, possimus!</h3>
                                <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ipsum? Similique omnis voluptas qui perspiciatis optio? Odit voluptates iste facere inventore atque aliquid voluptatem, exercitationem necessitatibus tempore mollitia repellat, magnam dolores tempora minus natus illo?</p>
                                <div className="mt-9 mb-9 flex justify-around items-center text-[#c4262e]">
                                    <button className="text-xl">MÁS  INFORMACION</button>
                                    <HiArrowLongRight className="text-4xl"/>
                                </div>
                            </div>
                        </div>

                        <div className="w-1/4 hover:shadow-xl">
                            <div className="bg-gray-300 w-full h-[170px]"></div>
                            <div className="px-6 pt-5  border-gray-300 border">
                                <h3 className="font-bold ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, possimus!</h3>
                                <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ipsum? Similique omnis voluptas qui perspiciatis optio? Odit voluptates iste facere inventore atque aliquid voluptatem, exercitationem necessitatibus tempore mollitia repellat, magnam dolores tempora minus natus illo?</p>
                                <div className="mt-9 mb-9 flex justify-around items-center text-[#c4262e]">
                                    <button className="text-xl">MÁS  INFORMACION</button>
                                    <HiArrowLongRight className="text-4xl"/>
                                </div>
                            </div>
                        </div>

                        <div className="w-1/4 hover:shadow-xl">
                            <div className="bg-gray-300 w-full h-[170px]"></div>
                            <div className="px-6 pt-5  border-gray-300 border">
                                <h3 className="font-bold ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, possimus!</h3>
                                <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ipsum? Similique omnis voluptas qui perspiciatis optio? Odit voluptates iste facere inventore atque aliquid voluptatem, exercitationem necessitatibus tempore mollitia repellat, magnam dolores tempora minus natus illo?</p>
                                <div className="mt-9 mb-9 flex justify-around items-center text-[#c4262e]">
                                    <button className="text-xl">MÁS  INFORMACION</button>
                                    <HiArrowLongRight className="text-4xl"/>
                                </div>
                            </div>
                        </div>

                        <div className="w-1/4 hover:shadow-xl">
                            <div className="bg-gray-300 w-full h-[170px]"></div>
                            <div className="px-6 pt-5  border-gray-300 border">
                                <h3 className="font-bold ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, possimus!</h3>
                                <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ipsum? Similique omnis voluptas qui perspiciatis optio? Odit voluptates iste facere inventore atque aliquid voluptatem, exercitationem necessitatibus tempore mollitia repellat, magnam dolores tempora minus natus illo?</p>
                                <div className="mt-9 mb-9 flex justify-around items-center text-[#c4262e]">
                                    <button className="text-xl">MÁS  INFORMACION</button>
                                    <HiArrowLongRight className="text-4xl"/>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </section>
            



                    
            <section className="mx-20 flex mt-20 mb-10 gap-10">
                <div className="w-1/3">
                    <h2 className="text-2xl mb-5">MUNDO VIRTUAL NVENT</h2>
                    <p className="mb-5 text-lg">Explore el mundo virtual nVent y sumérjase en aplicaciones y plataformas de productos específicas de la industria.</p>
                    <p className="text-lg">Navegue a su conveniencia o programe una visita guiada con su representante de ventas de nVent.</p>
                
                    <button className="text-[#c4262e] mt-14 flex items-center text-xl border border-[#c4262e]  py-3 px-4 rounded-full hover:bg-[#b01c1c] hover:text-white hover:underline">EXPLORE <HiArrowLongRight/></button>
                   
                </div>  
                <div  className="w-2/3">
                    <div className="bg-gray-300 w-full h-[280px]"></div>
                </div>
            </section>

            <hr className="mx-20 border-black"/>

            <section className="mx-20 mt-10 mb-10">
                <h2 className="text-2xl mb-5">WHO WE ARE</h2>
                <div className="flex gap-5">


                    <div className="w-1/4 hover:shadow-xl">
                        <div className="bg-gray-300 w-full h-[170px]"></div>
                        <div className="px-6 pt-5  border-gray-300 border">
                            <h3 className="font-bold ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, possimus!</h3>
                            <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ipsum? Similique omnis voluptas qui perspiciatis optio? Odit voluptates iste facere inventore atque aliquid voluptatem, exercitationem necessitatibus tempore mollitia repellat, magnam dolores tempora minus natus illo?</p>
                            <div className="mt-9 mb-9 flex justify-around items-center text-[#c4262e]">
                                <button className="text-xl">MÁS  INFORMACION</button>
                                <HiArrowLongRight className="text-4xl"/>
                            </div>
                        </div>
                    </div>

                    <div className="w-1/4 hover:shadow-xl">
                        <div className="bg-gray-300 w-full h-[170px]"></div>
                        <div className="px-6 pt-5  border-gray-300 border">
                            <h3 className="font-bold ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, possimus!</h3>
                            <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ipsum? Similique omnis voluptas qui perspiciatis optio? Odit voluptates iste facere inventore atque aliquid voluptatem, exercitationem necessitatibus tempore mollitia repellat, magnam dolores tempora minus natus illo?</p>
                            <div className="mt-9 mb-9 flex justify-around items-center text-[#c4262e]">
                                <button className="text-xl">MÁS  INFORMACION</button>
                                <HiArrowLongRight className="text-4xl"/>
                            </div>
                        </div>
                    </div>

                    <div className="w-1/4 hover:shadow-xl">
                        <div className="bg-gray-300 w-full h-[170px]"></div>
                        <div className="px-6 pt-5  border-gray-300 border">
                            <h3 className="font-bold ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, possimus!</h3>
                            <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ipsum? Similique omnis voluptas qui perspiciatis optio? Odit voluptates iste facere inventore atque aliquid voluptatem, exercitationem necessitatibus tempore mollitia repellat, magnam dolores tempora minus natus illo?</p>
                            <div className="mt-9 mb-9 flex justify-around items-center text-[#c4262e]">
                                <button className="text-xl">MÁS  INFORMACION</button>
                                <HiArrowLongRight className="text-4xl"/>
                            </div>
                        </div>
                    </div>

                    <div className="w-1/4 hover:shadow-xl">
                        <div className="bg-gray-300 w-full h-[170px]"></div>
                        <div className="px-6 pt-5  border-gray-300 border">
                            <h3 className="font-bold ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, possimus!</h3>
                            <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ipsum? Similique omnis voluptas qui perspiciatis optio? Odit voluptates iste facere inventore atque aliquid voluptatem, exercitationem necessitatibus tempore mollitia repellat, magnam dolores tempora minus natus illo?</p>
                            <div className="mt-9 mb-9 flex justify-around items-center text-[#c4262e]">
                                <button className="text-xl">MÁS  INFORMACION</button>
                                <HiArrowLongRight className="text-4xl"/>
                            </div>
                        </div>
                    </div>


                </div>

            </section>


            <section className="mx-20 mt-20  mb-10">
                <div className="bg-gray-300 w-full h-[400px]"></div>
            </section>
            
        </main>
    )
}

export default HomePage;