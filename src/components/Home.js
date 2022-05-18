// import { useEffect } from "react";
import { useState } from "react";
import styles from "../components/css/Main.module.css";
import Chart from "./Chart";
import UserData from "../sampleData.json";
import ITnewsLinkSlider from "./ITnewsLinkSlider";
import VelogLinkSlider from "./VelogLinkSlider";
import TechBlogLinkSlider from "./TechBlogLinkSlider";
import EmploymentLinkSlider from "./EmploymentLinkSlider";
import Footer from "./Footer";

function Home() {
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
        maxBarThickness: 35,
        hoverBackgroundColor: "salmon",
      },
    ],
  });
  const [options, setOptions] = useState({
    responsive: true,
    aspectRatio: 1,
    maintainAspectRatio: true,

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
    <>
      <div className={styles.chart}>
        <h2 className={styles.title}>현재 단어별 빈도 수</h2>
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
    </>
  );
}

export default Home;
