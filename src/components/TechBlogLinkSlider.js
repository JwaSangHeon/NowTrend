// 뉴스 이미지
import tech1 from "../img/navertech.png";
import tech2 from "../img/kakaoTech.jpeg";
import tech3 from "../img/linetech.jpeg";
import tech4 from "../img/woowatech.jpeg";
import tech5 from "../img/daangn.png";
import tech6 from "../img/tosstech.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import styles from "../components/css/LinkSlider.module.css";

const TechBlogLinkSlider = ({ title }) => {
  const imgs = [tech1, tech2, tech3, tech4, tech5, tech6];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={styles.container} style={{ width: 300, height: 300 }}>
      <h2>{title}</h2>
      <Slider {...settings}>
        <div>
          <a href="https://d2.naver.com/home">
            <img style={{ width: 300, height: 200 }} src={imgs[0]} alt="" />
          </a>
        </div>
        <div>
          <a href="https://tech.kakao.com/blog/">
            <img style={{ width: 300, height: 200 }} src={imgs[1]} alt="" />
          </a>
        </div>
        <div>
          <a href="https://engineering.linecorp.com/ko/">
            <img style={{ width: 300, height: 200 }} src={imgs[2]} alt="" />
          </a>
        </div>
        <div>
          <a href="https://techblog.woowahan.com/">
            <img style={{ width: 300, height: 200 }} src={imgs[3]} alt="" />
          </a>
        </div>
        <div>
          <a href="https://medium.com/daangn">
            <img style={{ width: 300, height: 200 }} src={imgs[4]} alt="" />
          </a>
        </div>
        <div>
          <a href="https://toss.tech/">
            <img style={{ width: 300, height: 200 }} src={imgs[5]} alt="" />
          </a>
        </div>
      </Slider>
    </div>
  );
};

export default TechBlogLinkSlider;
