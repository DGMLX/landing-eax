'use client'

import Image from "next/image";
import { useParams } from "next/navigation";
import data from "../../../../data/jensen"; 
import { useState } from "react";


const ModeloJensen = () => {

    const params = useParams()
    const modelo = params.modelo as string
    const categoria = params.categoria as string

    const producto = data.filter(prod=>prod.params === modelo && prod.categoria === categoria.replace(/-/g,' '))
    

    const [imagen1,setImagen1] = useState(true)
    const [imagen2,setImagen2] = useState(false)
    const [imagen3,setImagen3] = useState(false)
    const [imagen4,setImagen4] = useState(false)



    return(
        <>
              <section  className="pr-24 pl-24 mt-20 flex mb-10">
                <div className="w-1/2 border rounded-xl">
                    <div className="flex justify-center mt-5 mb-10">
                   
                        {
                            imagen1 && <Image src={producto[0].imagen[0]} alt="Chipeadora de disco A530L" width={300} height={300} />
                        }
                        {
                            imagen2 && <Image src={producto[0].imagen[1]} alt="Chipeadora de disco A530L" width={300} height={300} />
                        }
                        {
                            imagen3 && <Image src={producto[0].imagen[2]} alt="Chipeadora de disco A530L" width={300} height={300} />
                        }
                        {
                            imagen4 && <Image src={producto[0].imagen[3]} alt="Chipeadora de disco A530L" width={300} height={300} />
                        }
                         
                    </div>
                    <div className="flex justify-center mb-4">
                            <Image src={producto[0].imagen[0]} alt="Chipeadora de disco A530L" width={90} height={90} className="w-1/5 m-1 border rounded-xl" />
                            <Image src={producto[0].imagen[1]} alt="Chipeadora de disco A530L" width={90} height={90} className="w-1/5 m-1"/>
                            <Image src={producto[0].imagen[2]} alt="Chipeadora de disco A530L" width={90} height={90} className="w-1/5 m-1"/>
                            <Image src={producto[0].imagen[3]} alt="Chipeadora de disco A530L" width={90} height={90} className="w-1/5 m-1"/>
                    </div>
                </div>
                <div className="w-1/2 ml-32">
                    <div>
                        <h1 className="text-2xl ">Chipeadora {producto[0].modelo}</h1>
                    </div>
                    <p className="text-sm">Chipeadoras Jensen</p>
                    <p className="font-bold mt-2">$15.340.230</p>
                    {/* <div className="mt-2 mb-10">
                        <button className="border border-black py-2 px-12 rounded-xl mr-3 hover:bg-black hover:text-white">Diésel</button>
                        <button className="border border-black py-2 px-12 rounded-xl  hover:bg-black hover:text-white">Gasolina</button>
                    </div> */}
                    <p className="mb-5 mt-5">{producto[0].descripcion}
                    </p>
                    

                    <div className="flex  mt-10">
                    
                        <button className="bg-black text-white py-2 px-32 rounded-xl w-full">Solicitar información</button>
                    </div>
  
                </div>
             </section>

             <section className="pr-24 pl-24 mb-20 flex justify-center ">
                
                <div className="w-1/2  mr-2">
                    <h2 className="font-bold">Dimensiones / Plano</h2>
                    <Image src={producto[0].imagenPlano} alt="Planos chipeadora de disco A530L" width={1000} height={200} />
                </div>
                <div className="w-1/2 ml-32">
                    <h2 className=" font-bold mb-5">Especificaciones generales</h2>
                    <p className="mb-5 border-t-2 pt-2 border-black">Modelo: {producto[0].modelo} - {producto[0].caracteristicas_tecnicas}</p>
                    <p className="mb-5 border-t-2 pt-2 border-black">Producción: {producto[0].produccion}</p>
                    <p className="mb-5 border-t-2 pt-2 border-black">Tamaño de garganta de alimentación: 210 x 150 [mm]</p>
                    <p className="mb-5 border-t-2 pt-2 border-black">Motor: Motor de 23.8 [HP] Kubota Diésel</p>
                    <p className="mb-5 border-t-2 pt-2 border-black">Dimensiones: (Largo x Ancho x Alto)3450 x 1380 x 2200 [mm]</p>
                    <p className="mb-5 border-y-2 pt-2 pb-2 border-black">Peso: {producto[0].peso}</p>
                </div>
             </section>
        </>
    )
}

export default ModeloJensen;