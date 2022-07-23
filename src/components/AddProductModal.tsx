import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export function MyModal() {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            <div className='flex items-center justify-end pr-4'>
                <button className='p-2 bg-purple-700 rounded text-white' type="button" onClick={openModal}>
                    adicionar produto
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-2xl font-medium leading-6 text-gray-500 text-center"
                                    >
                                        Detalhes para Upload
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <form action="">
                                            <div className='flex flex-col gap-4'>

                                                <input type="text" name="" id="" className='bg-[#F7F7F7] text-[#656565] p-2 rounded' placeholder='Telefone' />
                                                <input type="password" name="" id="" className='bg-[#F7F7F7] text-[#656565]  p-2 rounded' placeholder='Password' />
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

                                    <div className="mt-4 flex justify-end">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-green-400 px-4 py-2 text-sm font-medium text-white hover:bg-green-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Confirmar!
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
