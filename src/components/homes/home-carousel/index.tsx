import React, { useState } from "react";
import { HomePhoto } from "@/types/home";
import styled from "styled-components";
import Image from "next/image";
import Text from "@/components/text";

interface IHomeCarouselProps {
  photos: HomePhoto[];
}

const Container = styled.div`
  width: 390px;
  height: 208px;
  display: flex;
  position: relative;

  img {
    margin-left: -50px;
    border-radius: 2px;
  }

  &:hover {
    .previous {
      display: flex;
    }

    .next {
      display: flex;
    }
  }
`;

const Left = styled.div`
  width: 50px;
  height: 208px;
  z-index: 10;
  display: none;
  position: absolute;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.1);

  span {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    border-radius: 50%;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.9);
  }

  &:hover {
    cursor: pointer;
  }
`;

const Right = styled.div`
  left: 340px;
  width: 50px;
  height: 208px;
  z-index: 10;
  display: none;
  position: absolute;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.1);

  span {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    border-radius: 50%;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.9);
  }

  &:hover {
    cursor: pointer;
  }
`;

const HomeCarousel = ({ photos }: IHomeCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNext() {
    setCurrentIndex((prevValue) =>
      prevValue >= photos.length - 1 ? 0 : prevValue + 1
    );
  }
  function handlePrevious() {
    setCurrentIndex((prevValue) =>
      prevValue <= 0 ? photos.length - 1 : prevValue - 1
    );
  }

  return (
    <Container>
      <Left onClick={handlePrevious} className="previous">
        <span>
          <Text fontWeight={700} opacity={0.3}>
            {"<"}
          </Text>
        </span>
      </Left>

      {/* TODO: Future improvement -> Improve loading performance prefetching the images */}
      {/* TODO II: Future improvement -> Improve image transition with animation */}

      <Image
        src={`${photos[currentIndex].url}?width=390&height=208&quality=90`}
        key={photos[currentIndex].listOrder}
        alt="Home photography"
        width="390px"
        height="208px"
      />

      <Right onClick={handleNext} className="next">
        <span>
          <Text fontWeight={700} opacity={0.3}>
            {">"}
          </Text>
        </span>
      </Right>
    </Container>
  );
};

export default React.memo(HomeCarousel);
