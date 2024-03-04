import Image from "next/image";
import Link from "next/link";
import { SwiperSlide } from "swiper/react";
import plumber from "@/public/assets/plumber.jpg";

export default function CategoryItem() {
  return (
    <>
      <SwiperSlide>
        <Link
          href=""
          className="flex relative h-full justify-center items-center"
        >
          <Image
            className="w-full object-cover h-full rounded-lg"
            src={plumber}
            alt=""
            height={500}
            width={500}
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
            height={500}
            width={500}
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
            height={500}
            width={500}
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
            height={500}
            width={500}
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
            height={500}
            width={500}
          />
          <div className="absolute top-0 w-full h-full left-0 px-2 py-1 font-bold bg-gradient-to-t from-black via-transparent rounded-md">
            <p className="absolute left-5 bottom-5 text-xs sm:text-sm md:text-xl text-white">
              Name
            </p>
          </div>
        </Link>
      </SwiperSlide>
    </>
  );
}
