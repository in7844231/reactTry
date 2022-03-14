import "./styles.css";
import BackBtn from "./BackBtn";
import styled from "styled-components";
import Intro from "./introduction";

interface Banner {
  bannerPath: string;
}

interface Backbtn {
  path: string;
  isDisplay: boolean;
}

const bannerObj: Banner = {
  bannerPath: "https://dummyimage.com/600x400/000/fff.jpg"
};

const backBtnObj: Backbtn = {
  path: "google.com",
  isDisplay: true
};

const MainSection = styled.section`
  margin: 10px 0;
`;

export default function App() {
  return (
    <div className="App">
      <h1>testing</h1>

      <div className="stProtect">
        <div className="bannerWrapper">
          <img src={bannerObj.bannerPath} className="bannerImg" alt="" />
        </div>
        <MainSection>
          <div className="mainContainer">
            <BackBtn path={backBtnObj.path} isDisplay={true} />
          </div>
          <Intro />
        </MainSection>
      </div>
    </div>
  );
}
