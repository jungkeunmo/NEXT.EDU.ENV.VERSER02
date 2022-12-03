import React, { useState } from "react";
import styled from "styled-components";
import {
  AlignLeftOutlined,
  EditOutlined,
  PicRightOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";

const Wrapper = styled.section`
  width: 100%;
  margin: 30px 0px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

const Box = styled.div`
  width: 350px;
  min-width: 350px;
  height: 250px;
  margin: 10px;

  border-radius: 5px;
  box-shadow: 1px 1px 2px #d8d8d8;
  background-color: #d8d8d8;
  cursor: pointer;
  transition: 0.5s;
  padding: 10px;

  &:hover {
    border-radius: 0px;
    background-color: #a0a0a0;
  }

  @media screen and (max-width: 1340px) {
    width: 300px;
    min-width: 300px;
    height: 250px;
  }
  @media screen and (max-width: 1370px) {
    width: 250px;
    min-width: 250px;
    height: 250px;
  }
  @media screen and (max-width: 1000px) {
    width: 350px;
    min-width: 350px;
    height: 250px;
  }
`;

const iconStyle = {
  fontSize: 25,
  color: "#fff",
};

const BoxTitle = styled.article`
  font-size: 20px;
  border-bottom: 2px solid #fff;
  font-weight: bold;
  margin-top: 15px;
`;

const BoxContent = styled.article`
  font-size: 16px;
  color: #4d4d4d;
  margin-top: 20px;
  padding: 10px;
`;

const BoxLink = styled.article`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  float: right;
  margin-top: 45px;
`;

// datum :  title, comtent, link
const PublicComp1 = ({ datum = [] }) => {
  ////////////// STATE //////////////

  ////////////// HOOKS //////////////
  const rt = useRouter();

  ////////////// EFFECT //////////////

  ////////////// HANDLER //////////////
  const moveLink = (target) => {
    rt.push(target);
  };

  return (
    <Wrapper>
      {datum.map((v, idx) => (
        <Box>
          {idx === 0 && <AlignLeftOutlined styled={{ ...iconStyle }} />}
          {idx === 1 && <EditOutlined styled={{ ...iconStyle }} />}
          {idx === 2 && <PicRightOutlined styled={{ ...iconStyle }} />}

          <BoxTitle>{v.title}</BoxTitle>
          <BoxContent>
            {v.content.length > 30
              ? v.content.substring(0, 30) + "..."
              : v.content}
          </BoxContent>
          <BoxLink onClick={() => moveLink(v.link)}>
            MORE
            <RightOutlined />
          </BoxLink>
        </Box>
      ))}
    </Wrapper>
  );
};

export default PublicComp1;
