import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { UseRouter } from "react";
import { useRouter } from "next/router";
import { useCallback } from "react";

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
`;

const Box = styled.div`
  width: ${(props) => props.size};
  height: 80px;
  border: 0.6px solid #cecece;
  padding: 30px 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transition: 0.5s;
  box-shadow: 3px 3px 7px #999;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    border-radius: 10px;
    background-color: #2e2b2b;
    color: white;
    font-size: 24px;
  }
  &:not(:last-child) {
    border-right: 0px;
  }

  @media screen and (max-width: 500px) {
    &:hover {
      font-size: 18px;
    }
  } ;
`;

const QuickMenu = ({ datum = [] }) => {
  ////////////// STATE //////////////

  ////////////// HOOKS //////////////
  const router = useRouter();

  ////////////// EFFECT //////////////

  ////////////// HANDLER //////////////
  const movePage = useCallback((target) => {
    router.push(target);
  });

  return (
    <Wrapper>
      {datum.map((v) => {
        if (datum.length === 0) null;
        return (
          <Box
            onClick={() => movePage(v.target)}
            key={v.name}
            size={`calc(100% / ${datum.length})`}
          >
            {v.name}
          </Box>
        );
      })}
    </Wrapper>
  );
};

export default QuickMenu;
