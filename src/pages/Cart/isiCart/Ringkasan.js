import React, { useState, useEffect } from 'react'
import { IoCopy } from 'react-icons/io5';
import { useSelector } from 'react-redux';
export const Ringkasan = () => {
    const products = useSelector((state) => state.orebiReducer.products);
    const [totalAmt, setTotalAmt] = useState("");
    const [, setPajak] = useState("");
    // const [selectedCoupon, setSelectedCoupon] = useState("");
    //   console.log(qris);

    useEffect(() => {
        let price = 0;
        products.map((item) => {
            price += item.price * item.quantity;
            return price;
        });
        setTotalAmt(price);
    }, [products]);
    useEffect(() => {
        if (totalAmt <= 200) {
            setPajak(30);
        } else if (totalAmt <= 400) {
            setPajak(25);
        } else if (totalAmt > 401) {
            setPajak(20);
        }
    }, [totalAmt]);
    return (
        <>
            <div className="mb-2 font-bold bg-white bg-opacity-20 p-2 rounded-md">
                <div className="flex items-center gap-1">
                    <IoCopy className="ml-1 h-5 w-7" />
                    <h2 className="font-bold">Ringkasan</h2>
                </div>
            </div>
            <div className="absolute inset-x-12 bottom-0 h-52 bg-white bg-opacity-20 p-2 rounded-md">
                <div className='grid grid-row-auto col-span-2'>
                    <p className="flex text-gray-400 items-center justify-between border-[0px] border-gray-400 border-b-0 py-1.5 text-lg font-medium">
                        Harga Barang
                        <span className="font-semibold tracking-wide font-titleFont">
                            ${totalAmt}
                        </span>
                    </p>
                    <p className="flex text-gray-400 items-center justify-between border-b border-gray-400 py-1.5 text-lg font-medium">
                        Shipping
                        <span className="font-semibold text-red-600 tracking-wide font-titleFont">
                            Free
                        </span>
                    </p>
                </div>
                <div className='grid grid-row-auto col-span-2'>
                    <p className="flex items-center justify-between border-[0px] border-gray-400 border-b-0 py-16 text-2xl font-medium">
                        Total
                        <span className="font-semibold tracking-wide font-titleFont">
                            ${totalAmt}
                        </span>
                    </p>
                </div>
            </div>

        </>
    )
}
