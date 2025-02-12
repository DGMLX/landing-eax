'use client'
import data from "../../../data/eliet" 
import { useParams } from "next/navigation"
import ChipeadorasEliet from "./ChipeadorasEliet";
import { textoCapitalizado } from "@/lib/helpers";


const Productos = data;




const CategoriaChipeadora = () =>{
    const params= useParams()
    const categoria = params.categoria as string
    const productosFiltrados = Productos.filter(producto=>producto.categoria===categoria.replace(/-/g,' '))
    
   

    const categoriaEspaciada = textoCapitalizado(categoria.replace(/-/g,' '))

    

    return(
        <>
               <div className="font-extralight text-sm">
                        <a href="/eliet">Eliet</a> {' > '} 
                        <span className="text-red-600 underline">{categoriaEspaciada}</span> 
                        
                    </div>
        <div className="flex justify-center mt-5">
            <h1 className="text-center text-2xl">{categoriaEspaciada}</h1>
        </div>
            <ChipeadorasEliet Productos={productosFiltrados}/>
        </>
        
    )
}

export default CategoriaChipeadora