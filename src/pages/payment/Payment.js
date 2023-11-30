import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { GoTriangleDown } from "react-icons/go";
import ItemCheck from "./ItemCheck";
import { MdLocationPin } from "react-icons/md";
import NavBar from "./NavBar";
// import Transfer from "./page/Transfer";
// import COD from "./page/COD";

const Payment = () => {
  const products = useSelector((state) => state.orebiReducer.products);
  const [totalAmt, setTotalAmt] = useState("");
  const [, setPajak] = useState("");
  const [pilihKurir, setPilihKurir] = useState(10);

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
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Payment Checkout" />
      <div className="mb-2 hover:text-primeColor text-lg font-bold border-b-[0px] hover:border-b-primeColor flex items-center justify-start gap-2 hover:cursor-pointer pb-1 w-full">
        <span>
          <MdLocationPin />
        </span>
        Alamat Pengiriman

      </div>
      <div className="flex items-center justyfy-between text-primeColor hidden lgl:grid grid-cols-3 place-content-center text-md font-titleFont">
        <div className="">Prawira (+62) 82278567894</div>
        <p>Gg. Ontoseno No.96 Jaranan Banguntapan (Kos Laki 97A), KAB, Bantul Banguntapan,Yogyakarta
        </p>
        <Link to="/">
          <button className="w-52 mb-7 ml-24 h-10 bg-primeColor text-white text-lg mt-4 hover:bg-black duration-300">
            Ubah
          </button>
        </Link>
      </div>

      <div className="pb-10">
        <div className="pb-20">
          <div className="w-full h-20 bg-[#F5F7F7] text-primeColor hidden lgl:grid grid-cols-5 place-content-center px-6 text-lg font-titleFont font-semibold">
            <h2 className="col-span-2">Product</h2>
            <h2>Harga</h2>
            <h2>Jumlah</h2>
            <h2>Sub Total</h2>
          </div>
          <div className="mt-5">
            {products.map((item) => (
              <div key={item._id}>
                <ItemCheck item={item} />
              </div>
            ))}
          </div>
          <div className="flex flex-col mdl:flex-row justify-between border py-4 px-4 items-center gap-2 mdl:gap-0">
            <div className="flex items-center gap-2 text-base text-[#767676] relative">
              <label htmlFor="pilih-kurir" className="text-lg font-semibold">Pilih Kurir :</label>
              <select
                id="pilih-kurir"
                value={pilihKurir}
                onChange={(e) => setPilihKurir(parseFloat(e.target.value))}
                className="w-32 md:w-52 border-[1px] border-gray-200 py-1 px-4 cursor-pointer text-primeColor text-base block dark:placeholder-gray-400 appearance-none focus-within:outline-none focus-visible:border-primeColor"
              >
                <option value={10}>Reguler</option>
                <option value={0}>Hemat</option>
                <option value={20}>Express</option>
              </select>
              <span className="absolute text-sm right-2 md:right-4 top-2.5">
                <GoTriangleDown />
              </span>
            </div>

            <p className="text-lg font-semibold"><p className="flex items-center justify-between border-[0px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
              ${pilihKurir}
              {/* <span className="font-semibold tracking-wide font-titleFont">
                    
                  </span> */}
            </p></p>
          </div>

          <div className="w-full grid grid-row-2 h-full flex pb-20 gap-10">
              <div className="">
                <div className="flex flex-col space-y-4">
                  <NavBar />
                  
                </div>
              </div>
              <div className="">
                {/* <COD /> */}
                {/* <Transfer /> */}
              </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Payment;
