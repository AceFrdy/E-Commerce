import React, { useState, useEffect } from "react";
// import axios from "axios";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
// import {
//   newArrOne,
//   newArrTwo,
//   newArrThree,
//   newArrFour,
// } from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";
import Api from "../../../api"


const NewArrivals = () => {
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

  const [newContents, setNewContents] = useState([]);

  const fetchContent = async () => {
      await Api.get('/web/contents')
            .then((response) => {
                //set data to state
                setNewContents(response.data.data.resource.data);
                console.log("data content: ", response.data.data.resource.data);
            });
    }

  
  useEffect(() => {
  
    // Panggil fungsi untuk mengambil produk saat komponen dimuat
    fetchContent();
  }, []);

  const displayedContents = newContents.slice(-10);

  return (
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
        {displayedContents.map((content) => {
          // Pilih salah satu foto dari array 'photos'
          const selectedPhoto = content.photos.length > 0 ? content.photos[0].photo : '';
          return (
            <div className="px-2" key={content.id}>
              <Product
                _id={content.id}
                img={selectedPhoto} // Gunakan properti yang sesuai dari API
                productName={content.content_title} // Gantilah dengan properti yang sesuai dari API
                price={content.price} // Gantilah dengan properti yang sesuai dari API
                color={content.color} // Gantilah dengan properti yang sesuai dari API
                badge={true} // Anda mungkin ingin menyesuaikan ini berdasarkan logika bisnis
                des={content.description} // Gantilah dengan properti yang sesuai dari API
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default NewArrivals;