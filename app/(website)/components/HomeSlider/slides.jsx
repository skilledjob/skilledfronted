import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import plumber from "@/public/assets/plumber.jpg";

const Slides = () => {
  return (
    <>
      <SwiperSlide>
        <div className="w-full h-[427.5px]">
          <Image
            className="h-full object-cover"
            src={plumber}
            alt="slider image"
            layout="fill"
          />
        </div>
      </SwiperSlide>
    </>
  );
};

export default Slides;
