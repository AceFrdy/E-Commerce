import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../../../../redux/orebiSlice';
import { Link } from 'react-router-dom';

export const ItemCardProf = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <tr className="border-b w-full flex mr-2 w-full items-center text-lg font-semibold text-lg">
      <td className="p-4">
        <img className="w-16 h-16" src={item.image} alt="productImage" />
      </td>
      <td className="p-4 grow">
        <h3 className="font-titleFont font-semibold">{item.name}</h3>
        <p className="font-normal">${item.price}</p>
        <p className="font-normal">Warna Ireng</p>
      </td>
      <td className="p-4 " >
        <Link to="/paymentgateway">
          <span className="text-primeColor hover:text-red-500 duration-300 cursor-pointer">
            Bayar
          </span>
        </Link>
      </td>
      <td className="p-4">
        <span
          onClick={() => dispatch(deleteItem(item._id))}
          className="text-primeColor hover:text-red-500 duration-300 cursor-pointer"
        >
          Dibatalkan
        </span>
      </td>
    </tr>
  );
};
