/* eslint-disable @next/next/no-async-client-component */
"use client";
import "@/app/(website)/home/components/HomeSlider/homeSlider.css";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// This is Home Page Slider Component. Here we use SwiperJs to make slider component

const HomeSlider = async ({ bannerData }) => {
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
