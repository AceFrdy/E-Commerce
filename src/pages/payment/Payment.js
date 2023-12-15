import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
// import { GoTriangleDown } from "react-icons/go";
import ItemCheck from "./ItemCheck";
import { MdLocationPin } from "react-icons/md";
import {
  Card,
  CardBody,
  Input,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Textarea,
  Select,
  Option,
} from '@material-tailwind/react'
import Transfer from "./page/Transfer";
import COD from "./page/COD";
import Qris from "./page/Qris";
// import Transfer from "./page/Transfer";
// import COD from "./page/COD";

const Payment = () => {
  const products = useSelector((state) => state.orebiReducer.products);
  const [totalAmt, setTotalAmt] = useState("");
  const [, setPajak] = useState("");
  const [pilihKurir,] = useState(10);

  const [editable, setEditable] = useState(false);
  const [name, setName] = useState("Prawira");
  const [phone, setPhone] = useState("+62) 82278567894");
  const [address, setAddress] = useState(
    "Gg. Ontoseno No.96 Jaranan Banguntapan (Kos Laki 97A), KAB, Bantul Banguntapan,Yogyakarta"
  );

  const handleEditClick = () => {
    setEditable(true);
  };

  const handleSaveClick = () => {
    setEditable(false);
    // Lakukan sesuatu dengan data yang telah diubah
  };

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
  const [type, setType] = React.useState("card");
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Payment Checkout" />
      <Card
        shadow={false}>
        <CardBody>
          <div className="mb-2 text-primeColor text-lg font-bold border-b-[0px] flex items-center justify-start gap-2 pb-1 w-full">
            <span>
              <MdLocationPin />
            </span>
            Alamat Pengiriman
          </div>
          <div className="flex flex-col items-center text-primeColor text-md font-titleFont">
            <div className="w-full">
              {editable ? (
                <Input
                  variant="static"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  label="Nama"
                />
              ) : (
                name
              )}
            </div>
            <div className="mt-4 w-full">
              {editable ? (
                <Input
                  variant="static"
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  label="Nomor Handphone"
                />
              ) : (
                phone
              )}
            </div>
            <div className="mt-4 w-full">
              {editable ? (
                <Textarea
                  variant="static"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  label="Alamat"
                />
              ) : (
                address
              )}
            </div>
            <div className="mt-4 w-full">
              {editable ? (
                <button
                  className="w-full rounded-md mb-2 h-10 bg-primeColor text-white text-lg hover:bg-black duration-300"
                  onClick={handleSaveClick}
                >
                  Simpan
                </button>
              ) : (
                <button
                  className="w-full rounded-md mb-2 h-10 bg-primeColor text-white text-lg hover:bg-black duration-300"
                  onClick={handleEditClick}
                >
                  Ubah
                </button>
              )}
            </div>
          </div>
        </CardBody>
      </Card>
      {/* <div className="pb-10"> */}
      <div className="pb-20">
        <p className="text-lg font-bold">Product Yang Dibeli</p>

        <table className="mt-5  mt-2 divide-y-2 divide-gray-400/25 rounded-lg h-full bg-[#F5F7F7] text-primeColor lgl:grid auto-rows-auto grid-row-1 grid-flow-row gap-4 px-6 text-lg font-titleFont font-semibold">
          <thead className="border-collapse border w-full">
            <tr className="border-b grid grid-cols-12">
              <th className="p-4 col-span-3">Image</th>
              <th className="p-4 col-span-3">Product</th>
              <th className="p-4 col-span-3">Quantity</th>
              <th className="p-4 col-span-3">Sub Total</th>
            </tr>
          </thead>
          <tbody className="overflow-y-auto w-full max-h-80" >
            {products.map((item) => (
              <div key={item._id}>
                <ItemCheck item={item} />
              </div>
            ))}
          </tbody>
        </table>

        <div className="flex flex-col mdl:flex-row justify-between border py-4 px-4 items-center gap-2 mdl:gap-0">
          <div className="flex items-center gap-2 text-base text-[#767676] relative">
            <label htmlFor="pilih-kurir" className="text-lg font-semibold" style={{ minWidth: '100px' }}>Pilih Kurir :</label>
            <Select
              label="Pengiriman"
            // id="pilih-kurir"
            // value={pilihKurir}
            // onChange={(e) => setPilihKurir(parseFloat(e.target.value))}
            // className="w-32 md:w-52 border-[1px] border-gray-200 py-1 px-4 cursor-pointer text-primeColor text-base block dark:placeholder-gray-400 appearance-none focus-within:outline-none focus-visible:border-primeColor"
            >
              <Option value={10}>Kurir</Option>
              <Option value={0}>Ambil Sendiri</Option>
              {/* <option value={20}>Express</option> */}
            </Select>
            {/* <span className="absolute text-sm right-2 md:right-4 top-2.5">
              <GoTriangleDown />
            </span> */}
          </div>
          <p className="text-lg font-semibold"><p className="flex items-center justify-between border-[0px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
            ${pilihKurir}
            {/* <span className="font-semibold tracking-wide font-titleFont">
                    
                  </span> */}
          </p></p>
        </div>
        <div className="w-full flex flex-col space-y-4">
          <Card className="w-full max-w-full">
            <CardBody>
              <Tabs value={type}>
                <TabsHeader className="relative z-0 flex space-x-4 overflow-x-auto">
                  <Tab value="transfer" onClick={() => setType("transfer")}>
                    Transfer
                  </Tab>
                  <Tab value="COD" onClick={() => setType("COD")}>
                    COD
                  </Tab>
                  <Tab value="Qris" onClick={() => setType("Qris")}>
                    Qris
                  </Tab>
                </TabsHeader>
                <TabsBody
                  className="flex flex-col"
                  animate={{
                    initial: {
                      x: type === "card" ? 250 : -250,
                    },
                    mount: {
                      x: 0,
                    },
                    unmount: {
                      x: type === "card" ? 250 : -250,
                    },
                  }}
                >
                  <TabPanel value="transfer" className="p-0 flex-1">
                    <div className="w-full overflow-y-auto divide-y-2 divide-gray-400/25 rounded-lg bg-[#F5F7F7] text-primeColor">
                      <div className="p-6">
                        <Transfer />
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel value="COD" className="p-0 flex-1">
                    <div className="w-full overflow-y-auto divide-y-2 divide-gray-400/25 rounded-lg bg-[#F5F7F7] text-primeColor">
                      <div className="p-6">
                        <COD />
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel value="Qris" className="p-0 flex-1">
                    <div className="w-full overflow-y-auto divide-y-2 divide-gray-400/25 rounded-lg bg-[#F5F7F7] text-primeColor">
                      <div className="p-6">
                        <Qris />
                      </div>
                    </div>
                  </TabPanel>
                </TabsBody>
              </Tabs>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Payment;
