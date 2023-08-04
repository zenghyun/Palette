import React from "react";
import { Link } from "react-router-dom";
import TimeAgo from "../common/TimeAgo";
import ReactionButtonContainer from "../../container/common/ReactionButtonContainer";
import setSanitize from "../../container/post/setSanitize";
import { PostStateType } from "../../type/postType";
import { styled } from "styled-components";
import PostAuthorContainer from "../../container/common/PostAuthorContainer";

const PostExcerptBlock = styled.article`
  padding: 0.25rem 0.25rem;
  border: 1px solid rgb(177, 174, 174);
  border-radius: 7px;
  height: 250px;
  margin-bottom: 10px;

  h3 {
    margin: 0;
    font-size: 1.5rem;
    margin-top: 10px;
    margin-left: 20px;
    margin-bottom: 10px;
  }

  .middleSection {
    margin-bottom: 20px;
    height: 50px;
    overflow: hidden;
  }
`;

const PostExcerpt = React.memo(({ post }: { post: PostStateType }) => {
  const sanitizedContent = setSanitize(`${post.content.substring(0, 100)}...`);

  return (
    <PostExcerptBlock className="post-excerpt">
      <h3>{post.title}</h3>
      <section className="topSection">
        <PostAuthorContainer userId={post.user} />
        <TimeAgo timestamp={post.date} />
      </section>
      <section
        className="middleSection"
        dangerouslySetInnerHTML={{ __html: sanitizedContent }}
      />
      <section className="bottomSection">
        <ReactionButtonContainer post={post} />
        <Link to={`/posts/${post.id}`} className="button feed-button">
          View Palette
        </Link>
      </section>
    </PostExcerptBlock>
  );
});

export default PostExcerpt;
