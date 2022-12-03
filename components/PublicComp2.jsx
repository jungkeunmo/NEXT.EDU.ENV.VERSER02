import React, { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  height: 400px;

  overflow: hidden;
  position: relative;
`;
const ImageBox = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;

  width: 100%;
  height: 100%;

  object-fit: cover;

  transition: 0.4s;
  border-radius: 4px;

  &:hover {
    transform: scale(1.1);
  }
`;

const ImageText = styled.article`
  position: absolute;
  top: 5%;
  left: 5%;

  color: #fff;
  z-index: 1;
  font-size: 30px;
  font-weight: bold;

  text-shadow: 2px 2px 2px #999;
`;

const PublicComp2 = ({ imgSource, text = false }) => {
  ////////////// STATE //////////////

  ////////////// HOOKS //////////////

  ////////////// EFFECT //////////////

  ////////////// HANDLER //////////////

  return (
    <Box>
      <ImageBox src={imgSource} />
      {text && <ImageText>{text}</ImageText>}
    </Box>
  );
};

export default PublicComp2;
