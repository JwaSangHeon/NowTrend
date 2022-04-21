// 뉴스 이미지
import itnew1 from "../img/경향it.gif";
import itnew2 from "../img/디데일리.jpeg";
import itnew3 from "../img/아이뉴스it.jpeg";
import itnew4 from "../img/파이낸셜뉴스.jpeg";
import itnew5 from "../img/한경닷컴it.jpeg";
import itnew6 from "../img/it동아.png";
import itnew7 from "../img/it비즈.jpeg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import styles from "../components/css/LinkSlider.module.css";

const ITnewsLinkSlider = ({ title }) => {
  const imgs = [itnew1, itnew2, itnew3, itnew4, itnew5, itnew6, itnew7];
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
          <a href="https://www.khan.co.kr/economy/it-electronic/articles">
            <img style={{ width: 300, height: 200 }} src={imgs[0]} alt="" />
          </a>
        </div>
        <div>
          <a href="http://m.ddaily.co.kr/m/index.html">
            <img style={{ width: 300, height: 200 }} src={imgs[1]} alt="" />
          </a>
        </div>
        <div>
          <a href="https://www.inews24.com/list/it">
            <img style={{ width: 300, height: 200 }} src={imgs[2]} alt="" />
          </a>
        </div>
        <div>
          <a href="https://www.fnnews.com/section/002005000">
            <img style={{ width: 300, height: 200 }} src={imgs[3]} alt="" />
          </a>
        </div>
        <div>
          <a href="https://www.hankyung.com/it">
            <img style={{ width: 300, height: 200 }} src={imgs[4]} alt="" />
          </a>
        </div>
        <div>
          <a href="https://it.donga.com/">
            <img style={{ width: 300, height: 200 }} src={imgs[5]} alt="" />
          </a>
        </div>
        <div>
          <a href="https://www.itbiznews.com/">
            <img style={{ width: 300, height: 200 }} src={imgs[6]} alt="" />
          </a>
        </div>
      </Slider>
    </div>
  );
};

export default ITnewsLinkSlider;
