import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "./ProductCategory";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";
// import { Link } from "react-router-dom";
import {
  Category1,
  Category2,
  Category3,
  Category4,
  Category5,
  Category6,
} from "../../../assets/images/index";
// import { CategoryData } from "../../../constants";

const Category = () => {
  const categories = [
    {
      _id: "1",
      img: Category1,
      productName: "Laptops",
      price: "80.00",
      color: "Mixed",
      badge: true,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    },
    {
      _id: "2",
      img: Category2,
      productName: "Kameras",
      price: "80.00",
      color: "Mixed",
      badge: true,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    },
    {
      _id: "3",
      img: Category3,
      productName: "Handphones",
      price: "80.00",
      color: "Mixed",
      badge: true,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    },
    {
      _id: "4",
      img: Category4,
      productName: "Accessories",
      price: "80.00",
      color: "Mixed",
      badge: true,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    },
    {
      _id: "5",
      img: Category5,
      productName: "Hardware",
      price: "80.00",
      color: "Mixed",
      badge: true,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    },
    {
      _id: "6",
      img: Category6,
      productName: "HeadPhones",
      price: "80.00",
      color: "Mixed",
      badge: true,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    },
    // Add other categories here similarly
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="">
      <Heading heading="Category" />
      <div className="relative flex items-center w-full">
        <Slider {...settings} className="w-full h-full scroll whitespace-nowrap scroll-smooth">
          {categories.map((category) => (
            <div key={category._id} className="px-2 relative flex items-center w-[1440px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300">
              {/* <Link to={`/category/${category._id}`}> */}
                <Product
                  _id={category._id}
                  img={category.img}
                  productName={category.productName}
                />
              {/* </Link> */}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Category;
