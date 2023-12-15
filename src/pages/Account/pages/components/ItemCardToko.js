import React from 'react'
// import { useDispatch } from "react-redux";
// import {
//   deleteItem,
//   drecreaseQuantity,
//   increaseQuantity,
// } from "../../../../redux/orebiSlice";
// import { Link } from 'react-router-dom';
// // import { FaTrash } from 'react-icons/fa';
export const ItemCardToko = ({ item }) => {
  //   const dispatch = useDispatch();
  return (
    <div className=" w-full grid grid-cols-3 mb-4 border py-2">
      <div className="flex col-span-4 mdl:col-span-2 text-sm items-center gap-4 ml-4">

        <img className="w-16 h-16" src={item.image} alt="productImage" />
        <h3 className="font-titleFont font-semibold">{item.name}
          <p className='font-normal '>${item.price}</p>
          <p className='font-normal'> Warna Ireng</p>
        </h3>
      </div>
      <div className="col-span-5 mdl:col-span-1 flex items-center justify-between py-4 mdl:py-0 px-4 mdl:px-0 gap-6 mdl:gap-0">
        {/* <div className="flex w-1/3 items-center text-lg font-semibold">
                    ${item.price}
                </div> */}
        <div className="flex ml-2 mr-2 w-1/3 items-center text-lg font-semibold text-lg">
          {/* <Link to="/paymentgateway">
                        <span
                            className="text-primeColor hover:text-red-500 duration-300 cursor-pointer"
                        >Bayar</span>
                    </Link> */}
        </div>
        <div className="relative flex items-center">
          <div className="flex ml-2 mr-2 w-1/3 items-center text-lg font-semibold text-lg">
            <span
              // onClick={() => dispatch(deleteItem(item._id))}
              className="text-primeColor text-sm font-normal duration-300"
            >Sudah Dibayar</span>
          </div>
        </div>
      </div>
    </div>
  )
}
