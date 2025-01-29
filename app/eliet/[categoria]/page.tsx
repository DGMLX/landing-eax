

import Image from "next/image"
import { Metadata } from 'next';


import CategoriaChipeadora from "@/components/chipeadoras/chipeadoras-eliet/CategoriaChipeadora";

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
                <div className="bg-[#F4F4F4]">
                    <section className="mt-20"> 
                        <Image src="/chipeadora/eliet/productos/img_principal.png" alt="Imagen Principal Eliet " width={2000} height={800} />
                    </section>


                    <section  className="px-10 mt-10">

                            <CategoriaChipeadora/>
                        
                    </section>

              

                </div>
            </main>
        </>
    )
}

export default InformacionProducto;





// import data from "../../../../data/eliet";
// import Image from "next/image"
// import { Metadata } from 'next';
// import ChipeadorasEliet from "@/components/chipeadoras/chipeadoras-eliet/ChipeadorasEliet";
 
// export const metadata: Metadata = {
//   title: 'Chipeadoras Eliet - EcoAlliance',
//   description: '',
// }

// const Productos = data;

// const InformacionProducto = () =>{

//     return(
//         <>
//             <main className="mt-20">
//                 <div className="bg-[#F4F4F4]">
//                     <section> 
//                         <Image src="/chipeadora/eliet/productos/img_principal.png" alt="Imagen Principal chipeadoras productos Eliet" width={2000} height={200} />
//                     </section>
//                     <section  className="px-10 mt-10">
//                         <div className="font-extralight text-sm">
//                             <a href="/chipeadoras/eliet">Eliet</a> {' > '} 
//                             <span className="text-red-600 underline">Chipeadoras Eliet</span> 
//                         </div>
//                     </section>

//                     <section  className="px-10 mt-5">
//                         <h1 className="text-center text-2xl">Chipeadoras Eliet</h1>

//                     </section>

//                     <ChipeadorasEliet Productos={Productos}/>


//                    {/* <ProductosRelacionados/> */}

//                 </div>

//             </main>
//         </>
//     )
// }

// export default InformacionProducto