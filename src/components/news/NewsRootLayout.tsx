import { Outlet } from "react-router-dom";
import NewsCategories from "./NewsCategories";

const NewsRootLayout = () => {
  return (
    <>
      <NewsCategories />
      <Outlet />
    </>
  );
};

export default NewsRootLayout;
