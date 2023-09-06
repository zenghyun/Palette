import React from "react";
import TimeAgo from "../common/TimeAgo";
import ReactionButtonContainer from "../../container/common/ReactionButtonContainer";
import setSanitize from "../../container/post/setSanitize";
import { PostStateType } from "../../type/postType";
import { styled } from "styled-components";
import PostAuthorContainer from "../../container/common/PostAuthorContainer";
import LinkButton from "../common/LinkButton";

const PostExcerptBlock = styled.article`
  padding: 0.25rem 0.25rem;
  border: 1px solid rgb(177, 174, 174);
  border-radius: 7px;
  height: 330px;
  margin: 0 auto;
  margin-bottom: 10px;
  width: 760px;
  transition: all 0.3s ease;
  h3 {
    margin: 0;
    font-size: 1.5rem;
    margin-top: 10px;
    margin-left: 20px;
    margin-bottom: 10px;
  }

  .middleSection {
    margin-top: 10px;
    margin-bottom: 20px;
    height: 120px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 1200px) {
    width: 500px;
    .middleSection {
      font-size: 14px;
    }
  }

  @media (max-width: 768px) {
    width: 370px;
    h3 {
      font-size: 1.2rem;
    }
    .middleSection {
      font-size: 14px;
      height: 100px;
      width: 240px;
      margin-bottom: 10px;
    }
    .feed-button {
      padding: 0.75rem 1rem;
      font-size: 1px;
    }
  }

  @media (max-width: 576px) {
    h3 {
      font-size: 1rem;
    }
    .middleSection {
      width: 200px;
      height: 100px;
    }
    width: 300px;
  }

  @media (max-width: 390px) {
    width: 260px;
  }
`;

const PostExcerpt = React.memo(({ post }: { post: PostStateType }) => {
  const sanitizedContent = setSanitize(`${post.content.substring(0, 150)}...`);

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
        <LinkButton link={`/posts/${post.id}`} title={"View Palette"} />
      </section>
    </PostExcerptBlock>
  );
});

export default PostExcerpt;
