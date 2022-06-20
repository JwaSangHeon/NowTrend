import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Intro1 from "../img/소개이미지1.png";
import Intro2 from "../img/소개이미지2.png";
import Intro3 from "../img/소개이미지3.png";
import Intro4 from "../img/소개이미지4.png";
import { Fade } from "react-reveal";

const Title = styled.h1`
  text-align: center;
  color: whitesmoke;
  padding: 80px 0 0 0;
  font-weight: 900;
`;

const IntroItem = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  font-weight: 700;
  font-size: 1.3rem;
  margin: 130px 0;
  @media only screen and (max-width: 768px) {
    font-size: 1.1rem;
    margin: 200px 0;
    img {
      display: none;
    }
  }
`;
const StrongGreen = styled.span`
  color: lightgreen;
`;
const StrongRed = styled.span`
  color: salmon;
`;

const Intro = () => {
  const imgs = [Intro1, Intro2, Intro3, Intro4];
  return (
    <div>
      <Title>서비스 소개 : NowTrend</Title>
      <Fade bottom>
        <IntroItem>
          <p>
            <StrongGreen>NowTrend</StrongGreen>에서는
            <br />
            과거부터 현재까지의 <StrongRed>IT 업계의 기술 키워드</StrongRed>를
            <br />
            <StrongRed>연도별</StrongRed>로 확인할 수 있습니다.
          </p>
          <img
            style={{
              width: "350px",
              background: "lightgray",
              borderRadius: "10px",
            }}
            src={imgs[0]}
            alt="소개"
          />
        </IntroItem>
        <IntroItem>
          <img
            style={{
              width: "350px",
              background: "lightgray",
              borderRadius: "10px",
            }}
            src={imgs[1]}
            alt="소개"
          />
          <p>
            업무와 공부를 하는 실제 사용자들의 <br />
            <StrongRed>블로그에서부터 IT 뉴스, 정부의 보고서</StrongRed>까지
            <br />
            다양한 분야에서 수집해 <StrongGreen>빈도순으로 순위</StrongGreen>를
            매깁니다.
          </p>
        </IntroItem>
        <IntroItem>
          <p>
            <StrongGreen>순위가 매겨진 키워드</StrongGreen>는 대분류로 그 이하의
            기술들을 <br />
            하나의 기술로 보여주고 있습니다.
          </p>
          <img
            style={{
              width: "350px",
              background: "lightgray",
              borderRadius: "10px",
            }}
            src={imgs[2]}
            alt="소개"
          />
        </IntroItem>
        <IntroItem>
          <img
            style={{
              width: "350px",
              background: "lightgray",
              borderRadius: "10px",
            }}
            src={imgs[3]}
            alt="소개"
          />
          <p>
            어떤 키워드가 속해있는지는 순위 아래의
            <br />
            <StrongRed>동의어 사전</StrongRed>에서 확인할 수 있습니다.
          </p>
        </IntroItem>
        <IntroItem>
          <p>
            이런 빈도별 키워드 순위가 곧 트렌드라는 반증은 아니지만,
            <StrongGreen>트렌드를 파악할 수 있는 하나의 지표</StrongGreen>라
            생각합니다.
            <br />
            차후에는 데이터를 더 수집해 더 확실한 결과를 보여드릴 예정입니다.
          </p>
        </IntroItem>
      </Fade>
      <hr />
      <Footer />
    </div>
  );
};

export default Intro;
