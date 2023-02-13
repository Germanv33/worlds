import { FunctionComponent } from "react";

import style from "./slider.module.sass";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper";

import "swiper/scss";

import "swiper/scss/navigation";
import "swiper/scss/effect-fade";

import human from "../../../assets/descriptions/forest.png";
import l1 from "../../../assets/descriptions/1.png";
import l2 from "../../../assets/descriptions/2.png";
import l3 from "../../../assets/descriptions/3.png";
// import { t } from "@lingui/macro";

export const MapSlider: FunctionComponent = () => {
  return (
    <>
      <div className={style.swiper_container}>
        <Swiper
          modules={[Navigation, EffectFade]}
          effect="fade"
          className="mySwiper"
          scrollbar={{ draggable: false }}
          onSwiper={(swiper) => {
            swiper.allowTouchMove = false;
          }}
          loop
          navigation={{
            nextEl: ".swiper-button-map-nextt",
            prevEl: ".swiper-button-map-prevv",
            disabledClass: "disable", // When the navigation button is not available, the Class is added, that is, when the Swiper index is 0, the last Class class name without prevel will add a disable, which is .swiper-button-prev .disable
          }}
        >
          <div className="mySlider_Wrapper">
            <SwiperSlide>
              <img src={l2} alt="human" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={l1} alt="human" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={l3} alt="human" />
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </>
  );
};
