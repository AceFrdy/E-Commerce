import React from 'react'
import { Link } from 'react-router-dom'
import { FaMoneyBill, FaLock } from 'react-icons/fa'
import { HiArrowsRightLeft } from 'react-icons/hi2'
import qris from "../../../assets/images/qris.png";

export const Checkout = () => {
  console.log(qris);

    return (
        <>
            <h2 className="flex items-center gap-1 mt-1 absolute font-bold">
                <FaLock className="ml-1 absoulute h-5 w-7 " />Pembayaran</h2>
            <div className="absolute inset-x-12 bottom-0 h-52">
                <div className="mt-6">
                    <Link to="/paymentgateway">
                        <button className="w-full rounded-lg h-10 bg-primeColor text-white hover:bg-black duration-300">
                            Proceed to Checkout
                        </button>
                    </Link>
                </div>
                <div className=" mt-10 flex justify-between">
                    <div className="flex flex-col grid justify-items-center">
                        <FaMoneyBill
                            className="h-12 w-12" />
                        <div>COD
                        </div>
                    </div>
                    <div className="ml-4 flex flex-col grid justify-items-center ">
                        <HiArrowsRightLeft
                            className="h-12 w-12" />
                        <div>Transfer</div>
                    </div>
                    <div className=" flex flex-col grid justify-items-center">
                        <img className="" src={qris} alt="Qris" />
                        <div>
                            Qris
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
