import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const MyFooter = styled.footer`
  width: 100%;
  height: 350px;
  margin-top: 50px;

  background-color: rgb(30, 30, 30);
  color: #fff;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;

  @media screen and (max-width: 500px) {
    height: 500px;
  } ;
`;

const FooterBox = styled.div`
  min-width: 350px;
`;

const LinkText = styled.span`
  font-size: 16px;
  color: #afafaf;
  margin: 0px 15px;
  cursor: pointer;

  transition: 0.5s;

  &:hover {
    color: #fff;
  }
`;

const Footer = () => {
  ////////////// STATE //////////////

  ////////////// HOOKS //////////////
  const router = useRouter();

  ////////////// EFFECT //////////////

  ////////////// HANDLER //////////////
  const moveLink = useCallback((target) => {
    router.push(target);
  });

  return (
    <MyFooter>
      <FooterBox>정보가 들어갈 곳</FooterBox>
      <FooterBox>
        <LinkText onClick={() => moveLink("/")}>Home</LinkText>
        <LinkText onClick={() => moveLink("/intro")}>Intro</LinkText>
        <LinkText onClick={() => moveLink("/project")}>Project</LinkText>
        <LinkText onClick={() => moveLink("/contact")}>Contact</LinkText>
        <LinkText onClick={() => moveLink("/team")}>Team</LinkText>
      </FooterBox>
      <FooterBox>고객지원이 들어갈 곳</FooterBox>
    </MyFooter>
  );
};

export default Footer;
