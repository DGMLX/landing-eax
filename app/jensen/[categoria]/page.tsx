
import { Metadata } from 'next';


import CategoriaChipeadora from "@/components/chipeadoras/chipeadoras-jensen/CategoriaChipeadora";

type Props = {
    params:Promise<{categoria:string}>;
}

 export async function generateMetadata(params:Props):Promise<Metadata>{
    const info =await  params.params
    return{
        title:`${info.categoria.replace(/-/g, ' ')} - EcoAlliance`,
        description:''
    }
 }

const InformacionProducto = () =>{

    return(
        <>
            <main>
                <div className="bg-[#F4F4F4] animate-fade animate-duration-[1000ms] animate-normal animate-fill-both">
                    {/* <section> 
                        <Image src="/chipeadora/jensen/chipeadora_disco/banner_chipeadora.jpg" alt="Imagen Principal chipeadora de discos " width={2000} height={200} />
                    </section> */}


                    {/* <section  className="px-10 mt-10"> */}
                    <section  className="px-10 pt-32 pb-32">
                            <CategoriaChipeadora/>
                        
                    </section>

              

                </div>
            </main>
        </>
    )
}

export default InformacionProducto