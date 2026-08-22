import React from 'react';

export const ItemCardDikemas = ({ item }) => {
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
      <div className="flex items-center gap-2 w-full sm:w-auto justify-end pt-2 sm:pt-0 border-t sm:border-t-0 border-gray-100">
        <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-full">
          Sedang Dikemas Penjual
        </span>
      </div>
    </div>
  );
};
