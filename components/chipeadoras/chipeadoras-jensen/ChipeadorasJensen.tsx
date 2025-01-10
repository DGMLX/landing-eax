'use client'

import { useAppDispatch } from "@/store"
import { agregarProducto } from "@/store/productos/productosSlice"
import Image from "next/image"
import { GoArrowRight } from "react-icons/go"

type Producto = {
    modelo:string,
    categoria:string,
    imagen:string[],
    alt:string,
    descripcion:string,
    caracteristicas_tecnicas:string,
    mesa_giratoria:boolean,
    mesa_giratoria_opcional:boolean,
    produccion:string,
    tamaño_garganta:string,
    motor:string,
    dimensiones:string,
    peso:string,
    urlPlano:string
    routerPath:string,
    precio:number,
    params:string
}

type Props = {
    Productos:Producto[]
}

const ChipeadorasJensen = ({Productos}:Props) =>{

    const dispatch = useAppDispatch()


    return(
        <section className="pr-12 pl-12 mt-10 flex justify-center flex-wrap">
            {Productos.map(producto=>(
                <div className="border mx-2 rounded-2xl shadow-lg mb-5 w-72 pt-5 pb-20 px-5" key={producto.modelo}>
                    <div className="flex justify-center">
                        <Image src={producto.imagen[0]} alt={producto.alt} width={200} height={200}/>
                    </div>
                    <p className="text-center text-sm mt-4">Chipeadora</p>
                    <h2 className="text-center text-xl font-bold mt-1">{producto.modelo}</h2>
                    <p className="text-center mb-2">{producto.caracteristicas_tecnicas}</p>
                    <p className="text-center">{producto.descripcion.substring(0,150)}....</p>
                    <div className="flex justify-center mt-5">
                        <button className="border border-black p-1 rounded-xl" 
                            onClick={()=>dispatch(agregarProducto({
                                imgURL:producto.imagen[0],
                                cantidad:1,
                                nombre:producto.modelo,
                                precio:producto.precio
                            }))}
                        ><Image src="/logos_generales/logo_add_cart.png" alt="Logo carrito" width={33} height={33}/></button>
                        <button className="bg-black text-white px-4 ml-3 rounded-xl"><a className="flex items-center" href={producto.routerPath}>Ver productos <GoArrowRight className="text-white ml-3"/></a></button>
                    </div>
                </div>
            ))} 
        </section>
    )
}

export default ChipeadorasJensen;