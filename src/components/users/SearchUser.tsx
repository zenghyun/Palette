import { ChangeEvent, useState } from "react";
import { styled } from "styled-components";

const SearchUserBlock = styled.div`
  display: flex;
  background-color: #e1e3e752;
  font-size: 1.25rem;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  
  label {
    height: 100%;
    display: block;
    margin: 0 10px;
  }
  #findUser {
    width: 100%;
    border: none;
    background-color: inherit;
    font-size: 1.5rem;
  }  
  #reset {
    background-color: #d2e3fcb9;
    border: none;
    width: 50px;
    cursor: pointer;
  }
`

const SearchUser = ({ onSearch } : { onSearch: (e: string) => void}) => {
  const [searchWord, setSearchWord] = useState<string>("");

  const handleSearchInputChange = (event : ChangeEvent<HTMLInputElement>) => {
    const newSearchWord = event.target.value;
    setSearchWord(newSearchWord);
    onSearch(newSearchWord);
  };

  const InputReset = () => {
    setSearchWord("");
    onSearch("");
  };

  return (
    <>
    <SearchUserBlock>
    <label htmlFor="findUser"> 🔍 </label>
      <input type="text" id="findUser" value={searchWord} onChange={handleSearchInputChange} placeholder=" 검색" />
      <button type="button" id="reset" onClick={InputReset}>취소</button>
    </SearchUserBlock>
    </>
  );
};

export default SearchUser;
