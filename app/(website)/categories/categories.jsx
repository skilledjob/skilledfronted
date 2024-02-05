"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import plumber from "@/public/assets/plumber.jpg";
import { FaChevronLeft, FaAngleRight } from "react-icons/fa6";

const Categories = () => {
  // TODO: Fix Navigation Bug
  return (
    <div className="w-full px-3 mx-auto container my-6">
      <h2 className="text-xl font-semibold text-white mb-2">Categories</h2>
      <div className="flex items-center">
        {/* <div className="text-white swiper-button-prev">
          <FaChevronLeft className="text-5xl cursor-pointer" />
        </div> */}
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 7,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 7,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 7,
            },
          }}
          modules={[Navigation]}
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
        </Swiper>
        {/* <div className="text-white block swiper-button-next">
          <FaAngleRight className="text-5xl cursor-pointer" />
        </div> */}
      </div>
    </div>
  );
};

export default Categories;
