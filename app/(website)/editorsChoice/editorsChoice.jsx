"use client";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import plumber from "@/public/assets/plumber.jpg";
import "swiper/css";
import "swiper/css/navigation";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

export default function EditorChoice() {
  const paragraph = `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
  Recusandae culpa quae non ab officiis voluptates similique ad
  obcaecati? Suscipit, libero!`;
  return (
    <div className="w-full mx-auto container mt-12">
      <h2 className="categoryTitle">Categories</h2>
      <div className="flex items-center group">
        <div className="text-white swiper-Prev-video-Btn opacity-0 group-hover:opacity-100 h-28 bg-white/10 rounded-lg flex items-center justify-center">
          <GoChevronLeft className="text-5xl cursor-pointer" />
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={{
            nextEl: ".swiper-Next-video-Btn",
            prevEl: ".swiper-Prev-video-Btn",
          }}
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
            <Link href="/discription" className="h-full min-w-full text-white">
              <Image
                className="w-full object-cover h-full rounded-lg"
                src={plumber}
                alt=""
              />
              <div className="flex gap-3 items-center mt-4">
                <Image
                  className="w-16 h-16 object-cover rounded-full"
                  src={plumber}
                  alt=""
                />
                <div>
                  <h2 className="font-semibold text-lg tracking-wider">Title</h2>
                  <p className="text-xs text-white/80 text-ellipsis">
                    {paragraph.length >= 80
                      ? paragraph.slice(0, 80) + "..."
                      : paragraph}
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/discription" className="h-full min-w-full text-white">
              <Image
                className="w-full object-cover h-full rounded-lg"
                src={plumber}
                alt=""
              />
              <div className="flex gap-3 items-center mt-4">
                <Image
                  className="w-16 h-16 object-cover rounded-full"
                  src={plumber}
                  alt=""
                />
                <div>
                  <h2 className="font-semibold text-lg tracking-wider">Title</h2>
                  <p className="text-xs text-white/80 text-ellipsis">
                    {paragraph.length >= 80
                      ? paragraph.slice(0, 80) + "..."
                      : paragraph}
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/discription" className="h-full min-w-full text-white">
              <Image
                className="w-full object-cover h-full rounded-lg"
                src={plumber}
                alt=""
              />
              <div className="flex gap-3 items-center mt-4">
                <Image
                  className="w-16 h-16 object-cover rounded-full"
                  src={plumber}
                  alt=""
                />
                <div>
                  <h2 className="font-semibold text-lg tracking-wider">Title</h2>
                  <p className="text-xs text-white/80 text-ellipsis">
                    {paragraph.length >= 80
                      ? paragraph.slice(0, 80) + "..."
                      : paragraph}
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/discription" className="h-full min-w-full text-white">
              <Image
                className="w-full object-cover h-full rounded-lg"
                src={plumber}
                alt=""
              />
              <div className="flex gap-3 items-center mt-4">
                <Image
                  className="w-16 h-16 object-cover rounded-full"
                  src={plumber}
                  alt=""
                />
                <div>
                  <h2 className="font-semibold text-lg tracking-wider">Title</h2>
                  <p className="text-xs text-white/80 text-ellipsis">
                    {paragraph.length >= 80
                      ? paragraph.slice(0, 80) + "..."
                      : paragraph}
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/discription" className="h-full min-w-full text-white">
              <Image
                className="w-full object-cover h-full rounded-lg"
                src={plumber}
                alt=""
              />
              <div className="flex gap-3 items-center mt-4">
                <Image
                  className="w-16 h-16 object-cover rounded-full"
                  src={plumber}
                  alt=""
                />
                <div>
                  <h2 className="font-semibold text-lg tracking-wider">Title</h2>
                  <p className="text-xs text-white/80 text-ellipsis">
                    {paragraph.length >= 80
                      ? paragraph.slice(0, 80) + "..."
                      : paragraph}
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
        <div className="text-white swiper-Next-video-Btn opacity-0 group-hover:opacity-100  h-28 bg-white/10 rounded-lg flex items-center justify-center">
          <GoChevronRight className="text-5xl cursor-pointer font-extralight" />
        </div>
      </div>
    </div>
  );
}
