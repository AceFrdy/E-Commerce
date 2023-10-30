import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { resetCart } from "../../redux/orebiSlice";
import { emptyCart } from "../../assets/images/index";
import ItemCard from "./ItemCard";
import { GoTriangleDown } from "react-icons/go";
import { FaShoppingCart } from "react-icons/fa";
import { IoPricetags } from "react-icons/io5";
import { IoCopy } from "react-icons/io5";
const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.orebiReducer.products);
  const [totalAmt, setTotalAmt] = useState("");
  const [Pajak, setPajak] = useState("");
  const [selectedCoupon, setSelectedCoupon] = useState("");

  useEffect(() => {
    let price = 0;
    products.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price);
  }, [products]);
  useEffect(() => {
    if (totalAmt <= 200) {
      setPajak(30);
    } else if (totalAmt <= 400) {
      setPajak(25);
    } else if (totalAmt > 401) {
      setPajak(20);
    }
  }, [totalAmt]);
  return (
    <div className="max-w-container mx-auto px-4 ">
      <Breadcrumbs title="Cart" />
      {products.length > 0 ? (
        <div className="pb-20">
          <div className="w-full h-full flex pb-20 gap-2">
            <div className="w-[70%] lgl:w-65%] hidden mdl:inline-flex w-full h-full">
              <div className="flex flex-col space-y-2">
                {/* <div className="flex"> */}
                <div className="rounded-lg w-full h-full bg-[#EBEBEB] text-primeColor hidden lgl:grid grid-rows-1 grid-cols-2 grid-flow-col gap-2 px-3 text-lg font-titleFont font-semibold">
                  <h2 className="mt-1 flex relative gap-2">
                    <FaShoppingCart className="h-6 w-7" />
                    Product</h2>
                </div>
                <div className="mt-1 ">
                  <div className="w-full rounded-lg h-full bg-[#EBEBEB] text-primeColor hidden lgl:grid grid-rows-2 grid-flow-col gap-4 place-content-center px-6 text-lg font-titleFont font-semibold">
                    {products.map((item) => (
                      <div key={item._id}>
                        <ItemCard item={item} />
                      </div>
                    ))}
                  </div>

                </div>
                {/* </div> */}
              </div>
            </div>
            <div className="w-full mdl:w-[30%] lgl:w-[35%] h-full flex flex-col gap-2">
              <div className="relative rounded-lg w-full h-full bg-[#EBEBEB] text-primeColor hidden lgl:grid grid-rows-1  grid-cols-2 grid-flow-col gap-2 px-2 text-lg font-titleFont font-semibold grid grid-rows-3 grid-flow-col gap-4">
                <h2 className="mt-1 flex items-center gap-1">
                  <IoPricetags className="h-5 w-7" />Kode Promo</h2>
                <div className="absolute inset-x-12 bottom-0 h-16"><input
                  className=" w-48 h-12 border-b bg-white px-4 text-primeColor text-lg placeholder:text-base outline-none"
                  type="text"
                  placeholder="Masukan Kode ...*"
                />
                  <button className="bg-primeColor cursor-pointer hover:bg-black active:bg-gray-900 px-2.5 py-2.5 font-titleFont font-semibold text-lg text-gray-200 hover:text-white duration-300">
                    Gunakan
                  </button>
                </div>
              </div>
              <div>
                <div className="relative h-72 w-50 rounded-lg w-full h-full bg-[#EBEBEB] text-primeColor hidden lgl:grid grid-rows-1  grid-cols-2 grid-flow-col gap-2 px-2 text-lg font-titleFont font-semibold grid grid-rows-3 grid-flow-col gap-4">
                  <h2 className="flex items-center gap-1">
                    <IoCopy className="ml-1 h-5 w-7" />Ringkasan</h2>
                  <div className="absolute inset-x-12 bottom-0 h-16"><input
                    className=" w-48 h-12 border-b bg-white px-4 text-primeColor text-lg placeholder:text-base outline-none"
                    type="text"
                    placeholder="Masukan Kode ...*"
                  />
                    <button className="bg-primeColor cursor-pointer hover:bg-black active:bg-gray-900 px-2.5 py-2.5 font-titleFont font-semibold text-lg text-gray-200 hover:text-white duration-300">
                      Gunakan
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <button
            onClick={() => dispatch(resetCart())}
            className="py-2 px-10 bg-red-500 text-white font-semibold uppercase mb-4 hover:bg-red-700 duration-300"
          >
            Reset cart
          </button>

          <div className="flex flex-col mdl:flex-row justify-between border py-4 px-4 items-center gap-2 mdl:gap-0">
            <div className="flex items-center gap-2 text-base text-[#767676] relative">
              <label htmlFor="selected-coupon" className="text-lg font-semibold">Pilih Kupon: </label>
              <select
                id="selected-coupon"
                value={selectedCoupon}
                onChange={(e) => setSelectedCoupon(parseFloat(e.target.value))}
                className="w-32 md:w-52 border-[1px] border-gray-200 py-1 px-4 cursor-pointer text-primeColor text-base block dark:placeholder-gray-400 appearance-none focus-within:outline-none focus-visible:border-primeColor"
              >
                <option value={0}>Tidak ada kupon</option>
                <option value={10}>Kupon Diskon 10%</option>
                <option value={20}>Kupon Diskon 20%</option>
                <option value={30}>Kupon Diskon 30%</option>
              </select>
              <span className="absolute text-sm right-2 md:right-4 top-2.5">
                <GoTriangleDown />
              </span>
            </div>
            <p className="text-lg font-semibold">Update Cart</p>
          </div>
          <div className="max-w-7xl gap-4 flex justify-end mt-4">
            <div className="w-96 flex flex-col gap-4">
              <h1 className="text-2xl font-semibold text-right">Cart totals</h1>
              <div>
                <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
                  Harga Barang
                  <span className="font-semibold tracking-wide font-titleFont">
                    ${totalAmt}
                  </span>
                </p>
                <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
                  Pajak
                  <span className="font-semibold tracking-wide font-titleFont">
                    ${Pajak}
                  </span>
                </p>
                <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
                  Coupon
                  <span className="font-semibold tracking-wide font-titleFont">
                    {selectedCoupon}%
                  </span>
                </p>
                <p className="flex items-center justify-between border-[1px] border-gray-400 py-1.5 text-lg px-4 font-medium">
                  Total
                  <span className="font-bold tracking-wide text-lg font-titleFont">
                    ${totalAmt + Pajak - (totalAmt * selectedCoupon) / 100}
                  </span>
                </p>
              </div>
              <div className="flex justify-end">
                <Link to="/paymentgateway">
                  <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
                    Proceed to Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col mdl:flex-row justify-center items-center gap-4 pb-20"
        >
          <div>
            <img
              className="w-80 rounded-lg p-4 mx-auto"
              src={emptyCart}
              alt="emptyCart"
            />
          </div>
          <div className="max-w-[500px] p-4 py-8 bg-white flex gap-4 flex-col items-center rounded-md shadow-lg">
            <h1 className="font-titleFont text-xl font-bold uppercase">
              Your Cart feels lonely.
            </h1>
            <p className="text-sm text-center px-10 -mt-2">
              Your Shopping cart lives to serve. Give it purpose - fill it with
              books, electronics, videos, etc. and make it happy.
            </p>
            <Link to="/shop">
              <button className="bg-primeColor rounded-md cursor-pointer hover:bg-black active:bg-gray-900 px-8 py-2 font-titleFont font-semibold text-lg text-gray-200 hover:text-white duration-300">
                Continue Shopping
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Cart;
