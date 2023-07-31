import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectUserById } from "../../features/users/usersSlice";
import { UserListType, UserStateType } from "../../type/userType";
import { selectPostsByUser } from "../../features/posts/postsSlice";
import { useParams } from "react-router-dom";
import { RootStateType } from "../../app/store";
import { PostStateType } from "../../type/postType";

const UserPage = () => {
  const param = useParams();

  const user = useSelector((state: UserListType) =>
    selectUserById(state, param.userId)
  ) as UserStateType;

  const postsForUser = useSelector((state: RootStateType) =>
    selectPostsByUser(state, param.userId)
  );

  const postTitles = postsForUser.map((post: PostStateType) => (
    <li key={post.id} className="postList">
      <Link to={`/posts/${post.id}`}>{post.title}</Link>
    </li>
  ));

  return (
    <section>
      <h2>{user.name} 님의 palette </h2>
      <h3>🎨 post: {postTitles.length}</h3>
      <ul>{postTitles}</ul>
    </section>
  );
};

export default UserPage;
