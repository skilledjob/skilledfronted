/* eslint-disable @next/next/no-async-client-component */
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

const HomeSlider = async() => {
  const bannerData=await getAllBanner()
  console.log("response",bannerData)
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
      {bannerData?.map((banner, index) => (
  <SwiperSlide key={index}>
    <div className="w-full h-[470px]">
      {banner?.image ? (
        <Image
          className="h-full w-full object-cover"
          src={banner?.image}
          alt="slider image"
          width={500}
          height={200}
        />
      ) : (
        <p>No image available</p>
      )}
    </div>
  </SwiperSlide>
))}
      
      
    </Swiper>
  );
};

export default HomeSlider;
