import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Breadcrumbs from "../../../pageProps/Breadcrumbs";
import Pagination from "../../../pageProps/shopPage/Pagination";
import ProductBanner from "../../../pageProps/shopPage/ProductBanner";
import ShopSideNav from "../../../pageProps/shopPage/ShopSideNav";

const CatAcc = () => {
  const { _id } = useParams();
  const location = useLocation();
  const [itemsPerPage, setItemsPerPage] = useState(12);

  const categoryName =
    location?.state?.item?.productName ||
    (_id ? _id.charAt(0).toUpperCase() + _id.slice(1) : "Category");

  const itemsPerPageFromBanner = (itemsPerPage) => {
    setItemsPerPage(itemsPerPage);
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title={categoryName} />
      {/* ================= Products Start here =================== */}
      <div className="w-full h-full flex pb-20 gap-10">
        <div className="w-[20%] lgl:w-[25%] hidden mdl:inline-flex h-full">
          <ShopSideNav />
        </div>
        <div className="w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-10">
          <ProductBanner itemsPerPageFromBanner={itemsPerPageFromBanner} />
          <Pagination itemsPerPage={itemsPerPage} category={categoryName} />
        </div>
      </div>
      {/* ================= Products End here ===================== */}
    </div>
  );
};

export default CatAcc;
