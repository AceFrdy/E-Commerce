import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteItem, addToCart } from '../../redux/diamoSlice';
import { FaShoppingCart, FaTrash, FaCheck } from 'react-icons/fa';

export const Wishlist = ({ item, onDelete }) => {
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        _id: item._id,
        name: item.name || item.productName,
        quantity: 1,
        image: item.image || item.img,
        badge: item.badge,
        price: item.price,
        colors: item.color || item.colors,
      })
    );
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete(item._id);
    } else {
      dispatch(deleteItem(item._id));
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full">
      <div className="w-full h-44 bg-[#F5F5F3] p-3 flex items-center justify-center relative overflow-hidden group">
        <img
          src={item.image || item.img}
          alt={item.name || item.productName}
          className="h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow justify-between gap-3">
        <div>
          <h3 className="font-bold text-sm text-primeColor font-titleFont line-clamp-1 mb-1">
            {item.name || item.productName}
          </h3>
          <p className="text-xs text-gray-500 mb-1">
            Warna: {item.colors || item.color || "Mixed"}
          </p>
          <p className="text-base font-extrabold text-primeColor">
            ${item.price}
          </p>
        </div>

        <div className="flex flex-col gap-2 pt-2 border-t border-gray-100">
          <button
            onClick={handleAddToCart}
            className="w-full py-2 bg-primeColor hover:bg-black text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors"
          >
            {added ? <FaCheck /> : <FaShoppingCart />}
            {added ? "Ditambahkan" : "Add to Cart"}
          </button>
          <button
            onClick={handleDelete}
            className="w-full py-1.5 border border-red-200 text-red-600 hover:bg-red-50 text-xs font-semibold rounded-lg flex items-center justify-center gap-1 transition-colors"
          >
            <FaTrash className="text-xs" />
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
};
