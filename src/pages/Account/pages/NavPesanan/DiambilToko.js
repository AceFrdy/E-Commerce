import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { ProfileSideNav } from '../../ProfileSideNav'
import Breadcrumbs from '../../../../components/pageProps/Breadcrumbs'
import NavPes from '../NavPes'
import { Outlet } from 'react-router-dom'
import { Card, CardBody } from '@material-tailwind/react'
import { ItemCardToko } from '../components/ItemCardToko'
export const DiambilToko = () => {
  const products = useSelector((state) => state.diamoReducer.products);
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
  return (
    <div className="flex flex-row overflow-hidden h-screen w-screen grid w-full">
      {/* <Header /> */}
      <div>
        {/* <Heading heading="Profile" /> */}
        <div>
          <div className="max-w-container mx-auto px-4">
            
            {/* ================= Products Start here =================== */}
            <div className="w-full h-full flex pb-20 gap-10">
              <div className="w-[20%] lgl:w-[25%] hidden mdl:inline-flex h-full">
                <div className="flex flex-col space-y-4">
                <Breadcrumbs title="Profile" />
                  <ProfileSideNav />
                </div>
              </div>
              <div className="w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-10">
                <div>
                  <h1 className="text-xl font-semibold flex items-center mb-2">Pesanan Saya</h1>
                  <div className="grid gap-4 grid-cols-1">
                    <div className="flex-col xl:flex-row flex items-center gap-4">
                      <div className="w-full h-12 border-400 bg-white px-4 text-primeColor text-lg">
                        <Card>
                          <CardBody>
                            <NavPes />
                            <h1 className='font-semibold text-lg mt-2 mb-2 '>Pesanan Yang Diambil Di Toko</h1>
                            <div className="w-[100%] mt-2 divide-y-2 divide-gray-400/25 rounded-lg h-full bg-[#F5F7F7] text-primeColor hidden lgl:grid auto-rows-auto grid-row-1 grid-flow-row gap-4 px-6 text-lg font-titleFont font-semibold">
                              {products.map((item) => (
                                <div key={item._id}>
                                  <ItemCardToko item={item} />
                                </div>
                              ))}
                            </div>
                          </CardBody>
                        </Card>
                        <Outlet />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DiambilToko;