import { useEffect, useState } from "react";

const SearchUser = () => {
  const [searchWord, setSearchWord] = useState<string>("");

  useEffect(() => {
    const searchWordText = document.querySelector(
      "#findUser"
    ) as HTMLInputElement;
    const prefectureList = document.querySelectorAll(".userList");

    searchWordText.addEventListener("keyup", () => {
      setSearchWord(searchWordText.value);
    });

    prefectureList.forEach((element) => {
      const prefectureName = element.getAttribute("data-name") || "";

      if (!searchWord || searchWord === "") {
        element.classList.remove("hide");
      } else {
        const isMatch = prefectureName
          .toLowerCase()
          .includes(searchWord.toLowerCase());
        element.classList.toggle("hide", !isMatch);
      }
    });
  }, [searchWord]);

  return (
    <>
      <label htmlFor="findUser"> 유저 검색 </label>
      <input type="text" id="findUser" />
    </>
  );
};

export default SearchUser;
