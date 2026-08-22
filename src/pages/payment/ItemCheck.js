import React from "react";

const ItemCheck = ({ item }) => {
  if (!item) return null;

  const title = item.name || item.productName || "Produk";
  const image = item.image || item.img;
  const price = Number(item.price) || 0;
  const quantity = Number(item.quantity) || 1;
  const color = item.colors || item.color || "Standar";

  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors text-xs text-gray-700">
      <td className="py-3 px-4">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-[#F5F5F3] rounded-lg p-1 flex items-center justify-center shrink-0 border border-gray-200">
            <img
              className="w-full h-full object-contain"
              src={image}
              alt={title}
            />
          </div>
          <div>
            <h4 className="font-bold text-sm text-primeColor font-titleFont line-clamp-1">
              {title}
            </h4>
            <p className="text-[11px] text-gray-500">Warna: {color}</p>
          </div>
        </div>
      </td>
      <td className="py-3 px-4 text-center font-medium">
        ${price.toFixed(2)}
      </td>
      <td className="py-3 px-4 text-center font-bold">
        {quantity}
      </td>
      <td className="py-3 px-4 text-right font-extrabold text-primeColor text-sm">
        ${(price * quantity).toFixed(2)}
      </td>
    </tr>
  );
};

export default ItemCheck;
