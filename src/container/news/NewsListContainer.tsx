import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import usePromise from "../../container/news/usePromise";
import NewsList from "../../components/news/NewsList";
import Spinner from "../../components/common/Spinner";
import { debounce, setWidth } from "../common/responsiveWindow";

const API_KEY = "";

const NewsListContainer = () => {
  const params = useParams();
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    // window resize debounce 시킴
    const handleResize = debounce(() => {
      setWindowWidth(window.innerWidth);
    }, 250); // 250ms 지연

    window.addEventListener("resize", handleResize);

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
    return <Spinner />;
  }

  if (!response) {
    return null;
  }

  if (error) {
    return <NewsList articles={[]} error />;
  }

  const articles = response.data.articles;
  if (!articles || articles.length === 0) {
    const text = "뉴스가 없습니다.";
    return <NewsList articles={[]} noNews={text} />;
  }

  const width = setWidth(windowWidth, "NEWS");

  return <NewsList articles={articles} width={width}/>;
};

export default NewsListContainer;
