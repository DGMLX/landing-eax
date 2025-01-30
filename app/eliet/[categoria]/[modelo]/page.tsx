
import { Metadata } from "next";
import ModeloEliet from "@/components/chipeadoras/chipeadoras-eliet/modeloEliet/ModeloEliet";
import Image from "next/image";


type Props = {
     params:Promise<{modelo:string}>;
}



 export async function generateMetadata(params:Props):Promise<Metadata>{
    const info =await  params.params
    return{
        title:`Chipeadora Eliet - ${info.modelo.replace(/-/g,' ')}`,
        description:'Descripcion de chipeadora'
    }
 }


const ModeloProducto = () =>{
    
    return(
        <>
      
        <main className="mt-20">
            {/* <section> 
                <Image src="/chipeadora/eliet/productos/img_principal.png" alt="Imagen Principal chipeadoras productos Eliet" width={2000} height={2000}/>
            </section> */}
           <ModeloEliet/>



        </main>
        </>
    )
}


export default ModeloProducto;