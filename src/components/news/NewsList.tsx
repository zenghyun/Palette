import styled from "styled-components";
import { FixedSizeList } from "react-window";
import NewsItem from "./NewsItem";
import { NewsListComponentType } from "../../container/news/NewsListContainer";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  overflow: hidden auto;
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

  return (
    <NewsListBlock>
      <FixedSizeList
        height={620}
        width={830}
        itemSize={210} // 각 항목의 높이를 설정합니다.
        itemCount={articles.length}
      >
        {({ index, style }) => (
          <div style={style}>
            <NewsItem article={articles[index]} />
          </div>
        )}
      </FixedSizeList>
    </NewsListBlock>
  );
};

export default NewsList;
