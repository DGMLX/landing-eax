'use client'

import { useAppSelector } from "@/store";
import Image from "next/image"
import { Dispatch, SetStateAction } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { useDispatch } from "react-redux";
import { eliminarProducto } from "@/store/productos/productosSlice";

type Props = {
    openCarrito: boolean;
    setOpenCarrito: Dispatch<SetStateAction<boolean>>
  }

const ModalCarrito:React.FC<Props> = ({openCarrito,setOpenCarrito}) =>{

    const cantidadProductos = useAppSelector(state=> state.productos.cantidadProductos)
    const productosCarrito = useAppSelector(state=>state.productos.productosCarrito)

    const dispatch = useDispatch()



    return(
    
        <div className={` justify-end ${ openCarrito ? "flex" : "hidden"} `}>
           
            <div className={`bg-white w-5/6 sm:w-3/5 lg:w-3/5 xl:w-1/3 pr-14 pl-14 pb-10 absolute z-30 border modal-carrito border-slate-200 rounded-bl-2xl`}>
            {cantidadProductos === 0 ? <p className="ml-20 mt-10 flex"><MdOutlineRemoveShoppingCart className="text-black text-xl mr-3"/>No tienes ningún producto agregado</p> : 
            <>
                <div className="flex justify-between ">
                    <div className="mt-10 flex items-center">
                        <h2 className="mr-5 text-2xl">Carro</h2>
                        <p>({cantidadProductos} productos)</p>    
                    </div>
                    <div className="mt-10">
                        <p className="text-2xl" onClick={()=>setOpenCarrito(false)}><VscChromeClose className="cursor-pointer"/></p>
                    </div>
                </div>
                <div className="border-b border-[#C0C0C0] mt-3"></div>

                <h3 className="mt-10 mb-5  text-xl">Producto</h3>
                <div>

                    {productosCarrito.map(producto=>(
                        <div className="flex mt-5" key={producto.nombre}>
                            <div className="mr-5">
                                <Image src={producto.imgURL} width={90} height={90}  alt="Chipeadora"/>
                                    <button className="underline ml-5" onClick={()=>dispatch(eliminarProducto(producto.nombre))}>Eliminar</button>
                            </div>
                            <div >
                                <p className="pb-2">{producto.nombre}</p>
                                <p>${producto.precio}</p>
                                <div className="flex pt-2">
                                    <div className=" border border-[#C0C0C0] flex pl-3 pr-3 rounded-full">                                
                                    <button>-</button>
                                    <p className="pr-3 pl-3">{producto.cantidad}</p>
                                    <button>+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    )}
                </div>



                  
{/* 
                    <div className="flex mt-10">
                        <div className="mr-5">
                            <Image src="/carrito/chipeadora_minur_4s.png" width={90} height={90}  alt="Chipeadora"/>
                                <button className="underline  ml-5">Eliminar</button>
                        </div>
                        <div>
                            <p className="pb-2">Chipeadora Minur 4S</p>
                            <p>$2.400.369</p>
                            <div className="flex pt-2">
                                <div className=" border border-[#C0C0C0] flex pl-3 pr-3 rounded-full">

                                
                                <button>-</button>
                                <p className="pr-3 pl-3">1</p>
                                <button>+</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex mt-10">
                        <div className="mr-5">
                            <Image src="/carrito/chipeadora_truckloader.png" width={90} height={90}  alt="Chipeadora"/>
                                <button className="underline  ml-5">Eliminar</button>
                        </div>
                        <div>
                            <p className="pb-2">Chipeadora Vector 4S Cross</p>
                            <p>$2.400.369</p>
                            <div className="flex pt-2">
                                <div className=" border border-[#C0C0C0] flex pl-3 pr-3 rounded-full">
                                <button>-</button>
                                <p className="pr-3 pl-3">1</p>
                                <button>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                <div className="mt-20">
                    <div className="flex justify-between">
                        <p>Total</p>
                        <p>$15.211.125</p> 
                    </div>

                    <div className="flex justify-between">
                        <p>Envío</p>
                        <p>$10.000</p> 
                    </div>

                    <div className="flex justify-between">
                        <p>Total con envío</p>
                        <p>$15.221.125</p> 
                    </div>

                    <button className="bg-black text-white w-full mt-10 py-2 rounded-xl">Comprar ahora</button>

                </div>

            </>
            }

            </div>
        </div>

    )
}

export default ModalCarrito