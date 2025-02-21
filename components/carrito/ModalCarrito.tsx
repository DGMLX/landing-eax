'use client'


import { Dispatch, SetStateAction } from "react";

import { MdOutlineRemoveShoppingCart } from "react-icons/md";



type Props = {
    openCarrito: boolean;
    setOpenCarrito: Dispatch<SetStateAction<boolean>>
   
  }

const ModalCarrito:React.FC<Props> = ({openCarrito,setOpenCarrito}) =>{




    return(
    
        <div className={` justify-end ${ openCarrito ? "flex" : "hidden"} `}>
           
            <div className={`bg-white w-5/6 sm:w-3/5 lg:w-3/5 xl:w-1/3 pr-14 pl-14 pb-10 absolute z-30 border modal-carrito border-slate-200 rounded-bl-2xl`}>
            <p className="ml-20 mt-10 flex"><MdOutlineRemoveShoppingCart className="text-black text-xl mr-3"/>No tienes ningún producto agregado</p>
                </div>



                  

             
        </div>

    )
}

export default ModalCarrito