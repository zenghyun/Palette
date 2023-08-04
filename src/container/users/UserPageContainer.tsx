import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectUserById } from "../../features/usersSlice";
import { UserListType, UserStateType } from "../../type/userType";
import { selectPostsByUser } from "../../features/postsSlice";
import { useParams } from "react-router-dom";
import { RootStateType } from "../../app/store";
import { PostStateType } from "../../type/postType";
import UserPage from "../../components/users/UserPage";

const UserPageContainer = () => {
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
  return <UserPage user={user} postTitles={postTitles} />;
};

export default UserPageContainer;
