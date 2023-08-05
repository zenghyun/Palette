import styled from "styled-components";
import NewsItem from "./NewsItem";
import { CSSProperties } from "react";
import { NewsListComponentType } from "../../type/newsType";
import FixedWindow from "../../container/common/FixedWindow";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 800px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  margin-top: 1rem;
`;

const NoNewsMessage = styled.div`
  text-align: center;
  margin-top: 1rem;
`;

const NewsList = ({ articles, error, noNews }: NewsListComponentType) => {
  if (error) {
    return <ErrorMessage>에러 발생!</ErrorMessage>;
  }

  if (noNews) {
    return <NoNewsMessage>{noNews}</NoNewsMessage>;
  }

  const renderedNews = ({
    index,
    style,
  }: {
    index: number;
    style: CSSProperties;
  }) => (
    <div style={style}>
      <NewsItem article={articles[index]} />
    </div>
  );
  return (
    <NewsListBlock>
      <FixedWindow
        height={820}
        width={800}
        itemCount={articles}
        itemSize={230}
        renderedItem={renderedNews}
      />
    </NewsListBlock>
  );
};

export default NewsList;
