import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAllUsers } from "../../features/usersSlice";
import { CSSProperties, useEffect, useState } from "react";
import { selectAllPosts } from "../../features/postsSlice";
import { PostStateType } from "../../type/postType";
import { UserStateType } from "../../type/userType";
import { debounce, setWidth } from "../common/responsiveWindow";
import UsersList from "../../components/users/UserList";

const UserListContainer = () => {
  const posts = useSelector(selectAllPosts);
  const users = useSelector(selectAllUsers);
  const [filteredUsers, setFilteredUsers] = useState<UserStateType[]>(users);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  let timeoutId: NodeJS.Timeout;

  const handleSearch = (searchWord: string) => {
    const DELAY_TIME = 500; 

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      const filtered = users.filter((user) =>
        user.name.toLowerCase().includes(searchWord.toLowerCase())
      );

      setFilteredUsers(filtered);
    }, DELAY_TIME);
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
        <div className="profile">profile</div>
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

  useEffect(() => {
    // window resize debounce 시킴
    const handleResize = debounce(() => {
      setWindowWidth(window.innerWidth);
    }, 250); // 250ms 지연

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const width = setWidth(windowWidth, "USER");

  return (
    <UsersList
      handleSearch={handleSearch}
      filteredUsers={filteredUsers}
      renderedUsers={renderedUsers}
      width={width}
    />
  );
};

export default UserListContainer;
