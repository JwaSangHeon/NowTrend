import velogImg from "../img/Velog.png";
import developImg from "../img/개발자채용.jpeg";
import ItNewsImg from "../img/IT뉴스.png";
import techImg from "../img/tech.png";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
// import styles from "../components/css/LinkSlider.module.css";

const LinkSlider = () => {
  const imgs = [developImg, velogImg, ItNewsImg, techImg];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // responsive: [
    //   // 반응형 웹 구현 옵션
    //   {
    //     breakpoint: 1200, // 화면 사이즈 1200px
    //     settings: {
    //       slidesToShow: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 1023,
    //     settings: {
    //       slidesToShow: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 767,
    //     settings: {
    //       slidesToShow: 1,
    //     },
    //   },
    // ],
  };
  return (
    <div
      style={{
        width: 400,
        margin: "0 auto",
      }}
    >
      <h2>Link</h2>
      <Slider {...settings}>
        <div>
          <a href="https://www.wanted.co.kr/wdlist/518?country=kr&job_sort=company.response_rate_order&years=-1&locations=all&utm_source=google&utm_medium=sa&utm_campaign=kr_recruit_web_sa_signup_interest&utm_term=%EA%B0%9C%EB%B0%9C%EC%9E%90%EC%B1%84%EC%9A%A9&utm_content=developer&gclid=Cj0KCQjwmPSSBhCNARIsAH3cYgbV3MEBNpVFcTymQduNbwwCuQYNl5bBH1V4ckQ-rnWJ6gWiDLRgGScaAjlfEALw_wcB">
            <img style={{ width: 400, height: 200 }} src={imgs[0]} alt="" />
          </a>
        </div>
        <div>
          <img style={{ width: 400, height: 200 }} src={imgs[1]} alt="" />
        </div>
        <div>
          <img style={{ width: 400, height: 200 }} src={imgs[2]} alt="" />
        </div>
        <div>
          <img style={{ width: 400, height: 200 }} src={imgs[3]} alt="" />
        </div>
      </Slider>
    </div>

    // <div className="swiper-container">
    //   <div className="swiper-wrapper">
    //     <div className="swiper-slide">
    //       <img style={{ width: 300, height: 200 }} src={developImg} alt="" />
    //
    //     </div>
    //     <div className="swiper-slide">
    //       <img style={{ width: 300, height: 200 }} src={ItNewsImg} alt="" />
    //
    //     </div>
    //     <div className="swiper-slide">
    //       <img style={{ width: 300, height: 200 }} src={velogImg} alt="" />
    //
    //     </div>
    //     <div className="swiper-slide">
    //       <img style={{ width: 300, height: 200 }} src={techImg} alt="" />
    //
    //     </div>
    //   </div>

    //   <div className="swiper-pagination"></div>

    //   <div className="swiper-button-prev"></div>
    //   <div className="swiper-button-next"></div>

    //   <div className="swiper-scrollbar"></div>
    // </div>
  );
};

export default LinkSlider;
