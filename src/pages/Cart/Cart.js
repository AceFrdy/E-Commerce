import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { emptyCart } from "../../assets/images/index";
import ItemCard from "./ItemCard";
import { FaShoppingCart } from "react-icons/fa";
import { Card, CardBody, CardHeader, Button, Dialog, DialogBody, IconButton } from "@material-tailwind/react";
import Keamanan from "./isiCart/Keamanan";
import { Promo } from "./isiCart/Promo";
import { Ringkasan } from "./isiCart/Ringkasan";
import { Checkout } from "./isiCart/Checkout";
import { Info } from "./isiCart/Info";
import Warranty from "./isiCart/Warranty";
const Cart = () => {
  const products = useSelector((state) => state.orebiReducer.products);
  const [totalAmt, setTotalAmt] = useState("");
  const [, setPajak] = useState("");

  useEffect(() => {
    let price = 0;
    products.forEach((item) => {
      price += item.price * item.quantity;
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
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <>
      <Dialog size={'lg'} className="w-full h-[90%] rounded-lg overflow-auto touch-auto" open={open} handler={handleOpen}>
        <DialogBody>
          <Warranty />
        </DialogBody>
      </Dialog>
      <div className="mx-auto px-4">
        <Breadcrumbs title="Cart" />
        {products.length > 0 ? (
          <div className="pb-20 grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card
                className="col-span-2"
              >
                <CardBody>
                  <CardHeader
                  shadow={false}>
                    <div className="rounded-lg w-full bg-gray-100 h-full text-primeColor grid grid-cols-2 gap-2 px-3 text-lg font-titleFont font-semibold">
                      <h2 className="mt-1  flex relative gap-2 ">
                        <FaShoppingCart className="h-6 w-7 " />
                        Product
                      </h2>
                    </div>
                  </CardHeader>
                  <div className="overflow-y-auto max-h-96 rounded-lg text-primeColor grid grid-flow-row gap-4 px-6 text-lg font-titleFont font-semibold">
                    <CardBody>
                      {products.map((item) => (
                        <div key={item._id}>
                          <ItemCard item={item} />
                          <div className="flex items-center">
                            <span className="flex items-center text-lg font-semibold">
                              Orebi Care Warranty Extension
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                                className="h-5 w-5 cursor-pointer text-blue-gray-500 ml-1"
                                onClick={handleOpen}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                                />
                              </svg>
                            </span>
                          </div>
                          <Keamanan />
                        </div>
                      ))}
                    </CardBody>
                    {/* <CardFooter>
                  </CardFooter> */}
                  </div>
                  <Info />
                </CardBody>
              </Card>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <Card>
                <CardBody className="relative bg-[#F5F7F7] rounded-lg text-primeColor grid grid-rows-1 grid-cols-1 gap-2 text-lg font-titleFont font-semibold">
                  <Promo />
                </CardBody>
              </Card>
              <Card>
                <CardBody className="relative h-64 rounded-lg bg-[#F5F7F7] text-primeColor grid grid-rows-3 grid-cols-1 gap-4">
                  <Ringkasan />
                </CardBody>
              </Card>
              <Card>
                <CardBody className="relative h-64 rounded-lg bg-[#F5F7F7] text-primeColor grid grid-rows-3 grid-cols-2 gap-4">
                  <Checkout />
                </CardBody>
              </Card>
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col lg:flex-row justify-center items-center gap-4 pb-20"
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
    </>
  );
};

export default Cart;
