import { Fragment, useState } from 'react'
import { Dialog, Transition, Listbox } from '@headlessui/react'


import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

const categories = [
    { name: 'Moda e vestuário' },
    { name: 'Alimentos' },
]
const underCategories = [
    { name: 'Calça' },
    { name: 'Arroz' },
]
const genres = [
    { name: 'Para eles' },
    { name: 'Para elas' },
]

export function MyModal() {
    const [selected, setSelected] = useState(categories[0])
    const [selectedGenre, setSelectedGenre] = useState(genres[0])
    const [selectedUnderCategory, setSelectedUnderCategory] = useState(underCategories[0])
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
                                    <div className="mt-2 w-3/4 m-auto py-12">
                                        <form action="">
                                            <div className='flex flex-col gap-4'>

                                                <input type="text" name="" id="produto" className='bg-[#F7F7F7] text-[#656565] p-4 rounded focus-visible:outline-[#6f51f7de]' placeholder='Nome do produto' />
                                                <textarea name="" id="descricao" cols={30} rows={5} className="bg-[#F7F7F7] text-[#656565] p-2 py-4 rounded focus-visible:outline-[#6f51f7de]" placeholder='Descrição do produto'>


                                                </textarea>
                                            </div>

                                            <div className='grid grid-cols-2  pt-4 mt-4 gap-8'>
                                                <span className='flex flex-col text-gray-500'>
                                                    <label htmlFor="categoria" className='font-semibold mb-2 ml-1'>Categoria </label>
                                                    <Listbox value={selected} onChange={setSelected}>
                                                        <div className="relative mt-1">
                                                            <Listbox.Button id='categoria' className="bg-[#F7F7F7] text-[#656565] p-4 gap-0  w-full cursor-default rounded  pr-10 text-left   focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-[#6f51f7de] sm:text-sm ">
                                                                <span className="block truncate">{selected.name}</span>
                                                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                                    <SelectorIcon
                                                                        className="h-5 w-5 text-gray-400"
                                                                        aria-hidden="true"
                                                                    />
                                                                </span>
                                                            </Listbox.Button>
                                                            <Transition
                                                                as={Fragment}
                                                                leave="transition ease-in duration-100"
                                                                leaveFrom="opacity-100"
                                                                leaveTo="opacity-0"
                                                            >
                                                                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                                    {categories.map((categorie, categorieIdx) => (
                                                                        <Listbox.Option
                                                                            key={categorieIdx}
                                                                            className={({ active }) =>
                                                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-[#6f51f78a] text-white' : 'text-gray-900'
                                                                                }`
                                                                            }
                                                                            value={categorie}
                                                                        >
                                                                            {({ selected }) => (
                                                                                <>
                                                                                    <span
                                                                                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                                            }`}
                                                                                    >
                                                                                        {categorie.name}
                                                                                    </span>
                                                                                    {selected ? (
                                                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#5c27be]">
                                                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                                        </span>
                                                                                    ) : null}
                                                                                </>
                                                                            )}
                                                                        </Listbox.Option>
                                                                    ))}
                                                                </Listbox.Options>
                                                            </Transition>
                                                        </div>
                                                    </Listbox>
                                                </span>
                                                <span className='flex flex-col text-gray-500 '>
                                                    <label htmlFor="tamanho" className='font-semibold mb-2 ml-1'>Tamanho </label>
                                                    <input type="number" name="" id="tamanho" className='bg-[#F7F7F7] focus-visible:outline-[#6f51f7de] text-[#656565] p-4 rounded' placeholder='12' />
                                                </span>
                                                <span className='flex flex-col text-gray-500'>
                                                    <label htmlFor="qtd" className='font-semibold mb-2 ml-1'>Quantidade </label>
                                                    <input type="number" name="" id="qtd" min="1" max="5" className='bg-[#F7F7F7] in-range:border-green-500 focus-visible:outline-[#6f51f7de] text-[#656565] p-4 rounded' placeholder='9999999' />

                                                </span>
                                                <span className='flex flex-col text-gray-500'>
                                                    <label htmlFor="genero" className='font-semibold mb-2 ml-1'>Genero </label>
                                                    <Listbox value={selectedGenre} onChange={setSelectedGenre}>
                                                        <div className="relative mt-1">
                                                            <Listbox.Button id='genero' className="bg-[#F7F7F7] text-[#656565] p-4 gap-0  w-full cursor-default rounded  pr-10 text-left   focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-[#6f51f7de] sm:text-sm ">
                                                                <span className="block truncate">{selectedGenre.name}</span>
                                                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                                    <SelectorIcon
                                                                        className="h-5 w-5 text-gray-400"
                                                                        aria-hidden="true"
                                                                    />
                                                                </span>
                                                            </Listbox.Button>
                                                            <Transition
                                                                as={Fragment}
                                                                leave="transition ease-in duration-100"
                                                                leaveFrom="opacity-100"
                                                                leaveTo="opacity-0"
                                                            >
                                                                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                                    {genres.map((genre, genreIdx) => (
                                                                        <Listbox.Option
                                                                            key={genreIdx}
                                                                            className={({ active }) =>
                                                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-[#6f51f78a] text-white' : 'text-gray-900'
                                                                                }`
                                                                            }
                                                                            value={genre}
                                                                        >
                                                                            {({ selected }) => (
                                                                                <>
                                                                                    <span
                                                                                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                                            }`}
                                                                                    >
                                                                                        {genre.name}
                                                                                    </span>
                                                                                    {selected ? (
                                                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#5c27be]">
                                                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                                        </span>
                                                                                    ) : null}
                                                                                </>
                                                                            )}
                                                                        </Listbox.Option>
                                                                    ))}
                                                                </Listbox.Options>
                                                            </Transition>
                                                        </div>
                                                    </Listbox>
                                                </span>
                                                <span className='flex flex-col text-gray-500'>
                                                    <label htmlFor="preco" className='font-semibold mb-2 ml-1'>Preço </label>
                                                    <input type="number" name="" id="preco" className='bg-[#F7F7F7] focus-visible:outline-[#6f51f7de] text-[#656565] p-4 rounded' placeholder='93748kz' />
                                                </span>
                                                <span className='flex flex-col text-gray-500'>
                                                    <label htmlFor="subcategoria" className='font-semibold mb-2 ml-1'>SubCategoria </label>
                                                    <Listbox value={selectedUnderCategory} onChange={setSelectedUnderCategory}>
                                                        <div className="relative mt-1">
                                                            <Listbox.Button id='subcategoria' className="bg-[#F7F7F7] text-[#656565] p-4 gap-0  w-full cursor-default rounded  pr-10 text-left   focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-[#6f51f7de] sm:text-sm ">
                                                                <span className="block truncate">{selectedUnderCategory.name}</span>
                                                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                                    <SelectorIcon
                                                                        className="h-5 w-5 text-gray-400"
                                                                        aria-hidden="true"
                                                                    />
                                                                </span>
                                                            </Listbox.Button>
                                                            <Transition
                                                                as={Fragment}
                                                                leave="transition ease-in duration-100"
                                                                leaveFrom="opacity-100"
                                                                leaveTo="opacity-0"
                                                            >
                                                                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                                    {underCategories.map((underCategory, underCategoryIdx) => (
                                                                        <Listbox.Option
                                                                            key={underCategoryIdx}
                                                                            className={({ active }) =>
                                                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-[#6f51f78a] text-white' : 'text-gray-900'
                                                                                }`
                                                                            }
                                                                            value={underCategory}
                                                                        >
                                                                            {({ selected }) => (
                                                                                <>
                                                                                    <span
                                                                                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                                            }`}
                                                                                    >
                                                                                        {underCategory.name}
                                                                                    </span>
                                                                                    {selected ? (
                                                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#5c27be]">
                                                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                                        </span>
                                                                                    ) : null}
                                                                                </>
                                                                            )}
                                                                        </Listbox.Option>
                                                                    ))}
                                                                </Listbox.Options>
                                                            </Transition>
                                                        </div>
                                                    </Listbox>
                                                </span>

                                            </div>
                                            <div className='flex flex-col mt-12'>
                                                <p className='text-center '>carregar imagem</p>
                                                <label htmlFor="imagem" className="bg-[#F7F7F7] text-[#656565] p-2 py-12 mt-4 rounded  text-center"> clique aqui! </label>
                                                <input type="file" id="imagem" hidden placeholder='inserir imagem' />

                                            </div>
                                        </form>
                                    </div>

                                    <div className="mt-4 flex justify-end">
                                        <button
                                            type="button"
                                            className="font-medium text-white bg-[#6C8CF5] p-2 rounded self-end hover:bg-[#5275e7] w-28 mr-2"
                                            onClick={closeModal}
                                        >
                                            cancelar
                                        </button>
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-green-400 px-4 py-2 text-sm font-medium text-white hover:bg-green-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"

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
