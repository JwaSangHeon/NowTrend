import React from "react";
import styled from "styled-components";

const Box = styled.div`
  text-align: center;
  line-height: 300px;
  height: 300px;
  font-size: 50px;
  background-color: lightgreen;
`;

const Synonym = () => {
  return (
    <div>
      <Box>동의어 사전(개발 중)</Box>
    </div>
  );
};

export default Synonym;
