
import { Metadata } from "next";
import ModeloEliet from "@/components/chipeadoras/chipeadoras-eliet/modeloEliet/ModeloEliet";
import Image from "next/image";


type Props = {
     params:Promise<{modelo:string}>;
}



 export async function generateMetadata(params:Props):Promise<Metadata>{
    const info =await  params.params
    return{
        title:`Chipeadora Eliet - ${info.modelo}`,
        description:'Descripcion de chipeadora'
    }
 }


const ModeloProducto = () =>{
    
    return(
        <>
      
        <main>
            <section> 
                <Image src="/chipeadora/eliet/productos/img_principal.png" alt="Imagen Principal chipeadoras productos Eliet" width={1600} height={200} />
            </section>
           <ModeloEliet/>



        </main>
        </>
    )
}


export default ModeloProducto;