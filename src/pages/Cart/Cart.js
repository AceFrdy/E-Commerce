import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import ItemCard from "./ItemCard";
import { FaShoppingCart, FaLock, FaMoneyBill, FaTag, FaShieldAlt } from "react-icons/fa";
import { HiArrowsRightLeft } from "react-icons/hi2";
import qris from "../../assets/images/qris.png";
import { resetCart } from "../../redux/AstaSlice";
import { spfOne, spfTwo, bestSellerOne } from "../../assets/images/index";

const Cart = () => {
  const dispatch = useDispatch();
  const reduxProducts = useSelector((state) => state.AstaReducer.products);

  // Default dummy cart items fallback if Redux store is empty
  const defaultCartItems = [
    {
      _id: "c101",
      name: "MSI NB GS65 Thin 9SD",
      price: 300.0,
      quantity: 1,
      image: spfOne,
      colors: "Black",
    },
    {
      _id: "c102",
      name: "Poco X5 Pro 5G",
      price: 150.0,
      quantity: 2,
      image: spfTwo,
      colors: "Yellow",
    },
    {
      _id: "c103",
      name: "NVIDIA GeForce GTX 1650",
      price: 320.0,
      quantity: 1,
      image: bestSellerOne,
      colors: "Black",
    },
  ];

  const [cartItems, setCartItems] = useState([]);
  const [couponCode, setCouponCode] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);
  const [couponMessage, setCouponMessage] = useState("");

  useEffect(() => {
    if (reduxProducts && reduxProducts.length > 0) {
      setCartItems(reduxProducts);
    } else {
      setCartItems(defaultCartItems);
    }
  }, [reduxProducts]);

  const handleIncrease = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item._id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item._id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };

  const handleDelete = (id) => {
    setCartItems(cartItems.filter((item) => item._id !== id));
  };

  const handleResetCart = () => {
    setCartItems([]);
    dispatch(resetCart());
  };

  const handleApplyCoupon = () => {
    if (couponCode.toUpperCase() === "Asta20" || couponCode.toUpperCase() === "DISCOUNT20") {
      setDiscountPercent(20);
      setCouponMessage("Kupon berhasil dipasang (Diskon 20%)!");
    } else if (couponCode.trim() !== "") {
      setCouponMessage("Kode kupon tidak valid. Gunakan: Asta20");
    }
  };

  const subTotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discountAmount = (subTotal * discountPercent) / 100;
  const shippingFee = subTotal > 0 ? 0 : 0; // Shipping free
  const totalAmount = subTotal - discountAmount + shippingFee;

  return (
    <div className="max-w-container mx-auto px-4 py-6">
      <Breadcrumbs title="Keranjang Belanja" />

      {cartItems.length > 0 ? (
        <div className="w-full pb-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Product Items List (Left Side) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="bg-white border border-gray-100 shadow-md rounded-xl p-6">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100">
                <div className="flex items-center gap-2 text-primeColor font-bold font-titleFont text-lg">
                  <FaShoppingCart className="text-xl" />
                  <span>Daftar Produk ({cartItems.length})</span>
                </div>
                <button
                  onClick={handleResetCart}
                  className="text-xs text-red-600 hover:underline font-semibold"
                >
                  Kosongkan Keranjang
                </button>
              </div>

              {/* Item Cards Container */}
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <ItemCard
                    key={item._id}
                    item={item}
                    onIncrease={handleIncrease}
                    onDecrease={handleDecrease}
                    onDelete={handleDelete}
                  />
                ))}
              </div>

              {/* Warranty & Care Banner */}
              <div className="mt-6 p-4 bg-[#F5F5F3] border border-gray-200 rounded-xl flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <FaShieldAlt className="text-primeColor text-2xl" />
                  <div>
                    <h4 className="text-xs font-bold text-primeColor">
                      Asta Care & Garansi Resmi 1 Tahun
                    </h4>
                    <p className="text-[11px] text-gray-500">
                      Perlindungan produk terjamin dengan layanan pengembalian mudah.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cart Summary & Checkout (Right Side) */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            {/* Promo / Coupon Box */}
            <div className="bg-white border border-gray-100 shadow-md rounded-xl p-6">
              <h3 className="text-sm font-bold font-titleFont text-primeColor mb-3 flex items-center gap-2">
                <FaTag className="text-xs" />
                Kode Promo / Kupon
              </h3>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Masukkan Asta20"
                  className="w-full h-10 border border-gray-300 rounded-lg px-3 text-xs outline-none focus:border-primeColor uppercase"
                />
                <button
                  onClick={handleApplyCoupon}
                  className="px-4 py-2 bg-primeColor hover:bg-black text-white text-xs font-semibold rounded-lg transition-colors"
                >
                  Terapkan
                </button>
              </div>
              {couponMessage && (
                <p
                  className={`text-[11px] mt-2 font-medium ${
                    discountPercent > 0 ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {couponMessage}
                </p>
              )}
            </div>

            {/* Order Summary Box */}
            <div className="bg-white border border-gray-100 shadow-md rounded-xl p-6">
              <h3 className="text-sm font-bold font-titleFont text-primeColor mb-4 pb-2 border-b border-gray-100">
                Ringkasan Belanja
              </h3>
              <div className="space-y-3 text-xs text-gray-600">
                <div className="flex justify-between items-center">
                  <span>Subtotal Produk</span>
                  <span className="font-bold text-gray-800">
                    ${subTotal.toFixed(2)}
                  </span>
                </div>
                {discountPercent > 0 && (
                  <div className="flex justify-between items-center text-green-600 font-semibold">
                    <span>Diskon Kupon ({discountPercent}%)</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between items-center">
                  <span>Estimasi Pengiriman</span>
                  <span className="text-green-600 font-bold">Gratis</span>
                </div>
                <div className="pt-3 border-t border-gray-100 flex justify-between items-center text-sm font-bold text-primeColor">
                  <span>Total Pembayaran</span>
                  <span className="text-base font-extrabold">
                    ${totalAmount.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Checkout Button */}
              <Link to="/paymentgateway">
                <button className="w-full mt-6 py-3 bg-primeColor hover:bg-black text-white text-sm font-bold rounded-lg transition-colors shadow flex items-center justify-center gap-2">
                  <FaLock className="text-xs" />
                  Proceed to Checkout
                </button>
              </Link>

              {/* Payment Methods Info */}
              <div className="mt-6 pt-4 border-t border-gray-100 text-center">
                <p className="text-[11px] text-gray-400 font-semibold mb-3">
                  Metode Pembayaran Aman
                </p>
                <div className="flex items-center justify-center gap-6 text-gray-500">
                  <div className="flex flex-col items-center">
                    <FaMoneyBill className="text-xl mb-1 text-gray-700" />
                    <span className="text-[10px] font-semibold">COD</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <HiArrowsRightLeft className="text-xl mb-1 text-gray-700" />
                    <span className="text-[10px] font-semibold">Transfer</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src={qris} alt="QRIS" className="h-5 object-contain" />
                    <span className="text-[10px] font-semibold mt-1">QRIS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="py-16 flex flex-col items-center text-center">
          <FaShoppingCart className="text-6xl text-gray-300 mb-4" />
          <h2 className="text-lg font-bold font-titleFont text-primeColor mb-2">
            Keranjang Belanja Anda Kosong
          </h2>
          <p className="text-xs text-gray-500 max-w-sm mb-6">
            Temukan berbagai produk berkualitas di katalog toko kami.
          </p>
          <Link to="/shop">
            <button className="px-6 py-2.5 bg-primeColor hover:bg-black text-white text-xs font-semibold rounded-lg transition-colors">
              Mulai Belanja Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
