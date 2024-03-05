"use client"


import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css"
; // Import your getAllCategories function
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'; // Import your icon components
import { getAllCategories } from '@/app/lib/jobCategories';

const Categories = async () => {
  const categoriesData = await getAllCategories();

  return (
    <div className="w-full mx-auto container my-6">
      <h2 className="categoryTitle">Categories</h2>
      <div className="flex items-center group">
        <div className="text-white swiper-Prev-Btn opacity-0 group-hover:opacity-100 h-28 bg-white/10 rounded-lg flex items-center justify-center">
          <GoChevronLeft className="text-5xl cursor-pointer" />
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={{
            prevEl: ".swiper-Prev-Btn",
            nextEl: ".swiper-Next-Btn",
          }}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {categoriesData?.length > 0 ? (
            categoriesData?.map((category) => (
              <SwiperSlide key={category?.id}>
                <Link href={`/category/${category.id}`} className="flex relative h-full justify-center items-center">
                  <Image
                    className="w-64 object-cover h-64 rounded-lg"
                    width={256}
                    height={256}
                    src={category?.image} // Assuming your category object has an 'image' property
                    alt={category?.name} // Assuming your category object has a 'name' property
                  />
                  <div className="absolute top-0 w-full h-full left-0 px-2 py-1 font-bold bg-gradient-to-t from-black via-transparent rounded-md">
                    <p className="absolute left-5 bottom-5 text-xs sm:text-sm md:text-xl text-white">
                      {category?.name} {/* Assuming your category object has a 'name' property */}
                    </p>
                  </div>
                </Link>
              </SwiperSlide>
            ))
          ) : (
            <p>No categories available</p>
          )}
        </Swiper>
        <div className="text-white swiper-Next-Btn opacity-0 group-hover:opacity-100  h-28 bg-white/10 rounded-lg flex items-center justify-center">
          <GoChevronRight className="text-5xl cursor-pointer font-extralight" />
        </div>
      </div>
    </div>
  );
};

export default Categories;
