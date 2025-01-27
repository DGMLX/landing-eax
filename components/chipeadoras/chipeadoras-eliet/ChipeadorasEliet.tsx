'use client'

import Image from "next/image"
import { GoArrowRight } from "react-icons/go"

type Producto = {
    imagen:string[],
    alt:string,
    modelo:string,
    // caracteristicas_tecnicas?:string,
    descripcion:string,
    descripcion2:string,
    descripcion3:string,
    descripcion4:string,
    params:string,
    routerPath:string,
    precio:number,
    produccion:string,
    diametro_entrada:string,
    motor:string,
    dimensiones:string,
    peso:string,
    
}

type Props = {
    Productos:Producto[]
}

const ChipeadorasEliet = ({Productos}:Props) =>{


    return(

        
        <section className="pr-12 pl-12 mt-10 flex justify-center flex-wrap">
            {Productos.map(producto=>(
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
                            producto.motor !== '' &&  <p className="text-start ">Motor: {producto.motor}</p>
                        }
                        {
                            producto.dimensiones !== '' && <p className="text-start ">Dimensiones: {producto.dimensiones.substring(23,70)}</p>
                        }
                        {
                            producto.peso !== '' && <p className="text-start">Peso: {producto.peso}</p>
                        }
                        {
                            producto.diametro_entrada !== '' && <p className="text-start">Diámetro de entrada: {producto.diametro_entrada}</p>
                        }
                        
                  
                    </div>
                    <div className="flex justify-center mt-5">
                       
                        <button className="bg-black text-white px-4 py-2 ml-3 rounded-xl"><a className="flex items-center" href={producto.routerPath}>Ver productos <GoArrowRight className="text-white ml-3"/></a></button>
                    </div>
                </div>
            ))} 
        </section>
    )
}

export default ChipeadorasEliet;