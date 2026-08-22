import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ItemCardSelesai = ({ item }) => {
  const navigate = useNavigate();

  const handleProductDetails = () => {
    navigate(`/shop`);
  };

  return (
    <div className="w-full bg-white border border-gray-200 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm hover:border-gray-300 transition-colors">
      <div className="flex items-center gap-4 w-full sm:w-auto">
        <div className="w-16 h-16 bg-[#F5F5F3] rounded-lg p-1 flex items-center justify-center shrink-0 border border-gray-100">
          <img className="w-full h-full object-contain" src={item.image} alt={item.name} />
        </div>
        <div>
          <h3 className="font-titleFont font-bold text-sm text-primeColor">{item.name}</h3>
          <p className="text-xs text-gray-500">Warna: Standar</p>
          <p className="text-sm font-extrabold text-primeColor">${item.price}</p>
        </div>
      </div>
      <div className="flex items-center gap-3 w-full sm:w-auto justify-end pt-2 sm:pt-0 border-t sm:border-t-0 border-gray-100">
        <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
          Selesai
        </span>
        <button
          onClick={handleProductDetails}
          className="px-3 py-1.5 bg-primeColor hover:bg-black text-white text-xs font-semibold rounded-lg transition-colors"
        >
          Beli Lagi
        </button>
      </div>
    </div>
  );
};
