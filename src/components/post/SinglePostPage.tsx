import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import PostAuthor from "../common/PostAuthor";
import { TimeAgo } from "../common/TimeAgo";
import { selectPostById } from "../../features/posts/postsSlice";
import { ReactionButtons } from "../common/ReactionButtons";
import { RootStateType } from "../../app/store";
import setSanitize from "../../container/common/setSanitize";
import { styled } from "styled-components";

const SinglePostPageBlock = styled.article`
  width: 800px;
  overflow: hidden;
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
    width: 600px;
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
`;

const SinglePostPage = () => {
  const params = useParams();
  const post = useSelector((state: RootStateType) =>
    selectPostById(state, params.postId)
  );

  if (!post) {
    return (
      <section>
        <h2>Page not found!</h2>
      </section>
    );
  }

  const sanitizedContent = setSanitize(post.content);

  return (
    <section>
      <SinglePostPageBlock className="post">
        <h2>{post.title}</h2>
        <div>
          <PostAuthor userId={post.user} />
          <TimeAgo timestamp={post.date} />
        </div>
        <p
          className="post-content"
          dangerouslySetInnerHTML={{ __html: sanitizedContent }}
        />
        <ReactionButtons post={post} />
        <Link to={`/editPost/${post.id}`} className="button">
          Edit Post
        </Link>
      </SinglePostPageBlock>
    </section>
  );
};

export default SinglePostPage;
