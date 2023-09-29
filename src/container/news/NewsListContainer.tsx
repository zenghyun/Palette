import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import usePromise from "../../container/news/usePromise";
import NewsList from "../../components/news/NewsList";
import Loading from "../../components/common/Loading";
import { debounce, setWidth } from "../common/responsiveWindow";
import { NewsListCategoryType } from "../../type/newsType";

const API_KEY = "69a43346d69f4551b991f84d01a97b0a";

const NewsListContainer = () => {
  const params = useParams<NewsListCategoryType>();
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    // window resize debounce 시킴
    const handleResize = debounce(() => {
      setWindowWidth(window.innerWidth);
    }, 250); // 250ms 지연

    window.addEventListener("resize", handleResize);

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [loading, response, error] = usePromise({
    promiseCreator: () => {
      const query =
        params.category === "all" ? "" : `&category=${params.category}`;
      return axios.get(
        `https://newsapi.org/v2/top-headlines?country=kr${query}&apikey=${API_KEY}`
      );
    },
    deps: [params.category],
  });

  if (loading) {
    return <Loading />;
  }

  if (!response) {
    return (
      <NewsList
        articles={[]}
        error
        text={"NewsAPI의 정책으로 인하여 localhost외의 모든 요청은 거부되어 data를 가져올 수 없습니다. (426 Error)"}
      />
    );
  }

  if (error) {
    return <NewsList articles={[]} error text={"에러 발생!"} />;
  }

  const articles = response.data.articles;
  if (!articles || articles.length === 0) {
    const text = "뉴스가 없습니다.";
    return <NewsList articles={[]} noNews={text} />;
  }

  const width = setWidth(windowWidth, "NEWS");

  return <NewsList articles={articles} width={width} />;
};

export default NewsListContainer;
