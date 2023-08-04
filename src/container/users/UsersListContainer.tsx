import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAllUsers } from "../../features/usersSlice";
import { CSSProperties, useState } from "react";
import { selectAllPosts } from "../../features/postsSlice";
import { PostStateType } from "../../type/postType";
import { UserStateType } from "../../type/userType";
import UsersList from "../../components/users/UserList";

const UsersListContainer = () => {
  const posts = useSelector(selectAllPosts);
  const users = useSelector(selectAllUsers);
  const [filteredUsers, setFilteredUsers] = useState<UserStateType[]>(users);

  let timeoutId: NodeJS.Timeout;

  const handleSearch = (searchWord: string) => {
    // 딜레이 시간 (밀리초 단위)
    const delayTime = 500; // 예시로 0.5초(500밀리초) 딜레이를 줍니다.

    // 이전에 스케줄링된 딜레이 작업을 취소합니다.
    clearTimeout(timeoutId);

    // 새로운 딜레이 작업을 스케줄링합니다.
    timeoutId = setTimeout(() => {
      const filtered = users.filter((user) =>
        user.name.toLowerCase().includes(searchWord.toLowerCase())
      );

      setFilteredUsers(filtered);
    }, delayTime);
  };

  const postsByUser = (user: UserStateType) => {
    if (user.id) {
      const postList = posts.filter(
        (post: PostStateType) => post.user === user.id
      );
      return postList.length;
    }
    return;
  };

  const renderedUsers = ({
    index,
    style,
  }: {
    index: number;
    style: CSSProperties;
  }) => {
    const user = filteredUsers[index];
    return (
      <Link
        key={user.id}
        className="userList"
        data-name={user.name}
        style={style}
        to={`/users/${user.id}`} 
      >
        <div className="profile">
          profile
        </div>
        <span>
          <p className="name">{user.name}</p>
          <p className="introduce">안녕하세요 {user.name}입니다.</p>
          {postsByUser(user) ? (
            <p className="newPost"> 게시물 {postsByUser(user)}개 </p>
          ) : (
            <p className="newPost"></p>
          )}
        </span>
      </Link>
    );
  };

  return <UsersList 
    handleSearch={handleSearch}
    filteredUsers={filteredUsers}
    renderedUsers={renderedUsers}
  />;
};

export default UsersListContainer;