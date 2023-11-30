import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import {
  bannerImgOne,
  bannerImgTwo,
  bannerImgThree,
} from "../../assets/images";
import Image from "../designLayouts/Image";
import Api from "../../api";

const Banner = () => {
  const [dotActive, setDocActive] = useState(0);
  const [banner_content, setBanner ] = useState([]);

  const fetchBanner = async () => {
    await Api.get('/web/heroes')
          .then((response) => {
              //set data to state
              setBanner(response.data.data.resource.data);
              console.log("data photo : ",response.data.data.resource.data[0].photos[0].photo);
          });
  }
  useEffect(() => {
  
    // Panggil fungsi untuk mengambil produk saat komponen dimuat
    fetchBanner();
  }, []);

  // useEffect(() => {
  //   console.log("data: ", banner_content);
  // }, [banner_content]);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "7%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                color: "#262626",
                borderRight: "3px #262626 solid",
                padding: "8px 0",
                cursor: "pointer",
              }
            : {
                width: "30px",
                color: "transparent",
                borderRight: "3px white solid",
                padding: "8px 0",
                cursor: "pointer",
              }
        }
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "2%",
                transform: "translateY(-50%)",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: "25px",
                      color: "#262626",
                      borderRight: "3px #262626 solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
                  : {
                      width: "25px",
                      color: "transparent",
                      borderRight: "3px white solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };
  return (
    <div className="w-full bg-white">
      <Slider {...settings}>
        {banner_content.map((image) => (
          <Link to="/offer" key={image.id}>
            <div>
              {image.photos.map((photo, index) =>(
                <Image
                key={index} 
                _id={image.id}
                imgSrc={photo.photo} />
              ))}
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
