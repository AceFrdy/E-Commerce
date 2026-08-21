import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Wishlist } from "./Wishlist";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { ProfileSideNav } from "../Account/ProfileSideNav";
import { deleteItem } from "../../redux/orebiSlice";
import {
  spfThree,
  spfTwo,
  spfFour,
  bestSellerOne,
} from "../../assets/images/index";

export function WishlistItem() {
  const dispatch = useDispatch();
  const reduxProducts = useSelector((state) => state.orebiReducer.products);

  const defaultWishlist = [
    {
      _id: "w101",
      name: "Headphones",
      price: "25.00",
      colors: "Mixed",
      image: spfThree,
      badge: true,
    },
    {
      _id: "w102",
      name: "Poco X5",
      price: "150.00",
      colors: "Black, Yellow, Blue",
      image: spfTwo,
      badge: true,
    },
    {
      _id: "w103",
      name: "ROG Zephyrus G14",
      price: "450.00",
      colors: "Silver",
      image: spfFour,
      badge: true,
    },
    {
      _id: "w104",
      name: "GeForce GTX-1650",
      price: "320.00",
      colors: "Black",
      image: bestSellerOne,
      badge: true,
    },
  ];

  const [wishlistItems, setWishlistItems] = useState(
    reduxProducts && reduxProducts.length > 0 ? reduxProducts : defaultWishlist
  );

  const handleDeleteItem = (id) => {
    setWishlistItems(wishlistItems.filter((item) => item._id !== id));
    dispatch(deleteItem(id));
  };

  return (
    <div className="max-w-container mx-auto px-4 py-6">
      <Breadcrumbs title="Wishlist" />
      <div className="w-full flex flex-col md:flex-row pb-20 gap-8">
        <div className="w-full md:w-1/4">
          <ProfileSideNav />
        </div>
        <div className="w-full md:w-3/4">
          <div className="bg-white border border-gray-100 shadow-md rounded-xl p-6">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-gray-100">
              <div>
                <h1 className="text-xl font-bold font-titleFont text-primeColor">
                  Wishlist Saya
                </h1>
                <p className="text-xs text-gray-500 mt-1">
                  Produk yang Anda simpan untuk dibeli nanti ({wishlistItems.length} item)
                </p>
              </div>
            </div>

            {wishlistItems.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {wishlistItems.map((item) => (
                  <Wishlist key={item._id} item={item} onDelete={handleDeleteItem} />
                ))}
              </div>
            ) : (
              <div className="py-16 text-center text-gray-400">
                <p className="text-base font-semibold mb-2">Wishlist Anda Kosong</p>
                <p className="text-xs text-gray-500">
                  Jelajahi katalog dan simpan produk favorit Anda di sini.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
