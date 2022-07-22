import React from 'react';
import Layout from '../components/Layout';

// import { Container } from './styles';

const Profile: React.FC = () => {
  return (
    <Layout>
      <div className='h-screnn flex flex-col gap-4 text-gray-900 p-4 '>
        <div>
          <header className='py-4 px-2'>
            <h1 className='text-2xl font-normal text-[#6C8CF5]'>Definições Gerais</h1>
            <span className='text-slate-400 mt-2 ml-2 block'>Atualize aqui os seus dados</span>
          </header>
        </div>
        <div className='flex items-center mt-8'>
          <form action="" className='w-4/6 mt-3'>
            <div className='flex flex-col gap-8'>
              <span className='flex flex-col text-gray-500'>
                <label htmlFor="nome" className='font-semibold mb-2 ml-1'>Nome de usuário </label>
                <input type="text" name="" id="nome" className='bg-[#F7F7F7] focus-visible:outline-[#6f51f7de]  text-[#656565] p-4 gap-0 rounded' placeholder='Seu nome completo' />
              </span>
              <span className='flex flex-col text-gray-500 '>
                <label htmlFor="email" className='font-semibold mb-2 ml-1'>Email </label>
                <input type="email" name="" id="email" className='bg-[#F7F7F7] focus-visible:outline-[#6f51f7de] text-[#656565] p-4 rounded' placeholder='exemplo@dominio.com' />
              </span>
              <span className='flex flex-col text-gray-500'>
                <label htmlFor="telefone" className='font-semibold mb-2 ml-1'>Telefone </label>
                <input type="tel" name="" id="telefone" className='bg-[#F7F7F7] focus-visible:outline-[#6f51f7de] text-[#656565] p-4 rounded' placeholder='99999999999' />
              </span>
              <span className='flex flex-col text-gray-500'>
                <label htmlFor="senha" className='font-semibold mb-2 ml-1'>Senha </label>
                <input type="password" name="" id="senha" className='bg-[#F7F7F7] focus-visible:outline-[#6f51f7de] text-[#656565] p-4 rounded' placeholder='****************' />
              </span>
              <button
                type="button"
                className="font-medium text-white bg-[#6C8CF5] p-2 rounded self-end hover:bg-[#5275e7] w-28"
              >
                Atualizar
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>);
}

export default Profile;