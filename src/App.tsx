import styled from "styled-components";
import "./App.css";
import LogoImg from "./assets/OMDb-logo.svg";
import BackgroundImg from "./assets/hero_bg.jpg";
import Searchbar from "./components/Searchbar";

const Background = styled.div`
  position: relative;
  height: 450px;
  background-image: url(${BackgroundImg});
  background-size: cover;
  background-position: center;
`;

const Logo = styled.img`
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translateX(-50%);
  width: 450px;
  height: auto;
`;

function App() {
  return (
    <>
      <Background>
        <Logo src={LogoImg}></Logo>
        <Searchbar></Searchbar>
      </Background>
    </>
  );
}

export default App;
