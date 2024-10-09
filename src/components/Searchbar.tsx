import styled from "styled-components";
import SearchIconImgSrc from "../assets/Search_alt.svg";

const SearchbarContainer = styled.div`
  position: absolute;
  bottom: -7.5%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #20293a;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 40%;
  padding-bottom: 20px;
  padding-top: 20px;
  display: flex;
  gap: 16px;
  padding-left: 28px;
`;

const SearchIconImg = styled.img``;

const SearchbarInputField = styled.input`
  color: #97a3b6;
  background-color: #20293a;
  border: none;

  &:focus {
    outline: none;
  }
`;

const Searchbar = () => {
  return (
    <SearchbarContainer>
      <SearchIconImg src={SearchIconImgSrc}></SearchIconImg>
      <SearchbarInputField
        type="input"
        placeholder="Search movie"
      ></SearchbarInputField>
    </SearchbarContainer>
  );
};

export default Searchbar;
