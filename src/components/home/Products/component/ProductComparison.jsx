import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../redux/orebiSlice";
import { paginationItems } from "../../../../constants";
import { FaShoppingCart, FaCheck } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";

const ProductComparison = () => {
  const dispatch = useDispatch();
  const products = paginationItems;

  const [selectedProduct1, setSelectedProduct1] = useState(
    products[0]?._id ? String(products[0]._id) : ""
  );
  const [selectedProduct2, setSelectedProduct2] = useState(
    products[3]?._id ? String(products[3]._id) : ""
  );

  const [product1, setProduct1] = useState(products[0] || null);
  const [product2, setProduct2] = useState(products[3] || null);
  const [addedCart1, setAddedCart1] = useState(false);
  const [addedCart2, setAddedCart2] = useState(false);

  useEffect(() => {
    if (selectedProduct1) {
      const found = products.find(
        (item) => String(item._id) === String(selectedProduct1)
      );
      if (found) setProduct1(found);
    }
  }, [selectedProduct1, products]);

  useEffect(() => {
    if (selectedProduct2) {
      const found = products.find(
        (item) => String(item._id) === String(selectedProduct2)
      );
      if (found) setProduct2(found);
    }
  }, [selectedProduct2, products]);

  const handleAddToCart = (prod, setAddedState) => {
    if (!prod) return;
    dispatch(
      addToCart({
        _id: prod._id,
        name: prod.productName,
        quantity: 1,
        image: prod.img,
        badge: prod.badge,
        price: prod.price,
        colors: prod.color,
      })
    );
    setAddedState(true);
    setTimeout(() => setAddedState(false), 2000);
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-6 px-4 font-bodyFont">
      {/* Title & Header Bar */}
      <div className="bg-primeColor text-white py-4 px-6 rounded-t-xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h2 className="text-xl md:text-2xl font-bold font-titleFont">
            Product Comparison
          </h2>
          <p className="text-xs md:text-sm text-gray-300">
            Compare details & specifications side-by-side
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          {/* Select 1 */}
          <div className="relative flex-1 sm:flex-initial">
            <select
              value={selectedProduct1}
              onChange={(e) => setSelectedProduct1(e.target.value)}
              className="w-full sm:w-56 bg-white text-primeColor text-sm font-semibold py-2 px-3 pr-8 rounded-lg appearance-none cursor-pointer focus:outline-none shadow-sm border border-gray-300"
            >
              <option value="">Select Product 1</option>
              {products
                .filter((item) => String(item._id) !== String(selectedProduct2))
                .map((item) => (
                  <option key={item._id} value={item._id}>
                    {item.productName}
                  </option>
                ))}
            </select>
            <GoTriangleDown className="absolute right-2.5 top-3 text-gray-600 pointer-events-none text-xs" />
          </div>

          {/* Select 2 */}
          <div className="relative flex-1 sm:flex-initial">
            <select
              value={selectedProduct2}
              onChange={(e) => setSelectedProduct2(e.target.value)}
              className="w-full sm:w-56 bg-white text-primeColor text-sm font-semibold py-2 px-3 pr-8 rounded-lg appearance-none cursor-pointer focus:outline-none shadow-sm border border-gray-300"
            >
              <option value="">Select Product 2</option>
              {products
                .filter((item) => String(item._id) !== String(selectedProduct1))
                .map((item) => (
                  <option key={item._id} value={item._id}>
                    {item.productName}
                  </option>
                ))}
            </select>
            <GoTriangleDown className="absolute right-2.5 top-3 text-gray-600 pointer-events-none text-xs" />
          </div>
        </div>
      </div>

      {/* Main Cards Area */}
      <div className="bg-white border border-t-0 border-gray-200 rounded-b-xl shadow-md p-6">
        <div className="grid grid-cols-1 md:grid-cols-11 gap-4 items-center mb-8">
          {/* Product 1 Card */}
          <div className="md:col-span-5 bg-[#F5F5F3] p-4 rounded-xl border border-gray-200 flex flex-col items-center text-center group">
            <div className="w-full h-56 flex items-center justify-center overflow-hidden rounded-lg bg-white mb-4 p-2 shadow-inner">
              {product1?.img ? (
                <img
                  src={product1.img}
                  alt={product1.productName}
                  className="h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <span className="text-gray-400 text-sm">No Image</span>
              )}
            </div>
            <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1">
              {product1?.category || "Product 1"}
            </span>
            <h3 className="text-lg font-bold text-primeColor font-titleFont mb-1">
              {product1?.productName || "Select a Product"}
            </h3>
            <p className="text-xl font-extrabold text-primeColor mb-4">
              {product1?.price ? `$${product1.price}` : "-"}
            </p>
            {product1 && (
              <button
                onClick={() => handleAddToCart(product1, setAddedCart1)}
                className="w-full py-2.5 px-4 bg-primeColor text-white text-sm font-semibold rounded-lg hover:bg-black transition-colors duration-300 flex items-center justify-center gap-2"
              >
                {addedCart1 ? <FaCheck /> : <FaShoppingCart />}
                {addedCart1 ? "Added to Cart" : "Add to Cart"}
              </button>
            )}
          </div>

          {/* VS Divider */}
          <div className="md:col-span-1 flex justify-center items-center py-2">
            <div className="w-12 h-12 rounded-full bg-primeColor text-white font-extrabold flex items-center justify-center text-lg shadow-lg border-2 border-white">
              VS
            </div>
          </div>

          {/* Product 2 Card */}
          <div className="md:col-span-5 bg-[#F5F5F3] p-4 rounded-xl border border-gray-200 flex flex-col items-center text-center group">
            <div className="w-full h-56 flex items-center justify-center overflow-hidden rounded-lg bg-white mb-4 p-2 shadow-inner">
              {product2?.img ? (
                <img
                  src={product2.img}
                  alt={product2.productName}
                  className="h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <span className="text-gray-400 text-sm">No Image</span>
              )}
            </div>
            <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1">
              {product2?.category || "Product 2"}
            </span>
            <h3 className="text-lg font-bold text-primeColor font-titleFont mb-1">
              {product2?.productName || "Select a Product"}
            </h3>
            <p className="text-xl font-extrabold text-primeColor mb-4">
              {product2?.price ? `$${product2.price}` : "-"}
            </p>
            {product2 && (
              <button
                onClick={() => handleAddToCart(product2, setAddedCart2)}
                className="w-full py-2.5 px-4 bg-primeColor text-white text-sm font-semibold rounded-lg hover:bg-black transition-colors duration-300 flex items-center justify-center gap-2"
              >
                {addedCart2 ? <FaCheck /> : <FaShoppingCart />}
                {addedCart2 ? "Added to Cart" : "Add to Cart"}
              </button>
            )}
          </div>
        </div>

        {/* Detailed Specs Table */}
        <div className="overflow-x-auto border border-gray-200 rounded-lg">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100 text-primeColor font-titleFont border-b border-gray-200">
                <th className="py-3 px-4 font-bold w-1/4">Specification</th>
                <th className="py-3 px-4 font-bold w-3/8">
                  {product1?.productName || "Product 1"}
                </th>
                <th className="py-3 px-4 font-bold w-3/8">
                  {product2?.productName || "Product 2"}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {/* Price */}
              <tr>
                <td className="py-3 px-4 font-semibold text-gray-600 bg-gray-50">
                  Price
                </td>
                <td className="py-3 px-4 font-bold text-primeColor">
                  {product1?.price ? `$${product1.price}` : "-"}
                </td>
                <td className="py-3 px-4 font-bold text-primeColor">
                  {product2?.price ? `$${product2.price}` : "-"}
                </td>
              </tr>

              {/* Category */}
              <tr>
                <td className="py-3 px-4 font-semibold text-gray-600 bg-gray-50">
                  Category
                </td>
                <td className="py-3 px-4 text-gray-700">
                  {product1?.category || "General"}
                </td>
                <td className="py-3 px-4 text-gray-700">
                  {product2?.category || "General"}
                </td>
              </tr>

              {/* Color */}
              <tr>
                <td className="py-3 px-4 font-semibold text-gray-600 bg-gray-50">
                  Color Options
                </td>
                <td className="py-3 px-4 text-gray-700">
                  {product1?.color || "Standard"}
                </td>
                <td className="py-3 px-4 text-gray-700">
                  {product2?.color || "Standard"}
                </td>
              </tr>

              {/* Badge / Availability */}
              <tr>
                <td className="py-3 px-4 font-semibold text-gray-600 bg-gray-50">
                  Badge / Tag
                </td>
                <td className="py-3 px-4">
                  {product1?.badge ? (
                    <span className="inline-block px-2.5 py-0.5 text-xs font-semibold bg-black text-white rounded">
                      New Arrival
                    </span>
                  ) : (
                    <span className="text-gray-500">Regular</span>
                  )}
                </td>
                <td className="py-3 px-4">
                  {product2?.badge ? (
                    <span className="inline-block px-2.5 py-0.5 text-xs font-semibold bg-black text-white rounded">
                      New Arrival
                    </span>
                  ) : (
                    <span className="text-gray-500">Regular</span>
                  )}
                </td>
              </tr>

              {/* Description */}
              <tr>
                <td className="py-3 px-4 font-semibold text-gray-600 bg-gray-50">
                  Description
                </td>
                <td className="py-3 px-4 text-gray-600 leading-relaxed text-xs">
                  {product1?.des || "-"}
                </td>
                <td className="py-3 px-4 text-gray-600 leading-relaxed text-xs">
                  {product2?.des || "-"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductComparison;
