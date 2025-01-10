'use client'
import data from "../../../data/jensen" 
import { useParams } from "next/navigation"
import ChipeadorasJensen from "./ChipeadorasJensen";


const Productos = data;




const CategoriaChipeadora = () =>{
    console.log(Productos)
    const params= useParams()
    const categoria = params.categoria as string
    const productosFiltrados = Productos.filter(producto=>producto.categoria===categoria.replace(/-/g,' '))
    
    return(
        <>
        <div className="flex justify-center">
            <h1 className="text-center text-2xl">{categoria?.replace(/-/g, ' ')}</h1>
        </div>
            <ChipeadorasJensen Productos={productosFiltrados}/>
        </>
        
    )
}

export default CategoriaChipeadora