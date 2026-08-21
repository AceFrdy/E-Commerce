import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "./ProductCategory";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";
import {
  Category1,
  Category2,
  Category3,
  Category4,
  Category5,
  Category6,
} from "../../../assets/images/index";

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
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
    <div className="w-full pb-16">
      <Heading heading="Category" />
      <div className="relative w-full">
        <Slider {...settings}>
          {categories.map((category) => (
            <div key={category._id} className="px-2 cursor-pointer hover:scale-105 ease-in-out duration-300">
              <Product
                _id={category._id}
                img={category.img}
                productName={category.productName}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Category;
