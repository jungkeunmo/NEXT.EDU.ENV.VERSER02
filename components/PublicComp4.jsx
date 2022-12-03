import { Descriptions } from "antd";
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const Appear = keyframes`
    0% {
        opacity: 0;
        margin-right: 100px;
    } 100% {
        opacity: 1;
        margin-right:  0px;
    }
`;

const Whole = styled.section`
  margin: 60px 0px;

  width: 100%;
  padding: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${Appear} 1s forwards;
`;

const ViewTitle = styled.div`
  margin-bottom: 30px;
  color: #676767;
  font-size: 22px;
  border-bottom: 4.5px solid #999;
`;

const ViewDesc = styled.div`
  margin-bottom: 30px;
  color: #3b3b3b;
  font-size: 18px;
`;

const PublicComp4 = ({
  title = "Title을 입력해주세요.",
  desc = "description을 입력해주세요.",
}) => {
  ////////////// STATE //////////////

  ////////////// HOOKS //////////////

  ////////////// EFFECT //////////////

  ////////////// HANDLER //////////////

  return (
    <Whole>
      <ViewTitle>{title}</ViewTitle>
      <ViewDesc>{desc}</ViewDesc>
    </Whole>
  );
};

export default PublicComp4;
