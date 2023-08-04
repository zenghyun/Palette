import { useSelector } from "react-redux";
import { UserListType, UserStateType } from "../../type/userType";
import { selectUserById } from "../../features/usersSlice";

import PostAuthor from "../../components/common/PostAuthor";

const PostAuthorContainer = ({ userId }: { userId: string }) => {
  const author = useSelector((state: UserListType) =>
    selectUserById(state, userId)
  ) as UserStateType;

  return <PostAuthor author={author} />;
};

export default PostAuthorContainer;
