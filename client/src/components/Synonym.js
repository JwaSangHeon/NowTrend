import React from "react";
import styled from "styled-components";

const Menu = styled.div`
  width: 90%;
  margin: 40px auto;
  background: black;
  border: 1px solid #d8d8d8;
  text-align: center;
`;

const MenuTitle = styled.h1`
  padding: 16px;
  font-family: "Kdam Thmor Pro", sans-serif;
`;

const ArrowBox = styled.p`
  display: none;
  position: absolute;
  width: 200px;
  padding: 8px;
  left: 0;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  border-radius: 8px;
  background: gray;
  z-index: 99;
  color: lightgreen;
  font-size: 14px;
  &:after {
    position: absolute;
    bottom: 100%;
    left: 35%;
    width: 0;
    height: 0;
    margin-left: -10px;
    border: solid transparent;
    border-color: rgba(51, 51, 51, 0);
    border-bottom-color: #333;
    border-width: 10px;
    pointer-events: none;
    content: " ";
  }
`;
const WordBox = styled.div`
  position: relative;
  display: inline-block;
  &:hover ${ArrowBox} {
    display: block;
  }
`;

const Word = styled.span`
  display: block;
  width: 150px;
  padding: 2px 16px;
  margin: 16px 0;
  cursor: pointer;
`;

const Synonym = () => {
  return (
    <Menu>
      <MenuTitle>동의어 사전</MenuTitle>
      <WordBox>
        <Word>머신러닝</Word>
        <ArrowBox>machinelearning</ArrowBox>
      </WordBox>
      <WordBox>
        <Word>딥러닝</Word>
        <ArrowBox>deeplearning</ArrowBox>
      </WordBox>
      <WordBox>
        <Word>운영체제</Word>
        <ArrowBox>
          operationsystem
          <br />
          os
        </ArrowBox>
      </WordBox>
      <WordBox>
        <Word>컴퓨터구조</Word>
        <ArrowBox>computerarchitecture</ArrowBox>
      </WordBox>
      <WordBox>
        <Word>사물인터넷</Word>
        <ArrowBox>
          internetofthings
          <br />
          iot
        </ArrowBox>
      </WordBox>
      <WordBox>
        <Word>데이터분석</Word>
        <ArrowBox>
          dataanalytic
          <br />
          dataanalytics
        </ArrowBox>
      </WordBox>
      <WordBox>
        <Word>데이터사이언스</Word>
        <ArrowBox>datascience</ArrowBox>
      </WordBox>
      <WordBox>
        <Word>디지털전환</Word>
        <ArrowBox>
          digitaltransformation
          <br />
          dx
        </ArrowBox>
      </WordBox>
      <WordBox>
        <Word>메타버스</Word>
        <ArrowBox>metaverse</ArrowBox>
      </WordBox>
      <WordBox>
        <Word>블록체인</Word>
        <ArrowBox>
          blockchain
          <br />
          nft
          <br />
          nonfungibletoken
          <br />
          대체불가토큰
          <br />
          불가토큰
          <br />
          업비트, 비트코인
          <br />
          bitcoin
          <br />
          이더리움
          <br />
          ethereum
          <br />
          알트코인
          <br />
          altcoin
          <br />
          분산원장
          <br /> distributedledger
          <br />
          스마트계약
          <br />
          smartcontract
          <br />
          smartcontracts
          <br /> 분산어플리케이션
          <br />
          decentralizedapplication
          <br />
          dapp
          <br />
          디앱
          <br />
          퍼블릭블록체인
          <br /> publicblockchain
          <br />
          퍼미션리스블록체인
          <br />
          permissionlessblockchain
          <br /> 비허가형블록체인
          <br />
          공개형블록체인
          <br />
          프라이빗블록체인
          <br />
          privateblockchain
          <br /> 퍼미션드블록체인
          <br />
          permissionedblockchain
          <br />
          허가형블록체인
          <br /> 폐쇄형블록체인
        </ArrowBox>
      </WordBox>
      <WordBox>
        <Word>확장현실</Word>
        <ArrowBox>
          extendedreality
          <br />
          xr
          <br />
          virtualreality
          <br />
          vr
          <br />
          augmentedreality
          <br />
          ar
          <br />
          mixedreality
          <br />
          mr
        </ArrowBox>
      </WordBox>
      <WordBox>
        <Word>네트워크</Word>
        <ArrowBox>
          network
          <br />
          networks
          <br />
          네트웍스
        </ArrowBox>
      </WordBox>
      <WordBox>
        <Word>클라우드</Word>
        <ArrowBox>
          cloud
          <br />
          cloudcomputing
          <br />
          클라우드컴퓨팅
        </ArrowBox>
      </WordBox>
      <WordBox>
        <Word>얼굴인식</Word>
        <ArrowBox>
          facerecognition
          <br />
          안면인식시스템
        </ArrowBox>
      </WordBox>
      <WordBox>
        <Word>서버리스아키텍쳐</Word>
        <ArrowBox>
          serverlessarchitecture
          <br />
          serverless
        </ArrowBox>
      </WordBox>
      <WordBox>
        <Word>3G</Word>
        <ArrowBox>
          쓰리지
          <br />
          thirdgeneration
        </ArrowBox>
      </WordBox>
      <WordBox>
        <Word>4G</Word>
        <ArrowBox>
          포지
          <br />
          fourthgeneration
        </ArrowBox>
      </WordBox>
      <WordBox>
        <Word>5G</Word>
        <ArrowBox>
          파이브지
          <br />
          fifthgeneration
        </ArrowBox>
      </WordBox>
      <WordBox>
        <Word>가상화</Word>
        <ArrowBox>virtualization</ArrowBox>
      </WordBox>
      <WordBox>
        <Word>모바일</Word>
        <ArrowBox></ArrowBox>
      </WordBox>
      <WordBox>
        <Word>마케팅</Word>
        <ArrowBox></ArrowBox>
      </WordBox>
      <WordBox>
        <Word>데브옵스</Word>
        <ArrowBox></ArrowBox>
      </WordBox>
      <WordBox>
        <Word>빅데이터</Word>
        <ArrowBox></ArrowBox>
      </WordBox>
      <WordBox>
        <Word>엣지컴퓨팅</Word>
        <ArrowBox></ArrowBox>
      </WordBox>
      <WordBox>
        <Word>로봇공학</Word>
        <ArrowBox></ArrowBox>
      </WordBox>
      <WordBox>
        <Word>맞춤형서비스</Word>
        <ArrowBox></ArrowBox>
      </WordBox>
      <WordBox>
        <Word>언택트</Word>
        <ArrowBox></ArrowBox>
      </WordBox>
      <WordBox>
        <Word>사이버보안</Word>
        <ArrowBox></ArrowBox>
      </WordBox>
      <WordBox>
        <Word>초자동화</Word>
        <ArrowBox></ArrowBox>
      </WordBox>
      <WordBox>
        <Word>행동인터넷</Word>
        <ArrowBox></ArrowBox>
      </WordBox>
      <WordBox>
        <Word>멀티경험</Word>
        <ArrowBox></ArrowBox>
      </WordBox>
      <WordBox>
        <Word>토탈경험</Word>
        <ArrowBox></ArrowBox>
      </WordBox>
      <WordBox>
        <Word>대화형플랫폼</Word>
        <ArrowBox></ArrowBox>
      </WordBox>
      <WordBox>
        <Word>MASA</Word>
        <ArrowBox></ArrowBox>
      </WordBox>
      <WordBox>
        <Word>HTTP</Word>
        <ArrowBox></ArrowBox>
      </WordBox>
      <WordBox>
        <Word>HTTPS</Word>
        <ArrowBox></ArrowBox>
      </WordBox>
      <WordBox>
        <Word>HTML5</Word>
        <ArrowBox></ArrowBox>
      </WordBox>
      <WordBox>
        <Word>HTML4</Word>
        <ArrowBox></ArrowBox>
      </WordBox>
      <WordBox>
        <Word>인메모리컴퓨팅 </Word>
        <ArrowBox></ArrowBox>
      </WordBox>
      <WordBox>
        <Word>3D프린팅 </Word>
        <ArrowBox></ArrowBox>
      </WordBox>
      <WordBox>
        <Word>통합생태계 </Word>
        <ArrowBox></ArrowBox>
      </WordBox>
      <WordBox>
        <Word>컴퓨팅에브리웨어</Word>
        <ArrowBox></ArrowBox>
      </WordBox>
      <WordBox>
        <Word>앱스토어 </Word>
        <ArrowBox></ArrowBox>
      </WordBox>
      <WordBox>
        <Word>마켓플레이스 </Word>
        <ArrowBox></ArrowBox>
      </WordBox>
      <WordBox>
        <Word>저전력서버 </Word>
        <ArrowBox></ArrowBox>
      </WordBox>
      <WordBox>
        <Word>클라우드컴퓨팅 </Word>
        <ArrowBox></ArrowBox>
      </WordBox>
      <WordBox>
        <Word>행동인터넷 </Word>
        <ArrowBox></ArrowBox>
      </WordBox>
      <WordBox>
        <Word>어디서나운영 </Word>
        <ArrowBox></ArrowBox>
      </WordBox>
      <WordBox>
        <Word>양자컴퓨팅 </Word>
        <ArrowBox></ArrowBox>
      </WordBox>
      <WordBox>
        <Word>증강분석 </Word>
        <ArrowBox></ArrowBox>
      </WordBox>

      <WordBox>
        <Word>자바</Word>
        <ArrowBox></ArrowBox>
      </WordBox>
      <WordBox>
        <Word>스프링</Word>
        <ArrowBox></ArrowBox>
      </WordBox>
      <WordBox>
        <Word>파이썬</Word>
        <ArrowBox></ArrowBox>
      </WordBox>
      <WordBox>
        <Word>C</Word>
        <ArrowBox></ArrowBox>
      </WordBox>
      <WordBox>
        <Word>C++</Word>
        <ArrowBox></ArrowBox>
      </WordBox>
      <WordBox>
        <Word>자바스크립트</Word>
        <ArrowBox></ArrowBox>
      </WordBox>
      <WordBox>
        <Word>오픈소스</Word>
        <ArrowBox></ArrowBox>
      </WordBox>
      <WordBox>
        <Word>슈퍼컴퓨터</Word>
        <ArrowBox></ArrowBox>
      </WordBox>
      <WordBox>
        <Word>그린 IT</Word>
        <ArrowBox></ArrowBox>
      </WordBox>
      <WordBox>
        <Word>데이터베이스</Word>
        <ArrowBox></ArrowBox>
      </WordBox>
    </Menu>
  );
};

export default Synonym;
