import React from "react";
import Footer from "./Footer";
import { useState } from "react";
import styles from "../components/css/Main.module.css";
import Chart from "./Chart";
import UserData from "../sampleData.json";
import ITnewsLinkSlider from "./ITnewsLinkSlider";
import VelogLinkSlider from "./VelogLinkSlider";
import TechBlogLinkSlider from "./TechBlogLinkSlider";
import EmploymentLinkSlider from "./EmploymentLinkSlider";

const Tech = () => {
  const [datas, setDatas] = useState(
    UserData.filter((keyword) => keyword.classification === "tech").sort(
      (a, b) => b.frequency - a.frequency
    )
  );
  const [userData, setUserData] = useState({
    labels: datas.map((data) => data.word),
    datasets: [
      {
        label: "빈도",
        data: datas.map((data) => data.frequency),
        backgroundColor: "lightgreen",
        indexAxis: "y",
        maxBarThickness: 35,
        hoverBackgroundColor: "salmon",
      },
    ],
  });
  const [options, setOptions] = useState({
    responsive: true,
    aspectRatio: 1,
    maintainAspectRatio: datas.length > 4 ? true : false,

    plugins: {
      legend: {
        labels: {
          color: "white",
          font: {
            size: 16,
          },
        },
      },
    },
  });

  return (
    <div>
      <div className={styles.chart}>
        <h2 className={styles.title}>기업테크 블로그</h2>
        <Chart chartData={userData} options={options} />
      </div>
      <div className={styles.sliderContainer}>
        <VelogLinkSlider title="Velog" />
        <ITnewsLinkSlider title="IT뉴스" />
        <TechBlogLinkSlider title="기업Tech블로그" />
        <EmploymentLinkSlider title="채용사이트" />
      </div>
      <hr />
      <Footer />
    </div>
  );
};

export default Tech;
