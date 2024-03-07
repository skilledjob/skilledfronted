"use client";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import plumber from "@/public/assets/plumber.jpg";
import "swiper/css";
import "swiper/css/navigation";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { Avatar } from "@/app/components/ui/avatar";

export default function EditorChoice() {
  const paragraph = `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
  Recusandae culpa quae non ab officiis voluptates similique ad
  obcaecati? Suscipit, libero!`;

  const datas = [
    {
      _id: 1,
      image: plumber,
      title: "title",
      paragraph: paragraph,
    },
    {
      _id: 2,
      image: plumber,
      title: "title",
      paragraph: paragraph,
    },
    {
      _id: 3,
      image: plumber,
      title: "title",
      paragraph: paragraph,
    },
    {
      _id: 4,
      image: plumber,
      title: "title",
      paragraph: paragraph,
    },
    {
      _id: 5,
      image: plumber,
      title: "title",
      paragraph: paragraph,
    },
  ];

  return (
    <div className="w-full mx-auto container my-12">
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
          {datas.map(data => (
            <SwiperSlide key={data._id}>
              <Link
                href="/discription"
                className="h-full min-w-full text-white"
              >
                <Image
                  className="w-full object-cover h-full rounded-lg"
                  src={data.image}
                  alt=""

                />
                <div className="flex gap-3 items-center mt-4">
                  <div>
                    <Avatar image={data.image} size="medium" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-lg tracking-wider">
                      {data.title}
                    </h2>
                    <p className="text-xs text-white/80 text-ellipsis">
                      {data.paragraph.length >= 80
                        ? data.paragraph.slice(0, 80) + "..."
                        : data.paragraph}
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="text-white swiper-Next-video-Btn opacity-0 group-hover:opacity-100  h-28 bg-white/10 rounded-lg flex items-center justify-center">
          <GoChevronRight className="text-5xl cursor-pointer font-extralight" />
        </div>
      </div>
    </div>
  );
}
