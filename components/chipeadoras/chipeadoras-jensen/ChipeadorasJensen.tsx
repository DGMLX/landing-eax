

import FormularioHubspot from "@/components/formularios/FormularioHubspot"
import Image from "next/image"
import { GoArrowRight } from "react-icons/go"



type Producto = {
    modelo:string,
    categoria:string,
    imagen:string[],
    imagenPlano:string,
    alt:string,
    descripcion:string,
    descripcion2:string,
    mesa_giratoria:boolean,
    mesa_giratoria_opcional:boolean,
    produccion:string,
    tamaño_garganta:string,
    motor:string,
    dimensiones:string,
    peso:string,
    routerPath:string,
    precio:number,
    params:string,
    potencia:string,
    tambor:string,
    dimensionesPrincipales:string,
    dimensionesOrugaFija:string,
    dimensionesOrugaAjustable:string,
    tomaDeFuerza:string,
}

type Props = {
    Productos:Producto[]
}

const ChipeadorasJensen = ({Productos}:Props) =>{


    return(
        <section className="md:px-5 sm:px-12 mt-10 flex justify-center flex-wrap">
            {Productos.length === 0 ?
            <>
                <p className="mb-10 lg:mx-64 text-center">Indícanos tu requerimiento y realizaremos la ingeniería de diseño para potenciar aún mas la solución al procesamiento de grandes cantidades de material.</p>
                <FormularioHubspot/>
            </> 
            :
            Productos.map(producto=>(
              
                <div className="border mx-2 rounded-2xl shadow-lg mb-5 w-[390px] md:w-96 pt-5 pb-10 px-5" key={producto.modelo}>
                    <div className="flex justify-center">
                        <Image src={producto.imagen[0]} alt={producto.alt} width={200} height={200}/>
                    </div>
                    <p className="text-center text-sm mt-4">Chipeadora</p>
                    <h2 className="text-center text-xl font-bold mt-1 pb-5">{producto.modelo}</h2>
                    <div className="px-5">
                        
                        {
                            producto.produccion !== '' && <p className="text-start ">Producción: {producto.produccion}</p>
                        }
                        {
                            producto.potencia !== '' &&  <p className="text-start ">Potencia: {producto.potencia}</p>
                        }
                       
                        {
                            producto.dimensionesPrincipales !== '' && <p className="text-start">Dimensiones: {producto.dimensionesPrincipales}</p>
                        }
                        
                        {
                            producto.peso !== '' && <p className="text-start">Peso: {producto.peso}</p>
                        }
                        {
                            producto.tamaño_garganta !== '' && <p className="text-start">Tamaño de garganta: {producto.tamaño_garganta}</p>
                        }
                        
                        
                        {
                            producto.tambor !== '' && <p className="text-start">Tambor: {producto.tambor}</p>
                        }
                    </div>
                    <div className="flex justify-center mt-5 ">
                        <button className="bg-black text-white px-2 sm:px-5 py-2 ml-3 rounded-xl"><a className="flex items-center" href={producto.routerPath}>Ver productos <GoArrowRight className="text-white ml-1 sm:ml-3"/></a></button>
                    </div>
                </div>
            ))} 
        
        </section>
    )
}

export default ChipeadorasJensen;