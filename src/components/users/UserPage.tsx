import { styled } from "styled-components";
import { UserPageType } from "../../type/userType";

const UserPageBlock = styled.section`
  .postList {
    list-style: none;
    font-size: 1.5rem;
  }
  .postList a {
    text-decoration: none;
    color: black;
  }

  .postList a:hover {
    color: #926bcf;
  }
`;

const UserPage = ({ user, postTitles }: UserPageType) => {
  return (
    <UserPageBlock>
      <h2>{user.name} 님의 palette </h2>
      <h3>🎨 post: {postTitles.length}</h3>
      <ul>{postTitles}</ul>
    </UserPageBlock>
  );
};

export default UserPage;
