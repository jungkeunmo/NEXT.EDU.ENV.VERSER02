import React, { useState, useCallback } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  padding: 30px 0px;
  display: flex;
  flex-direction: ${(props) => props.reverse};
`;

const ImageBox = styled.div`
  width: 350px;
  height: 350px;

  position: relative;
  margin-right: 40px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0px;
  left: 0px;
  transition: 0.5s;

  object-fit: cover;
  &:hover {
    transform: scale(1.1);
  }
`;

const PrevBtn = styled.div`
  position: absolute;
  top: 50%;
  left: 3px;
  color: #080000;
  z-index: 2;
  text-shadow: 2px 2px 2px #fff;
  font-size: 25px;

  cursor: pointer;
  font-weight: bold;
`;

const NextBtn = styled.div`
  position: absolute;
  top: 50%;

  right: 3px;
  color: #080000;
  z-index: 2;
  font-size: 25px;
  text-shadow: 2px 2px 2px #fff;

  cursor: pointer;
  font-weight: bold;
`;

const PublicComp3 = ({
  reverse = false,

  arr = [
    {
      imageSource:
        "https://i.pinimg.com/474x/89/67/ff/8967ff7b75019bfd65fc4a4260187c8a.jpg",
      title: "AIRODS MAX",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum mollitia at doloremque perspiciatis accusamus ratione repellat ut quasi expedita ad, magni consequatur vero aliquid nulla assumenda, porro atque labore blanditiis!",
    },
    {
      imageSource:
        "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQD83?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1660803972361",
      title: "AIRPODS PRO2",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum mollitia at doloremque perspiciatis accusamus ratione repellat ut quasi expedita ad, magni consequatur vero aliquid nulla assumenda, porro atque labore blanditiis!",
    },
    {
      imageSource:
        "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MME73_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1632861338000",
      title: "AIRPODS 3TH",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum mollitia at doloremque perspiciatis accusamus ratione repellat ut quasi expedita ad, magni consequatur vero aliquid nulla assumenda, porro atque labore blanditiis!",
    },
  ],
}) => {
  ////////////// STATE //////////////
  const [idx, setIdx] = useState(0);

  ////////////// HOOKS //////////////

  ////////////// EFFECT //////////////

  ////////////// HANDLER //////////////
  const prevHandler = useCallback(() => {
    setIdx((prev) => {
      if (prev === 0) {
        return arr.length - 1;
      } else {
        return prev - 1;
      }
    });
  }, [idx]);

  const nextHandler = useCallback(() => {
    setIdx((prev) => {
      if (prev === arr.length - 1) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  }, [idx]);

  return (
    <Box reverse={reverse ? "row-reverse" : "row"}>
      <ImageBox>
        <Image src={arr[idx].imageSource} />
        <PrevBtn onClick={prevHandler}>＜</PrevBtn>
        <NextBtn onClick={nextHandler}>＞</NextBtn>
      </ImageBox>

      <div>
        <div>{arr[idx].title}</div>
        <article>{arr[idx].desc}</article>
      </div>
    </Box>
  );
};

export default PublicComp3;
