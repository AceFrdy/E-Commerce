import React from "react";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  deleteItem,
  drecreaseQuantity,
  increaseQuantity,
} from "../../redux/diamoSlice";

const ItemCard = ({ item, onIncrease, onDecrease, onDelete }) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    if (onIncrease) {
      onIncrease(item._id);
    } else {
      dispatch(increaseQuantity({ _id: item._id }));
    }
  };

  const handleDecrease = () => {
    if (onDecrease) {
      onDecrease(item._id);
    } else {
      dispatch(drecreaseQuantity({ _id: item._id }));
    }
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete(item._id);
    } else {
      dispatch(deleteItem(item._id));
    }
  };

  return (
    <div className="w-full bg-white border border-gray-200 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm hover:shadow transition-shadow">
      {/* Product Image & Title */}
      <div className="flex items-center gap-4 w-full sm:w-1/2">
        <div className="w-20 h-20 bg-[#F5F5F3] rounded-lg p-2 flex items-center justify-center shrink-0">
          <img
            className="w-full h-full object-contain"
            src={item.image || item.img}
            alt={item.name || item.productName}
          />
        </div>
        <div>
          <h2 className="font-bold text-sm text-primeColor font-titleFont line-clamp-1 mb-1">
            {item.name || item.productName}
          </h2>
          <p className="text-xs text-gray-500 mb-1">
            Warna: {item.colors || item.color || "Standar"}
          </p>
          <p className="text-sm font-semibold text-gray-700">
            ${item.price}
          </p>
        </div>
      </div>

      {/* Quantity Selector, Subtotal & Delete */}
      <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-1/2 pt-3 sm:pt-0 border-t sm:border-t-0 border-gray-100">
        {/* Quantity Controls */}
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-gray-50">
          <button
            onClick={handleDecrease}
            className="px-3 py-1.5 text-gray-600 hover:bg-gray-200 transition-colors text-xs"
            title="Kurangi"
          >
            <FaMinus />
          </button>
          <span className="px-4 py-1.5 text-xs font-bold text-primeColor bg-white">
            {item.quantity}
          </span>
          <button
            onClick={handleIncrease}
            className="px-3 py-1.5 text-gray-600 hover:bg-gray-200 transition-colors text-xs"
            title="Tambah"
          >
            <FaPlus />
          </button>
        </div>

        {/* Subtotal */}
        <div className="text-right">
          <p className="text-xs text-gray-400 font-medium">Subtotal</p>
          <p className="text-base font-extrabold text-primeColor">
            ${(item.price * item.quantity).toFixed(2)}
          </p>
        </div>

        {/* Delete Button */}
        <button
          onClick={handleDelete}
          className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          title="Hapus dari keranjang"
        >
          <FaTrash className="text-sm" />
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
