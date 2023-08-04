import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectPostById } from "../../features/postsSlice";
import { RootStateType } from "../../app/store";
import setSanitize from "../../container/post/setSanitize";
import SinglePostPage from "../../components/post/SinglePostPage";

const SinglePostPageContainer = () => {
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
  return <SinglePostPage post={post} sanitizedContent={sanitizedContent} />;
};

export default SinglePostPageContainer;
