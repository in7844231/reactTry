import React from "react";
import styled from "styled-components";

interface IntroDetailProps {
  imgPath?: string;
  introText?: string;
  background?: string;
}

const StyledBackground = styled.div`
  background: ${(props: IntroDetailProps) =>
    props.background ? props.background : "#ffffff"};
`;

const IntroTop = ({ ...props }: IntroDetailProps) => {
  return (
    <>
      <StyledBackground background={props.background}>
        <img src={props.imgPath} alt="" />
        <p>{props.introText}</p>
      </StyledBackground>
    </>
  );
};

export default IntroTop;
