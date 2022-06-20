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
        <ArrowBox>Machinelearning</ArrowBox>
      </WordBox>
      <WordBox>
        <Word>딥러닝</Word>
        <ArrowBox>Deeplearning</ArrowBox>
      </WordBox>
      <WordBox>
        <Word>운영체제</Word>
        <ArrowBox>
          Operationsystem
          <br />
          Os
        </ArrowBox>
      </WordBox>
      <WordBox>
        <Word>컴퓨터구조</Word>
        <ArrowBox>Computerarchitecture</ArrowBox>
      </WordBox>
      <WordBox>
        <Word>사물인터넷</Word>
        <ArrowBox>
          Internetofthings
          <br />
          Iot
        </ArrowBox>
      </WordBox>
      <WordBox>
        <Word>데이터분석</Word>
        <ArrowBox>
          Dataanalytic
          <br />
          Dataanalytics
        </ArrowBox>
      </WordBox>
      <WordBox>
        <Word>데이터사이언스</Word>
        <ArrowBox>Datascience</ArrowBox>
      </WordBox>
      <WordBox>
        <Word>디지털전환</Word>
        <ArrowBox>
          Digitaltransformation
          <br />
          Dx
        </ArrowBox>
      </WordBox>
      <WordBox>
        <Word>메타버스</Word>
        <ArrowBox>Metaverse</ArrowBox>
      </WordBox>
      <WordBox>
        <Word>블록체인</Word>
        <ArrowBox>
          Blockchain
          <br />
          NFT
          <br />
          NonFungibleToken
          <br />
          대체불가토큰
          <br />
          불가토큰
          <br />
          업비트, 비트코인
          <br />
          Bitcoin
          <br />
          이더리움
          <br />
          Ethereum
          <br />
          알트코인
          <br />
          Altcoin
          <br />
          분산원장
          <br /> Distributedledger
          <br />
          스마트계약
          <br />
          Smartcontract
          <br />
          Smartcontracts
          <br /> 분산어플리케이션
          <br />
          Decentralizedapplication
          <br />
          Dapp
          <br />
          디앱
          <br />
          퍼블릭블록체인
          <br /> Publicblockchain
          <br />
          퍼미션리스블록체인
          <br />
          Permissionlessblockchain
          <br /> 비허가형블록체인
          <br />
          공개형블록체인
          <br />
          프라이빗블록체인
          <br />
          Privateblockchain
          <br /> 퍼미션드블록체인
          <br />
          Permissionedblockchain
          <br />
          허가형블록체인
          <br /> 폐쇄형블록체인
        </ArrowBox>
      </WordBox>
      <WordBox>
        <Word>확장현실</Word>
        <ArrowBox>
          Extendedreality
          <br />
          XR
          <br />
          Virtualreality
          <br />
          VR
          <br />
          Augmentedreality
          <br />
          AR
          <br />
          Mixedreality
          <br />
          Mr
        </ArrowBox>
      </WordBox>
      <WordBox>
        <Word>네트워크</Word>
        <ArrowBox>
          Network
          <br />
          Networks
          <br />
          네트웍스
        </ArrowBox>
      </WordBox>
      <WordBox>
        <Word>클라우드</Word>
        <ArrowBox>
          Cloud
          <br />
          Cloudcomputing
          <br />
          클라우드컴퓨팅
        </ArrowBox>
      </WordBox>
      <WordBox>
        <Word>얼굴인식</Word>
        <ArrowBox>
          Facerecognition
          <br />
          안면인식시스템
        </ArrowBox>
      </WordBox>
      <WordBox>
        <Word>서버리스아키텍쳐</Word>
        <ArrowBox>
          Serverlessarchitecture
          <br />
          Serverless
        </ArrowBox>
      </WordBox>
      <WordBox>
        <Word>3G</Word>
        <ArrowBox>
          쓰리지
          <br />
          Thirdgeneration
        </ArrowBox>
      </WordBox>
      <WordBox>
        <Word>4G</Word>
        <ArrowBox>
          포지
          <br />
          Fourthgeneration
        </ArrowBox>
      </WordBox>
      <WordBox>
        <Word>5G</Word>
        <ArrowBox>
          파이브지
          <br />
          Fifthgeneration
        </ArrowBox>
      </WordBox>
      <WordBox>
        <Word>가상화</Word>
        <ArrowBox>Virtualization</ArrowBox>
      </WordBox>
      <WordBox>
        <Word>모바일</Word>
        <ArrowBox>Mobile</ArrowBox>
      </WordBox>
      <WordBox>
        <Word>마케팅</Word>
        <ArrowBox>Marketing</ArrowBox>
      </WordBox>
      <WordBox>
        <Word>데브옵스</Word>
        <ArrowBox>DevOps</ArrowBox>
      </WordBox>
      <WordBox>
        <Word>빅데이터</Word>
        <ArrowBox>BigData</ArrowBox>
      </WordBox>
      <WordBox>
        <Word>엣지컴퓨팅</Word>
        <ArrowBox>Edge Computing</ArrowBox>
      </WordBox>
      <WordBox>
        <Word>로봇공학</Word>
        <ArrowBox>Robotics</ArrowBox>
      </WordBox>
      <WordBox>
        <Word>맞춤형서비스</Word>
        <ArrowBox>Customized service</ArrowBox>
      </WordBox>
      <WordBox>
        <Word>언택트</Word>
        <ArrowBox>
          Untact
          <br />
          비대면
        </ArrowBox>
      </WordBox>
      <WordBox>
        <Word>사이버보안</Word>
        <ArrowBox>Cyber Security</ArrowBox>
      </WordBox>
      <WordBox>
        <Word>초자동화</Word>
        <ArrowBox>Super Automation</ArrowBox>
      </WordBox>
      <WordBox>
        <Word>행동인터넷</Word>
        <ArrowBox>
          IoB
          <br />
          Internet of Behaviors
        </ArrowBox>
      </WordBox>
      <WordBox>
        <Word>멀티경험</Word>
        <ArrowBox>
          다중경험
          <br />
          Multi-Experience
          <br />
          MX
        </ArrowBox>
      </WordBox>
      <WordBox>
        <Word>토탈경험</Word>
        <ArrowBox>
          Total Experience
          <br />
          TX
        </ArrowBox>
      </WordBox>
      <WordBox>
        <Word>대화형플랫폼</Word>
        <ArrowBox>Interactive Platform</ArrowBox>
      </WordBox>
      <WordBox>
        <Word>MASA</Word>
        <ArrowBox></ArrowBox>
      </WordBox>
      <WordBox>
        <Word>HTTP</Word>
        <ArrowBox>
          하이퍼텍스트 전송 프로토콜
          <br />
          Hypertext Transfer Protocol
        </ArrowBox>
      </WordBox>
      <WordBox>
        <Word>HTTPS</Word>
        <ArrowBox>Hypertext Transfer Protocol Secure</ArrowBox>
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
        <Word>인메모리컴퓨팅</Word>
        <ArrowBox>In-Memory computing</ArrowBox>
      </WordBox>
      <WordBox>
        <Word>3D프린팅</Word>
        <ArrowBox>
          3D printing
          <br />
          additive manufacturing
        </ArrowBox>
      </WordBox>
      <WordBox>
        <Word>통합생태계</Word>
        <ArrowBox>Integrated Ecosystem</ArrowBox>
      </WordBox>
      <WordBox>
        <Word>컴퓨팅에브리웨어</Word>
        <ArrowBox>
          Computing EveryWhere
          <br />
          어디서나운영
        </ArrowBox>
      </WordBox>
      <WordBox>
        <Word>앱스토어</Word>
        <ArrowBox>AppStore</ArrowBox>
      </WordBox>
      <WordBox>
        <Word>마켓플레이스</Word>
        <ArrowBox>marketplace</ArrowBox>
      </WordBox>
      <WordBox>
        <Word>저전력서버</Word>
        <ArrowBox>Low Power Server</ArrowBox>
      </WordBox>
      <WordBox>
        <Word>클라우드컴퓨팅</Word>
        <ArrowBox>Cloud Computing</ArrowBox>
      </WordBox>
      <WordBox>
        <Word>양자컴퓨팅</Word>
        <ArrowBox>Quantum Computing</ArrowBox>
      </WordBox>
      <WordBox>
        <Word>증강분석</Word>
        <ArrowBox>Augmented Analysis</ArrowBox>
      </WordBox>
      <WordBox>
        <Word>자바</Word>
        <ArrowBox>Java</ArrowBox>
      </WordBox>
      <WordBox>
        <Word>스프링</Word>
        <ArrowBox>Spring</ArrowBox>
      </WordBox>
      <WordBox>
        <Word>파이썬</Word>
        <ArrowBox>Python</ArrowBox>
      </WordBox>
      <WordBox>
        <Word>C</Word>
        <ArrowBox>C언어</ArrowBox>
      </WordBox>
      <WordBox>
        <Word>C++</Word>
        <ArrowBox></ArrowBox>
      </WordBox>
      <WordBox>
        <Word>자바스크립트</Word>
        <ArrowBox>
          JavaScript
          <br />
          TypeScript
        </ArrowBox>
      </WordBox>
      <WordBox>
        <Word>오픈소스</Word>
        <ArrowBox>OpenSource</ArrowBox>
      </WordBox>
      <WordBox>
        <Word>슈퍼컴퓨터</Word>
        <ArrowBox>SuperComputer</ArrowBox>
      </WordBox>
      <WordBox>
        <Word>그린 IT</Word>
        <ArrowBox>Green IT</ArrowBox>
      </WordBox>
      <WordBox>
        <Word>데이터베이스</Word>
        <ArrowBox>
          DataBase
          <br />
          DB
        </ArrowBox>
      </WordBox>
    </Menu>
  );
};

export default Synonym;
