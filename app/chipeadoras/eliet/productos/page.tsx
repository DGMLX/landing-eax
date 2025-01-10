// import ProductosRelacionados from "@/components/ProductosRelacionados";
import SeccionInteres1 from "@/components/seccionInteres/SeccionInteres1";
import Image from "next/image"
import { Metadata } from 'next';
import ChipeadorasEliet from "@/components/chipeadoras/chipeadoras-eliet/ChipeadorasEliet";
 
export const metadata: Metadata = {
  title: 'Chipeadoras de disco - EcoAlliance',
  description: '',
}

const Productos = [
    {"imagen":"/chipeadora/eliet/productos/maestro_city.png","alt":"Chipeadora Eliet maestro city","nombre":"Maestro City","descripcion_tecnica":"23.8 HP K - Chasis 80 km/h","descripcion_producto":"Es compacta, potente y tritura troncos y ramas fácilmente. Tiene rodillos de alimentación hidráulicos y un cañón de descarga 360º.","routerPath":"/chipeadoras/eliet/productos/Maestro-city","precio":15340230},

    {"imagen":"/chipeadora/eliet/productos/major_4s.png","alt":"Chipeadora Eliet Major 4s","nombre":"Major 4S","descripcion_tecnica":"23 HP V - Chasis 80 km/h","descripcion_producto":"Es compacta, potente y tritura troncos y ramas fácilmente. Tiene rodillos de alimentación hidráulicos y un cañón de descarga 360º.","routerPath":"/chipeadoras/eliet/productos/major-4s","precio":15340230},

    {"imagen":"/chipeadora/eliet/productos/vector_4s.png","alt":"Chipeadora Eliet vector 4S ","nombre":"Vector 4S","descripcion_tecnica":"25 HP K - Chasis 80 km/h","descripcion_producto":"Es compacta, potente y tritura troncos y ramas fácilmente. Tiene rodillos de alimentación hidráulicos y un cañón de descarga 360º.","routerPath":"/chipeadoras/eliet/productos/vector_4s","precio":15340230},

    {"imagen":"/chipeadora/eliet/productos/prof6_cross_country.png","alt":"Chipeadora Eliet Prof 6 Cross Country","nombre":"Prof 6 Cross Country","descripcion_tecnica":"37 HP Y - Chasis 80 km/h","descripcion_producto":"Es compacta, potente y tritura troncos y ramas fácilmente. Tiene rodillos de alimentación hidráulicos y un cañón de descarga 360º.","routerPath":"/chipeadoras/eliet/productos/prof-6-cross-country","precio":15340230},

    {"imagen":"/chipeadora/eliet/productos/prof5_on_road.png","alt":"Chipeadora Elit Prof 5 On Road","nombre":"Prof 5 On Road","descripcion_tecnica":"23.8 HP K - Chasis 80 km/h","descripcion_producto":"Es compacta, potente y tritura troncos y ramas fácilmente. Tiene rodillos de alimentación hidráulicos y un cañón de descarga 360º.","routerPath":"/chipeadoras/eliet/productos/prof-5-on-road","precio":15340230},

    {"imagen":"/chipeadora/eliet/productos/minur_4s.png","alt":"Chipeadora Eliet Minur 4S","nombre":"Minur 4S","descripcion_tecnica":"23 HP V - Chasis 80 km/h","descripcion_producto":"Es compacta, potente y tritura troncos y ramas fácilmente. Tiene rodillos de alimentación hidráulicos y un cañón de descarga 360º.","routerPath":"/chipeadoras/eliet/productos/minur-4s","precio":15340230},

    {"imagen":"/chipeadora/eliet/productos/super_prof_max_country.png","alt":"Chipeadora Eliet Super prof Max Cross Country","nombre":"Super Prof Max Cross Country","descripcion_tecnica":"25 HP K - Chasis 80 km/h","descripcion_producto":"Es compacta, potente y tritura troncos y ramas fácilmente. Tiene rodillos de alimentación hidráulicos y un cañón de descarga 360º.","routerPath":"/chipeadoras/eliet/productos/super-prof-max-cross-country","precio":15340230},

    {"imagen":"/chipeadora/eliet/productos/mega_prof.png","alt":"Chipeadora Eliet mega_prof","nombre":"Mega Prof","descripcion_tecnica":"37 HP Y - Chasis 80 km/h","descripcion_producto":"Es compacta, potente y tritura troncos y ramas fácilmente. Tiene rodillos de alimentación hidráulicos y un cañón de descarga 360º.","routerPath":"/chipeadoras/eliet/productos/mega-prof","precio":15340230},
]


const InformacionProducto = () =>{


    return(
        <>
            <main>
                <div className="bg-[#F4F4F4]">
                    <section> 
                        <Image src="/chipeadora/eliet/productos/img_principal.png" alt="Imagen Principal chipeadoras productos Eliet" width={1600} height={200} />
                    </section>


                    <section  className="px-10 mt-10">
                        <div className="flex justify-between">
                            <button>Filtrar</button>
                            <p>8 productos en total</p>
                        </div>

                    </section>

                    <ChipeadorasEliet Productos={Productos}/>


                   {/* <ProductosRelacionados/> */}

                </div>

                <SeccionInteres1/>
            </main>
        </>
    )
}

export default InformacionProducto