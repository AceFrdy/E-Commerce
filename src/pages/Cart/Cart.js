import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, } from "react-router-dom";
import { motion } from "framer-motion";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
// import { resetCart } from "../../redux/orebiSlice";
import { emptyCart } from "../../assets/images/index";
import ItemCard from "./ItemCard";
// import { GoTriangleDown } from "react-icons/go";
import { FaShoppingCart } from "react-icons/fa";
import { IoPricetags } from "react-icons/io5";
import { IoCopy } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa";
import { HiArrowsRightLeft } from "react-icons/hi2";
import qris from "../../assets/images/qris.png";
import { BiShieldQuarter } from "react-icons/bi";
import { TbRotateClockwise } from "react-icons/tb";
import { TbTruckDelivery } from "react-icons/tb";

const Cart = () => {
  // const dispatch = useDispatch();
  const products = useSelector((state) => state.orebiReducer.products);
  const [totalAmt, setTotalAmt] = useState("");
  const [, setPajak] = useState("");
  // const [selectedCoupon, setSelectedCoupon] = useState("");
  console.log(qris);

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
              <div className="flex flex-col space-y-1">
                {/* <div className="flex"> */}
                <div className="rounded-lg w-[209%] h-full bg-[#F5F7F7] text-primeColor hidden lgl:grid grid-rows-1 grid-cols-2 grid-flow-col gap-2 px-3 text-lg font-titleFont font-semibold">
                  <h2 className="mt-1 flex relative gap-2">
                    <FaShoppingCart className="h-6 w-7" />
                    Product</h2>
                </div>
                <div className="mt-1">
                  <div className="w-[209%] divide-y-2 divide-gray-400/25 rounded-lg h-full bg-[#F5F7F7] text-primeColor hidden lgl:grid auto-rows-auto grid-row-1 grid-flow-row gap-4 px-6 text-lg font-titleFont font-semibold">
                    {products.map((item) => (
                      <div key={item._id}>
                        <ItemCard item={item} />
                      </div>
                    ))}
                    <div>
                      <div className="relative rounded-lg w-full h-[70%] bg-[#7c7c7c] ">
                        <div className="w-[60%] pt-3 pb-3 flex items-center border-[0px] border-gray-400 border-b-0 font-medium flex-row gap-2 mt-4 mb-4">
                          <div className="flex col-span-1 mdl:col-span-1 items-center  ">
                            <BiShieldQuarter className="w-12 h-12 ml-2" />
                          </div>
                          <div className="mb-3 col-span-5 grid mdl:col-span-3 flex items-center justify-between py-4 mdl:py-0 px-4 mdl:px-0 gap-6 mdl:gap-0">
                            <div>
                              <h1 className="font-titleFont w-full flex font-semibold">Garansi (Nama Perusahaan)</h1>
                            </div>
                            <div className="flex w-full items-center text-xs mt-2">
                              Memperpanjang garansi anda terhadap
                            </div>
                            <div className="w-full flex items-center text-xs">
                              kerusakan yang tidak disengaja
                            </div>

                          </div>
                          <div className="relative flex items-center">
                            <div className="absolute left-80 w-6 h-6 text-2xl flex items-center justify-center hover:text-gray-300 cursor-pointer duration-300 border-[0px] border-gray-300 hover:border-gray-300">
                              Tambah
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center w-[120%] h-full border-[0px] border-gray-400 border-b-0 font-medium">
                    <div className="relative mt-3 h-full w-50 rounded-lg w-full h-full text-primeColor hidden lgl:grid grid-rows-1 grid-cols-2 grid-flow-col px-2 text-xs font-titleFont font-semibold grid grid-rows-3 grid-flow-col gap-4">
                      <div className=" h-95">
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className="w-full mdl:w-[30%] lgl:w-[35%] h-full flex flex-col gap-1">
              <div className="relative rounded-lg w-full h-full bg-[#EBEBEB] text-primeColor hidden lgl:grid grid-rows-1 grid-cols-2 grid-flow-col gap-2 px-2 text-lg font-titleFont font-semibold grid grid-rows-3 grid-flow-col gap-4">
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
                <div className="relative mt-2 h-64 w-50 rounded-lg w-full h-full bg-[#EBEBEB] text-primeColor hidden lgl:grid grid-rows-1 grid-cols-2 grid-flow-col px-2 text-lg font-titleFont font-semibold grid grid-rows-3 grid-flow-col gap-4">
                  <h2 className="flex items-center gap-1 mt-1 absolute">
                    <IoCopy className="ml-1 absoulute h-5 w-7" />Ringkasan</h2>
                  <div className="absolute inset-x-12 bottom-0 h-52">
                    <div>
                      <p className="flex text-gray-400 items-center justify-between border-[0px] border-gray-400 border-b-0 py-1.5 text-lg font-medium">
                        Harga Barang
                        <span className="font-semibold tracking-wide font-titleFont">
                          ${totalAmt}
                        </span>
                      </p>
                      <p className="flex text-gray-400 items-center justify-between border-[0px] border-gray-400 border-b-0 py-1.5 text-lg font-medium">
                        Shipping
                        <span className="font-semibold text-red-600 tracking-wide font-titleFont">
                          Free
                        </span>
                      </p>
                    </div>
                    <p className="flex items-center justify-between border-[0px] border-gray-400 border-b-0 py-16 text-2xl font-medium">
                      Total
                      <span className="font-semibold tracking-wide font-titleFont">
                        ${totalAmt}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="relative mt-3 h-64 w-50 rounded-lg w-full h-full bg-[#EBEBEB] text-primeColor hidden lgl:grid grid-rows-1 grid-cols-2 grid-flow-col px-2 text-lg font-titleFont font-semibold grid grid-rows-3 grid-flow-col gap-4">
                  <h2 className="flex items-center gap-1 mt-1 absolute">
                    <FaLock className="ml-1 absoulute h-5 w-7 " />Pembayaran</h2>
                  <div className="absolute inset-x-12 bottom-0 h-52">
                    <div className="mt-6">
                      <Link to="/paymentgateway">
                        <button className="w-full rounded-lg h-10 bg-primeColor text-white hover:bg-black duration-300">
                          Proceed to Checkout
                        </button>
                      </Link>
                    </div>
                    <div className=" mt-10 flex justify-between">
                      <div className="flex flex-col grid justify-items-center">
                        <FaMoneyBill
                          className="h-12 w-12" />
                        <div>COD
                        </div>
                      </div>
                      <div className="ml-4 flex flex-col grid justify-items-center ">
                        <HiArrowsRightLeft
                          className="h-12 w-12" />
                        <div>Transfer</div>
                      </div>
                      <div className=" flex flex-col grid justify-items-center">
                        <img className="" src={qris} alt="Qris" />
                        <div>
                          Qris
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-10 flex justify-around">
            <div className="flex flex-col grid justify-items-center">
              <TbRotateClockwise className="w-20 h-20" />
              <div>Free Return
              </div>
              <div>
                60 days to change your mind
              </div>
            </div>
            <div className=" flex flex-col grid justify-items-center">
              <TbTruckDelivery className="w-20 h-20" />
              <div>
                Free Shipping
              </div>
              <div>from $50.00</div>
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
