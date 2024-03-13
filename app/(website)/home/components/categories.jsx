"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";

import { GoChevronLeft, GoChevronRight } from "react-icons/go"; // Import your icon components
import { getAllCategories } from "@/app/lib/jobCategories";

const Categories = () => {
  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllCategories();
        setCategoriesData(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full mx-auto container my-6">
      <h2 className="categoryTitle">Categories</h2>
      <div className="flex items-center group">
        <div className="text-white swiper-Prev-Btn opacity-0 group-hover:opacity-100 h-28 bg-white/10 rounded-lg flex items-center justify-center">
          <GoChevronLeft className="text-5xl cursor-pointer" />
        </div>
        <Swiper
          slidesPerView={Math.min(4, categoriesData?.length)}
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
              slidesPerView: Math.min(2, categoriesData?.length),
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: Math.min(4, categoriesData?.length),
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {categoriesData?.length > 0 ? (
            categoriesData?.map(category => (
              <SwiperSlide key={category?.id}>
                <Link
                  href={`/category/${category?.id}`}
                  className="flex flex-col h-full justify-center items-center"
                >
                  <div className="w-64 md:w-auto flex-shrink-0 relative">
                    <Image
                      className="object-cover rounded-lg"
                      width={256}
                      height={256}
                      src={category?.image} // Assuming your category object has an 'image' property
                      alt={category?.name} // Assuming your category object has a 'name' property
                    />
                    <div className="absolute top-0 w-full h-full flex flex-col justify-end px-2 py-1 bg-gradient-to-t from-transparent to-black rounded-b-lg">
                      <p className="text-white text-center text-sm md:text-lg p-1">
                        {category?.name}{" "}
                        {/* Assuming your category object has a 'name' property */}
                      </p>
                    </div>
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
