import { useParams } from "react-router-dom";
import axios from "axios";
import usePromise from "../../container/news/usePromise";
import NewsList from "../../components/news/NewsList";
import Spinner from "../../components/common/Spinner";
import { INewsApiArticle } from "../../type/apiType";

export type NewsListComponentType = {
  articles: INewsApiArticle[];
  error?: unknown;
  noNews?: string;
};

const NewsListContainer = () => {
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
    return <NewsList articles={[]} error />;
  }

  // response 값이 유효할 때
  const articles = response.data.articles;
  if (!articles || articles.length === 0) {
    const text = "뉴스가 없습니다.";
    return <NewsList articles={[]} noNews={text} />;
  }

  return <NewsList articles={articles} />;
};

export default NewsListContainer;
