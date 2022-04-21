// import { useEffect } from "react";
import { useState } from "react";
import styles from "../components/css/Main.module.css";
import Chart from "./Chart";
import UserData from "../sampleData.json";
import ITnewsLinkSlider from "./ITnewsLinkSlider";
import VelogLinkSlider from "./VelogLinkSlider";
import TechBlogLinkSlider from "./TechBlogLinkSlider";
import EmploymentLinkSlider from "./EmploymentLinkSlider";

function Main() {
  const [datas, setDatas] = useState(
    UserData.sort((a, b) => b.frequency - a.frequency)
  );
  const [userData, setUserData] = useState({
    labels: datas.map((data) => data.word),
    datasets: [
      {
        label: "빈도",
        data: datas.map((data) => data.frequency),
        backgroundColor: "lightgreen",
        indexAxis: "y",
      },
    ],
  });
  const [options, setOptions] = useState({
    plugins: {
      legend: {
        labels: {
          color: "salmon",
          font: {
            size: 18,
          },
        },
      },
    },
  });

  return (
    <>
      <div className={styles.chart}>
        <h2>현재 단어별 빈도 수</h2>
        <Chart chartData={userData} options={options} />
      </div>
      <div className={styles.sliderContainer}>
        <VelogLinkSlider title="Velog" />
        <ITnewsLinkSlider title="IT뉴스" />
        <TechBlogLinkSlider title="기업Tech블로그" />
        <EmploymentLinkSlider title="채용사이트" />
      </div>
      <div style={{ height: 500 }}></div>
    </>
  );
}

export default Main;
