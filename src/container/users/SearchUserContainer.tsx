import { ChangeEvent, useState } from "react";
import SearchUser from "../../components/users/SearchUser";

const SearchUserContainer = ({
  onSearch,
}: {
  onSearch: (e: string) => void;
}) => {
  const [searchWord, setSearchWord] = useState<string>("");

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newSearchWord = event.target.value;
    setSearchWord(newSearchWord);
    onSearch(newSearchWord);
  };

  const inputReset = () => {
    setSearchWord("");
    onSearch("");
  };
  return (
    <SearchUser
      searchWord={searchWord}
      handleSearch={handleSearchInputChange}
      inputReset={inputReset}
    />
  );
};

export default SearchUserContainer;
