import { useState } from "react";
import styles from "../components/css/Main.module.css";
import Chart from "./Chart";
import UserData from "../sampleData.json";
import ITnewsLinkSlider from "./ITnewsLinkSlider";
import VelogLinkSlider from "./VelogLinkSlider";
import TechBlogLinkSlider from "./TechBlogLinkSlider";
import EmploymentLinkSlider from "./EmploymentLinkSlider";
import Footer from "./Footer";
import styled from "styled-components";
import { useEffect } from "react";
import Synonym from "./Synonym";

const YearSelect = styled.div`
  display: flex;
  float: right;
  h2 {
    margin-right: 1rem;
  }
`;

function Home() {
  const selectList = [2022, 2021, 2020, 2019, 2018, 2017];
  const [selected, setSelected] = useState(2022);

  const [datas, setDatas] = useState(
    UserData.sort((a, b) => b.frequency - a.frequency).filter(
      (ele) => ele.year === selected
    )
  );

  const userData = {
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
  };

  const options = {
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
  };

  const handleSelect = (e) => {
    setSelected(+e.target.value);
  };
  useEffect(() => {
    setDatas(
      UserData.sort((a, b) => b.frequency - a.frequency).filter(
        (ele) => ele.year === selected
      )
    );
  }, [selected]);

  return (
    <>
      <div className={styles.chart}>
        <YearSelect>
          <h2>연도 선택</h2>
          <div>
            <select onChange={handleSelect} value={selected}>
              {selectList.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </YearSelect>
        <div>
          Selected: <b>{selected}</b>
        </div>
        <h2 className={styles.title}>종합</h2>
        <Chart chartData={userData} options={options} />
      </div>
      <div>
        <Synonym />
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
