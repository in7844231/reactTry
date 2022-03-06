import "./styles.css";
import BackBtn from "./BackBtn";

interface Banner {
  bannerPath: string;
}

interface Backbtn {
  path: string;
}

const bannerObj: Banner = {
  bannerPath: "https://dummyimage.com/600x400/000/fff.jpg"
};

const backBtnObj: Backbtn = {
  path: "google.com"
};

export default function App() {
  return (
    <div className="App">
      <h1>testing</h1>

      <div className="stProtect">
        <div className="bannerWrapper">
          <img src={bannerObj.bannerPath} className="bannerImg" alt="" />
        </div>
        <div className="mainContainer">
          <BackBtn path={backBtnObj.path} />
        </div>
      </div>
    </div>
  );
}
