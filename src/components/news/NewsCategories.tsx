import styled from "styled-components";
import { NavLink } from "react-router-dom";

const categories = [
  {
    name: "all",
    text: "전체보기",
  },
  {
    name: "business",
    text: "비즈니스",
  },
  {
    name: "entertainment",
    text: "엔터테인먼트",
  },
  {
    name: "health",
    text: "건강",
  },
  {
    name: "science",
    text: "과학",
  },
  {
    name: "sports",
    text: "스포츠",
  },
  {
    name: "technology",
    text: "기술",
  },
];

const CategoriesBlock = styled.div`
  display: flex;
  width: 800px;
  margin: 0 auto;
  height: min-content;
  padding: 1rem;
  transition:  all 0.3s ease;
  
  @media screen and (max-width: 1200px) {
    width: 570px;
  }

  @media screen and (max-width: 768px) {
    width: 530px;
  }

  @media screen and (max-width: 576px) {
    width: 340px;
  }

  @media screen and (max-width: 390px) {
    width: 320px;
  }
`;

const Category = styled(NavLink)`
  font-size: 1.125rem;
  width: 100%;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;
  display: flex;
  justify-content: center;

  &:hover {
    color: #495057;
  }

  &.active {
    font-weight: 600;
    color: #22b8cf;
    &:hover {
      color: #3bc9db;
    }
  }

  & + & {
    margin-left: 1rem;
  }

  @media screen and (max-width: 1200px) {
    & + & {
      margin-left: 0;
    }
  }
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
    margin: 0 auto;
  }

  @media screen and (max-width: 576px) {
    & + & {
      margin-left: 1rem;
    }
    font-size: 0.8rem;
    margin: 0 auto;
  }
  @media screen and (max-width: 576px) {
    & + & {
      margin-left: 0.5rem;
    }
    font-size: 0.5rem;
    margin: 0 auto;
  }
`;

const NewsCategories = () => {
  return (
    <CategoriesBlock>
      {categories.map((c) => (
        <Category
          key={c.name}
          className={({ isActive }) => (isActive ? "active" : "")}
          to={`/news/${c.name}`}
        >
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
};

export default NewsCategories;
