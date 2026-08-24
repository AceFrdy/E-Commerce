import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../../../../redux/diamoSlice';
import { Link } from 'react-router-dom';

export const ItemCardProf = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="w-full bg-white border border-gray-200 rounded-xl p-3 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm hover:border-gray-300 transition-colors overflow-hidden">
      <div className="flex items-center gap-3 w-full sm:w-auto min-w-0">
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#F5F5F3] rounded-lg p-1 flex items-center justify-center shrink-0 border border-gray-100">
          <img className="w-full h-full object-contain" src={item.image} alt={item.name} />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-titleFont font-bold text-xs sm:text-sm text-primeColor truncate">{item.name}</h3>
          <p className="text-[11px] text-gray-500">Warna: Standar</p>
          <p className="text-xs sm:text-sm font-extrabold text-primeColor">${item.price}</p>
        </div>
      </div>
      <div className="flex items-center gap-2 w-full sm:w-auto justify-end pt-2 sm:pt-0 border-t sm:border-t-0 border-gray-100 shrink-0">
        <Link to="/paymentgateway">
          <button className="px-3.5 py-1.5 bg-primeColor hover:bg-black text-white text-[11px] sm:text-xs font-semibold rounded-lg transition-colors whitespace-nowrap">
            Bayar
          </button>
        </Link>
        <button
          onClick={() => dispatch(deleteItem(item._id))}
          className="px-3 py-1.5 border border-red-200 text-red-600 hover:bg-red-50 text-[11px] sm:text-xs font-semibold rounded-lg transition-colors whitespace-nowrap"
        >
          Dibatalkan
        </button>
      </div>
    </div>
  );
};
