"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { GoChevronLeft, GoChevronRight } from "react-icons/go"; // Import your icon components
import { getAllCategories } from "@/app/lib/jobCategories";
import SubHeader from "../../components/Subheader/Subheader";

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
      <SubHeader className="text-white">Categories</SubHeader>
      <div className="flex items-center group">
        <div className="text-white swiper-Prev-Btn opacity-0 group-hover:opacity-100 h-28 bg-white/10 rounded-lg flex items-center justify-center">
          <GoChevronLeft className="text-5xl cursor-pointer" />
        </div>
        <div className="w-full">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            navigation={{
              prevEl: ".swiper-Prev-Btn",
              nextEl: ".swiper-Next-Btn",
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
            modules={[Autoplay]}
            className="mySwiper"
          >
            {categoriesData?.length > 0 ? (
              categoriesData?.map(category => (
                <SwiperSlide key={category?.id}>
                  <Link
                    href={`/category/${category?.id}`}
                    className="flex h-52 items-center"
                  >
                    <div className="w-full md:w-auto relative">
                      <div className="max-w-64 max-h-52">
                        <Image
                          className="object-cover rounded-lg h-52 w-64"
                          width={256}
                          height={208}
                          src={category?.image} // Assuming your category object has an 'image' property
                          alt={category?.name} // Assuming your category object has a 'name' property
                        />
                      </div>
                      <div className="absolute top-0 w-full h-full flex flex-col justify-end px-2 py-1 bg-gradient-to-t from-transparent to-black rounded-b-lg">
                        <p className="text-white text-center text-sm md:text-lg p-1">
                          {category?.name}
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
        </div>
        <div className="text-white swiper-Next-Btn opacity-0 group-hover:opacity-100  h-28 bg-white/10 rounded-lg flex items-center justify-center">
          <GoChevronRight className="text-5xl cursor-pointer font-extralight" />
        </div>
      </div>
    </div>
  );
};

export default Categories;
