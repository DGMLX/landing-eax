import SeccionInteres1 from "@/components/seccionInteres/SeccionInteres1";
import Image from "next/image"
import { Metadata } from 'next';
import ChipeadorasJensen from "@/components/chipeadoras/chipeadoras-jensen/ChipeadorasJensen";
import data from "../../../../data/jensen" 
export const metadata: Metadata = {
  title: 'Chipeadoras de tambor - EcoAlliance',
  description: '',
}

const Productos = data;
console.log(Productos)




const InformacionProducto = () =>{


    return(
        <>
            <main>
                <div className="bg-[#F4F4F4]">
                    <section> 
                        <Image src="/chipeadora/jensen/chipeadora_disco/chipeadora_disco_principal.png" alt="Imagen Principal chipeadora de discos " width={1600} height={200} />
                    </section>


                    <section  className="px-10 mt-10">
                        <div className="flex justify-between">
                            <button>Filtrar</button>
                            <h1 className="text-3xl">Chipeadoras de Tambor</h1>
                            <p>8 productos en total</p>
                        </div>

                    </section>

                    <ChipeadorasJensen Productos={Productos}/>

                </div>

                <SeccionInteres1/>
            </main>
        </>
    )
}

export default InformacionProducto