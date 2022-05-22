import React from "react";
import styled from "styled-components";

const Box = styled.div`
  height: 300px;
  background-color: lightblue;
`;

const Synonym = () => {
  return (
    <div>
      <Box>동의어 사전</Box>
    </div>
  );
};

export default Synonym;
