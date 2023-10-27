import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { RiMailLockLine, RiLock2Line, RiUser3Line, RiUserShared2Line} from "react-icons/ri";

const Register = () => {
  return (
    <div className="bg-secondary-100 p-5 rounded-xl w-auto lg:w-[400px]">
            <h1 className="text-3xl text-center uppercase font-bold tracking-[3px] mb-8">Crear Cuenta</h1>
            <form className="mb-8">
                <div className="relative mb-4">
                    <RiUser3Line className="absolute top-1/2 -translate-y-2 left-2" />
                    <input type="text" className="py-2 pl-8 pr-4 bg-secondary-200 w-full outline-none placeholder-gray-800 rounded-lg focus:border focus:border-secondary-800" placeholder="Ingrese su nombre" />
                </div>
                <div className="relative mb-4">
                    <RiUser3Line className="absolute top-1/2 -translate-y-2 left-2" />
                    <input type="text" className="py-2 pl-8 pr-4 bg-secondary-200 w-full outline-none placeholder-gray-800 rounded-lg focus:border focus:border-secondary-800" placeholder="Ingrese su apellido" />
                </div>
                <div className="relative mb-4">
                    <RiUserShared2Line className="absolute top-1/2 -translate-y-2 left-2" />
                    <input type="text" className="py-2 pl-8 pr-4 bg-secondary-200 w-full outline-none placeholder-gray-800 rounded-lg focus:border focus:border-secondary-800" placeholder="Ingrese su nombre de usuario" />
                </div>
                <div className="relative mb-4">
                    <RiMailLockLine className="absolute top-1/2 -translate-y-2 left-2" />
                    <input type="email" className="py-2 pl-8 pr-4 bg-secondary-200 w-full outline-none placeholder-gray-800 rounded-lg focus:border focus:border-secondary-800" placeholder="Ingrese su correo" />
                </div>
                <div className="relative mb-4">
                    <RiLock2Line className="absolute top-1/2 -translate-y-2 left-2" />
                    <input type="password" className="py-2 pl-8 pr-4 bg-secondary-200 w-full outline-none placeholder-gray-800 rounded-lg focus:border focus:border-secondary-800" placeholder="Ingrese su contraseña" />
                </div>
                <div className="relative mb-8">
                    <RiLock2Line className="absolute top-1/2 -translate-y-2 left-2" />
                    <input type="password" className="py-2 pl-8 pr-4 bg-secondary-200 w-full outline-none placeholder-gray-800 rounded-lg focus:border focus:border-secondary-800" placeholder="Confirme su contraseña" />
                </div>
                <div>
                    <button type="submit" className="bg-secondary-300 uppercase font-bold w-full py-3 px-4 rounded-lg hover:text-secondary-900 transition-colors">
                        Registrarme
                    </button>
                </div>
            </form>
            <div className="flex flex-col items-center gap-2">
                <span className="flex items-center gap-2">
                    ¿Ya tienes cuenta?
                    <Link to="/auth/" className="text-secondary-900 hover:text-gray-900 transition-colors">¡Inicia Sesión!</Link>
                </span>
            </div>
        </div>
  )
}

export default Register;