// App.js (ou arquivo principal no Next.js)

import React from 'react';
import Image from 'next/image';
import TextLink from '@/components/TextLink';
import InputField from '@/components/InputField';
import Botao from '@/components/Botao';


export default function TelaInicial() {
  return (
    <div className="flex h-screen bg-purple-500 items-center justify-center">
      <div className="flex bg-white rounded-lg w-[60%]">

        {/* Left Side - Illustration */}
        <div className=" sm: hidden lg:flex flex-col justify-center items-center bg-cover bg-center text-white w-[50%] p-8 rounded-l-lg bg-[url('/formsImg.jpg')]">
        </div>

        {/* Right Side - Login Form */}
        <div className="flex flex-col justify-center lg:w-[50%] w-[100%] p-8">
        <h1 className="hidden lg:flex text-3xl font-bold mb-4 justify-center">Olá!</h1>
        <p className="hidden lg:flex text-lg mb-8 justify-center">Seja Bem Vindo!</p>
          <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Login</h2>
          <form className="flex flex-col gap-4">
            <InputField
              label="Usuario"
              type="text"
              placeholder="email@email"
            />
            <InputField
              label="Senha"
              type="password"
              placeholder="senha"
            />

            <TextLink text="Esqueci minha senha" href="#" className="text-sm justify-end" />
            <Botao type='submit' text='Login' href='/home'></Botao>
          </form>
          <Botao type='button' text='Cadastrar' className='mt-4' href='/cadastro'></Botao>
        </div>
      </div>
    </div>
  );
}
