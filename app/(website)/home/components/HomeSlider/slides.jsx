import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import plumber from "@/public/assets/plumber.jpg";
import img1 from "@/public/assets/img1.jpg";
import img2 from "@/public/assets/img2.jpg";

const Slides = () => {
  return (
    <>
      <SwiperSlide>
        <div className="w-full h-[427.5px]">
          <Image
            className="h-full object-cover"
            src={img1}
            alt="slider image"
            layout="fill"
          />
        </div>
      </SwiperSlide>
      {/* <SwiperSlide>
        <div className="w-full h-[427.5px]">
          <Image
            className="h-full object-cover"
            src={plumber}
            alt="slider image"
            layout="fill"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-[427.5px]">
          <Image
            className="h-full object-cover"
            src={img2}
            alt="slider image"
            layout="fill"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-[427.5px]">
          <Image
            className="h-full object-cover"
            src={img1}
            alt="slider image"
            layout="fill"
          />
        </div>
      </SwiperSlide> */}
    </>
  );
};

export default Slides;
