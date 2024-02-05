"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import Image from "next/image";

import '@/app/(website)/components/HomeSlider/homeSlider.css';
import Slides from "./slides";
import plumber from "@/public/assets/plumber.jpg";

const HomeSlider = () => {
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
        <div className="w-full h-[427.5px]">
          <Image
            className="h-full object-cover"
            src={plumber}
            alt="slider image"
            layout="fill"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-[427.5px]">
          <Image
            className="h-full object-cover"
            src={plumber}
            alt="slider image"
            layout="fill"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-[427.5px]">
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
