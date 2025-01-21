
import { Metadata } from "next";
import ModeloJensen from "@/components/chipeadoras/chipeadoras-jensen/modeloJensen/ModeloJensen";
import Image from "next/image";


type Props = {
     params:Promise<{modelo:string}>;
}



 export async function generateMetadata(params:Props):Promise<Metadata>{
    const info =await  params.params
    return{
        title:`Chipeadora Jensen - ${info.modelo.replace(/-/g,' ')}`,
        description:'Descripcion de chipeadora'
    }
 }


const ModeloProducto = () =>{
    
    return(
        <>
      
        <main>
      
           <ModeloJensen/>



        </main>
        </>
    )
}


export default ModeloProducto;