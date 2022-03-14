import "../styles.css";
import styled from "styled-components";
import IntroTop from "./IntroTop";

interface IntroProps {
  imgPath?: string;
  introText?: string;
  background?: string;
}

export default function Intro() {
  const introObj: IntroProps = {
    imgPath: "https://dummyimage.com/300x200/000/fff",
    introText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dumm",
    background: "#cccccc"
  };
  return (
    <>
      <IntroTop {...introObj} />
    </>
  );
}
