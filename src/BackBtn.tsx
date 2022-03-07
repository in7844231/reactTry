import styled from "styled-components";

interface Backbtn {
  path: string;
  isDisplay: boolean;
}

interface StyledBackBtnProps {
  isDisplay?: boolean;
}

/*what is the useage when styled.a<TYPE?>*/
const StyledBackBtn = styled.a`
  display: ${(props: StyledBackBtnProps) =>
    props.isDisplay ? "block" : "none"};
  text-align: left;
`;

const Btn = (props: Backbtn) => {
  return (
    <>
      <StyledBackBtn href="#" isDisplay={props.isDisplay}>
        &lt; back btn
      </StyledBackBtn>
    </>
  );
};

export default Btn;
