import React from "react";
// import { ImCross } from "react-icons/im";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  deleteItem,
  drecreaseQuantity,
  increaseQuantity,
} from "../../redux/orebiSlice";
import { FaCirclePlus, FaCircleMinus  } from "react-icons/fa6";

const ItemCard = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="w-full grid grid-cols-3 items-center justify-between border-b border-gray-400 font-medium mt-4 mb-4">
      {/* Bagian Gambar */}
      <div className="col-span-1 flex items-center justify-center">
        <img className="w-36 h-36" src={item.image} alt="productImage" />
      </div>
      {/* Bagian Nama, Harga, dan Tombol */}
      <div className="col-span-2 grid grid-row-3">
        {/* Nama */}
        <div className="col-row-1">
          <h1 className="font-titleFont font-semibold mb-2">{item.name}</h1>
        </div>
        {/* Harga */}
        <div className="col-row-1">
          <p className="text-sm">${item.price}</p>
        </div>

        {/* Tombol Pengurangan, Jumlah, dan Tombol Hapus */}
        <div className="col-row-1 col-span-1 my-2 py-2 flex items-center justify-between">
          <span
            onClick={() => dispatch(drecreaseQuantity({ _id: item._id }))}
            className="w-14 h-8 flex items-center justify-center hover:text-blue-gray-600 cursor-pointer rounded-full"
          >
            <FaCircleMinus size={35} />
          </span>
          <p>{item.quantity}</p>
          <span
            onClick={() => dispatch(increaseQuantity({ _id: item._id }))}
            className="w-14 h-8 flex items-center justify-center hover:text-blue-gray-600 cursor-pointer rounded-full"
          >
            <FaCirclePlus size={35} />
          </span>
          <div class="col-span flex px-12">
            <FaTrash
            onClick={() => dispatch(deleteItem(item._id))}
            className="text-primeColor hover:text-red-500 cursor-pointer"
          /></div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
