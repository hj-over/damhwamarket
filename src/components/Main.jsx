import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Navigation, Pagination, Keyboard } from "swiper";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="pb-10 ">
      <Swiper
        cssMode={true}
        navigation={true}
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        keyboard={true}
        modules={[Autoplay, Navigation, Pagination, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={require("../banner/4EtJ-1672807714377-main banner_pc.jpg")}
            alt="banner2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require("../banner/1Jia-1655775946349-main_new.png")}
            alt="banner1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require("../banner/5ab3-1673850772616-damhwabox-PC.jpg")}
            alt="banner3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require("../banner/qL5p-1655775957715-main_review.png")}
            alt="banner4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require("../banner/tqgf-1670989021870-PC_MAIN_BANNER2.jpg")}
            alt="banner5"
          />
        </SwiperSlide>
      </Swiper>
      <div className="flex gap-20 justify-center mt-20 text-center pb-20">
        <Link
          to="/listing/전체보기"
          className="justify-center font-semibold text-xl box-border rounded-md h-60 w-40 hover:bg-gray-100"
        >
          {" "}
          <img
            src={require("../banner/icon_only_sooldamhwa.png")}
            alt="all"
            className="mt-9 mb-3 ml-4"
          />
          <p className="font-extrabold align-text-bottom mt-5 mb-3">
            전체보기 All
          </p>
        </Link>
        <Link
          to="/listing/takju"
          className="font-semibold text-xl box-border rounded-md h-60 w-40 hover:bg-gray-100"
        >
          <img
            src={require("../banner/icon_takju.png")}
            alt="takju"
            className="mt-5 mb-3"
          />
          탁주
        </Link>
        <Link
          to="/listing/cheongju"
          className="font-semibold text-xl box-border rounded-md h-60 w-40 hover:bg-gray-100"
        >
          <img
            src={require("../banner/icon_cheongju.png")}
            alt="cheongju"
            className="mt-5 mb-3"
          />
          청주
        </Link>
        <Link
          to="/listing/jeungryuju"
          className="font-semibold text-xl box-border rounded-md h-60 w-40 hover:bg-gray-100"
        >
          <img
            src={require("../banner/icon_jeungryuju.png")}
            alt="jeungryuju"
            className="mt-5 mb-3"
          />
          증류주
        </Link>
        <Link
          to="/listing/gwashilju"
          className="font-semibold text-xl box-border rounded-md h-60 w-40 hover:bg-gray-100"
        >
          <img
            src={require("../banner/icon_gwashilju.png")}
            alt="gwashilju"
            className="mt-5 mb-3"
          />
          과실주
        </Link>
      </div>
    </div>
  );
};

export default Main;
