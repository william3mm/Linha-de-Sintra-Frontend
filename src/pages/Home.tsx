
//import { XIcon } from '@heroicons/react/outline'

import { Bag, HouseLine, ShoppingCart } from "phosphor-react";
import { SalesChart } from "../components/SalesChart";

export function Home() {

    return (
        <div className="text-black p-4">
            <div className="grid lg:grid-flow-col  md:grid-cols-3 sm:grid-flow-row  gap-4 text-white">
                <div className=" bg-[#6C8CF5] p-4 py-4 flex flex-col rounded-lg">
                    <div className="text-white p-4">
                        <Bag size={40}/>
                    </div>

                    <div>
                    <p className="pt-2 text-2xl ">Total produtos</p>
                    <strong className="text-4xl py-4 block">10287 </strong>
                    </div>

                    <div className="border-t border-t-slate-100 pt-2">
                    <a href="#" className="text-lg">adicionar produto</a>
                    </div>
                </div>

                <div className=" bg-[#6C8CF5] p-4 py-4 flex flex-col rounded-lg">
                    <div className="text-white p-4">
                        <HouseLine  size={40}/>
                         
                    </div>

                    <div>
                    <p className="pt-2 text-2xl pr-1">Total encomendas</p>
                    <strong className="text-4xl py-4 block">3482 </strong>
                    </div>

                 
                    <div className="border-t border-t-slate-100 pt-2">
                    <p  className=" text-lg">encomendas por dia</p>
                    </div>
                </div>

                <div className=" bg-[#6C8CF5] p-4 py-4 flex flex-col rounded-lg">
                    <div className="text-white p-4">
                        <ShoppingCart size={40}/>
                    </div>

                    <div>
                    <p className="pt-2 text-2xl ">Total vendas</p>
                    <strong className="text-4xl py-4 block">8392 </strong>
                    </div>

                    <div className="border-t border-t-slate-100 pt-2">
                    <p  className=" text-lg">vendas por mês</p>
                    </div>
                </div>
            </div>

            <div className="h-full p-4 bg-green-50 rounded-lg py-8 mt-8">
                <SalesChart/>
            </div>
        </div>
    )
}
