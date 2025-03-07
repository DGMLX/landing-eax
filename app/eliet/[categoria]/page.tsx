
import { Metadata } from 'next';


import CategoriaChipeadora from "@/components/chipeadoras/chipeadoras-eliet/CategoriaChipeadora";
import { textoCapitalizado } from '@/lib/helpers';

type Props = {
    params:Promise<{categoria:string}>;
}


 export async function generateMetadata(params:Props):Promise<Metadata>{
    const info =await  params.params
    return{
        title:textoCapitalizado(info.categoria.replace(/-/g,' ')).concat( ' - EcoAlliance'),
        description:'',
        icons: {
            icon:"/logo.png",
            shortcut:"/logo.png",
            apple:"/logo-apple.png"
          }
    }
 }

const InformacionProducto = () =>{

    return(
        <>
            <main >
                <div className="bg-[#F4F4F4] animate-fade animate-duration-[1000ms] animate-normal animate-fill-both">
                    {/* <section className="mt-20"> 
                        <Image src="/chipeadora/eliet/productos/img_principal.png" alt="Imagen Principal Eliet " width={2000} height={800} />
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