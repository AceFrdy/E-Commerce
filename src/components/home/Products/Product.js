import React, { useState } from "react";
import { GiReturnArrow } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLabelImportant } from "react-icons/md";
import Image from "../../designLayouts/Image";
import Badge from "./Badge";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, addToWishlist, } from "../../../redux/orebiSlice";
import {
  Dialog,
  DialogBody,
} from "@material-tailwind/react";
// import { products } from "../Products/data/Product";
import ProductComparison from "./component/ProductComparison"
import WishlistIcon from "../../../pages/Wishlist/WishlistIcon";
// import { paginationItems } from "../../../constants/index";

const Product = (props) => {
  // const [productDat
  const [open, setOpen] = React.useState(false);

  // const handleCategoryChange = (event) => {
  //   // logika penanganan perubahan kategori
  // };
  const handleOpen = () => setOpen(!open);

  const dispatch = useDispatch();
  const _id = props.productName;
  const idString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("");
  };
  const rootId = idString(_id);

  const navigate = useNavigate();
  const productItem = props;
  const handleProductDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: productItem,
      },
    });
  };

  const [addedToWishlist, setAddedToWishlist] = useState(false);
  const handleAddToWishlist = () => {
    dispatch(
      addToWishlist({
        _id: props._id,
        name: props.productName,
        quantity: 1,
        image: props.img,
        badge: props.badge,
        price: props.price,
        colors: props.color,
      })
    );
    setAddedToWishlist(true); // Set addedToWishlist to true when added
  };
  return (
    <div >
      <Dialog className="w-full h-[90%] rounded-lg overflow-auto touch-auto" open={open} size="xl" handler={handleOpen}>
        <DialogBody>
          <ProductComparison />
        </DialogBody>
      </Dialog>
      <div className="w-full relative group">
        <div className="max-w-80 max-h-80 relative overflow-y-hidden ">
          <div onClick={handleProductDetails}>
            <Image className="w-full h-full" imgSrc={props.img} />
          </div>
          <div className="absolute top-6 left-8">
            {props.badge && <Badge text="New" />}
          </div>
          <div className="w-full h-32 absolute bg-white -bottom-[130px] group-hover:bottom-0 duration-700">
            <ul className="w-full h-full flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-l border-r">
              <li onClick={handleOpen} className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
                Compare
                <span>
                  <GiReturnArrow />
                </span>
              </li>
              <li
                onClick={handleProductDetails}
                className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
              >
                View Details
                <span className="text-lg">
                  <MdOutlineLabelImportant />
                </span>
              </li>
              <li className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
                Add to Wish List
                {!addedToWishlist ? ( // Condition to check if not added to wishlist
                  <span>
                    <WishlistIcon
                      onClick={handleAddToWishlist} // Handle click to add to wishlist
                      className="absolute left-auto right-3 text-[#767676] hover:text-primeColor hover:border-b-primeColor items-center justify-end gap-1 hover:cursor-pointer pb-1 duration-300 w-8 h-8"
                    />
                  </span>
                ) : (
                  // Show a message or icon indicating it's added to wishlist
                  <span>Added to Wishlist</span>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-80 py-6 flex flex-col gap-1 border-[1px] border-t-0 px-4">
          <div className="justify-between font-titleFont">
            <p className="text-[#767676] text-[14px]">${props.price}</p>
            <h2 className="flex text-lg text-primeColor font-bold">
              {props.productName}
              <FaShoppingCart
                onClick={() =>
                  dispatch(
                    addToCart({
                      _id: props._id,
                      name: props.productName,
                      quantity: 1,
                      image: props.img,
                      badge: props.badge,
                      price: props.price,
                      colors: props.color,
                    })
                  )
                }
                className="absolute left-auto right-3 text-[#767676] hover:text-primeColor hover:border-b-primeColor items-center justify-end gap-1 hover:cursor-pointer pb-1 duration-300 w-8 h-8" />

            </h2>

          </div>
          <div>
            {/* <p className="text-[#767676] text-[14px]">{props.color}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
