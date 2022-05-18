import React from "react";
import { useState } from "react";
import styles from "../components/css/Main.module.css";
import Chart from "./Chart";
import UserData from "../sampleData.json";
import ITnewsLinkSlider from "./ITnewsLinkSlider";
import VelogLinkSlider from "./VelogLinkSlider";
import TechBlogLinkSlider from "./TechBlogLinkSlider";
import EmploymentLinkSlider from "./EmploymentLinkSlider";
import Footer from "./Footer";

const JobSite = () => {
  return (
    <div>
      <h1>jobsite</h1>
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

export default JobSite;
