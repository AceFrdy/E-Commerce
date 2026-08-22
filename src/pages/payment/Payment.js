import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import ItemCheck from "./ItemCheck";
import { MdLocationPin, MdEdit, MdCheck } from "react-icons/md";
import { FaTruck, FaMoneyBill, FaQrcode, FaCreditCard } from "react-icons/fa";
import Transfer from "./page/Transfer";
import COD from "./page/COD";
import Qris from "./page/Qris";
import { spfOne, spfTwo, bestSellerOne } from "../../assets/images/index";

const Payment = () => {
  const reduxProducts = useSelector((state) => state.orebiReducer.products);

  const defaultPurchasedProducts = [
    {
      _id: "p101",
      name: "MSI NB GS65 Thin 9SD",
      price: 300.0,
      quantity: 1,
      image: spfOne,
      colors: "Black",
    },
    {
      _id: "p102",
      name: "Poco X5 Pro 5G",
      price: 150.0,
      quantity: 2,
      image: spfTwo,
      colors: "Yellow",
    },
    {
      _id: "p103",
      name: "NVIDIA GeForce GTX 1650",
      price: 320.0,
      quantity: 1,
      image: bestSellerOne,
      colors: "Black",
    },
  ];

  const purchasedProducts =
    reduxProducts && reduxProducts.length > 0
      ? reduxProducts
      : defaultPurchasedProducts;

  const [editable, setEditable] = useState(false);
  const [name, setName] = useState("John Doe");
  const [phone, setPhone] = useState("08123456789");
  const [address, setAddress] = useState(
    "Jalan Malioboro No. 123, Kel. Sosromenduran, Kec. Gedongtengen, Yogyakarta 55271"
  );

  const [courierOption, setCourierOption] = useState("standard");
  const [courierFee, setCourierFee] = useState(10);
  const [paymentTab, setPaymentTab] = useState("transfer");

  const handleCourierChange = (e) => {
    const val = e.target.value;
    setCourierOption(val);
    if (val === "standard") setCourierFee(10);
    else if (val === "express") setCourierFee(20);
    else if (val === "self") setCourierFee(0);
  };

  return (
    <div className="max-w-container mx-auto px-4 py-6">
      <Breadcrumbs title="Payment Checkout" />

      <div className="w-full pb-20 flex flex-col gap-8">
        {/* 1. Delivery Address Card */}
        <div className="bg-white border border-gray-100 shadow-md rounded-xl p-6">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-100">
            <div className="flex items-center gap-2 text-primeColor font-bold font-titleFont text-base">
              <MdLocationPin className="text-xl text-red-600" />
              <span>Alamat Pengiriman</span>
            </div>
            <button
              onClick={() => setEditable(!editable)}
              className="text-xs text-primeColor hover:text-black font-semibold flex items-center gap-1 bg-gray-100 px-3 py-1.5 rounded-lg transition-colors"
            >
              {editable ? <MdCheck /> : <MdEdit />}
              {editable ? "Simpan" : "Ubah Alamat"}
            </button>
          </div>

          {editable ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="font-semibold text-gray-700 block mb-1">Nama Penerima</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full h-10 border border-gray-300 rounded-lg px-3 text-xs outline-none focus:border-primeColor"
                />
              </div>
              <div>
                <label className="font-semibold text-gray-700 block mb-1">No. Handphone</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full h-10 border border-gray-300 rounded-lg px-3 text-xs outline-none focus:border-primeColor"
                />
              </div>
              <div className="md:col-span-2">
                <label className="font-semibold text-gray-700 block mb-1">Alamat Lengkap</label>
                <textarea
                  rows="2"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-3 text-xs outline-none focus:border-primeColor"
                ></textarea>
              </div>
            </div>
          ) : (
            <div className="text-xs text-gray-700 leading-relaxed">
              <p className="font-bold text-sm text-primeColor font-titleFont mb-1">
                {name} <span className="text-gray-500 font-normal">({phone})</span>
              </p>
              <p className="text-gray-600">{address}</p>
            </div>
          )}
        </div>

        {/* 2. Purchased Items Table */}
        <div className="bg-white border border-gray-100 shadow-md rounded-xl p-6">
          <h3 className="text-base font-bold font-titleFont text-primeColor mb-4 pb-3 border-b border-gray-100">
            Produk Yang Dibeli
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#F5F5F3] text-xs font-bold text-primeColor uppercase tracking-wider">
                  <th className="py-3 px-4 rounded-l-lg">Produk</th>
                  <th className="py-3 px-4 text-center">Harga</th>
                  <th className="py-3 px-4 text-center">Jumlah</th>
                  <th className="py-3 px-4 text-right rounded-r-lg">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {purchasedProducts.map((item) => (
                  <ItemCheck key={item._id} item={item} />
                ))}
              </tbody>
            </table>
          </div>

          {/* 3. Shipping Options */}
          <div className="mt-6 pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <FaTruck className="text-primeColor text-lg shrink-0" />
              <span className="text-xs font-bold text-gray-700 shrink-0">
                Pilihan Pengiriman:
              </span>
              <select
                value={courierOption}
                onChange={handleCourierChange}
                className="h-10 border border-gray-300 rounded-lg px-3 text-xs outline-none focus:border-primeColor bg-white font-semibold text-primeColor"
              >
                <option value="standard">Reguler Courier ($10.00)</option>
                <option value="express">Express Courier ($20.00)</option>
                <option value="self">Ambil Sendiri di Toko ($0.00)</option>
              </select>
            </div>
            <div className="text-right">
              <span className="text-xs text-gray-500 mr-2">Ongkos Kirim:</span>
              <span className="text-sm font-extrabold text-primeColor">
                ${courierFee.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        {/* 4. Payment Method Tabs */}
        <div className="bg-white border border-gray-100 shadow-md rounded-xl p-6">
          <h3 className="text-base font-bold font-titleFont text-primeColor mb-4 pb-3 border-b border-gray-100">
            Metode Pembayaran
          </h3>

          {/* Tab Selector */}
          <div className="flex border-b border-gray-200 gap-4 mb-6">
            <button
              onClick={() => setPaymentTab("transfer")}
              className={`pb-3 px-4 text-xs font-bold flex items-center gap-2 border-b-2 transition-colors ${
                paymentTab === "transfer"
                  ? "border-primeColor text-primeColor"
                  : "border-transparent text-gray-400 hover:text-gray-700"
              }`}
            >
              <FaCreditCard className="text-sm" />
              Bank Transfer
            </button>
            <button
              onClick={() => setPaymentTab("cod")}
              className={`pb-3 px-4 text-xs font-bold flex items-center gap-2 border-b-2 transition-colors ${
                paymentTab === "cod"
                  ? "border-primeColor text-primeColor"
                  : "border-transparent text-gray-400 hover:text-gray-700"
              }`}
            >
              <FaMoneyBill className="text-sm" />
              COD (Bayar di Tempat)
            </button>
            <button
              onClick={() => setPaymentTab("qris")}
              className={`pb-3 px-4 text-xs font-bold flex items-center gap-2 border-b-2 transition-colors ${
                paymentTab === "qris"
                  ? "border-primeColor text-primeColor"
                  : "border-transparent text-gray-400 hover:text-gray-700"
              }`}
            >
              <FaQrcode className="text-sm" />
              QRIS Instant
            </button>
          </div>

          {/* Active Tab Panel */}
          <div className="p-4 bg-[#F5F5F3] border border-gray-200 rounded-xl">
            {paymentTab === "transfer" && <Transfer />}
            {paymentTab === "cod" && <COD />}
            {paymentTab === "qris" && <Qris />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
