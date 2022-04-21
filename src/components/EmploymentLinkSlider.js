// 뉴스 이미지
import employment1 from "../img/프로그래머스.png";
import employment2 from "../img/wanted.jpeg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import styles from "../components/css/LinkSlider.module.css";

const EmploymentLinkSlider = ({ title }) => {
  const imgs = [employment1, employment2];
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
          <a href="https://programmers.co.kr/job?utm_source=google&utm_medium=cpc&utm_campaign=brand_job_pc&gclid=Cj0KCQjw3v6SBhCsARIsACyrRAlBmpfmXyjj4n7WfG9cU47V0ZIGaz-q7t3RonMiK6s3NWn4HnoEGDsaAtywEALw_wcB">
            <img style={{ width: 300, height: 200 }} src={imgs[0]} alt="" />
          </a>
        </div>
        <div>
          <a href="https://www.wanted.co.kr/jobsfeed?utm_source=google&utm_medium=sa&utm_campaign=kr_recruit_web_sa_signup_brand&utm_term=%EC%9B%90%ED%8B%B0%EB%93%9C%20%EC%B1%84%EC%9A%A9&utm_content=brand&gclid=Cj0KCQjw3v6SBhCsARIsACyrRAkX9ZpgzlFWLHhLWBStrtw5EFpwaqJyyhFWA2B6R37qfH2CMCVxNv4aApo2EALw_wcB">
            <img style={{ width: 300, height: 200 }} src={imgs[1]} alt="" />
          </a>
        </div>
      </Slider>
    </div>
  );
};

export default EmploymentLinkSlider;
