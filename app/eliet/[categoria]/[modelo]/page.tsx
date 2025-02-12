
import { Metadata } from "next";
import ModeloEliet from "@/components/chipeadoras/chipeadoras-eliet/modeloEliet/ModeloEliet";


type Props = {
     params:Promise<{modelo:string}>;
}



 export async function generateMetadata(params:Props):Promise<Metadata>{
    const info =await  params.params
    return{
        title:`Trituradoras Eliet - ${info.modelo.replace(/-/g,' ')}`,
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
      
        <main className="mt-20 animate-fade animate-duration-[1000ms] animate-normal animate-fill-both ">
            {/* <section> 
                <Image src="/chipeadora/eliet/productos/img_principal.png" alt="Imagen Principal chipeadoras productos Eliet" width={2000} height={2000}/>
            </section> */}
           <ModeloEliet/>



        </main>
        </>
    )
}


export default ModeloProducto;