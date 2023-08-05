import { styled } from "styled-components";
import { SearchUserType } from "../../type/userType";

const SearchUserBlock = styled.div`
  display: flex;
  background-color: #e1e3e752;
  font-size: 1.25rem;
  width: 100%;
  border-radius: 20px;

  label {
    height: 100%;
    display: block;
    margin: 0 10px;
  }
  #findUser {
    font-family: "Gowun Batang", serif;
    width: 100%;
    border: none;
    background-color: inherit;
    font-size: 1.5rem;
  }
  #reset {
    font-family: "Gowun Batang", serif;
    font-weight: bold;
    background-color: #d2e3fcb9;
    border: none;
    width: 50px;
    cursor: pointer;
  }
`;

const SearchUser = ({
  searchWord,
  handleSearch,
  inputReset,
}: SearchUserType) => {
  return (
    <>
      <SearchUserBlock>
        <label htmlFor="findUser"> 🔍 </label>
        <input
          type="text"
          id="findUser"
          value={searchWord}
          onChange={handleSearch}
          placeholder=" 검색"
        />
        <button type="button" id="reset" onClick={inputReset}>
          취소
        </button>
      </SearchUserBlock>
    </>
  );
};

export default SearchUser;
