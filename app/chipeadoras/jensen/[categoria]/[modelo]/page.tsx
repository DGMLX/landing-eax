
import FormularioHubspot from "@/components/formularios/FormularioHubspot";
import { Metadata } from "next";
import ModeloJensen from "@/components/chipeadoras/chipeadoras-jensen/modeloJensen/ModeloJensen";


type Props = {
     params:Promise<{modelo:string}>;
}



 export async function generateMetadata(params:Props):Promise<Metadata>{
    const info =await  params.params
    return{
        title:`Chipeadora Jensen - ${info.modelo}`,
        description:'Descripcion de chipeadora'
    }
 }


const ModeloProducto = (props:any) =>{
    console.log({props})
    
    return(
        <>
      
        <main>
           <ModeloJensen/>

            <FormularioHubspot urlImagen="/chipeadora/jensen/img_formulario.png"/>


        </main>
        </>
    )
}


export default ModeloProducto;