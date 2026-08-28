import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ProfileSideNav } from '../ProfileSideNav';
import Breadcrumbs from '../../../components/pageProps/Breadcrumbs';
import { ItemCardProf } from './components/ItemCardProf';
import { ItemCardToko } from './components/ItemCardToko';
import { ItemCardDikemas } from './components/ItemCardDikemas';
import { ItemCardSelesai } from './components/ItemCardSelesai';
import Pengiriman from './components/Pengiriman';
import {
  spfOne,
  bestSellerOne,
  bestSellerTwo,
} from '../../../assets/images/index';

export const Pesanan = () => {
  const reduxProducts = useSelector((state) => state.AstaReducer.products);
  const [type, setType] = useState("belum");

  const defaultOrders = [
    {
      _id: "ord01",
      name: "MSI NB GS65",
      price: 300,
      image: spfOne,
      quantity: 1,
    },
    {
      _id: "ord02",
      name: "GeForce GTX-1650",
      price: 320,
      image: bestSellerOne,
      quantity: 1,
    },
    {
      _id: "ord03",
      name: "Samsung Galaxy",
      price: 240,
      image: bestSellerTwo,
      quantity: 1,
    },
  ];

  const orderList = reduxProducts && reduxProducts.length > 0 ? reduxProducts : defaultOrders;

  const tabs = [
    { id: "belum", label: "Belum Bayar" },
    { id: "diambil", label: "Diambil Ditoko" },
    { id: "dikemas", label: "Dikemas" },
    { id: "dikirim", label: "Dikirim" },
    { id: "selesai", label: "Pesanan Selesai" },
  ];

  return (
    <div className="max-w-container mx-auto px-4 py-6">
      <Breadcrumbs title="Pesanan Saya" />
      <div className="w-full flex flex-col md:flex-row pb-20 gap-8">
        <div className="w-full md:w-1/4">
          <ProfileSideNav />
        </div>
        <div className="w-full md:w-3/4">
          <div className="bg-white border border-gray-100 shadow-sm md:shadow-md rounded-xl p-3 sm:p-6">
            <div className="pb-3 mb-4 border-b border-gray-100">
              <h1 className="text-lg sm:text-xl font-bold font-titleFont text-primeColor">
                Pesanan Saya
              </h1>
              <p className="text-xs text-gray-500 mt-0.5">
                Lacak status dan riwayat pemesanan Anda
              </p>
            </div>

            {/* Tabs Header */}
            <div className="flex border-b border-gray-200 overflow-x-auto gap-1 mb-4 pb-1 scrollbar-hide">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setType(tab.id)}
                  className={`py-2.5 px-3 sm:px-4 text-xs font-bold whitespace-nowrap border-b-2 transition-colors duration-200 shrink-0 ${
                    type === tab.id
                      ? "border-primeColor text-primeColor"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="w-full space-y-3">
              {type === "belum" && (
                <div className="w-full flex flex-col gap-3">
                  {orderList.map((item) => (
                    <ItemCardProf key={item._id} item={item} />
                  ))}
                </div>
              )}

              {type === "diambil" && (
                <div className="w-full flex flex-col gap-3">
                  {orderList.map((item) => (
                    <ItemCardToko key={item._id} item={item} />
                  ))}
                </div>
              )}

              {type === "dikemas" && (
                <div className="w-full flex flex-col gap-3">
                  {orderList.map((item) => (
                    <ItemCardDikemas key={item._id} item={item} />
                  ))}
                </div>
              )}

              {type === "dikirim" && (
                <div className="w-full py-2">
                  <Pengiriman />
                </div>
              )}

              {type === "selesai" && (
                <div className="w-full flex flex-col gap-3">
                  {orderList.map((item) => (
                    <ItemCardSelesai key={item._id} item={item} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
