"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import plumber from "@/public/assets/plumber.jpg";

const Categories = () => {
  return (
    <div className="w-full lg:px-12 px-3 mx-auto container my-6">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
          <SwiperSlide>
            <Link
              href=""
              className="flex relative h-full justify-center items-center"
            >
              <Image
                className="w-full object-cover h-full rounded-lg"
                src={plumber}
                alt=""
              />
              <div className="absolute top-0 w-full h-full left-0 px-2 py-1 font-bold ">
                <p className="absolute left-0 bottom-1 text-xs sm:text-sm md:text-lg backdrop-blur-md backdrop-brightness-110 rounded-full px-2 py-0 bg-blue-50">
                  Name
                </p>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href=""
              className="flex relative h-full justify-center items-center"
            >
              <Image
                className="w-full object-cover h-full rounded-lg"
                src={plumber}
                alt=""
              />
              <div className="absolute top-0 w-full h-full left-0 px-2 py-1 font-bold ">
                <p className="absolute left-0 bottom-1 text-xs sm:text-sm md:text-lg backdrop-blur-md backdrop-brightness-110 rounded-full px-2 py-0 bg-blue-50">
                  Name
                </p>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href=""
              className="flex relative h-full justify-center items-center"
            >
              <Image
                className="w-full object-cover h-full rounded-lg"
                src={plumber}
                alt=""
              />
              <div className="absolute top-0 w-full h-full left-0 px-2 py-1 font-bold ">
                <p className="absolute left-0 bottom-1 text-xs sm:text-sm md:text-lg backdrop-blur-md backdrop-brightness-110 rounded-full px-2 py-0 bg-blue-50">
                  Name
                </p>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href=""
              className="flex relative h-full justify-center items-center"
            >
              <Image
                className="w-full object-cover h-full rounded-lg"
                src={plumber}
                alt=""
              />
              <div className="absolute top-0 w-full h-full left-0 px-2 py-1 font-bold ">
                <p className="absolute left-0 bottom-1 text-xs sm:text-sm md:text-lg backdrop-blur-md backdrop-brightness-110 rounded-full px-2 py-0 bg-blue-50">
                  Name
                </p>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href=""
              className="flex relative h-full justify-center items-center"
            >
              <Image
                className="w-full object-cover h-full rounded-lg"
                src={plumber}
                alt=""
              />
              <div className="absolute top-0 w-full h-full left-0 px-2 py-1 font-bold ">
                <p className="absolute left-0 bottom-1 text-xs sm:text-sm md:text-lg backdrop-blur-md backdrop-brightness-110 rounded-full px-2 py-0 bg-blue-50">
                  Name
                </p>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href=""
              className="flex relative h-full justify-center items-center"
            >
              <Image
                className="w-full object-cover h-full rounded-lg"
                src={plumber}
                alt=""
              />
              <div className="absolute top-0 w-full h-full left-0 px-2 py-1 font-bold ">
                <p className="absolute left-0 bottom-1 text-xs sm:text-sm md:text-lg backdrop-blur-md backdrop-brightness-110 rounded-full px-2 py-0 bg-blue-50">
                  Name
                </p>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href=""
              className="flex relative h-full justify-center items-center"
            >
              <Image
                className="w-full object-cover h-full rounded-lg"
                src={plumber}
                alt=""
              />
              <div className="absolute top-0 w-full h-full left-0 px-2 py-1 font-bold ">
                <p className="absolute left-0 bottom-1 text-xs sm:text-sm md:text-lg backdrop-blur-md backdrop-brightness-110 rounded-full px-2 py-0 bg-blue-50">
                  Name
                </p>
              </div>
            </Link>
          </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Categories;
