import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAllUsers } from "../../features/users/usersSlice";
import SearchUser from "./SearchUser";
import styled from "styled-components";
import { FixedSizeList } from "react-window";
import { CSSProperties, useState } from "react";
import { selectAllPosts } from "../../features/posts/postsSlice";
import { PostStateType } from "../../type/postType";
import { UserStateType } from "../../type/userType";

// 스타일드 컴포넌트로 UserList 스타일을 정의합니다.
const UserListBlock = styled.section`
  background-color: #d2e3fcb9;
  border: 3px solid black;
  margin-top: 20px;
  border-radius: 10px;
  padding: 0;

  h2 {
    padding: 20px;
    font-size: 2.15rem;
  }

  ul {
    width: 100%;
    padding: 0;
    overflow: hidden auto;
  }

  p {
    font-size: 1.1rem;
  }

  /* 스크롤 가능한 사용자 리스트의 스타일을 정의합니다. */
  .userList {
    font-weight: bold;
    display: flex;
    font-size: 2rem;
    height: 200px;
    align-items: center;
    text-decoration: none;
    color: black;
    position: relative;
    overflow: hidden auto;
  }

  .hide {
    width: 0;
    height: 0;
    display: none;
  }

  /* 사용자 리스트에 그라데이션 효과를 적용합니다. */
  .userList::before {
    position: absolute;
    top: 0;
    left: -75%;
    z-index: 2;
    display: block;
    content: "";
    width: 50%;
    height: 100%;
    background: -webkit-linear-gradient(
      left,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.795) 100%
    );
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.795) 100%
    );
    -webkit-transform: skewX(-25deg);
    transform: skewX(-25deg);
  }

  /* 마우스 오버 시 그라데이션 애니메이션 효과를 적용합니다. */
  .userList:hover::before {
    -webkit-animation: shine 0.75s;
    animation: shine 1s;
  }

  @-webkit-keyframes shine {
100% {
left: 125%;
}}
  @keyframes shine {
    100% {
      left: 125%;
    }
  }

  /* 프로필 이미지를 포함하는 박스 스타일을 정의합니다. */
  .userList .profile {
    width: 150px;
    height: 150px;
    border-radius: 30%;
    margin-left: 20px;
    border: 3px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
  }

  .userList span {
    margin-left: 30px;
  }

  .userList .name {
    font-size: 2rem;
    margin: 0;
  }

  .userList:hover .name{
    color: #926bcf;
  }
`;

const UsersList = () => {
  const posts = useSelector(selectAllPosts);
  const users = useSelector(selectAllUsers);
  const [filteredUsers, setFilteredUsers] = useState(users);

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

  return (
    <UserListBlock>
      <h2>Paletter</h2>
      <SearchUser onSearch={handleSearch} />
      <FixedSizeList
        height={580}
        width={800}
        itemCount={filteredUsers.length}
        itemSize={200}
      >
        {renderedUsers}
      </FixedSizeList>
    </UserListBlock>
  );
};

export default UsersList;
