"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import plumber from "@/public/assets/plumber.jpg";
import img1 from "@/public/assets/img1.jpg";
import img2 from "@/public/assets/img2.jpg";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import CategoryItem from "../components/CategoryItems/CategoryItem";

const Categories = () => {
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
          modules={[Navigation]}
          className="mySwiper"
        >
          {/* <CategoryItem /> */}
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
              <div className="absolute top-0 w-full h-full left-0 px-2 py-1 font-bold bg-gradient-to-t from-black via-transparent rounded-md">
                <p className="absolute left-5 bottom-5 text-xs sm:text-sm md:text-xl text-white">
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
                src={img1}
                alt=""
              />
              <div className="absolute top-0 w-full h-full left-0 px-2 py-1 font-bold bg-gradient-to-t from-black via-transparent rounded-md">
                <p className="absolute left-5 bottom-5 text-xs sm:text-sm md:text-xl text-white">
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
                src={img2}
                alt=""
              />
              <div className="absolute top-0 w-full h-full left-0 px-2 py-1 font-bold bg-gradient-to-t from-black via-transparent rounded-md">
                <p className="absolute left-5 bottom-5 text-xs sm:text-sm md:text-xl text-white">
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
                src={img1}
                alt=""
              />
              <div className="absolute top-0 w-full h-full left-0 px-2 py-1 font-bold bg-gradient-to-t from-black via-transparent rounded-md">
                <p className="absolute left-5 bottom-5 text-xs sm:text-sm md:text-xl text-white">
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
              <div className="absolute top-0 w-full h-full left-0 px-2 py-1 font-bold bg-gradient-to-t from-black via-transparent rounded-md">
                <p className="absolute left-5 bottom-5 text-xs sm:text-sm md:text-xl text-white">
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
                src={img2}
                alt=""
              />
              <div className="absolute top-0 w-full h-full left-0 px-2 py-1 font-bold bg-gradient-to-t from-black via-transparent rounded-md">
                <p className="absolute left-5 bottom-5 text-xs sm:text-sm md:text-xl text-white">
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
              <div className="absolute top-0 w-full h-full left-0 px-2 py-1 font-bold bg-gradient-to-t from-black via-transparent rounded-md">
                <p className="absolute left-5 bottom-5 text-xs sm:text-sm md:text-xl text-white">
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
                src={img2}
                alt=""
              />
              <div className="absolute top-0 w-full h-full left-0 px-2 py-1 font-bold bg-gradient-to-t from-black via-transparent rounded-md">
                <p className="absolute left-5 bottom-5 text-xs sm:text-sm md:text-xl text-white">
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
                src={img1}
                alt=""
              />
              <div className="absolute top-0 w-full h-full left-0 px-2 py-1 font-bold bg-gradient-to-t from-black via-transparent rounded-md">
                <p className="absolute left-5 bottom-5 text-xs sm:text-sm md:text-xl text-white">
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
                src={img2}
                alt=""
              />
              <div className="absolute top-0 w-full h-full left-0 px-2 py-1 font-bold bg-gradient-to-t from-black via-transparent rounded-md">
                <p className="absolute left-5 bottom-5 text-xs sm:text-sm md:text-xl text-white">
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
                src={img1}
                alt=""
              />
              <div className="absolute top-0 w-full h-full left-0 px-2 py-1 font-bold bg-gradient-to-t from-black via-transparent rounded-md">
                <p className="absolute left-5 bottom-5 text-xs sm:text-sm md:text-xl text-white">
                  Name
                </p>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
        <div className="text-white swiper-Next-Btn opacity-0 group-hover:opacity-100  h-28 bg-white/10 rounded-lg flex items-center justify-center">
          <GoChevronRight className="text-5xl cursor-pointer font-extralight" />
        </div>
      </div>
    </div>
  );
};

export default Categories;
