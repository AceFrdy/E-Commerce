import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaWhatsapp, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import FooterListTitle from "./FooterListTitle";
// import { paymentCard } from "../../../assets/images";
// import Image from "../../designLayouts/Image";
import { GoTriangleDown } from "react-icons/go";
// import { HiOutlineMenuAlt4 } from "react-icons/hi";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { FaRegCompass } from "react-icons/fa";

const Footer = () => {
  const [emailInfo, setEmailInfo] = useState("");
  const [subscription, setSubscription] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  // const products = useSelector((state) => state.orebiReducer.products);
  const [show, setShow] = useState(false);
  // const [showUser, setShowUser] = useState(false);
  // const navigate = useNavigate();
  const ref = useRef();

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (ref.current.contains(e.target)) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, [show, ref]);

  const emailValidation = () => {
    return String(emailInfo)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSubscription = () => {
    if (emailInfo === "") {
      setErrMsg("Please provide an Email !");
    } else if (!emailValidation(emailInfo)) {
      setErrMsg("Please give a valid Email!");
    } else {
      setSubscription(true);
      setErrMsg("");
      setEmailInfo("");
    }
  };


  return (
    <div className="w-full bg-[#F5F5F3] py-20">
      <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-2  xl:grid-cols-6 px-4 gap-10">
        <div className="col-span-2">
          <FooterListTitle title=" More about Orebi Shop" />
          <div className="flex flex-col gap-6">
            <p className="text-base w-full xl:w-[80%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint
              ab ullam, numquam nesciunt in.
            </p>
            <div>
              <FooterListTitle title=" Alamat Perusahaan" />
              <p>
                Jl. Janti nomor 97, Banguntapan, Kab. Bantul, Daerah Istimewa Yogyakarta
              </p>
            </div>
          </div>
        </div>
        <div>
          <FooterListTitle title="Shop" />
          <ul className="flex flex-col gap-2">
            <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Electronics
            </li>
            <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              New Arrivals
            </li>
          </ul>
        </div>
        <div>
          <FooterListTitle title="Your account" />
          <ul className="flex flex-col gap-2">
            <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Profile
            </li>
            <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Orders
            </li>
            <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Addresses
            </li>
            <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Account Details
            </li>
          </ul>
        </div>
        <div className="col-span-2 flex flex-col items-center w-full px-4">
          {/* <FooterListTitle  */}
          <div
            onClick={() => setShow(!show)}
            ref={ref}
            className="flex h-7 cursor-pointer flex-auto gap-2 text-primeColor"
          >
            <p className="text-xl font-bodyFont font-semibold mb-6">
              Hubungi Kami
            </p>
            <GoTriangleDown className="w-4 h-7" />
            {show && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute buttom-6 z-50 bg-primeColor w-auto text-[#767676] h-auto p-4 pb-6"
              >
                <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                  Accessories
                </li>
              </motion.ul>
            )}
          </div>
          {/* />  */}
          <div className="w-full">
            <div className="flex-col w-full pb-4">
              <input
                onChange={(e) => setEmailInfo(e.target.value)}
                value={emailInfo}
                className="w-full h-12 border-b border-400 bg-white px-4 text-primeColor text-lg placeholder:text-base outline-black"
                type="text"
                placeholder="Masukan Email Anda ..."
              />
              {errMsg && (
                <p className="text-red-600 text-sm font-semibold font-titleFont text-center animate-bounce mt-2">
                  {errMsg}
                </p>
              )}
            </div>
            {subscription ? (
              <motion.p
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full text-center text-base font-titleFont font-semibold text-green-600"
              >
                Subscribed Successfully !
              </motion.p>
            ) : (
              <div className="w-full flex-col xl:flex-row flex items-center gap-4">
                <div className="flex-col w-full pb-4">

                  <label className="block">
                    <span className="text-gray-700"></span>
                    <textarea className="mt-1 block w-full w-full h-36 border-400 bg-white px-4 text-primeColor text-lg placeholder:text-base outline-black"
                    type="text"
                    placeholder="Tuliskan Pesan Disini ... " rows="3"></textarea>
                  </label>
                  {errMsg && (
                    <p className="text-red-600 text-sm font-semibold font-titleFont text-center animate-bounce mt-2">
                      {errMsg}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* <Image
              className={`w-[80%] lg:w-[60%] mx-auto ${
                subscription ? "mt-2" : "mt-6"
              }`}
              imgSrc={paymentCard}
            /> */}
            <button
              onClick={handleSubscription}
              className="bg-white text-lightText w-[20%] h-10 hover:bg-black hover:text-white duration-300 text-base tracking-wide"
            >
              Send
            </button>
          </div>
          <ul className="flex items-center gap-6 pt-6">
            <a
              href="https://www.youtube.com/@reactjsBD"
              target="_blank"
              rel="noreferrer"
            >
              <li className="w-7 h-7 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                <FaYoutube />
              </li>
            </a>
            <a
              href="https://github.com/noorjsdivs"
              target="_blank"
              rel="noreferrer"
            >
              <li className="w-7 h-7 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                <FaWhatsapp />
              </li>
            </a>
            <a
              href="https://www.facebook.com/Noorlalu143/"
              target="_blank"
              rel="noreferrer"
            >
              <li className="w-7 h-7 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                <FaFacebook />
              </li>
            </a>
            <a
              href="https://www.linkedin.com/in/noor-mohammad-ab2245193/"
              target="_blank"
              rel="noreferrer"
            >
              <li className="w-7 h-7 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                <FaLinkedin />
              </li>
            </a>
            <a
              href="https://www.linkedin.com/in/noor-mohammad-ab2245193/"
              target="_blank"
              rel="noreferrer"
            >
              <li className="w-7 h-7 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                <FaInstagram />
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
