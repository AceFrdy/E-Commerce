import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import {
  saleImgOne,
  saleImgTwo,
  saleImgThree,
} from "../../../assets/images/index";
import Image from "../../designLayouts/Image";
// import axios from "axios";
import Api from "../../../api";

const Sale = () => {
  const [sales_content, setSales ] = useState([]);

  const fetchSales = async () => {
    await Api.get('/web/heroes')
          .then((response) => {
              //set data to state
              setSales(response.data.data.resource.data);
              console.log("data photo : ",response.data.data.resource.data[0].photos[0].photo);
          });
  }
  useEffect(() => {
  
    // Panggil fungsi untuk mengambil produk saat komponen dimuat
    fetchSales();
  }, []);
  return (
    <div className="py-20 flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-10">
      <div className="w-full md:w-2/3 lg:w-1/2 flex">
        <Link to="/shop">
          <Image className="h-full w-full object-cover" imgSrc={saleImgOne} />
        </Link>
      </div>
      <div className="w-full md:w-2/3 lg:w-1/2 h-auto flex flex-col gap-4 lg:gap-10 ">
        <div className="h-1/2 w-full">
          <Link to="/shop">
            <Image className="h-full w-full object-cover" imgSrc={saleImgTwo} />
          </Link>
        </div>
        <div className="h-1/2 w-full">
          <Link to="/shop">
            <Image
              className="h-full w-full object-cover"
              imgSrc={saleImgThree}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sale;
