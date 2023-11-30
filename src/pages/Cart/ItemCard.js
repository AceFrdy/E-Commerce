import React from "react";
// import { ImCross } from "react-icons/im";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  deleteItem,
  drecreaseQuantity,
  increaseQuantity,
} from "../../redux/orebiSlice";

const ItemCard = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="w-[60%] flex items-center justify-between border-[0px] border-gray-400 border-b-0 font-medium flex-row gap-4 mt-4 mb-4">
      <div className="flex col-span-2 w-full items-center ml-1  ">
        <img className="w-36 h-36" src={item.image} alt="productImage" />
      </div>
      <div className="mb-3 col-span-5 grid mdl:col-span-3 flex items-center justify-between py-4 mdl:py-0 px-4 mdl:px-0 gap-6 mdl:gap-0">
        <div>
          <h1 className="font-titleFont w-full flex font-semibold">{item.name}</h1>
        </div>
        <div className="flex w-full items-center text-lg font-semibold">
          ${item.price}
        </div>

        <div className="w-full flex items-center gap-6 text-lg">
          <span
            onClick={() => dispatch(drecreaseQuantity({ _id: item._id }))}
            className="w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300"
          >
            -
          </span>
          <p>{item.quantity}</p>
          <span
            onClick={() => dispatch(increaseQuantity({ _id: item._id }))}
            className="w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300"
          >
            +
          </span>
        </div>
        {/* <div className="w-1/3 flex items-center font-titleFont font-bold text-lg">
          <p>${item.quantity * item.price}</p>
        </div> */}
      </div>
      <div className="relative flex items-center">
        <div className="absolute left-60">
        <FaTrash
          onClick={() => dispatch(deleteItem(item._id))}
          className="text-primeColor hover:text-red-500 duration-300 cursor-pointer"
        />
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
