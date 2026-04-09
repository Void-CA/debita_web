import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e: React.SyntheticEvent) => {
    e.preventDefault();
    navigate('/seleccion-empresa'); 
  };

  return (
    <div className="h-screen flex items-center justify-center bg-[#f8f9fa] font-poppins">
      <form onSubmit={handleLogin} className="bg-white p-10 rounded-xl shadow-lg w-96 flex flex-col gap-4">
        <h2 className="text-4xl font-bold text-[#1f4e3d] mb-2 text-center">DEBITA<span className="text-[#32b569]">.</span></h2>
        <p className="text-center text-gray-500 text-sm mb-6">Ingresa tus credenciales</p>
        
        <input type="email" placeholder="Correo electrónico" className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#32b569] transition-colors" required />
        <input type="password" placeholder="Contraseña" className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#32b569] transition-colors" required />
        
        <button type="submit" className="w-full mt-4 bg-[#32b569] text-white py-3 rounded-lg hover:bg-green-600 transition-all font-semibold cursor-pointer">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
}