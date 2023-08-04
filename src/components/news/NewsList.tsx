import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from "axios";
import usePromise from "./usePromise";
import { useParams } from "react-router-dom";
import { Spinner } from "../common/Spinner";
import { FixedSizeList } from "react-window";

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

const NewsList = () => {
  const params = useParams();

  const [loading, response, error] = usePromise({
    promiseCreator: () => {
      const query =
        params.category === "all" ? "" : `&category=${params.category}`;
      return axios.get(
        `https://newsapi.org/v2/top-headlines?country=kr${query}&apikey=69a43346d69f4551b991f84d01a97b0a`
      );
    },
    deps: [params.category],
  });

  // 대기 중일 때
  if (loading) {
    return <Spinner text="Loading..." />;
  }

  // 아직 response 값이 설정되지 않았을 때
  if (!response) {
    return null;
  }

  // 에러가 발생했을 때
  if (error) {
    return <NewsListBlock>에러 발생!</NewsListBlock>;
  }

  // response 값이 유효할 때
  const articles = response.data.articles;
  if (!articles || articles.length === 0) {
    return <NewsListBlock>뉴스가 없습니다.</NewsListBlock>;
  }

  return (
    <NewsListBlock>
      <FixedSizeList
        height={680}
        width={800}
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
