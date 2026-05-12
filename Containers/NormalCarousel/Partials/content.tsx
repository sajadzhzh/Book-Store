"use client";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import pic1 from "@/public/Slider1.webp";
import pic2 from "@/public/Slider4.webp";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Image from "next/image";

export default function NormallCarouselContent() {
  return (
    <div className="flex gap-3 h-80 my-5">
      <div className="w-full flex md:w-4/5 relative h-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          dir="rtl"
          effect="fade"
          fadeEffect={{
            crossFade: true,
          }}
          autoplay={{ delay: 5000 }}
          loop={true}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          breakpoints={{
            768: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
          }}
          className="w-full"
        >
          <SwiperSlide>
            <Image
              src={pic1}
              alt="pic_1"
              width={5000}
              className="size-full object-cover rounded-3xl"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src={pic2}
              alt="pic_2"
              width={5000}
              className="size-full object-cover rounded-3xl"
            />
          </SwiperSlide>
        </Swiper>
        <button className="custom-prev absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-30">
          <i className="bi bi-chevron-left mt-2"></i>
        </button>

        <button className="custom-next absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-30">
          <i className="bi bi-chevron-left mt-2"></i>
        </button>
      </div>

      <div className="hidden md:flex md:w-1/6 relative h-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          dir="rtl"
          effect="fade"
          fadeEffect={{
            crossFade: true,
          }}
          autoplay={{ delay: 5000 }}
          loop={true}
          pagination={{
            clickable: true,
            el: ".custom-pagination2",
          }}
          navigation={{
            nextEl: ".c2",
            prevEl: ".c2",
          }}
          breakpoints={{
            768: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
          }}
          className="w-full"
        >
          <SwiperSlide>
            <Image
              src={pic1}
              alt="pic_1"
              width={5000}
              className="object-cover h-full rounded-3xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={pic1}
              alt="pic_1"
              width={5000}
              className="object-cover h-full rounded-3xl"
            />
          </SwiperSlide>
        </Swiper>
        <button className="custom-prev c2 absolute right-0 top-1/2 -translate-y-16 z-10 w-10 h-30">
          <i className="bi bi-chevron-left mt-2"></i>
        </button>

        <button className="custom-next c2 absolute left-0 top-1/2 -translate-y-16 z-10 w-10 h-30">
          <i className="bi bi-chevron-left mt-2"></i>
        </button>
      </div>
    </div>
  );
}
