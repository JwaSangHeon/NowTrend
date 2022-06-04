import velogImg from "../img/Velog.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import styles from "../components/css/LinkSlider.module.css";

const VelogLinkSlider = ({ title }) => {
  const imgs = [velogImg];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={styles.container} style={{ width: 300, height: 300 }}>
      <h2 className={styles.title}>{title}</h2>
      <Slider {...settings}>
        <div>
          <a href="https://velog.io/">
            <img style={{ width: 300, height: 200 }} src={imgs[0]} alt="" />
          </a>
        </div>
      </Slider>
    </div>
  );
};

export default VelogLinkSlider;
