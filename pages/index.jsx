import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import QuickMenu from "../components/QuickMenu";
import Fade from "react-reveal";
import PublicComp1 from "../components/PublicComp1";
import PublicComp2 from "../components/PublicComp2";
import PublicComp3 from "../components/PublicComp3";
import PublicComp4 from "../components/PublicComp4";
import Header_A from "../components/naviagtion/Header_A";

const datum = [
  {
    name: "INTRO",
    target: "/intro",
  },
  {
    name: "CONTACT",
    target: "/contact",
  },
  {
    name: "TEAM",
    target: "/team",
  },
  {
    name: "PROJECT",
    target: "/project",
  },
];

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & .react-reveal {
    width: 100%;
    padding: 0px !important;
  }
`;

const ImageSection = styled.section`
  width: 100%;
  padding: 20px 0px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Image = styled.img`
  width: 50%;
  height: 400px;

  object-fit: cover;
  box-shadow: 3px 3px 7px #999;
  transition: 0.5s;

  &:hover {
    transform: scale(1.02);
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    height: 300px;
  } ;
`;

const QuickSection = styled.section`
  width: 100%;
  padding: 20px 0px;
`;

const App = () => {
  return (
    <Wrapper>
      <Header_A></Header_A>

      <Fade left>
        <ImageSection>
          <Image
            src="https://i.pinimg.com/474x/db/81/d2/db81d2f95ebe0de478a843f305537b6e.jpg"
            alt="메인이미지1"
          />
          <Image
            src="https://i.pinimg.com/474x/9f/6f/3b/9f6f3b41e8687357afbdd43eedb51b69.jpg"
            alt="메인이미지2"
          />
        </ImageSection>
      </Fade>
      <Fade bottom>
        <QuickSection>
          <QuickMenu datum={datum} />
        </QuickSection>
      </Fade>

      <div style={{ height: "150px" }}></div>
      <PublicComp4
        title="
        No One Knows The Future."
        desc="As Steve Jobs  Said..."
      />
      <div style={{ height: "150px" }}></div>

      <PublicComp2
        imgSource="https://i.pinimg.com/474x/4a/8f/9b/4a8f9bda785b3c50387b17386a448c95.jpg"
        text="APPLE"
      />

      <PublicComp4
        title="There is no time. Don't give up your life for someone else."
        desc="As Steve Jobs  Said..."
      />

      <PublicComp1
        datum={[
          {
            title: "INTROUCE",
            content: "introduce Us. Come To Here",
            link: "/intro",
          },
          {
            title: "OUR TEAM",
            content: "Team Profile And Team Description",
            link: "/team",
          },
          {
            title: "SHOW YOUR THINK",
            content: "If You Contact us...",
            link: "/contact",
          },
        ]}
      />

      <PublicComp3 />
    </Wrapper>
  );
};

export default App;
