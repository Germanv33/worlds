import { FunctionComponent } from "react";

import style from "./slider.module.sass";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper";

import "swiper/scss";

import "swiper/scss/navigation";

// import { t } from "@lingui/macro";

export const CharIconSlider: FunctionComponent = () => {
  return (
    <>
      <div className={style.swiper_container}>
        <Swiper
          modules={[Navigation, EffectFade]}
          scrollbar={{ draggable: false }}
          onSwiper={(swiper) => {
            swiper.allowTouchMove = false;
          }}
          loop
          navigation={{
            nextEl: ".swiper-button-char-nextt",
            prevEl: ".swiper-button-char-prevv",
            disabledClass: "disable", // When the navigation button is not available, the Class is added, that is, when the Swiper index is 0, the last Class class name without prevel will add a disable, which is .swiper-button-prev .disable
          }}
        >
          <div className="mySlider_Wrapper">
            <SwiperSlide>1</SwiperSlide>
            <SwiperSlide>2</SwiperSlide>
            <SwiperSlide>3</SwiperSlide>
          </div>
        </Swiper>
      </div>
    </>
  );
};
