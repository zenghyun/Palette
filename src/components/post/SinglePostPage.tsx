import { Link } from "react-router-dom";
import TimeAgo from "../common/TimeAgo";
import ReactionButtonContainer from "../../container/common/ReactionButtonContainer";
import { styled } from "styled-components";
import PostAuthorContainer from "../../container/common/PostAuthorContainer";
import { PostStateType } from "../../type/postType";

const SinglePostPageBlock = styled.article`
  width: 800px;
  overflow: hidden;
  transition: all 0.3s ease;
  h2 {
    font-size: 2.5rem;
    margin-bottom: 5px;
  }

  .post-content {
    display: flex;
    flex-direction: column;
    min-height: min-content; /* 최소 높이 min-content */
    max-height: 550px; /* 최대 높이 500px */
    overflow: hidden auto;
  }
  .post-content blockquote {
    border-left: 4px solid #ccc;
    margin: 5px 0 5px 10px;
    padding-left: 16px;
  }
  .post-content p {
    margin: 0;
  }

  .post-content iframe {
    width: 400px;
    height: 400px;
  }

  .post-content pre {
    background-color: #23241f;
    color: #f8f8f2;
    overflow: visible;
    white-space: pre-wrap;
    margin-bottom: 5px;
    margin-top: 5px;
    padding: 5px 10px;
    border-radius: 3px;
    font-size: 1.3rem;
  }

  .post-content img {
    width: 600px;
    height: 600px;
  }

  /* 화면 너비 0 ~ 768px */
  @media (max-width: 768px) {
    width: 500px;

 h2 {
    font-size: 2rem;
  }
    .post-content {
      max-height: 420px;
      & img {
        width: 450px;
        height: 450px;
      }
    }
  }

  /* 화면 너비 0 ~ 576px */
  @media (max-width: 576px) {
    width: 300px;
    h2 {
    font-size: 1.5rem;
  }
    .post-content {
      max-height: 420px;
      & iframe {
        width: 200px;
      }
      & img {
        width: 250px;
        height: 250px;
      }
    }
  }

`;

const SinglePostPage = ({
  post,
  sanitizedContent,
}: {
  post: PostStateType;
  sanitizedContent: string;
}) => {
  return (
    <section>
      <SinglePostPageBlock className="post">
        <h2>{post.title}</h2>
        <div>
          <PostAuthorContainer userId={post.user} />
          <TimeAgo timestamp={post.date} />
        </div>
        <p
          className="post-content"
          dangerouslySetInnerHTML={{ __html: sanitizedContent }}
        />
        <ReactionButtonContainer post={post} />
        <Link to={`/editPost/${post.id}`} className="button">
          Edit Post
        </Link>
      </SinglePostPageBlock>
    </section>
  );
};

export default SinglePostPage;
