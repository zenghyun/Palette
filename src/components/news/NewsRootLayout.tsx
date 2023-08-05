import { Outlet } from "react-router-dom";
import NewsCategories from "./NewsCategories";
import { styled } from "styled-components";

const NewsRootBlock = styled.div`
  display: flex;
  flex-direction: column;
`

const NewsRootLayout = () => {
  return (
    <NewsRootBlock>
      <NewsCategories />
      <Outlet />
    </NewsRootBlock>
  );
};

export default NewsRootLayout;
