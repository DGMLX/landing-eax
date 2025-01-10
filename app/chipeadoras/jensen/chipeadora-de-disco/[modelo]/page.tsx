

import { BsShop } from "react-icons/bs";
import { RiErrorWarningLine } from "react-icons/ri";
import { GoDownload } from "react-icons/go";
import { BsTruck } from "react-icons/bs";
import Image from "next/image";
import SeccionInteres1 from "@/components/seccionInteres/SeccionInteres1";
import FormularioHubspot from "@/components/formularios/FormularioHubspot";
import { Metadata } from "next";
import ModeloJensen from "@/components/chipeadoras/chipeadoras-jensen/modeloJensen/ModeloJensen";

 // import FormularioProducto from "@/components/formularios/Formulario1";

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


const ModeloProducto= () =>{


    return(
        <>
      
        <main>
           <ModeloJensen/>

            {/* <FormularioProducto/> */}
            <FormularioHubspot urlImagen="/chipeadora/jensen/img_formulario.png"/>

             <SeccionInteres1/>
        </main>
        </>
    )
}


export default ModeloProducto;