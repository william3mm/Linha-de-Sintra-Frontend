import img1 from '../assets/img/img1.png'
import img2 from '../assets/img/img2.png'
export function Login() {

    return (
        <div className='w-full flex items-center mx-auto  h-screen'>
            <div className='bg-[#6C8CF5] flex-auto h-screen'>
                {/* <div className='flex flex-col items-center flex-1 h-full pl-20 '>
                    <header className='self-baseline pb-20 pt-10 text-xl w-full capitalize ml-4'>
                        Uma ferramenta única para vender
                    </header>

                    <div className="grid grid-rows-3 grid-flow-col gap-4 w-full mb-80 pb-96">
                        <div className=" bg-white row-start-1 row-span-2 w-full h-3/4 m-8 rounded">
                            <img src={img1} alt="" className='w-80 h-96 relative m-auto -top-16' />
                        </div>
                        <div className="row-start-1 col-span-2 text-end font-bold text-3xl">Descubra o que temos para si</div>
                        <div className=" w-6/12 bg-white row-start-2 row-span-2 col-span-2 ml-28 h-4/6 rotate-[30deg] rounded">
                            <img src={img2} alt="" className=' -rotate-[25deg]   w-[600px] h-96 relative -top-16' />
                        </div>
                    </div>
                </div> */}
            </div>
            <div className='h-full w-5/12 flex flex-col gap-8 items-center'>
                <div>
                    <header className='pb-20 pt-10'>
                        <h1 className='text-[#6C8CF5] font-bold text-4xl'>
                            Linha de Sintra
                        </h1>
                        <span className='text-[#4E4D4D] font-bold '>
                            bem vindo de volta
                        </span>
                        <p className='text-[#4E4D4D] '>
                            maior plataforma de compra e venda de angola
                        </p>
                    </header>
                </div>
                <div className='w-3/4'>
                    <form action="">
                        <div className='flex flex-col gap-4'>

                            <input type="text" name="" id="telefone" className='bg-[#F7F7F7] text-[#656565] p-4 rounded focus-visible:outline-[#6f51f7de]' placeholder='Telefone'/>
                            <input type="password" name="" id="password" className='bg-[#F7F7F7] text-[#656565]  p-4 rounded focus-visible:outline-[#6f51f7de]' placeholder='Password'/>
                            <span className='text-indigo-400 hover:text-indigo-900 text-end cursor-pointer'>esqueceu a senha?</span>
                            <button
                                type="button"
                                className="font-medium text-white bg-[#6C8CF5] p-4 rounded"
                            >
                                entrar
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}
