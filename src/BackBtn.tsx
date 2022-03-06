import styled from "styled-components";

interface Backbtn {
  path: string;
}

interface StyledBackBtnProps {
  margin?: string;
  padding?: string;
}

const StyledBackBtn = styled.a<StyledBackBtnProps>`
  margin: 15px 0;
  padding: 15px;
`;

const Btn = (props: Backbtn) => {
  return (
    <>
      <StyledBackBtn>
        <a href={props.path}>&lt; back btn</a>
      </StyledBackBtn>
    </>
  );
};

export default Btn;
