'use client'

import { FaUser } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { MdChatBubbleOutline } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { LiaSearchSolid } from "react-icons/lia";
import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";


const IndiceSuperior = () =>{
    
    const [openModal,setOpenModal] = useState(false);

    const [openLlamanos,setOpenLlamanos] = useState(true);
    const [openInfo,setOpenInfo] = useState(false);
    const [openMensaje,setOpenMensaje] = useState(false);
    

    return(
        <>
            <div className="px-20 flex items-center gap-6 py-4 justify-end bg-red-700 text-white">
                <button className="flex items-center text-sm">LOG IN REGISTER<FaUser  className="ml-2"/></button>
                <button className="flex items-center text-sm">ORDERS<FaTruck className="ml-2"/></button>
                <button className="flex items-center text-sm" onClick={()=>{
                    setOpenModal(!openModal)
                    setOpenLlamanos(true)
                    setOpenInfo(false)
                    setOpenMensaje(false)
                }}>CONTACT<MdChatBubbleOutline className="ml-2"/></button>
                <button className="flex items-center text-sm">CART<FiShoppingCart className="ml-2"/></button>
                <div className="flex items-center">
                    <input type="text"  className="bg-red-700 border-b placeholder-white placeholder-" placeholder="Buscar"/>
                    <LiaSearchSolid/>
                </div>
            </div>

            {
                openModal &&
                <div className="z-50 absolute bg-black text-white w-1/3 right-36 py-5 shadow-lg">
                    <h2 className="px-5 text-2xl font-bold  mb-5">Contáctanos</h2>
                    <div className="flex justify-between px-5 text-sm mb-2">
                        <button onClick={()=>{
                            setOpenLlamanos(true)
                            setOpenInfo(false)
                            setOpenMensaje(false)
                        }}>LLÁMANOS</button>

                        <button onClick={()=>{
                            setOpenInfo(true)
                            setOpenLlamanos(false)
                            setOpenMensaje(false)
                        }}>SOLICITA INFORMACIÓN</button>
                        <button onClick={()=>{
                            setOpenMensaje(true)
                            setOpenLlamanos(false)
                            setOpenInfo(false)
                        }}
                        >ENVÍANOS UN MENSAJE</button>
                    </div>
                    <hr />
                    {
                        openLlamanos && 
                        <div className="px-5 pt-7">
                            <p className="text-xs mb-4">HABLA DIRECTAMENTE CON NUESTRO EQUIPO</p>
                            <div className="flex items-center">
                                <FaPhoneAlt className="text-white text-2xl mr-5"/>
                                <p className="text-2xl">+56-32-269 0691</p>
                            </div>
                            <p className="text-xs mt-4 mb-3">SERVICIO DE ATENCIÓN LUNES A VIERNES DE 9:00 AM A 18:30 PM</p>
                        </div>
                    }
                    {
                        openInfo &&
                        <div className="px-5 pt-5">
                            <p className="text-xs pr-10">COMPLETA EL FORMULARIO PARA RECIBIR DETALLES SOBRE NUESTROS PRODUCTOS Y SERVICIOS</p>
                            
                            <form action="" className="mt-5">
                                <label className="flex opacity-60">Nombre de contacto<span className="text-red-600 block">*</span></label>
                                <input type="text" className="bg-white block w-full py-1 text-black px-2 mt-2" />

                                <label className="flex opacity-60 mt-2">Nombre de la Empresa<span className="text-red-600 block">*</span></label>
                                <input type="text" className="bg-white block w-full py-1 text-black px-2 mt-2" />

                                <label className="flex opacity-60 mt-2">E-mail de Empresa<span className="text-red-600 block">*</span></label>
                                <input type="email" className="bg-white block w-full py-1 text-black px-2 mt-2" />

                                <label className="flex opacity-60 mt-2">Teléfono de contacto</label>
                                <input type="number" className="bg-white block w-full py-1 text-black px-2 mt-2" />

                                <label className="flex opacity-60 mt-2">Asunto</label>
                                <input type="text" className="bg-white block w-full py-1 text-black px-2 mt-2" />

                                <label className="flex opacity-60 mt-2">Mensaje</label>
                                <input type="text" className="bg-white block w-full py-1 text-black px-2 mt-2" />

                                <div className="flex justify-center mt-7">
                                    <button className="text-white opacity-70">Enviar</button>
                                </div>
                                
                            </form>
                        </div>
                    }
                    {
                        openMensaje &&
                        <div className="px-5 pt-5">
                            <p className="text-xs">DÉJANOS TU CORREO PARA QUE PODAMOS CONTACTARTE POR EMAIL</p>
                            <form action="" className="mt-5">
                                <label className="flex opacity-60">Nombre</label>
                                <input type="text" className="bg-white block w-full py-1 text-black px-2 mt-2" />

                                <label className="flex opacity-60 mt-2">Correo electrónico<span className="text-red-600 block">*</span></label>
                                <input type="text" className="bg-white block w-full py-1 text-black px-2 mt-2" />

                                <div className="flex justify-center">
                                    <button className="text-white bg-blue-700 mt-7 py-1 px-7">Enviar</button>
                                </div>
                            
                            </form>
                        
                        </div>
                    }
                </div>
            }

        </>
    )
}

export default IndiceSuperior