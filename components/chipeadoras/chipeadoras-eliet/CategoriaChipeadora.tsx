'use client'
import data from "../../../data/eliet" 
import { useParams } from "next/navigation"
import ChipeadorasEliet from "./ChipeadorasEliet";


const Productos = data;




const CategoriaChipeadora = () =>{
    const params= useParams()
    const categoria = params.categoria as string
    const productosFiltrados = Productos.filter(producto=>producto.categoria===categoria.replace(/-/g,' '))
    

      

    return(
        <>
               <div className="font-extralight text-sm">
                        <a href="/chipeadoras/eliet">Eliet</a> {' > '} 
                        <span className="text-red-600 underline">{categoria.replace(/-/g,' ')}</span> 
                        
                    </div>
        <div className="flex justify-center mt-5">
            <h1 className="text-center text-2xl">{categoria?.replace(/-/g, ' ')}</h1>
        </div>
            <ChipeadorasEliet Productos={productosFiltrados}/>
        </>
        
    )
}

export default CategoriaChipeadora