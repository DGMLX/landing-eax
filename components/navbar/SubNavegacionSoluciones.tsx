import Link from "next/link";
import { Dispatch, SetStateAction } from "react";


type Props = {
    hoverSubSoluciones : boolean;
    setHoverSubSoluciones:Dispatch<SetStateAction<boolean>>;
  }
  

const SubNavegacionSoluciones:React.FC<Props> = ({hoverSubSoluciones,setHoverSubSoluciones}) =>{

    const outHover = ()=>{
        setHoverSubSoluciones(false)

    }

    return(
        <div className={` text-white md:ml-10 lg:ml-36 xl:ml-52 mr-96 px-8 ${hoverSubSoluciones ? 'flex' : 'hidden'} `} onMouseLeave={()=>outHover()}>
            <div className="flex justify-between pt-10 pb-10 absolute bg-[#1E1E1E] px-10 z-30">
                <div className="pr-2">
                    <h3 className="text-sm font-bold mb-5">MULTIPROPÓSITO</h3>
                    <p className="text-sm">Multicar</p>
                </div>
                    
                <div  className="pr-2">
                    <h3 className="text-sm font-bold mb-5">ASEO URBANO</h3>
                    <p className="text-sm">Limpieza y <br/> sanitización</p>
                </div>
                    
                <div  className="pr-2">
                    <h3 className="text-sm font-bold mb-5">TRATAMIENTO DE RESIDUOS</h3>
                    <p className="text-sm font-bold mb-5">Tratamiento de residuos <br/> orgánicos y restos de poda</p>
                    <Link href={"/soluciones/planta-de-compostaje"} className="text-sm">Planta de compostaje</Link>
                    <p className="text-sm mt-5">Planta de Briquetas</p>
                    <p className="text-sm mt-5">Planta de Mulch</p>
                    <p className="text-sm mt-5">Planta de Pellet</p>
                    <p className="text-sm mt-5">Programa de residuos orgánicos</p>
                    <p className="text-sm font-bold mt-5">Tratamiento de residuos <br/> reciclables</p>
                    <p className="text-sm mt-5">Punto limpio sin tratamiento</p>
                    <p className="text-sm mt-5">Punto limpio sin tratamiento I</p>
                    <p className="text-sm mt-5">Punto limpio sin tratamiento II</p>
                    <p className="text-sm mt-5">Centro de acopio</p>
                    <p className="text-sm mt-5">Centro de tratamiento de plástico</p>
                    <p className="text-sm mt-5">Centro de tratamiento de vidrio</p>
                    <p className="text-sm mt-5">Programa de reciclaje I</p>
                    <p className="text-sm font-bold mt-5">Tratamiento de residuos de<br/> gran tamaño</p>
                    <p className="text-sm mt-5">Planta de Tratamiento de <br/> Residuos de Aparatos Eléctricos <br/> y Electrónicos (RAEES)</p>
                    <p className="text-sm mt-5">Planta de Tratamiento de Residuos <br/> Voluminosos e Industriales</p>
                    <p className="text-sm mt-5">Planta de Tratamiento de Residuos <br/> de la Construcción y Demolición</p>
                    <p className="text-sm mt-5">Planta de Tratamiento de Neumáticos</p>
                </div>
                    
                <div  className="pr-2">
                    <h3 className="text-sm font-bold mb-5">MANTENIMIENTO URBANO</h3>
                    <p className="text-sm">Mantenimiento de arbustos y arbolado</p>
                </div>

                <div  className="pr-2">
                    <h3 className="text-sm font-bold mb-5">ESPACIOS PÚBLICOS</h3>
                    <p className="text-sm">Basureros urbanos</p>
                </div>

            </div>
        </div>
    )
}


export default SubNavegacionSoluciones