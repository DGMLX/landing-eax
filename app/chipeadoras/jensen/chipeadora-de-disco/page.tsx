import SeccionInteres1 from "@/components/seccionInteres/SeccionInteres1";
import Image from "next/image"
import { Metadata } from 'next';
import ChipeadorasJensen from "@/components/chipeadoras/chipeadoras-jensen/ChipeadorasJensen";
import data from "../../../../data/jensen" 
export const metadata: Metadata = {
  title: 'Chipeadoras de disco - EcoAlliance',
  description: '',
}

const Productos = data;
console.log(Productos)

// const Productos = [
//     {"imagen":"/chipeadora/jensen/chipeadora_disco/A530L-1.png","alt":"Chipeadora A530 L","nombre":"A530 L","descripcion_tecnica":"23.8 HP k - Chasis 80 km/h","descripcion_producto":"Es compacta, potente y tritura troncos y ramas fácilmente. Tiene rodillos de alimentación hidráulicos y un cañón de descarga 360º.","routerPath":"/chipeadoras/jensen/chipeadora-de-disco/A530L-1","precio":15340230},

//     {"imagen":"/chipeadora/jensen/chipeadora_disco/A530L-2.png","alt":"Chipeadora A530 L","nombre":"A530-2 L","descripcion_tecnica":"23 HP V - Chasis 80 km/h","descripcion_producto":"Es compacta, potente y tritura troncos y ramas fácilmente. Tiene rodillos de alimentación hidráulicos y un cañón de descarga 360º.","routerPath":"/chipeadoras/jensen/chipeadora-de-disco/A530L-2","precio":15340230},

//     {"imagen":"/chipeadora/jensen/chipeadora_disco/A540.png","alt":"Chipeadora A540","nombre":"A540","descripcion_tecnica":"25 HP K - Chasis 80 km/h","descripcion_producto":"Es compacta, potente y tritura troncos y ramas fácilmente. Tiene rodillos de alimentación hidráulicos y un cañón de descarga 360º.","routerPath":"/productos/tratamiento-de-residuos/chipeadoras/jensen/chipeadora-de-disco/A540","precio":15340230},

//     {"imagen":"/chipeadora/jensen/chipeadora_disco/A550.png","alt":"Chipeadora A550","nombre":"A550","descripcion_tecnica":"37 HP Y - Chasis 80 km/h","descripcion_producto":"Es compacta, potente y tritura troncos y ramas fácilmente. Tiene rodillos de alimentación hidráulicos y un cañón de descarga 360º.","routerPath":"/chipeadoras/jensen/chipeadora-de-disco/A550","precio":15340230},

//     {"imagen":"/chipeadora/jensen/chipeadora_disco/A450.png","alt":"Chipeadora A450 L","nombre":"A450","descripcion_tecnica":"23.8 HP K - Chasis 80 km/h","descripcion_producto":"Es compacta, potente y tritura troncos y ramas fácilmente. Tiene rodillos de alimentación hidráulicos y un cañón de descarga 360º.","routerPath":"/chipeadoras/jensen/chipeadora-de-disco/A450","precio":15340230},

//     {"imagen":"/chipeadora/jensen/chipeadora_disco/A425.png","alt":"Chipeadora A425","nombre":"A425 L","descripcion_tecnica":"23 HP V - Chasis 80 km/h","descripcion_producto":"Es compacta, potente y tritura troncos y ramas fácilmente. Tiene rodillos de alimentación hidráulicos y un cañón de descarga 360º.","routerPath":"/chipeadoras/jensen/chipeadora-de-disco/A425L","precio":15340230},

//     {"imagen":"/chipeadora/jensen/chipeadora_disco/A350.png","alt":"Chipeadora A350","nombre":"A350","descripcion_tecnica":"25 HP K - Chasis 80 km/h","descripcion_producto":"Es compacta, potente y tritura troncos y ramas fácilmente. Tiene rodillos de alimentación hidráulicos y un cañón de descarga 360º.","routerPath":"/chipeadoras/jensen/chipeadora-de-disco/A350","precio":15340230},

//     {"imagen":"/chipeadora/jensen/chipeadora_disco/A328.png","alt":"Chipeadora A328","nombre":"A328","descripcion_tecnica":"37 HP Y - Chasis 80 km/h","descripcion_producto":"Es compacta, potente y tritura troncos y ramas fácilmente. Tiene rodillos de alimentación hidráulicos y un cañón de descarga 360º.","routerPath":"/chipeadoras/jensen/chipeadora-de-disco/A328","precio":15340230},
// ]


const InformacionProducto = () =>{


    return(
        <>
            <main>
                <div className="bg-[#F4F4F4]">
                    <section> 
                        <Image src="/chipeadora/jensen/chipeadora_disco/chipeadora_disco_principal.png" alt="Imagen Principal chipeadora de discos " width={1600} height={200} />
                    </section>


                    <section  className="px-10 mt-10">
                        <div className="flex justify-between">
                            <button>Filtrar</button>
                            <h1 className="text-3xl">Chipeadoras de disco</h1>
                            <p>8 productos en total</p>
                        </div>

                    </section>

                    <ChipeadorasJensen Productos={Productos}/>

                </div>

                <SeccionInteres1/>
            </main>
        </>
    )
}

export default InformacionProducto