'use client'
import data from "../../../data/jensen" 
import { useParams } from "next/navigation"
import ChipeadorasJensen from "./ChipeadorasJensen";
import { textoCapitalizado } from "@/lib/helpers";


const Productos = data;




const CategoriaChipeadora = () =>{
    const params= useParams()
    const categoria = params.categoria as string
    const productosFiltrados = Productos.filter(producto=>producto.categoria===categoria.replace(/-/g,' '))
    

      

    return(
        <>
               <div className="font-extralight text-sm">
                        <a href="/jensen">Jensen</a> {' > '} 
                        <span className="text-red-600 underline">{textoCapitalizado(categoria.replace(/-/g,' '))}</span> 
                        
                    </div>
        <div className="flex justify-center mt-5">
            <h1 className="text-center text-2xl">{textoCapitalizado(categoria?.replace(/-/g, ' '))}</h1>
        </div>
            <ChipeadorasJensen Productos={productosFiltrados}/>
        </>
        
    )
}

export default CategoriaChipeadora