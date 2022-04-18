// import { useEffect } from "react";
import { useState } from "react";
import styles from "../components/css/Main.module.css";
import Chart from "./Chart";
import UserData from "../sampleData.json";
import LinkSlider from "./LinkSlider";

function Main() {
  const [datas, setDatas] = useState(
    UserData.sort((a, b) => b.frequency - a.frequency)
  );

  // useEffect(() => {
  //   setDatas(UserData.sort((a, b) => b.frequency - a.frequency));
  // }, []);

  const [userData, setUserData] = useState({
    labels: datas.map((data) => data.word),
    datasets: [
      {
        label: "Trend",
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
            size: 22,
          },
        },
      },
    },
  });

  // useEffect(() => {
  //   setDatas(sampleData.sort((a, b) => b.frequency - a.frequency));
  // }, []);

  // console.log("sampleData: ", typeof sampleData);
  // console.log(sampleData);
  return (
    <>
      {/* <div className={styles.container}>
        {datas.map((data, index) => (
          <Word
            key={index}
            index={index}
            word={data.word}
            classification={data.classification}
            frequency={data.frequency}
          />
        ))}
      </div> */}
      <div className={styles.chart}>
        <Chart chartData={userData} options={options} />
      </div>
      <LinkSlider />
      <div style={{ height: 500 }}></div>
    </>
  );
}

export default Main;
