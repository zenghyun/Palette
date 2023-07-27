import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import PostAuthor from "../common/PostAuthor";
import { TimeAgo } from "../common/TimeAgo";
import { selectPostById } from "../../features/posts/postsSlice";
import { ReactionButtons } from "../common/ReactionButtons";
import { RootStateType } from "../../app/store";

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

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <div>
          <PostAuthor userId={post.user} />
          <TimeAgo timestamp={post.date} />
        </div>
        <p className="post-content">{post.content}</p>
        <ReactionButtons post={post} />
        <Link to={`/editPost/${post.id}`} className="button">
          Edit Post
        </Link>
      </article>
    </section>
  );
};

export default SinglePostPage;
