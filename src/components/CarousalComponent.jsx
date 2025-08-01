/* eslint-disable react/prop-types */
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../App.css";
// import "./styles.css";

import {Pagination, Navigation} from "swiper/modules";

const CarousalComponent = ({images}) => {
  return (
    <>
      <style>
        {`
     
        `}
      </style>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {/* Map over the images array to create slides */}
        {images !== undefined &&
          images.map((image, index) => (
            <SwiperSlide key={index} className=" ">
              <div className="h-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
                <img
                  src={image}
                  alt={`Slide image ${index + 1}`}
                  border="0"
                  className="h-max w-full object-cover object-top rounded-lg"
                />
              </div>
              {/* <div className="h-max w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg"> */}
              {/* <img
                  src={image}
                  alt={`Slide image ${index + 1}`}
                  border="0"
                  className="w-full object-cover object-top rounded-lg"
                /> */}
              {/* </div> */}
              {/* <img src={image} alt={`Slide ${index + 1}`} /> */}
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default CarousalComponent;

// .mySwiper {
//   width: 100%;
//   height: 500px; /* Set the height of the carousel */
// }
// .swiper-slide {
//   display: flex;
//   justify-content: center; /* Center the image horizontally */
//   align-items: flex-start; /* Center the image vertically */
// }
//   .swiper-slide img {
// width: 100%; /* Ensures image fills the slide width */
// height: auto; /* Maintains aspect ratio without overflow */
// max-height: 100%; /* Prevents overflow in height */
// object-fit: cover;
// }
