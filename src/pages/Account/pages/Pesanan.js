import React, { useEffect, useState } from 'react'
// import { useCountries } from 'use-react-countries'
import { useSelector } from 'react-redux'
import { ProfileSideNav } from '../ProfileSideNav'
import Breadcrumbs from '../../../components/pageProps/Breadcrumbs'
// import NavPes from './NavPes'
// import { Outlet } from 'react-router-dom'
import { ItemCardProf } from './components/ItemCardProf'
// import responsive from './components/'
import {
  Card,
  CardHeader,
  CardBody,
  // Input,
  // Button,
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react'
// import {
//   BanknotesIcon,
//   CreditCardIcon,
//   LockClosedIcon,
// } from "@heroicons/react/24/solid";
import { FaWallet, FaHandHoldingUsd, FaTruck } from 'react-icons/fa'
import { LuPackageOpen } from 'react-icons/lu'
import { BsCheckCircleFill } from 'react-icons/bs'
import { ItemCardToko } from './components/ItemCardToko'
import { ItemCardDikemas } from './components/ItemCardDikemas'
import { ItemCardSelesai } from './components/ItemCardSelesai'
import Pengiriman from './components/Pengiriman'
import Footer from "../../../components/home/Footer/Footer"
import FooterBottom from "../../../components/home/Footer/FooterBottom"
import HeaderProf from '../../../components/home/Header/HeaderProf'
export const Pesanan = () => {
  const products = useSelector((state) => state.orebiReducer.products);
  const [totalAmt, setTotalAmt] = useState("");
  const [, setPajak] = useState("");
  // const [selectedCoupon, setSelectedCoupon] = useState("");
  // console.log(qris);

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
    <div className="flex container flex-row  h-screen w-screen grid w-full">
      {/* <Header /> */}
      <div>
        {/* <Heading heading="Profile" /> */}
        <div>
          <div className="max-w-container mx-auto px-4">
            {/* ================= Products Start here =================== */}
            <div className="w-full h-full flex pb-20 gap-10">
              <div className="lg:w-1/5 md:w-1/4 hidden md:inline-flex h-full">
                <div className="flex flex-col space-y-4">
                  <Breadcrumbs title="Profile" />
                  <ProfileSideNav />
                </div>
              </div>
              <div className="w-full lg:w-3/4 md:w-5/6 h-full flex flex-col md:gap-10">
                <div><HeaderProf />
                <h1 className="text-xl font-semibold flex items-center mb-2">Pesanan Saya</h1>
                  <div className="grid gap-4 grid-cols-1">
                    <div className="flex-col xl:flex-row flex items-center gap-4">
                      <div className="w-full h-12 border-400 bg-white px-4 text-primeColor text-lg">
                        <Card className="w-full">
                          <CardHeader
                            color="gray"
                            floated={false}
                            shadow={false}
                            className="m-0 grid place-items-center px-4 py-2 text-center"
                          >
                            <div className=" mb-1 h-5 text-white">
                              {type === "belum" ? (
                                <FaWallet className="w-6 h-6" />
                              ) : type === "diambil" ? (
                                <FaHandHoldingUsd className="w-6 h-6" />
                              ) : type === "dikemas" ? (
                                <LuPackageOpen className="w-6 h-6"/>
                              ) : type === "dikirim" ? (
                                <FaTruck className='w-7 h-6' />
                              ) : type === "selesai" ? (
                                <BsCheckCircleFill className='w-6 h-6' />
                              ) : (
                                <FaWallet className="w-6 h-6" />
                              )}
                            </div>
                            <Typography variant="h5" color="white">
                              Pesanan Saya
                            </Typography>
                          </CardHeader>
                          <CardBody >
                            <Tabs value={type}>
                              <TabsHeader className="relative z-0 ">
                                <Tab value="belum" onClick={() => setType("belum")}>
                                  Belum Bayar
                                </Tab>
                                <Tab value="diambil" onClick={() => setType("diambil")}>
                                  Diambil Ditoko
                                </Tab>
                                <Tab value="dikemas" onClick={() => setType("dikemas")}>
                                  Dikemas
                                </Tab>
                                <Tab value="dikirim" onClick={() => setType("dikirim")}>
                                  Dikirim
                                </Tab>
                                <Tab value="selesai" onClick={() => setType("selesai")}>
                                  Pesanan Selesai
                                </Tab>
                              </TabsHeader>
                              <TabsBody
                                className="w-[100%] overflow-y-auto max-h-[80vh] lg:max-h-80 flex-grid-auto "
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
                                <TabPanel value="belum" className="p-0">
                                  <div className="w-[100%] overflow-y-auto max-h-80 ">
                                    {products.map((item) => (
                                      <div key={item._id}>
                                        <ItemCardProf item={item} />
                                      </div>
                                    ))}
                                  </div>
                                </TabPanel>
                                <TabPanel value="diambil" className="p-0">
                                  <div className="w-full overflow-y-auto max-h-80 ">
                                    {products.map((item) => (
                                      <div key={item._id}>
                                        <ItemCardToko item={item} />
                                      </div>
                                    ))}
                                  </div>
                                </TabPanel>
                                <TabPanel value="dikemas" className="p-0">
                                  
                                  <div className="w-full overflow-y-auto max-h-80">
                                    {products.map((item) => (
                                      <div key={item._id}>
                                        <ItemCardDikemas item={item} />
                                      </div>
                                    ))}
                                  </div>
                                </TabPanel>
                                <TabPanel value="dikirim" className="p-0">
                                  <div className="w-[100%] overflow-y-auto max-h-80 ">
                                    <Pengiriman />
                                  </div>
                                </TabPanel>
                                <TabPanel value="selesai" className="p-0">
                                  <div className="w-[100%] overflow-y-auto max-h-80 ">
                                    {products.map((item) => (
                                      <div key={item._id}>
                                        <ItemCardSelesai item={item} />
                                      </div>
                                    ))}
                                  </div>
                                </TabPanel>
                              </TabsBody>
                            </Tabs>
                          </CardBody>
                        </Card>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <FooterBottom />
    </div>
  )
};
