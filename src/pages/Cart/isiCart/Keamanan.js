import React from 'react'
import { BiShieldQuarter } from 'react-icons/bi'
import { BsShieldFillPlus } from "react-icons/bs";

function Keamanan() {
    return (
        <div className="relative rounded-lg w-full h-[70%] bg-[#F5F7F7]">
      <div className="w-full pt-3 pb-3 flex flex-col md:flex-row items-center border-[0px] border-gray-400 border-b-0 font-medium gap-2 mt-4 mb-4">
        <div className="flex col-span-1 md:col-span-1 items-center">
          <BiShieldQuarter className="w-12 h-12 ml-2" />
        </div>
        <div className="mb-3 md:mb-0 col-span-5 grid md:col-span-3 flex flex-col md:flex-row gap-2">
          <div>
            <h1 className="font-titleFont font-semibold">Garansi (Nama Perusahaan)</h1>
          </div>
          <div className="md:flex w-full text-xs">
            Memperpanjang garansi anda terhadap kerusakan yang tidak disengaja
          </div>
          <div className="w-full md:w-auto md:hidden flex justify-center md:justify-start">
              <div className="w-6 h-6 text-2xl flex items-center justify-center hover:text-gray-300 cursor-pointer duration-300 border-[0px] border-gray-300 hover:border-gray-300">
                <BsShieldFillPlus />
              </div>
            </div>
        </div>
        <div className="hidden md:flex flex-grow justify-end items-center mr-4">
          <div className="w-6 h-6 text-2xl flex items-center justify-center hover:text-green-500 cursor-pointer duration-300 border-[0px] border-gray-300 hover:border-gray-300">
            <BsShieldFillPlus />
          </div>
        </div>
      </div>
    </div>
    )
}

export default Keamanan