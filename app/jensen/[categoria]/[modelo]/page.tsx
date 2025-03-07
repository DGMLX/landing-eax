
import { Metadata } from "next";
import ModeloJensen from "@/components/chipeadoras/chipeadoras-jensen/modeloJensen/ModeloJensen";
import { textoCapitalizado } from "@/lib/helpers";


type Props = {
     params:Promise<{modelo:string}>;
}



 export async function generateMetadata(params:Props):Promise<Metadata>{
    const info =await  params.params
    return{
        title:`Chipeadora Jensen - ${textoCapitalizado(info.modelo.replace(/-/g,' '))}`,
        description:'Descripcion de chipeadora',
        
        icons: {
            icon:"/logo.png",
            shortcut:"/logo.png",
            apple:"/logo-apple.png"
          }
    }
 }


const ModeloProducto = () =>{
    
    return(
        <>
        <main className=" animate-fade animate-duration-[1000ms] animate-normal animate-fill-both">
            {/* <section> 
                <Image src="/chipeadora/jensen/chipeadora_disco/banner_chipeadora.jpg" alt="Imagen Principal chipeadora de discos " width={2000} height={200} />
            </section> */}
           <ModeloJensen/>



        </main>
        </>
    )
}


export default ModeloProducto;