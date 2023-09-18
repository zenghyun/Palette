import LinkButton from "../common/LinkButton";
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
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: min-content;
    max-height: 550px;
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

  .post-content .ql-align-justify {
    text-align: justify;
  }
  .post-content .ql-align-center {
    text-align: center;
  }
  .post-content .ql-align-right {
    text-align: right;
  }

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
        <LinkButton link={`/editPost/${post.id}`} title={"Edit Post"} />
      </SinglePostPageBlock>
    </section>
  );
};

export default SinglePostPage;
