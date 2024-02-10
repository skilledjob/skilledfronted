"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import Image from "next/image";
import "@/app/(website)/home/components/HomeSlider/homeSlider.css";
import Slides from "./slides";
import plumber from "@/public/assets/plumber.jpg";
import img1 from "@/public/assets/img1.jpg";
import img2 from "@/public/assets/img2.jpg";

// This is Home Page Slider Component. Here we use SwiperJs to make slider component

const HomeSlider = () => {
  // Swiper Slider component need fix
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper mt-20"
    >
      {/* <Slides/> */}
      <SwiperSlide>
        <div className="w-full h-[470px]">
          <Image
            className="h-full w-full object-cover"
            src={img1}
            alt="slider image"
            layout="fill"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-[470px]">
          <Image
            className="h-full object-cover"
            src={img2}
            alt="slider image"
            layout="fill"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-[470px]">
          <Image
            className="h-full object-cover"
            src={plumber}
            alt="slider image"
            layout="fill"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeSlider;
