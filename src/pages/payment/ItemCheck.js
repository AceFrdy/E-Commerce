import React from "react";

const ItemCheck = (item) => {
  // const product1 = "Nama Produk 1";
  // const priceAddition = 10; // Harga tambahan yang ingin kamu tambahkan
  // const subTotal = ;

  return (
    <table className="border-collapse border w-full">
      <tbody>
        <tr className="border-b grid grid-cols-12 gap-4">
          <td className="p-4 col-span-4">
            <img className="w-32 h-32 " src={item.image} alt="productImage" />
          </td>
          <td className="p-4 col-span-3 px-2">
            <div className="font-titleFont font-semibold">{item.name}</div>
            <div className="font-normal">${item.price}</div>
            <div className="font-normal">Warna Ireng</div>
          </td>
          <td className="p-4 col-span-3">
            <div className="flex items-center text-lg font-semibold">
              <p>{item.quantity}</p>
            </div>
          </td>
          <td className="p-4 col-span-2 px-2">
            <div className="flex items-center font-titleFont font-bold text-lg ">
              <p>${item.price * item.quantity}</p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

  );
};

export default ItemCheck;
