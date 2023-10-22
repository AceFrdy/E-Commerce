import React from "react";
import Slider from "react-slick";
import Heading from "./Heading";
import Product from "./ProductCategory";
import {
  Category1,
  Category2,
  Category3,
  Category4,
  Category5,
  Category6
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const Category = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
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
        <div className="px-2 relative flex items-center w-[1440px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300">
          <Product 
            _id="100001"
            img={Category1}
            productName="Laptops"
            price="80.00"
            color="Mixed"
            badge={true}
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
          />
        </div>
        <div className="px-2 relative flex items-center w-[1440px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300">
          <Product
            _id="100002"
            img={Category2}
            productName="Cameras"
            price="250.00"
            color="Black"
            badge={true}
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
          />
        </div>
        <div className=" px-2 relative flex items-center w-[1440px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300">
          <Product
            _id="100003"
            img={Category3}
            productName="HandPhones"
            price="30.00"
            color="Black"
            badge={true}
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
          />
        </div>
        <div className="px-2 relative flex items-center w-[1440px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300">
          <Product 
            _id="100004"
            img={Category4}
            productName="Accessories"
            price="60.00"
            color="Mixed"
            badge={false}
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
          />
        </div>
        <div className="px-2 relative flex items-center w-[1440px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300">
          <Product
            _id="100005"
            img={Category5}
            productName="Hardisks"
            price="60.00"
            color="Mixed"
            badge={false}
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
          />
        </div>
        <div className="px-2 relative flex items-center w-[1440px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300">
          <Product
            _id="100006"
            img={Category6}
            productName="HeadPhones"
            price="60.00"
            color="Mixed"
            badge={false}
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
          />
          </div>
      </Slider>
      </div>
    </div>
  );
};

export default Category;
