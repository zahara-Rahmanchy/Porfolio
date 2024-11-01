/* eslint-disable react/prop-types */
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

import {Pagination, Navigation} from "swiper/modules";

const CarousalComponent = ({images}) => {
  return (
    <>
      <style>
        {`
          .mySwiper {
            width: 100%;
            height: 500px; /* Set the height of the carousel */
          }
          .swiper-slide {
            display: flex;
            justify-content: center; /* Center the image horizontally */
            align-items: flex-start; /* Center the image vertically */
          }
          .swiper-slide img {
            max-width: 100%; 
            max-height: 100%; 
            object-fit: cover; 
          }
          .swiper-button-next,
          .swiper-button-prev {
            color: black; 
             width: 30px; /* Set the button width */
            height: 5px; /* Set the button height */
            fontSize:"10px";
          }
          /* Change hover color for navigation buttons */
          .swiper-button-next:hover,
          .swiper-button-prev:hover {
            color: blue; /* Change to your desired hover color */
          }

          /* Custom styles for pagination */
          .swiper-pagination-bullet {
            backgroundColor: blue;
            fontSize:"20px";
          }
         
          .swiper-pagination-bullet-active {
            background: blue; 
          }
        `}
      </style>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {/* Map over the images array to create slides */}
        {images !== undefined &&
          images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="h-max w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
                <img
                  src={image}
                  alt={`Slide image ${index + 1}`}
                  border="0"
                  className="w-full object-cover object-top rounded-lg"
                ></img>
              </div>
              {/* <img src={image} alt={`Slide ${index + 1}`} /> */}
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default CarousalComponent;
