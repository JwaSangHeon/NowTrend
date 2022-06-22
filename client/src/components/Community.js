import { useState } from "react";
import styles from "./css/Main.module.css";
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
  margin: 0 40px;
  float: right;
  h2 {
    margin-right: 1rem;
  }
`;

function Community() {
  const selectList = [2022, 2021, 2020, 2019, 2018, 2017];
  const [selected, setSelected] = useState(2022);
  const [loading, setLoading] = useState(true);

  const [datas, setDatas] = useState([]);

  useEffect(() => {
    // fetch(`https://storageforstatejson.herokuapp.com/router/output`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setDatas(
    //       JSON.parse(data[0].jsontable)
    //         .sort((a, b) => b.frequency - a.frequency)
    //         .filter((ele) => ele.year === selected)
    //         .filter((keyword) => keyword.classification === "community")
    //     );
    setDatas(
      UserData.sort((a, b) => b.frequency - a.frequency).filter(
        (ele) => ele.year === selected
      )
    );
    setLoading(false);
    // });
  }, [selected]);

  const userData = {
    labels: datas.map((data) => data.word),
    datasets: [
      {
        label: "빈도",
        data: datas.map((data) => data.frequency),
        backgroundColor: "lightgreen",
        indexAxis: "x",
        maxBarThickness: 35,
        hoverBackgroundColor: "salmon",
      },
    ],
  };

  const options = {
    responsive: true,
    aspectRatio: 1,
    scales: {
      yAxis: {
        ticks: {
          color: "white",
        },
      },
      xAxis: {
        ticks: {
          color: "white",
        },
      },
    },
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
        <div style={{ margin: "2rem" }}>
          Selected: <b>{selected}</b>
        </div>
        <h2 className={styles.title}>커뮤니티</h2>
        {loading ? (
          <div>loading...</div>
        ) : (
          <Chart chartData={userData} options={options} />
        )}
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

export default Community;
