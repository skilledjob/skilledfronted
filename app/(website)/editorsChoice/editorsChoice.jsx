"use client";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import plumber from "@/public/assets/plumber.jpg";
import "swiper/css";
import "swiper/css/navigation";

export default function EditorChoice() {
  return (
    <div className="w-full px-3 mx-auto container my-6">
      <h2 className="text-xl font-semibold text-white mb-2">Categories</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Link href="/discription" className="h-full text-white">
            <Image
              className="w-full object-cover h-full rounded-lg"
              src={plumber}
              alt=""
            />
            <div className="flex gap-3 items-center mt-1">
              <Image
                className="w-20 object-cover h-20 rounded-full"
                src={plumber}
                alt=""
              />
              <div>
                <h2 className="font-semibold text-lg">Title</h2>
                {/* <h2 className="font-semibold">User Name</h2> */}
                <p className="text-xs text-white/80 text-ellipsis">
                  {`Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Recusandae culpa quae non ab officiis voluptates similique ad
                  obcaecati? Suscipit, libero!`.length >= 80
                    ? `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Recusandae culpa quae non ab officiis voluptates similique ad
                  obcaecati? Suscipit, libero!`.slice(0, 80) + "..."
                    : `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Recusandae culpa quae non ab officiis voluptates similique ad
                  obcaecati? Suscipit, libero!`}
                </p>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
