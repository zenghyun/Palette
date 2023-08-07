import styled from "styled-components";
import { INewsApiArticle } from "../../type/apiType";

const NewsItemBlock = styled.div`
  display: flex;
  overflow-x: hidden;
  transition: all 0.3s ease;

  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }

  .contents {
    h2 {
      margin: 0;
      font-size: 1.4rem;
      width: 560px;
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
      width: 580px;
    }
  }

  & + & {
    margin-top: 3rem;
  }

  @media screen and (max-width: 1200px) {
    .thumbnail {
      img {
        width: 140px;
        height: 80px;
      }
    }
    .contents {
      h2 {
        width: 370px;
        font-size: 1rem;
      }
      p {
        width: 370px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .contents {
      h2 {
        width: 360px;
      }
      p {
        width: 360px;
      }
    }
  }
  @media screen and (max-width: 576px) {
    .thumbnail {
      img {
        width: 100px;
        height: 80px;
      }
    }
    .contents {
      h2 {
        width: 200px;
      }
      p {
        display: none;
      }
    }
  }
`;
const NewsItem = ({ article }: { article: INewsApiArticle }) => {
  const { title, description, url, urlToImage } = article;
  return (
    <NewsItemBlock>
      {urlToImage && (
        <div className="thumbnail">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt="thumbnail" />
          </a>
        </div>
      )}
      <div className="contents">
        <h2>
          <a href={url} target="_blank" rel="noopenner noreferrer">
            {title}
          </a>
        </h2>
        <p>{description?.substring(0, 150)}...</p>
      </div>
    </NewsItemBlock>
  );
};

export default NewsItem;
